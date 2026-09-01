__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 22
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 38
                },
                "typeArguments": null,
                "start": 37,
                "end": 38
              },
              "start": 35,
              "end": 38
            },
            "start": 29,
            "end": 39
          }
        ],
        "start": 23,
        "end": 41
      },
      "declare": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 53
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 63
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 65,
                "end": 71
              },
              "start": 63,
              "end": 71
            },
            "accessibility": null,
            "static": false,
            "start": 60,
            "end": 72
          }
        ],
        "start": 54,
        "end": 74
      },
      "declare": false,
      "start": 42,
      "end": 74
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
            "name": "A",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 102
                },
                "typeArguments": null,
                "start": 90,
                "end": 102
              },
              "start": 88,
              "end": 102
            },
            "start": 87,
            "end": 102
          },
          "init": null,
          "definite": false,
          "start": 87,
          "end": 102
        }
      ],
      "declare": true,
      "start": 75,
      "end": 103
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
            "name": "obj1",
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 123,
                      "end": 124
                    },
                    "typeArguments": null,
                    "start": 123,
                    "end": 124
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 127,
                    "end": 133
                  }
                ],
                "start": 123,
                "end": 133
              },
              "start": 121,
              "end": 133
            },
            "start": 117,
            "end": 133
          },
          "init": null,
          "definite": false,
          "start": 117,
          "end": 133
        }
      ],
      "declare": true,
      "start": 105,
      "end": 134
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": null,
          "start": 139,
          "end": 143
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 156
        },
        "start": 139,
        "end": 156
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
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 182,
                "end": 186
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 187,
                "end": 190
              },
              "optional": false,
              "computed": false,
              "start": 182,
              "end": 190
            },
            "directive": null,
            "start": 182,
            "end": 191
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 200
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 201,
                "end": 204
              },
              "optional": false,
              "computed": false,
              "start": 196,
              "end": 204
            },
            "directive": null,
            "start": 196,
            "end": 205
          }
        ],
        "start": 158,
        "end": 207
      },
      "alternate": null,
      "start": 135,
      "end": 207
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
            "name": "obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 227,
                "end": 230
              },
              "start": 225,
              "end": 230
            },
            "start": 221,
            "end": 230
          },
          "init": null,
          "definite": false,
          "start": 221,
          "end": 230
        }
      ],
      "declare": true,
      "start": 209,
      "end": 231
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj2",
          "optional": false,
          "typeAnnotation": null,
          "start": 236,
          "end": 240
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 252,
          "end": 253
        },
        "start": 236,
        "end": 253
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
                "name": "obj2",
                "optional": false,
                "typeAnnotation": null,
                "start": 261,
                "end": 265
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 266,
                "end": 269
              },
              "optional": false,
              "computed": false,
              "start": 261,
              "end": 269
            },
            "directive": null,
            "start": 261,
            "end": 270
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj2",
                "optional": false,
                "typeAnnotation": null,
                "start": 275,
                "end": 279
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 283
              },
              "optional": false,
              "computed": false,
              "start": 275,
              "end": 283
            },
            "directive": null,
            "start": 275,
            "end": 284
          }
        ],
        "start": 255,
        "end": 286
      },
      "alternate": null,
      "start": 232,
      "end": 286
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 337,
        "end": 349
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 361,
                    "end": 362
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 361,
                  "end": 362
                }
              ],
              "start": 360,
              "end": 363
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 367,
                  "end": 368
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
                        "start": 369,
                        "end": 370
                      },
                      "typeArguments": null,
                      "start": 369,
                      "end": 370
                    }
                  ],
                  "start": 368,
                  "end": 371
                },
                "start": 367,
                "end": 371
              },
              "start": 365,
              "end": 371
            },
            "start": 356,
            "end": 372
          }
        ],
        "start": 350,
        "end": 374
      },
      "declare": false,
      "start": 327,
      "end": 374
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 385,
        "end": 386
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
              "start": 387,
              "end": 388
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 387,
            "end": 388
          }
        ],
        "start": 386,
        "end": 389
      },
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 396,
              "end": 399
            },
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
                  "start": 401,
                  "end": 402
                },
                "typeArguments": null,
                "start": 401,
                "end": 402
              },
              "start": 399,
              "end": 402
            },
            "accessibility": null,
            "static": false,
            "start": 396,
            "end": 403
          }
        ],
        "start": 390,
        "end": 405
      },
      "declare": false,
      "start": 375,
      "end": 405
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
            "name": "B",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 421,
                  "end": 433
                },
                "typeArguments": null,
                "start": 421,
                "end": 433
              },
              "start": 419,
              "end": 433
            },
            "start": 418,
            "end": 433
          },
          "init": null,
          "definite": false,
          "start": 418,
          "end": 433
        }
      ],
      "declare": true,
      "start": 406,
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
            "name": "obj3",
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
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 454,
                      "end": 455
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 456,
                          "end": 462
                        }
                      ],
                      "start": 455,
                      "end": 463
                    },
                    "start": 454,
                    "end": 463
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 466,
                    "end": 472
                  }
                ],
                "start": 454,
                "end": 472
              },
              "start": 452,
              "end": 472
            },
            "start": 448,
            "end": 472
          },
          "init": null,
          "definite": false,
          "start": 448,
          "end": 472
        }
      ],
      "declare": true,
      "start": 436,
      "end": 473
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj3",
          "optional": false,
          "typeAnnotation": null,
          "start": 478,
          "end": 482
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 494,
          "end": 495
        },
        "start": 478,
        "end": 495
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "obj3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 529,
                  "end": 533
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 534,
                  "end": 537
                },
                "optional": false,
                "computed": false,
                "start": 529,
                "end": 537
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 540,
                "end": 541
              },
              "start": 529,
              "end": 541
            },
            "directive": null,
            "start": 529,
            "end": 542
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
                  "name": "obj3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 547,
                  "end": 551
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 552,
                  "end": 555
                },
                "optional": false,
                "computed": false,
                "start": 547,
                "end": 555
              },
              "right": {
                "type": "Literal",
                "value": "str",
                "raw": "\"str\"",
                "start": 558,
                "end": 563
              },
              "start": 547,
              "end": 563
            },
            "directive": null,
            "start": 547,
            "end": 564
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
                  "name": "obj3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 569,
                  "end": 573
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 574,
                  "end": 577
                },
                "optional": false,
                "computed": false,
                "start": 569,
                "end": 577
              },
              "right": {
                "type": "Literal",
                "value": "str",
                "raw": "\"str\"",
                "start": 580,
                "end": 585
              },
              "start": 569,
              "end": 585
            },
            "directive": null,
            "start": 569,
            "end": 586
          }
        ],
        "start": 497,
        "end": 588
      },
      "alternate": null,
      "start": 474,
      "end": 588
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
            "name": "obj4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 608,
                "end": 611
              },
              "start": 606,
              "end": 611
            },
            "start": 602,
            "end": 611
          },
          "init": null,
          "definite": false,
          "start": 602,
          "end": 611
        }
      ],
      "declare": true,
      "start": 590,
      "end": 612
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj4",
          "optional": false,
          "typeAnnotation": null,
          "start": 617,
          "end": 621
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 633,
          "end": 634
        },
        "start": 617,
        "end": 634
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "obj4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 642,
                  "end": 646
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 647,
                  "end": 650
                },
                "optional": false,
                "computed": false,
                "start": 642,
                "end": 650
              },
              "right": {
                "type": "Literal",
                "value": "str",
                "raw": "\"str\"",
                "start": 653,
                "end": 658
              },
              "start": 642,
              "end": 658
            },
            "directive": null,
            "start": 642,
            "end": 659
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
                  "name": "obj4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 664,
                  "end": 668
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 669,
                  "end": 672
                },
                "optional": false,
                "computed": false,
                "start": 664,
                "end": 672
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 675,
                "end": 676
              },
              "start": 664,
              "end": 676
            },
            "directive": null,
            "start": 664,
            "end": 677
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
                  "name": "obj4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 682,
                  "end": 686
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 687,
                  "end": 690
                },
                "optional": false,
                "computed": false,
                "start": 682,
                "end": 690
              },
              "right": {
                "type": "Literal",
                "value": "str",
                "raw": "\"str\"",
                "start": 693,
                "end": 698
              },
              "start": 682,
              "end": 698
            },
            "directive": null,
            "start": 682,
            "end": 699
          }
        ],
        "start": 636,
        "end": 701
      },
      "alternate": null,
      "start": 613,
      "end": 701
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 749,
        "end": 761
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 780,
                    "end": 786
                  },
                  "start": 778,
                  "end": 786
                },
                "start": 773,
                "end": 786
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 789,
                  "end": 791
                },
                "typeArguments": null,
                "start": 789,
                "end": 791
              },
              "start": 787,
              "end": 791
            },
            "start": 768,
            "end": 792
          },
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 809,
                    "end": 815
                  },
                  "start": 807,
                  "end": 815
                },
                "start": 802,
                "end": 815
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 818,
                  "end": 820
                },
                "typeArguments": null,
                "start": 818,
                "end": 820
              },
              "start": 816,
              "end": 820
            },
            "start": 797,
            "end": 821
          }
        ],
        "start": 762,
        "end": 823
      },
      "declare": false,
      "start": 739,
      "end": 823
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 834,
        "end": 836
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 843,
              "end": 846
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 848,
                "end": 854
              },
              "start": 846,
              "end": 854
            },
            "accessibility": null,
            "static": false,
            "start": 843,
            "end": 855
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
              "start": 860,
              "end": 861
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 863,
                "end": 869
              },
              "start": 861,
              "end": 869
            },
            "accessibility": null,
            "static": false,
            "start": 860,
            "end": 870
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar1",
              "optional": false,
              "typeAnnotation": null,
              "start": 875,
              "end": 879
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 881,
                "end": 887
              },
              "start": 879,
              "end": 887
            },
            "accessibility": null,
            "static": false,
            "start": 875,
            "end": 888
          }
        ],
        "start": 837,
        "end": 890
      },
      "declare": false,
      "start": 824,
      "end": 890
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 901,
        "end": 903
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 910,
              "end": 913
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 915,
                "end": 921
              },
              "start": 913,
              "end": 921
            },
            "accessibility": null,
            "static": false,
            "start": 910,
            "end": 922
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
              "start": 927,
              "end": 928
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 930,
                "end": 936
              },
              "start": 928,
              "end": 936
            },
            "accessibility": null,
            "static": false,
            "start": 927,
            "end": 937
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar2",
              "optional": false,
              "typeAnnotation": null,
              "start": 942,
              "end": 946
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 948,
                "end": 954
              },
              "start": 946,
              "end": 954
            },
            "accessibility": null,
            "static": false,
            "start": 942,
            "end": 955
          }
        ],
        "start": 904,
        "end": 957
      },
      "declare": false,
      "start": 891,
      "end": 957
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 973,
                  "end": 985
                },
                "typeArguments": null,
                "start": 973,
                "end": 985
              },
              "start": 971,
              "end": 985
            },
            "start": 970,
            "end": 985
          },
          "init": null,
          "definite": false,
          "start": 970,
          "end": 985
        }
      ],
      "declare": true,
      "start": 958,
      "end": 986
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
            "name": "obj5",
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
                      "start": 1006,
                      "end": 1008
                    },
                    "typeArguments": null,
                    "start": 1006,
                    "end": 1008
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1011,
                      "end": 1012
                    },
                    "typeArguments": null,
                    "start": 1011,
                    "end": 1012
                  }
                ],
                "start": 1006,
                "end": 1012
              },
              "start": 1004,
              "end": 1012
            },
            "start": 1000,
            "end": 1012
          },
          "init": null,
          "definite": false,
          "start": 1000,
          "end": 1012
        }
      ],
      "declare": true,
      "start": 988,
      "end": 1013
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1018,
          "end": 1022
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 1034,
          "end": 1035
        },
        "start": 1018,
        "end": 1035
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
                "name": "obj5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1062,
                "end": 1066
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1067,
                "end": 1070
              },
              "optional": false,
              "computed": false,
              "start": 1062,
              "end": 1070
            },
            "directive": null,
            "start": 1062,
            "end": 1071
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1076,
                "end": 1080
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1081,
                "end": 1082
              },
              "optional": false,
              "computed": false,
              "start": 1076,
              "end": 1082
            },
            "directive": null,
            "start": 1076,
            "end": 1083
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1088,
                "end": 1092
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1093,
                "end": 1097
              },
              "optional": false,
              "computed": false,
              "start": 1088,
              "end": 1097
            },
            "directive": null,
            "start": 1088,
            "end": 1098
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1103,
                "end": 1107
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1108,
                "end": 1112
              },
              "optional": false,
              "computed": false,
              "start": 1103,
              "end": 1112
            },
            "directive": null,
            "start": 1103,
            "end": 1113
          }
        ],
        "start": 1037,
        "end": 1115
      },
      "alternate": null,
      "start": 1014,
      "end": 1115
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
            "name": "obj6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1135,
                "end": 1138
              },
              "start": 1133,
              "end": 1138
            },
            "start": 1129,
            "end": 1138
          },
          "init": null,
          "definite": false,
          "start": 1129,
          "end": 1138
        }
      ],
      "declare": true,
      "start": 1117,
      "end": 1139
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1144,
          "end": 1148
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 1160,
          "end": 1161
        },
        "start": 1144,
        "end": 1161
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
                "name": "obj6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1169,
                "end": 1173
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1174,
                "end": 1177
              },
              "optional": false,
              "computed": false,
              "start": 1169,
              "end": 1177
            },
            "directive": null,
            "start": 1169,
            "end": 1178
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1183,
                "end": 1187
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1188,
                "end": 1192
              },
              "optional": false,
              "computed": false,
              "start": 1183,
              "end": 1192
            },
            "directive": null,
            "start": 1183,
            "end": 1193
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1198,
                "end": 1202
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1203,
                "end": 1207
              },
              "optional": false,
              "computed": false,
              "start": 1198,
              "end": 1207
            },
            "directive": null,
            "start": 1198,
            "end": 1208
          }
        ],
        "start": 1163,
        "end": 1210
      },
      "alternate": null,
      "start": 1140,
      "end": 1210
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 1250,
        "end": 1251
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1258,
              "end": 1261
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1263,
                "end": 1269
              },
              "start": 1261,
              "end": 1269
            },
            "accessibility": null,
            "static": false,
            "start": 1258,
            "end": 1270
          }
        ],
        "start": 1252,
        "end": 1272
      },
      "declare": false,
      "start": 1240,
      "end": 1272
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
            "name": "D",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1298,
                          "end": 1299
                        },
                        "typeArguments": null,
                        "start": 1298,
                        "end": 1299
                      },
                      "start": 1296,
                      "end": 1299
                    },
                    "start": 1290,
                    "end": 1300
                  }
                ],
                "start": 1288,
                "end": 1302
              },
              "start": 1286,
              "end": 1302
            },
            "start": 1285,
            "end": 1302
          },
          "init": null,
          "definite": false,
          "start": 1285,
          "end": 1302
        }
      ],
      "declare": true,
      "start": 1273,
      "end": 1303
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
            "name": "obj7",
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
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1323,
                      "end": 1324
                    },
                    "typeArguments": null,
                    "start": 1323,
                    "end": 1324
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1327,
                    "end": 1333
                  }
                ],
                "start": 1323,
                "end": 1333
              },
              "start": 1321,
              "end": 1333
            },
            "start": 1317,
            "end": 1333
          },
          "init": null,
          "definite": false,
          "start": 1317,
          "end": 1333
        }
      ],
      "declare": true,
      "start": 1305,
      "end": 1334
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj7",
          "optional": false,
          "typeAnnotation": null,
          "start": 1339,
          "end": 1343
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 1355,
          "end": 1356
        },
        "start": 1339,
        "end": 1356
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
                "name": "obj7",
                "optional": false,
                "typeAnnotation": null,
                "start": 1382,
                "end": 1386
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1387,
                "end": 1390
              },
              "optional": false,
              "computed": false,
              "start": 1382,
              "end": 1390
            },
            "directive": null,
            "start": 1382,
            "end": 1391
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj7",
                "optional": false,
                "typeAnnotation": null,
                "start": 1396,
                "end": 1400
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 1401,
                "end": 1404
              },
              "optional": false,
              "computed": false,
              "start": 1396,
              "end": 1404
            },
            "directive": null,
            "start": 1396,
            "end": 1405
          }
        ],
        "start": 1358,
        "end": 1407
      },
      "alternate": null,
      "start": 1335,
      "end": 1407
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
            "name": "obj8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1427,
                "end": 1430
              },
              "start": 1425,
              "end": 1430
            },
            "start": 1421,
            "end": 1430
          },
          "init": null,
          "definite": false,
          "start": 1421,
          "end": 1430
        }
      ],
      "declare": true,
      "start": 1409,
      "end": 1431
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj8",
          "optional": false,
          "typeAnnotation": null,
          "start": 1436,
          "end": 1440
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 1452,
          "end": 1453
        },
        "start": 1436,
        "end": 1453
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
                "name": "obj8",
                "optional": false,
                "typeAnnotation": null,
                "start": 1461,
                "end": 1465
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1466,
                "end": 1469
              },
              "optional": false,
              "computed": false,
              "start": 1461,
              "end": 1469
            },
            "directive": null,
            "start": 1461,
            "end": 1470
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj8",
                "optional": false,
                "typeAnnotation": null,
                "start": 1475,
                "end": 1479
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 1480,
                "end": 1483
              },
              "optional": false,
              "computed": false,
              "start": 1475,
              "end": 1483
            },
            "directive": null,
            "start": 1475,
            "end": 1484
          }
        ],
        "start": 1455,
        "end": 1486
      },
      "alternate": null,
      "start": 1432,
      "end": 1486
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 1549,
        "end": 1561
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1576,
                      "end": 1578
                    },
                    "typeArguments": null,
                    "start": 1576,
                    "end": 1578
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1581,
                      "end": 1583
                    },
                    "typeArguments": null,
                    "start": 1581,
                    "end": 1583
                  }
                ],
                "start": 1576,
                "end": 1583
              },
              "start": 1574,
              "end": 1583
            },
            "start": 1568,
            "end": 1584
          }
        ],
        "start": 1562,
        "end": 1586
      },
      "declare": false,
      "start": 1539,
      "end": 1586
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1597,
        "end": 1599
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1606,
              "end": 1609
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1611,
                "end": 1617
              },
              "start": 1609,
              "end": 1617
            },
            "accessibility": null,
            "static": false,
            "start": 1606,
            "end": 1618
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1623,
              "end": 1627
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1629,
                "end": 1635
              },
              "start": 1627,
              "end": 1635
            },
            "accessibility": null,
            "static": false,
            "start": 1623,
            "end": 1636
          }
        ],
        "start": 1600,
        "end": 1638
      },
      "declare": false,
      "start": 1587,
      "end": 1638
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1649,
        "end": 1651
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1658,
              "end": 1661
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1663,
                "end": 1669
              },
              "start": 1661,
              "end": 1669
            },
            "accessibility": null,
            "static": false,
            "start": 1658,
            "end": 1670
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1675,
              "end": 1679
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1681,
                "end": 1687
              },
              "start": 1679,
              "end": 1687
            },
            "accessibility": null,
            "static": false,
            "start": 1675,
            "end": 1688
          }
        ],
        "start": 1652,
        "end": 1690
      },
      "declare": false,
      "start": 1639,
      "end": 1690
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
            "name": "E",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1706,
                  "end": 1718
                },
                "typeArguments": null,
                "start": 1706,
                "end": 1718
              },
              "start": 1704,
              "end": 1718
            },
            "start": 1703,
            "end": 1718
          },
          "init": null,
          "definite": false,
          "start": 1703,
          "end": 1718
        }
      ],
      "declare": true,
      "start": 1691,
      "end": 1719
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
            "name": "obj9",
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
                      "name": "E1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1739,
                      "end": 1741
                    },
                    "typeArguments": null,
                    "start": 1739,
                    "end": 1741
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1744,
                      "end": 1745
                    },
                    "typeArguments": null,
                    "start": 1744,
                    "end": 1745
                  }
                ],
                "start": 1739,
                "end": 1745
              },
              "start": 1737,
              "end": 1745
            },
            "start": 1733,
            "end": 1745
          },
          "init": null,
          "definite": false,
          "start": 1733,
          "end": 1745
        }
      ],
      "declare": true,
      "start": 1721,
      "end": 1746
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj9",
          "optional": false,
          "typeAnnotation": null,
          "start": 1751,
          "end": 1755
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null,
          "start": 1767,
          "end": 1768
        },
        "start": 1751,
        "end": 1768
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
                "name": "obj9",
                "optional": false,
                "typeAnnotation": null,
                "start": 1794,
                "end": 1798
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1799,
                "end": 1802
              },
              "optional": false,
              "computed": false,
              "start": 1794,
              "end": 1802
            },
            "directive": null,
            "start": 1794,
            "end": 1803
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj9",
                "optional": false,
                "typeAnnotation": null,
                "start": 1808,
                "end": 1812
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1813,
                "end": 1817
              },
              "optional": false,
              "computed": false,
              "start": 1808,
              "end": 1817
            },
            "directive": null,
            "start": 1808,
            "end": 1818
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj9",
                "optional": false,
                "typeAnnotation": null,
                "start": 1823,
                "end": 1827
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1828,
                "end": 1832
              },
              "optional": false,
              "computed": false,
              "start": 1823,
              "end": 1832
            },
            "directive": null,
            "start": 1823,
            "end": 1833
          }
        ],
        "start": 1770,
        "end": 1835
      },
      "alternate": null,
      "start": 1747,
      "end": 1835
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
            "name": "obj10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1856,
                "end": 1859
              },
              "start": 1854,
              "end": 1859
            },
            "start": 1849,
            "end": 1859
          },
          "init": null,
          "definite": false,
          "start": 1849,
          "end": 1859
        }
      ],
      "declare": true,
      "start": 1837,
      "end": 1860
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj10",
          "optional": false,
          "typeAnnotation": null,
          "start": 1865,
          "end": 1870
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null,
          "start": 1882,
          "end": 1883
        },
        "start": 1865,
        "end": 1883
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
                "name": "obj10",
                "optional": false,
                "typeAnnotation": null,
                "start": 1891,
                "end": 1896
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1897,
                "end": 1900
              },
              "optional": false,
              "computed": false,
              "start": 1891,
              "end": 1900
            },
            "directive": null,
            "start": 1891,
            "end": 1901
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj10",
                "optional": false,
                "typeAnnotation": null,
                "start": 1906,
                "end": 1911
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1912,
                "end": 1916
              },
              "optional": false,
              "computed": false,
              "start": 1906,
              "end": 1916
            },
            "directive": null,
            "start": 1906,
            "end": 1917
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj10",
                "optional": false,
                "typeAnnotation": null,
                "start": 1922,
                "end": 1927
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1928,
                "end": 1932
              },
              "optional": false,
              "computed": false,
              "start": 1922,
              "end": 1932
            },
            "directive": null,
            "start": 1922,
            "end": 1933
          }
        ],
        "start": 1885,
        "end": 1935
      },
      "alternate": null,
      "start": 1861,
      "end": 1935
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 1989,
        "end": 2001
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2016,
                "end": 2019
              },
              "start": 2014,
              "end": 2019
            },
            "start": 2008,
            "end": 2020
          }
        ],
        "start": 2002,
        "end": 2022
      },
      "declare": false,
      "start": 1979,
      "end": 2022
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 2033,
        "end": 2034
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2041,
              "end": 2044
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2046,
                "end": 2052
              },
              "start": 2044,
              "end": 2052
            },
            "accessibility": null,
            "static": false,
            "start": 2041,
            "end": 2053
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 2058,
              "end": 2061
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2063,
                "end": 2069
              },
              "start": 2061,
              "end": 2069
            },
            "accessibility": null,
            "static": false,
            "start": 2058,
            "end": 2070
          }
        ],
        "start": 2035,
        "end": 2072
      },
      "declare": false,
      "start": 2023,
      "end": 2072
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
            "name": "F",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2088,
                  "end": 2100
                },
                "typeArguments": null,
                "start": 2088,
                "end": 2100
              },
              "start": 2086,
              "end": 2100
            },
            "start": 2085,
            "end": 2100
          },
          "init": null,
          "definite": false,
          "start": 2085,
          "end": 2100
        }
      ],
      "declare": true,
      "start": 2073,
      "end": 2101
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
            "name": "obj11",
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
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2122,
                      "end": 2123
                    },
                    "typeArguments": null,
                    "start": 2122,
                    "end": 2123
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 2126,
                    "end": 2132
                  }
                ],
                "start": 2122,
                "end": 2132
              },
              "start": 2120,
              "end": 2132
            },
            "start": 2115,
            "end": 2132
          },
          "init": null,
          "definite": false,
          "start": 2115,
          "end": 2132
        }
      ],
      "declare": true,
      "start": 2103,
      "end": 2133
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj11",
          "optional": false,
          "typeAnnotation": null,
          "start": 2138,
          "end": 2143
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null,
          "start": 2155,
          "end": 2156
        },
        "start": 2138,
        "end": 2156
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
                "name": "obj11",
                "optional": false,
                "typeAnnotation": null,
                "start": 2222,
                "end": 2227
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2228,
                "end": 2231
              },
              "optional": false,
              "computed": false,
              "start": 2222,
              "end": 2231
            },
            "directive": null,
            "start": 2222,
            "end": 2232
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj11",
                "optional": false,
                "typeAnnotation": null,
                "start": 2237,
                "end": 2242
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 2243,
                "end": 2246
              },
              "optional": false,
              "computed": false,
              "start": 2237,
              "end": 2246
            },
            "directive": null,
            "start": 2237,
            "end": 2247
          }
        ],
        "start": 2158,
        "end": 2249
      },
      "alternate": null,
      "start": 2134,
      "end": 2249
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
            "name": "obj12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2270,
                "end": 2273
              },
              "start": 2268,
              "end": 2273
            },
            "start": 2263,
            "end": 2273
          },
          "init": null,
          "definite": false,
          "start": 2263,
          "end": 2273
        }
      ],
      "declare": true,
      "start": 2251,
      "end": 2274
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj12",
          "optional": false,
          "typeAnnotation": null,
          "start": 2279,
          "end": 2284
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null,
          "start": 2296,
          "end": 2297
        },
        "start": 2279,
        "end": 2297
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
                "name": "obj12",
                "optional": false,
                "typeAnnotation": null,
                "start": 2305,
                "end": 2310
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2311,
                "end": 2314
              },
              "optional": false,
              "computed": false,
              "start": 2305,
              "end": 2314
            },
            "directive": null,
            "start": 2305,
            "end": 2315
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj12",
                "optional": false,
                "typeAnnotation": null,
                "start": 2320,
                "end": 2325
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 2326,
                "end": 2329
              },
              "optional": false,
              "computed": false,
              "start": 2320,
              "end": 2329
            },
            "directive": null,
            "start": 2320,
            "end": 2330
          }
        ],
        "start": 2299,
        "end": 2332
      },
      "alternate": null,
      "start": 2275,
      "end": 2332
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 2409,
        "end": 2421
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
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 2428,
              "end": 2437
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2439,
                  "end": 2441
                },
                "typeArguments": null,
                "start": 2439,
                "end": 2441
              },
              "start": 2437,
              "end": 2441
            },
            "accessibility": null,
            "static": false,
            "start": 2428,
            "end": 2442
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2472,
                  "end": 2474
                },
                "typeArguments": null,
                "start": 2472,
                "end": 2474
              },
              "start": 2470,
              "end": 2474
            },
            "start": 2464,
            "end": 2475
          }
        ],
        "start": 2422,
        "end": 2496
      },
      "declare": false,
      "start": 2399,
      "end": 2496
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2507,
        "end": 2509
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
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2516,
              "end": 2520
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2522,
                "end": 2528
              },
              "start": 2520,
              "end": 2528
            },
            "accessibility": null,
            "static": false,
            "start": 2516,
            "end": 2529
          }
        ],
        "start": 2510,
        "end": 2531
      },
      "declare": false,
      "start": 2497,
      "end": 2531
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2542,
        "end": 2544
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
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2551,
              "end": 2555
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2557,
                "end": 2564
              },
              "start": 2555,
              "end": 2564
            },
            "accessibility": null,
            "static": false,
            "start": 2551,
            "end": 2565
          }
        ],
        "start": 2545,
        "end": 2567
      },
      "declare": false,
      "start": 2532,
      "end": 2567
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
            "name": "G",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "GConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2583,
                  "end": 2595
                },
                "typeArguments": null,
                "start": 2583,
                "end": 2595
              },
              "start": 2581,
              "end": 2595
            },
            "start": 2580,
            "end": 2595
          },
          "init": null,
          "definite": false,
          "start": 2580,
          "end": 2595
        }
      ],
      "declare": true,
      "start": 2568,
      "end": 2596
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
            "name": "obj13",
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
                      "name": "G1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2617,
                      "end": 2619
                    },
                    "typeArguments": null,
                    "start": 2617,
                    "end": 2619
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "G2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2622,
                      "end": 2624
                    },
                    "typeArguments": null,
                    "start": 2622,
                    "end": 2624
                  }
                ],
                "start": 2617,
                "end": 2624
              },
              "start": 2615,
              "end": 2624
            },
            "start": 2610,
            "end": 2624
          },
          "init": null,
          "definite": false,
          "start": 2610,
          "end": 2624
        }
      ],
      "declare": true,
      "start": 2598,
      "end": 2625
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj13",
          "optional": false,
          "typeAnnotation": null,
          "start": 2630,
          "end": 2635
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "G",
          "optional": false,
          "typeAnnotation": null,
          "start": 2647,
          "end": 2648
        },
        "start": 2630,
        "end": 2648
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
                "name": "obj13",
                "optional": false,
                "typeAnnotation": null,
                "start": 2716,
                "end": 2721
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2722,
                "end": 2726
              },
              "optional": false,
              "computed": false,
              "start": 2716,
              "end": 2726
            },
            "directive": null,
            "start": 2716,
            "end": 2727
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj13",
                "optional": false,
                "typeAnnotation": null,
                "start": 2732,
                "end": 2737
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2738,
                "end": 2742
              },
              "optional": false,
              "computed": false,
              "start": 2732,
              "end": 2742
            },
            "directive": null,
            "start": 2732,
            "end": 2743
          }
        ],
        "start": 2650,
        "end": 2745
      },
      "alternate": null,
      "start": 2626,
      "end": 2745
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
            "name": "obj14",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2766,
                "end": 2769
              },
              "start": 2764,
              "end": 2769
            },
            "start": 2759,
            "end": 2769
          },
          "init": null,
          "definite": false,
          "start": 2759,
          "end": 2769
        }
      ],
      "declare": true,
      "start": 2747,
      "end": 2770
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj14",
          "optional": false,
          "typeAnnotation": null,
          "start": 2775,
          "end": 2780
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "G",
          "optional": false,
          "typeAnnotation": null,
          "start": 2792,
          "end": 2793
        },
        "start": 2775,
        "end": 2793
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
                "name": "obj14",
                "optional": false,
                "typeAnnotation": null,
                "start": 2801,
                "end": 2806
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2807,
                "end": 2811
              },
              "optional": false,
              "computed": false,
              "start": 2801,
              "end": 2811
            },
            "directive": null,
            "start": 2801,
            "end": 2812
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj14",
                "optional": false,
                "typeAnnotation": null,
                "start": 2817,
                "end": 2822
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2823,
                "end": 2827
              },
              "optional": false,
              "computed": false,
              "start": 2817,
              "end": 2827
            },
            "directive": null,
            "start": 2817,
            "end": 2828
          }
        ],
        "start": 2795,
        "end": 2830
      },
      "alternate": null,
      "start": 2771,
      "end": 2830
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 2887,
        "end": 2899
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
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 2906,
              "end": 2915
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2917,
                "end": 2920
              },
              "start": 2915,
              "end": 2920
            },
            "accessibility": null,
            "static": false,
            "start": 2906,
            "end": 2921
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "H",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3018,
                  "end": 3019
                },
                "typeArguments": null,
                "start": 3018,
                "end": 3019
              },
              "start": 3016,
              "end": 3019
            },
            "start": 3010,
            "end": 3020
          }
        ],
        "start": 2900,
        "end": 3043
      },
      "declare": false,
      "start": 2877,
      "end": 3043
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null,
        "start": 3054,
        "end": 3055
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3062,
              "end": 3065
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3067,
                "end": 3073
              },
              "start": 3065,
              "end": 3073
            },
            "accessibility": null,
            "static": false,
            "start": 3062,
            "end": 3074
          }
        ],
        "start": 3056,
        "end": 3076
      },
      "declare": false,
      "start": 3044,
      "end": 3076
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
            "name": "H",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3092,
                  "end": 3104
                },
                "typeArguments": null,
                "start": 3092,
                "end": 3104
              },
              "start": 3090,
              "end": 3104
            },
            "start": 3089,
            "end": 3104
          },
          "init": null,
          "definite": false,
          "start": 3089,
          "end": 3104
        }
      ],
      "declare": true,
      "start": 3077,
      "end": 3105
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
            "name": "obj15",
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
                      "name": "H",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3126,
                      "end": 3127
                    },
                    "typeArguments": null,
                    "start": 3126,
                    "end": 3127
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 3130,
                    "end": 3136
                  }
                ],
                "start": 3126,
                "end": 3136
              },
              "start": 3124,
              "end": 3136
            },
            "start": 3119,
            "end": 3136
          },
          "init": null,
          "definite": false,
          "start": 3119,
          "end": 3136
        }
      ],
      "declare": true,
      "start": 3107,
      "end": 3137
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj15",
          "optional": false,
          "typeAnnotation": null,
          "start": 3142,
          "end": 3147
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "H",
          "optional": false,
          "typeAnnotation": null,
          "start": 3159,
          "end": 3160
        },
        "start": 3142,
        "end": 3160
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
                "name": "obj15",
                "optional": false,
                "typeAnnotation": null,
                "start": 3186,
                "end": 3191
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3192,
                "end": 3195
              },
              "optional": false,
              "computed": false,
              "start": 3186,
              "end": 3195
            },
            "directive": null,
            "start": 3186,
            "end": 3196
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj15",
                "optional": false,
                "typeAnnotation": null,
                "start": 3201,
                "end": 3206
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 3207,
                "end": 3210
              },
              "optional": false,
              "computed": false,
              "start": 3201,
              "end": 3210
            },
            "directive": null,
            "start": 3201,
            "end": 3211
          }
        ],
        "start": 3162,
        "end": 3213
      },
      "alternate": null,
      "start": 3138,
      "end": 3213
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
            "name": "obj16",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3234,
                "end": 3237
              },
              "start": 3232,
              "end": 3237
            },
            "start": 3227,
            "end": 3237
          },
          "init": null,
          "definite": false,
          "start": 3227,
          "end": 3237
        }
      ],
      "declare": true,
      "start": 3215,
      "end": 3238
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj16",
          "optional": false,
          "typeAnnotation": null,
          "start": 3243,
          "end": 3248
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "H",
          "optional": false,
          "typeAnnotation": null,
          "start": 3260,
          "end": 3261
        },
        "start": 3243,
        "end": 3261
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
                "name": "obj16",
                "optional": false,
                "typeAnnotation": null,
                "start": 3269,
                "end": 3274
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3275,
                "end": 3279
              },
              "optional": false,
              "computed": false,
              "start": 3269,
              "end": 3279
            },
            "directive": null,
            "start": 3269,
            "end": 3280
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj16",
                "optional": false,
                "typeAnnotation": null,
                "start": 3285,
                "end": 3290
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3291,
                "end": 3295
              },
              "optional": false,
              "computed": false,
              "start": 3285,
              "end": 3295
            },
            "directive": null,
            "start": 3285,
            "end": 3296
          }
        ],
        "start": 3263,
        "end": 3298
      },
      "alternate": null,
      "start": 3239,
      "end": 3298
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
            "name": "obj17",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3319,
                "end": 3322
              },
              "start": 3317,
              "end": 3322
            },
            "start": 3312,
            "end": 3322
          },
          "init": null,
          "definite": false,
          "start": 3312,
          "end": 3322
        }
      ],
      "declare": true,
      "start": 3300,
      "end": 3323
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj17",
          "optional": false,
          "typeAnnotation": null,
          "start": 3328,
          "end": 3333
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null,
          "start": 3345,
          "end": 3351
        },
        "start": 3328,
        "end": 3351
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
                "name": "obj17",
                "optional": false,
                "typeAnnotation": null,
                "start": 3403,
                "end": 3408
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3409,
                "end": 3413
              },
              "optional": false,
              "computed": false,
              "start": 3403,
              "end": 3413
            },
            "directive": null,
            "start": 3403,
            "end": 3414
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj17",
                "optional": false,
                "typeAnnotation": null,
                "start": 3419,
                "end": 3424
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3425,
                "end": 3429
              },
              "optional": false,
              "computed": false,
              "start": 3419,
              "end": 3429
            },
            "directive": null,
            "start": 3419,
            "end": 3430
          }
        ],
        "start": 3353,
        "end": 3432
      },
      "alternate": null,
      "start": 3324,
      "end": 3432
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
            "name": "obj18",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3453,
                "end": 3456
              },
              "start": 3451,
              "end": 3456
            },
            "start": 3446,
            "end": 3456
          },
          "init": null,
          "definite": false,
          "start": 3446,
          "end": 3456
        }
      ],
      "declare": true,
      "start": 3434,
      "end": 3457
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj18",
          "optional": false,
          "typeAnnotation": null,
          "start": 3462,
          "end": 3467
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Function",
          "optional": false,
          "typeAnnotation": null,
          "start": 3479,
          "end": 3487
        },
        "start": 3462,
        "end": 3487
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
                "name": "obj18",
                "optional": false,
                "typeAnnotation": null,
                "start": 3541,
                "end": 3546
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3547,
                "end": 3551
              },
              "optional": false,
              "computed": false,
              "start": 3541,
              "end": 3551
            },
            "directive": null,
            "start": 3541,
            "end": 3552
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj18",
                "optional": false,
                "typeAnnotation": null,
                "start": 3557,
                "end": 3562
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3563,
                "end": 3567
              },
              "optional": false,
              "computed": false,
              "start": 3557,
              "end": 3567
            },
            "directive": null,
            "start": 3557,
            "end": 3568
          }
        ],
        "start": 3489,
        "end": 3570
      },
      "alternate": null,
      "start": 3458,
      "end": 3570
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3570
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "AConstructor",
    "start": 10,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 29,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 42,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 60,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 75,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 83,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 87,
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
    "value": "AConstructor",
    "start": 90,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 105,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 113,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 117,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 127,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 135,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 139,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 144,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 182,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 187,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 196,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 201,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 209,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 217,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 221,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 227,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 232,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 236,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 241,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 261,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 266,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 275,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 280,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 327,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "BConstructor",
    "start": 337,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 356,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 375,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 396,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 406,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 414,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "BConstructor",
    "start": 421,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 436,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 444,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 448,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 456,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 466,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 474,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 478,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 483,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 494,
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
    "value": "{",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 529,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 534,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 538,
    "end": 539
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Identifier",
    "value": "obj3",
    "start": 547,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 552,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 556,
    "end": 557
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 558,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 569,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 574,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 578,
    "end": 579
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 580,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 590,
    "end": 597
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 598,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "obj4",
    "start": 602,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 608,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 611,
    "end": 612
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 613,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "obj4",
    "start": 617,
    "end": 621
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 622,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "obj4",
    "start": 642,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 647,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 651,
    "end": 652
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 653,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "obj4",
    "start": 664,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 669,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 673,
    "end": 674
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "obj4",
    "start": 682,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 687,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 691,
    "end": 692
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 693,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 700,
    "end": 701
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 739,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "CConstructor",
    "start": 749,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 762,
    "end": 763
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 768,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 773,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 780,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 789,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 791,
    "end": 792
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 797,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 802,
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
    "value": "number",
    "start": 809,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 818,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 822,
    "end": 823
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 824,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 834,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 843,
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
    "value": "string",
    "start": 848,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 863,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 875,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 879,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 881,
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
    "start": 889,
    "end": 890
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 891,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 901,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 910,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 915,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 930,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 942,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 948,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 956,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 958,
    "end": 965
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 966,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "CConstructor",
    "start": 973,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 988,
    "end": 995
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 996,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "obj5",
    "start": 1000,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1006,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1014,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "obj5",
    "start": 1018,
    "end": 1022
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1023,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "obj5",
    "start": 1062,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1067,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "obj5",
    "start": 1076,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "obj5",
    "start": 1088,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1093,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "obj5",
    "start": 1103,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1108,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1117,
    "end": 1124
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1125,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "obj6",
    "start": 1129,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1135,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1140,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "obj6",
    "start": 1144,
    "end": 1148
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1149,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "obj6",
    "start": 1169,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1174,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "obj6",
    "start": 1183,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1188,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "obj6",
    "start": 1198,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1203,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1240,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1258,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1263,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1273,
    "end": 1280
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1281,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1290,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1305,
    "end": 1312
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1313,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "obj7",
    "start": 1317,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1327,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1335,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "obj7",
    "start": 1339,
    "end": 1343
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1344,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "obj7",
    "start": 1382,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1387,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "obj7",
    "start": 1396,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1401,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1409,
    "end": 1416
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1417,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "obj8",
    "start": 1421,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1427,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1432,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "obj8",
    "start": 1436,
    "end": 1440
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1441,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "obj8",
    "start": 1461,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1466,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Identifier",
    "value": "obj8",
    "start": 1475,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1480,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1539,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "EConstructor",
    "start": 1549,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1568,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 1576,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 1581,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1587,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 1597,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1606,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1611,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1623,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1629,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1639,
    "end": 1648
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 1649,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1658,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1663,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1675,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1681,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1691,
    "end": 1698
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1699,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Identifier",
    "value": "EConstructor",
    "start": 1706,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1721,
    "end": 1728
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1729,
    "end": 1732
  },
  {
    "type": "Identifier",
    "value": "obj9",
    "start": 1733,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 1739,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1747,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "obj9",
    "start": 1751,
    "end": 1755
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1756,
    "end": 1766
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "obj9",
    "start": 1794,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1799,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "obj9",
    "start": 1808,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1813,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "obj9",
    "start": 1823,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1828,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1837,
    "end": 1844
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1845,
    "end": 1848
  },
  {
    "type": "Identifier",
    "value": "obj10",
    "start": 1849,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1856,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1861,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Identifier",
    "value": "obj10",
    "start": 1865,
    "end": 1870
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1871,
    "end": 1881
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Identifier",
    "value": "obj10",
    "start": 1891,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1897,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Identifier",
    "value": "obj10",
    "start": 1906,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1912,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "obj10",
    "start": 1922,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1928,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1979,
    "end": 1988
  },
  {
    "type": "Identifier",
    "value": "FConstructor",
    "start": 1989,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2008,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2016,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2023,
    "end": 2032
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2041,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2046,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2058,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2063,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2073,
    "end": 2080
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2081,
    "end": 2084
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Identifier",
    "value": "FConstructor",
    "start": 2088,
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
    "value": "declare",
    "start": 2103,
    "end": 2110
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2111,
    "end": 2114
  },
  {
    "type": "Identifier",
    "value": "obj11",
    "start": 2115,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2126,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2134,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Identifier",
    "value": "obj11",
    "start": 2138,
    "end": 2143
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2144,
    "end": 2154
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Identifier",
    "value": "obj11",
    "start": 2222,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2228,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Identifier",
    "value": "obj11",
    "start": 2237,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2243,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2251,
    "end": 2258
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2259,
    "end": 2262
  },
  {
    "type": "Identifier",
    "value": "obj12",
    "start": 2263,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2270,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2275,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Identifier",
    "value": "obj12",
    "start": 2279,
    "end": 2284
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2285,
    "end": 2295
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Identifier",
    "value": "obj12",
    "start": 2305,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2311,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Identifier",
    "value": "obj12",
    "start": 2320,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2326,
    "end": 2329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2399,
    "end": 2408
  },
  {
    "type": "Identifier",
    "value": "GConstructor",
    "start": 2409,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 2428,
    "end": 2437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Identifier",
    "value": "G1",
    "start": 2439,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2464,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Identifier",
    "value": "G2",
    "start": 2472,
    "end": 2474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2474,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2497,
    "end": 2506
  },
  {
    "type": "Identifier",
    "value": "G1",
    "start": 2507,
    "end": 2509
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 2516,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2522,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2532,
    "end": 2541
  },
  {
    "type": "Identifier",
    "value": "G2",
    "start": 2542,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 2551,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2557,
    "end": 2564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2564,
    "end": 2565
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2568,
    "end": 2575
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2576,
    "end": 2579
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 2580,
    "end": 2581
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2581,
    "end": 2582
  },
  {
    "type": "Identifier",
    "value": "GConstructor",
    "start": 2583,
    "end": 2595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2598,
    "end": 2605
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2606,
    "end": 2609
  },
  {
    "type": "Identifier",
    "value": "obj13",
    "start": 2610,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Identifier",
    "value": "G1",
    "start": 2617,
    "end": 2619
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2620,
    "end": 2621
  },
  {
    "type": "Identifier",
    "value": "G2",
    "start": 2622,
    "end": 2624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2624,
    "end": 2625
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2626,
    "end": 2628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2629,
    "end": 2630
  },
  {
    "type": "Identifier",
    "value": "obj13",
    "start": 2630,
    "end": 2635
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2636,
    "end": 2646
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Identifier",
    "value": "obj13",
    "start": 2716,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 2722,
    "end": 2726
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Identifier",
    "value": "obj13",
    "start": 2732,
    "end": 2737
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 2738,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2747,
    "end": 2754
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2755,
    "end": 2758
  },
  {
    "type": "Identifier",
    "value": "obj14",
    "start": 2759,
    "end": 2764
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2766,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2771,
    "end": 2773
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2774,
    "end": 2775
  },
  {
    "type": "Identifier",
    "value": "obj14",
    "start": 2775,
    "end": 2780
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2781,
    "end": 2791
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 2792,
    "end": 2793
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2793,
    "end": 2794
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2795,
    "end": 2796
  },
  {
    "type": "Identifier",
    "value": "obj14",
    "start": 2801,
    "end": 2806
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2806,
    "end": 2807
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 2807,
    "end": 2811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2811,
    "end": 2812
  },
  {
    "type": "Identifier",
    "value": "obj14",
    "start": 2817,
    "end": 2822
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2822,
    "end": 2823
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 2823,
    "end": 2827
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2827,
    "end": 2828
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2829,
    "end": 2830
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2877,
    "end": 2886
  },
  {
    "type": "Identifier",
    "value": "HConstructor",
    "start": 2887,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2900,
    "end": 2901
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 2906,
    "end": 2915
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2915,
    "end": 2916
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2917,
    "end": 2920
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2920,
    "end": 2921
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3010,
    "end": 3013
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3015,
    "end": 3016
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3016,
    "end": 3017
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 3018,
    "end": 3019
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3019,
    "end": 3020
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3042,
    "end": 3043
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3044,
    "end": 3053
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3062,
    "end": 3065
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3065,
    "end": 3066
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3067,
    "end": 3073
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3075,
    "end": 3076
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3077,
    "end": 3084
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3085,
    "end": 3088
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 3089,
    "end": 3090
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3090,
    "end": 3091
  },
  {
    "type": "Identifier",
    "value": "HConstructor",
    "start": 3092,
    "end": 3104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3104,
    "end": 3105
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3107,
    "end": 3114
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3115,
    "end": 3118
  },
  {
    "type": "Identifier",
    "value": "obj15",
    "start": 3119,
    "end": 3124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3124,
    "end": 3125
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3130,
    "end": 3136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3136,
    "end": 3137
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3138,
    "end": 3140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3141,
    "end": 3142
  },
  {
    "type": "Identifier",
    "value": "obj15",
    "start": 3142,
    "end": 3147
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3148,
    "end": 3158
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3160,
    "end": 3161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3162,
    "end": 3163
  },
  {
    "type": "Identifier",
    "value": "obj15",
    "start": 3186,
    "end": 3191
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3191,
    "end": 3192
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3192,
    "end": 3195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3195,
    "end": 3196
  },
  {
    "type": "Identifier",
    "value": "obj15",
    "start": 3201,
    "end": 3206
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3206,
    "end": 3207
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3207,
    "end": 3210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3210,
    "end": 3211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3212,
    "end": 3213
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3215,
    "end": 3222
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3223,
    "end": 3226
  },
  {
    "type": "Identifier",
    "value": "obj16",
    "start": 3227,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3234,
    "end": 3237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3237,
    "end": 3238
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3239,
    "end": 3241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3242,
    "end": 3243
  },
  {
    "type": "Identifier",
    "value": "obj16",
    "start": 3243,
    "end": 3248
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3249,
    "end": 3259
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 3260,
    "end": 3261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3261,
    "end": 3262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3263,
    "end": 3264
  },
  {
    "type": "Identifier",
    "value": "obj16",
    "start": 3269,
    "end": 3274
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3274,
    "end": 3275
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 3275,
    "end": 3279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3279,
    "end": 3280
  },
  {
    "type": "Identifier",
    "value": "obj16",
    "start": 3285,
    "end": 3290
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3290,
    "end": 3291
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 3291,
    "end": 3295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3295,
    "end": 3296
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3297,
    "end": 3298
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3300,
    "end": 3307
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3308,
    "end": 3311
  },
  {
    "type": "Identifier",
    "value": "obj17",
    "start": 3312,
    "end": 3317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3317,
    "end": 3318
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3319,
    "end": 3322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3322,
    "end": 3323
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3324,
    "end": 3326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3327,
    "end": 3328
  },
  {
    "type": "Identifier",
    "value": "obj17",
    "start": 3328,
    "end": 3333
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3334,
    "end": 3344
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 3345,
    "end": 3351
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3351,
    "end": 3352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3353,
    "end": 3354
  },
  {
    "type": "Identifier",
    "value": "obj17",
    "start": 3403,
    "end": 3408
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3408,
    "end": 3409
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 3409,
    "end": 3413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3413,
    "end": 3414
  },
  {
    "type": "Identifier",
    "value": "obj17",
    "start": 3419,
    "end": 3424
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3424,
    "end": 3425
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 3425,
    "end": 3429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3429,
    "end": 3430
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3431,
    "end": 3432
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3434,
    "end": 3441
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3442,
    "end": 3445
  },
  {
    "type": "Identifier",
    "value": "obj18",
    "start": 3446,
    "end": 3451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3451,
    "end": 3452
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3453,
    "end": 3456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3456,
    "end": 3457
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3458,
    "end": 3460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3461,
    "end": 3462
  },
  {
    "type": "Identifier",
    "value": "obj18",
    "start": 3462,
    "end": 3467
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3468,
    "end": 3478
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 3479,
    "end": 3487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3487,
    "end": 3488
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3489,
    "end": 3490
  },
  {
    "type": "Identifier",
    "value": "obj18",
    "start": 3541,
    "end": 3546
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3546,
    "end": 3547
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 3547,
    "end": 3551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3551,
    "end": 3552
  },
  {
    "type": "Identifier",
    "value": "obj18",
    "start": 3557,
    "end": 3562
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3562,
    "end": 3563
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 3563,
    "end": 3567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3567,
    "end": 3568
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3569,
    "end": 3570
  }
]
```
