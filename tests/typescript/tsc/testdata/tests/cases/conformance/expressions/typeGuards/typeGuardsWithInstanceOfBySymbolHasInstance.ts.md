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
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 51
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 52,
                "end": 63
              },
              "optional": false,
              "computed": false,
              "start": 45,
              "end": 63
            },
            "computed": true,
            "optional": false,
            "kind": "method",
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
                    "type": "TSUnknownKeyword",
                    "start": 72,
                    "end": 79
                  },
                  "start": 70,
                  "end": 79
                },
                "start": 65,
                "end": 79
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
                  "start": 82,
                  "end": 87
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 91,
                      "end": 92
                    },
                    "typeArguments": null,
                    "start": 91,
                    "end": 92
                  },
                  "start": 91,
                  "end": 92
                },
                "start": 82,
                "end": 92
              },
              "start": 80,
              "end": 92
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 44,
            "end": 93
          }
        ],
        "start": 23,
        "end": 95
      },
      "declare": false,
      "start": 0,
      "end": 95
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 107
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
              "start": 114,
              "end": 117
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 119,
                "end": 125
              },
              "start": 117,
              "end": 125
            },
            "accessibility": null,
            "static": false,
            "start": 114,
            "end": 126
          }
        ],
        "start": 108,
        "end": 128
      },
      "declare": false,
      "start": 96,
      "end": 128
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
                  "start": 144,
                  "end": 156
                },
                "typeArguments": null,
                "start": 144,
                "end": 156
              },
              "start": 142,
              "end": 156
            },
            "start": 141,
            "end": 156
          },
          "init": null,
          "definite": false,
          "start": 141,
          "end": 156
        }
      ],
      "declare": true,
      "start": 129,
      "end": 157
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
                      "start": 177,
                      "end": 178
                    },
                    "typeArguments": null,
                    "start": 177,
                    "end": 178
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 181,
                    "end": 187
                  }
                ],
                "start": 177,
                "end": 187
              },
              "start": 175,
              "end": 187
            },
            "start": 171,
            "end": 187
          },
          "init": null,
          "definite": false,
          "start": 171,
          "end": 187
        }
      ],
      "declare": true,
      "start": 159,
      "end": 188
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
          "start": 193,
          "end": 197
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 209,
          "end": 210
        },
        "start": 193,
        "end": 210
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
                "start": 236,
                "end": 240
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 244
              },
              "optional": false,
              "computed": false,
              "start": 236,
              "end": 244
            },
            "directive": null,
            "start": 236,
            "end": 245
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
                "start": 250,
                "end": 254
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 258
              },
              "optional": false,
              "computed": false,
              "start": 250,
              "end": 258
            },
            "directive": null,
            "start": 250,
            "end": 259
          }
        ],
        "start": 212,
        "end": 261
      },
      "alternate": null,
      "start": 189,
      "end": 261
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
                "start": 281,
                "end": 284
              },
              "start": 279,
              "end": 284
            },
            "start": 275,
            "end": 284
          },
          "init": null,
          "definite": false,
          "start": 275,
          "end": 284
        }
      ],
      "declare": true,
      "start": 263,
      "end": 285
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
          "start": 290,
          "end": 294
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 306,
          "end": 307
        },
        "start": 290,
        "end": 307
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
                "start": 315,
                "end": 319
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 320,
                "end": 323
              },
              "optional": false,
              "computed": false,
              "start": 315,
              "end": 323
            },
            "directive": null,
            "start": 315,
            "end": 324
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
                "start": 329,
                "end": 333
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 334,
                "end": 337
              },
              "optional": false,
              "computed": false,
              "start": 329,
              "end": 337
            },
            "directive": null,
            "start": 329,
            "end": 338
          }
        ],
        "start": 309,
        "end": 340
      },
      "alternate": null,
      "start": 286,
      "end": 340
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 391,
        "end": 403
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
                    "start": 415,
                    "end": 416
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 415,
                  "end": 416
                }
              ],
              "start": 414,
              "end": 417
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
                  "start": 421,
                  "end": 422
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
                        "start": 423,
                        "end": 424
                      },
                      "typeArguments": null,
                      "start": 423,
                      "end": 424
                    }
                  ],
                  "start": 422,
                  "end": 425
                },
                "start": 421,
                "end": 425
              },
              "start": 419,
              "end": 425
            },
            "start": 410,
            "end": 426
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 432,
                "end": 438
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 439,
                "end": 450
              },
              "optional": false,
              "computed": false,
              "start": 432,
              "end": 450
            },
            "computed": true,
            "optional": false,
            "kind": "method",
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
                    "type": "TSUnknownKeyword",
                    "start": 459,
                    "end": 466
                  },
                  "start": 457,
                  "end": 466
                },
                "start": 452,
                "end": 466
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
                  "start": 469,
                  "end": 474
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 478,
                      "end": 479
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 480,
                          "end": 483
                        }
                      ],
                      "start": 479,
                      "end": 484
                    },
                    "start": 478,
                    "end": 484
                  },
                  "start": 478,
                  "end": 484
                },
                "start": 469,
                "end": 484
              },
              "start": 467,
              "end": 484
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 431,
            "end": 485
          }
        ],
        "start": 404,
        "end": 487
      },
      "declare": false,
      "start": 381,
      "end": 487
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 498,
        "end": 499
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
              "start": 500,
              "end": 501
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 500,
            "end": 501
          }
        ],
        "start": 499,
        "end": 502
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
              "start": 509,
              "end": 512
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
                  "start": 514,
                  "end": 515
                },
                "typeArguments": null,
                "start": 514,
                "end": 515
              },
              "start": 512,
              "end": 515
            },
            "accessibility": null,
            "static": false,
            "start": 509,
            "end": 516
          }
        ],
        "start": 503,
        "end": 518
      },
      "declare": false,
      "start": 488,
      "end": 518
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
                  "start": 534,
                  "end": 546
                },
                "typeArguments": null,
                "start": 534,
                "end": 546
              },
              "start": 532,
              "end": 546
            },
            "start": 531,
            "end": 546
          },
          "init": null,
          "definite": false,
          "start": 531,
          "end": 546
        }
      ],
      "declare": true,
      "start": 519,
      "end": 547
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
                      "start": 567,
                      "end": 568
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 569,
                          "end": 575
                        }
                      ],
                      "start": 568,
                      "end": 576
                    },
                    "start": 567,
                    "end": 576
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 579,
                    "end": 585
                  }
                ],
                "start": 567,
                "end": 585
              },
              "start": 565,
              "end": 585
            },
            "start": 561,
            "end": 585
          },
          "init": null,
          "definite": false,
          "start": 561,
          "end": 585
        }
      ],
      "declare": true,
      "start": 549,
      "end": 586
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
          "start": 591,
          "end": 595
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 607,
          "end": 608
        },
        "start": 591,
        "end": 608
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
                "value": 1,
                "raw": "1",
                "start": 653,
                "end": 654
              },
              "start": 642,
              "end": 654
            },
            "directive": null,
            "start": 642,
            "end": 655
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
                  "start": 660,
                  "end": 664
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 665,
                  "end": 668
                },
                "optional": false,
                "computed": false,
                "start": 660,
                "end": 668
              },
              "right": {
                "type": "Literal",
                "value": "str",
                "raw": "\"str\"",
                "start": 671,
                "end": 676
              },
              "start": 660,
              "end": 676
            },
            "directive": null,
            "start": 660,
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
                  "name": "obj3",
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
        "start": 610,
        "end": 701
      },
      "alternate": null,
      "start": 587,
      "end": 701
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
                "start": 721,
                "end": 724
              },
              "start": 719,
              "end": 724
            },
            "start": 715,
            "end": 724
          },
          "init": null,
          "definite": false,
          "start": 715,
          "end": 724
        }
      ],
      "declare": true,
      "start": 703,
      "end": 725
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
          "start": 730,
          "end": 734
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 746,
          "end": 747
        },
        "start": 730,
        "end": 747
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
                  "start": 755,
                  "end": 759
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 760,
                  "end": 763
                },
                "optional": false,
                "computed": false,
                "start": 755,
                "end": 763
              },
              "right": {
                "type": "Literal",
                "value": "str",
                "raw": "\"str\"",
                "start": 766,
                "end": 771
              },
              "start": 755,
              "end": 771
            },
            "directive": null,
            "start": 755,
            "end": 772
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
                  "start": 777,
                  "end": 781
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 782,
                  "end": 785
                },
                "optional": false,
                "computed": false,
                "start": 777,
                "end": 785
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 788,
                "end": 789
              },
              "start": 777,
              "end": 789
            },
            "directive": null,
            "start": 777,
            "end": 790
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
                  "start": 795,
                  "end": 799
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 800,
                  "end": 803
                },
                "optional": false,
                "computed": false,
                "start": 795,
                "end": 803
              },
              "right": {
                "type": "Literal",
                "value": "str",
                "raw": "\"str\"",
                "start": 806,
                "end": 811
              },
              "start": 795,
              "end": 811
            },
            "directive": null,
            "start": 795,
            "end": 812
          }
        ],
        "start": 749,
        "end": 814
      },
      "alternate": null,
      "start": 726,
      "end": 814
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 862,
        "end": 874
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
                    "start": 893,
                    "end": 899
                  },
                  "start": 891,
                  "end": 899
                },
                "start": 886,
                "end": 899
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
                  "start": 902,
                  "end": 904
                },
                "typeArguments": null,
                "start": 902,
                "end": 904
              },
              "start": 900,
              "end": 904
            },
            "start": 881,
            "end": 905
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
                    "start": 922,
                    "end": 928
                  },
                  "start": 920,
                  "end": 928
                },
                "start": 915,
                "end": 928
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
                  "start": 931,
                  "end": 933
                },
                "typeArguments": null,
                "start": 931,
                "end": 933
              },
              "start": 929,
              "end": 933
            },
            "start": 910,
            "end": 934
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 940,
                "end": 946
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 947,
                "end": 958
              },
              "optional": false,
              "computed": false,
              "start": 940,
              "end": 958
            },
            "computed": true,
            "optional": false,
            "kind": "method",
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
                    "type": "TSUnknownKeyword",
                    "start": 967,
                    "end": 974
                  },
                  "start": 965,
                  "end": 974
                },
                "start": 960,
                "end": 974
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
                  "start": 977,
                  "end": 982
                },
                "asserts": false,
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
                          "start": 986,
                          "end": 988
                        },
                        "typeArguments": null,
                        "start": 986,
                        "end": 988
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 991,
                          "end": 993
                        },
                        "typeArguments": null,
                        "start": 991,
                        "end": 993
                      }
                    ],
                    "start": 986,
                    "end": 993
                  },
                  "start": 986,
                  "end": 993
                },
                "start": 977,
                "end": 993
              },
              "start": 975,
              "end": 993
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 939,
            "end": 994
          }
        ],
        "start": 875,
        "end": 996
      },
      "declare": false,
      "start": 852,
      "end": 996
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1007,
        "end": 1009
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
              "start": 1016,
              "end": 1019
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1021,
                "end": 1027
              },
              "start": 1019,
              "end": 1027
            },
            "accessibility": null,
            "static": false,
            "start": 1016,
            "end": 1028
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
              "start": 1033,
              "end": 1034
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1036,
                "end": 1042
              },
              "start": 1034,
              "end": 1042
            },
            "accessibility": null,
            "static": false,
            "start": 1033,
            "end": 1043
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
              "start": 1048,
              "end": 1052
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1054,
                "end": 1060
              },
              "start": 1052,
              "end": 1060
            },
            "accessibility": null,
            "static": false,
            "start": 1048,
            "end": 1061
          }
        ],
        "start": 1010,
        "end": 1063
      },
      "declare": false,
      "start": 997,
      "end": 1063
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1074,
        "end": 1076
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
              "start": 1083,
              "end": 1086
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1088,
                "end": 1094
              },
              "start": 1086,
              "end": 1094
            },
            "accessibility": null,
            "static": false,
            "start": 1083,
            "end": 1095
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
              "start": 1100,
              "end": 1101
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1103,
                "end": 1109
              },
              "start": 1101,
              "end": 1109
            },
            "accessibility": null,
            "static": false,
            "start": 1100,
            "end": 1110
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
              "start": 1115,
              "end": 1119
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1121,
                "end": 1127
              },
              "start": 1119,
              "end": 1127
            },
            "accessibility": null,
            "static": false,
            "start": 1115,
            "end": 1128
          }
        ],
        "start": 1077,
        "end": 1130
      },
      "declare": false,
      "start": 1064,
      "end": 1130
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
                  "start": 1146,
                  "end": 1158
                },
                "typeArguments": null,
                "start": 1146,
                "end": 1158
              },
              "start": 1144,
              "end": 1158
            },
            "start": 1143,
            "end": 1158
          },
          "init": null,
          "definite": false,
          "start": 1143,
          "end": 1158
        }
      ],
      "declare": true,
      "start": 1131,
      "end": 1159
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
                      "start": 1179,
                      "end": 1181
                    },
                    "typeArguments": null,
                    "start": 1179,
                    "end": 1181
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1184,
                      "end": 1185
                    },
                    "typeArguments": null,
                    "start": 1184,
                    "end": 1185
                  }
                ],
                "start": 1179,
                "end": 1185
              },
              "start": 1177,
              "end": 1185
            },
            "start": 1173,
            "end": 1185
          },
          "init": null,
          "definite": false,
          "start": 1173,
          "end": 1185
        }
      ],
      "declare": true,
      "start": 1161,
      "end": 1186
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
          "start": 1191,
          "end": 1195
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 1207,
          "end": 1208
        },
        "start": 1191,
        "end": 1208
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
                "start": 1235,
                "end": 1239
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1240,
                "end": 1243
              },
              "optional": false,
              "computed": false,
              "start": 1235,
              "end": 1243
            },
            "directive": null,
            "start": 1235,
            "end": 1244
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
                "start": 1249,
                "end": 1253
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1254,
                "end": 1255
              },
              "optional": false,
              "computed": false,
              "start": 1249,
              "end": 1255
            },
            "directive": null,
            "start": 1249,
            "end": 1256
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
                "start": 1261,
                "end": 1265
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1266,
                "end": 1270
              },
              "optional": false,
              "computed": false,
              "start": 1261,
              "end": 1270
            },
            "directive": null,
            "start": 1261,
            "end": 1271
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
                "start": 1276,
                "end": 1280
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1281,
                "end": 1285
              },
              "optional": false,
              "computed": false,
              "start": 1276,
              "end": 1285
            },
            "directive": null,
            "start": 1276,
            "end": 1286
          }
        ],
        "start": 1210,
        "end": 1288
      },
      "alternate": null,
      "start": 1187,
      "end": 1288
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
                "start": 1308,
                "end": 1311
              },
              "start": 1306,
              "end": 1311
            },
            "start": 1302,
            "end": 1311
          },
          "init": null,
          "definite": false,
          "start": 1302,
          "end": 1311
        }
      ],
      "declare": true,
      "start": 1290,
      "end": 1312
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
          "start": 1317,
          "end": 1321
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 1333,
          "end": 1334
        },
        "start": 1317,
        "end": 1334
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
                "start": 1342,
                "end": 1346
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1347,
                "end": 1350
              },
              "optional": false,
              "computed": false,
              "start": 1342,
              "end": 1350
            },
            "directive": null,
            "start": 1342,
            "end": 1351
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
                "start": 1356,
                "end": 1360
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1361,
                "end": 1365
              },
              "optional": false,
              "computed": false,
              "start": 1356,
              "end": 1365
            },
            "directive": null,
            "start": 1356,
            "end": 1366
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
                "start": 1371,
                "end": 1375
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1376,
                "end": 1380
              },
              "optional": false,
              "computed": false,
              "start": 1371,
              "end": 1380
            },
            "directive": null,
            "start": 1371,
            "end": 1381
          }
        ],
        "start": 1336,
        "end": 1383
      },
      "alternate": null,
      "start": 1313,
      "end": 1383
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 1423,
        "end": 1424
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
              "start": 1431,
              "end": 1434
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1436,
                "end": 1442
              },
              "start": 1434,
              "end": 1442
            },
            "accessibility": null,
            "static": false,
            "start": 1431,
            "end": 1443
          }
        ],
        "start": 1425,
        "end": 1445
      },
      "declare": false,
      "start": 1413,
      "end": 1445
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
                          "start": 1475,
                          "end": 1476
                        },
                        "typeArguments": null,
                        "start": 1475,
                        "end": 1476
                      },
                      "start": 1473,
                      "end": 1476
                    },
                    "start": 1467,
                    "end": 1477
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1483,
                        "end": 1489
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "hasInstance",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1490,
                        "end": 1501
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1483,
                      "end": 1501
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
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
                            "type": "TSUnknownKeyword",
                            "start": 1510,
                            "end": 1517
                          },
                          "start": 1508,
                          "end": 1517
                        },
                        "start": 1503,
                        "end": 1517
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
                          "start": 1520,
                          "end": 1525
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "D",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1529,
                              "end": 1530
                            },
                            "typeArguments": null,
                            "start": 1529,
                            "end": 1530
                          },
                          "start": 1529,
                          "end": 1530
                        },
                        "start": 1520,
                        "end": 1530
                      },
                      "start": 1518,
                      "end": 1530
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1482,
                    "end": 1531
                  }
                ],
                "start": 1461,
                "end": 1533
              },
              "start": 1459,
              "end": 1533
            },
            "start": 1458,
            "end": 1533
          },
          "init": null,
          "definite": false,
          "start": 1458,
          "end": 1533
        }
      ],
      "declare": true,
      "start": 1446,
      "end": 1534
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
                      "start": 1554,
                      "end": 1555
                    },
                    "typeArguments": null,
                    "start": 1554,
                    "end": 1555
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1558,
                    "end": 1564
                  }
                ],
                "start": 1554,
                "end": 1564
              },
              "start": 1552,
              "end": 1564
            },
            "start": 1548,
            "end": 1564
          },
          "init": null,
          "definite": false,
          "start": 1548,
          "end": 1564
        }
      ],
      "declare": true,
      "start": 1536,
      "end": 1565
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
          "start": 1570,
          "end": 1574
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 1586,
          "end": 1587
        },
        "start": 1570,
        "end": 1587
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
            "directive": null,
            "start": 1613,
            "end": 1622
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
                "start": 1627,
                "end": 1631
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 1632,
                "end": 1635
              },
              "optional": false,
              "computed": false,
              "start": 1627,
              "end": 1635
            },
            "directive": null,
            "start": 1627,
            "end": 1636
          }
        ],
        "start": 1589,
        "end": 1638
      },
      "alternate": null,
      "start": 1566,
      "end": 1638
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
                "start": 1658,
                "end": 1661
              },
              "start": 1656,
              "end": 1661
            },
            "start": 1652,
            "end": 1661
          },
          "init": null,
          "definite": false,
          "start": 1652,
          "end": 1661
        }
      ],
      "declare": true,
      "start": 1640,
      "end": 1662
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
          "start": 1667,
          "end": 1671
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 1683,
          "end": 1684
        },
        "start": 1667,
        "end": 1684
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
                "start": 1692,
                "end": 1696
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1697,
                "end": 1700
              },
              "optional": false,
              "computed": false,
              "start": 1692,
              "end": 1700
            },
            "directive": null,
            "start": 1692,
            "end": 1701
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
                "start": 1706,
                "end": 1710
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 1711,
                "end": 1714
              },
              "optional": false,
              "computed": false,
              "start": 1706,
              "end": 1714
            },
            "directive": null,
            "start": 1706,
            "end": 1715
          }
        ],
        "start": 1686,
        "end": 1717
      },
      "alternate": null,
      "start": 1663,
      "end": 1717
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 1780,
        "end": 1792
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
                      "start": 1807,
                      "end": 1809
                    },
                    "typeArguments": null,
                    "start": 1807,
                    "end": 1809
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1812,
                      "end": 1814
                    },
                    "typeArguments": null,
                    "start": 1812,
                    "end": 1814
                  }
                ],
                "start": 1807,
                "end": 1814
              },
              "start": 1805,
              "end": 1814
            },
            "start": 1799,
            "end": 1815
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 1821,
                "end": 1827
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 1828,
                "end": 1839
              },
              "optional": false,
              "computed": false,
              "start": 1821,
              "end": 1839
            },
            "computed": true,
            "optional": false,
            "kind": "method",
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
                    "type": "TSUnknownKeyword",
                    "start": 1848,
                    "end": 1855
                  },
                  "start": 1846,
                  "end": 1855
                },
                "start": 1841,
                "end": 1855
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
                  "start": 1858,
                  "end": 1863
                },
                "asserts": false,
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
                          "start": 1867,
                          "end": 1869
                        },
                        "typeArguments": null,
                        "start": 1867,
                        "end": 1869
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1872,
                          "end": 1874
                        },
                        "typeArguments": null,
                        "start": 1872,
                        "end": 1874
                      }
                    ],
                    "start": 1867,
                    "end": 1874
                  },
                  "start": 1867,
                  "end": 1874
                },
                "start": 1858,
                "end": 1874
              },
              "start": 1856,
              "end": 1874
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1820,
            "end": 1875
          }
        ],
        "start": 1793,
        "end": 1877
      },
      "declare": false,
      "start": 1770,
      "end": 1877
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1888,
        "end": 1890
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
              "start": 1897,
              "end": 1900
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1902,
                "end": 1908
              },
              "start": 1900,
              "end": 1908
            },
            "accessibility": null,
            "static": false,
            "start": 1897,
            "end": 1909
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
              "start": 1914,
              "end": 1918
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1920,
                "end": 1926
              },
              "start": 1918,
              "end": 1926
            },
            "accessibility": null,
            "static": false,
            "start": 1914,
            "end": 1927
          }
        ],
        "start": 1891,
        "end": 1929
      },
      "declare": false,
      "start": 1878,
      "end": 1929
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1940,
        "end": 1942
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
              "start": 1949,
              "end": 1952
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1954,
                "end": 1960
              },
              "start": 1952,
              "end": 1960
            },
            "accessibility": null,
            "static": false,
            "start": 1949,
            "end": 1961
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
              "start": 1966,
              "end": 1970
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1972,
                "end": 1978
              },
              "start": 1970,
              "end": 1978
            },
            "accessibility": null,
            "static": false,
            "start": 1966,
            "end": 1979
          }
        ],
        "start": 1943,
        "end": 1981
      },
      "declare": false,
      "start": 1930,
      "end": 1981
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
                  "start": 1997,
                  "end": 2009
                },
                "typeArguments": null,
                "start": 1997,
                "end": 2009
              },
              "start": 1995,
              "end": 2009
            },
            "start": 1994,
            "end": 2009
          },
          "init": null,
          "definite": false,
          "start": 1994,
          "end": 2009
        }
      ],
      "declare": true,
      "start": 1982,
      "end": 2010
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
                      "start": 2030,
                      "end": 2032
                    },
                    "typeArguments": null,
                    "start": 2030,
                    "end": 2032
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2035,
                      "end": 2036
                    },
                    "typeArguments": null,
                    "start": 2035,
                    "end": 2036
                  }
                ],
                "start": 2030,
                "end": 2036
              },
              "start": 2028,
              "end": 2036
            },
            "start": 2024,
            "end": 2036
          },
          "init": null,
          "definite": false,
          "start": 2024,
          "end": 2036
        }
      ],
      "declare": true,
      "start": 2012,
      "end": 2037
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
          "start": 2042,
          "end": 2046
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null,
          "start": 2058,
          "end": 2059
        },
        "start": 2042,
        "end": 2059
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
                "start": 2085,
                "end": 2089
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2090,
                "end": 2093
              },
              "optional": false,
              "computed": false,
              "start": 2085,
              "end": 2093
            },
            "directive": null,
            "start": 2085,
            "end": 2094
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
                "start": 2099,
                "end": 2103
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2104,
                "end": 2108
              },
              "optional": false,
              "computed": false,
              "start": 2099,
              "end": 2108
            },
            "directive": null,
            "start": 2099,
            "end": 2109
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
                "start": 2114,
                "end": 2118
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2119,
                "end": 2123
              },
              "optional": false,
              "computed": false,
              "start": 2114,
              "end": 2123
            },
            "directive": null,
            "start": 2114,
            "end": 2124
          }
        ],
        "start": 2061,
        "end": 2126
      },
      "alternate": null,
      "start": 2038,
      "end": 2126
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
                "start": 2147,
                "end": 2150
              },
              "start": 2145,
              "end": 2150
            },
            "start": 2140,
            "end": 2150
          },
          "init": null,
          "definite": false,
          "start": 2140,
          "end": 2150
        }
      ],
      "declare": true,
      "start": 2128,
      "end": 2151
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
          "start": 2156,
          "end": 2161
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null,
          "start": 2173,
          "end": 2174
        },
        "start": 2156,
        "end": 2174
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
                "start": 2182,
                "end": 2187
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2188,
                "end": 2191
              },
              "optional": false,
              "computed": false,
              "start": 2182,
              "end": 2191
            },
            "directive": null,
            "start": 2182,
            "end": 2192
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
                "start": 2197,
                "end": 2202
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2203,
                "end": 2207
              },
              "optional": false,
              "computed": false,
              "start": 2197,
              "end": 2207
            },
            "directive": null,
            "start": 2197,
            "end": 2208
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
                "start": 2213,
                "end": 2218
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2219,
                "end": 2223
              },
              "optional": false,
              "computed": false,
              "start": 2213,
              "end": 2223
            },
            "directive": null,
            "start": 2213,
            "end": 2224
          }
        ],
        "start": 2176,
        "end": 2226
      },
      "alternate": null,
      "start": 2152,
      "end": 2226
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 2280,
        "end": 2292
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
                "start": 2307,
                "end": 2310
              },
              "start": 2305,
              "end": 2310
            },
            "start": 2299,
            "end": 2311
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2317,
                "end": 2323
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 2324,
                "end": 2335
              },
              "optional": false,
              "computed": false,
              "start": 2317,
              "end": 2335
            },
            "computed": true,
            "optional": false,
            "kind": "method",
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
                    "type": "TSUnknownKeyword",
                    "start": 2344,
                    "end": 2351
                  },
                  "start": 2342,
                  "end": 2351
                },
                "start": 2337,
                "end": 2351
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
                  "start": 2354,
                  "end": 2359
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2363,
                    "end": 2366
                  },
                  "start": 2363,
                  "end": 2366
                },
                "start": 2354,
                "end": 2366
              },
              "start": 2352,
              "end": 2366
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2316,
            "end": 2367
          }
        ],
        "start": 2293,
        "end": 2369
      },
      "declare": false,
      "start": 2270,
      "end": 2369
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 2380,
        "end": 2381
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
              "start": 2388,
              "end": 2391
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2393,
                "end": 2399
              },
              "start": 2391,
              "end": 2399
            },
            "accessibility": null,
            "static": false,
            "start": 2388,
            "end": 2400
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
              "start": 2405,
              "end": 2408
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2410,
                "end": 2416
              },
              "start": 2408,
              "end": 2416
            },
            "accessibility": null,
            "static": false,
            "start": 2405,
            "end": 2417
          }
        ],
        "start": 2382,
        "end": 2419
      },
      "declare": false,
      "start": 2370,
      "end": 2419
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
                  "start": 2435,
                  "end": 2447
                },
                "typeArguments": null,
                "start": 2435,
                "end": 2447
              },
              "start": 2433,
              "end": 2447
            },
            "start": 2432,
            "end": 2447
          },
          "init": null,
          "definite": false,
          "start": 2432,
          "end": 2447
        }
      ],
      "declare": true,
      "start": 2420,
      "end": 2448
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
                      "start": 2469,
                      "end": 2470
                    },
                    "typeArguments": null,
                    "start": 2469,
                    "end": 2470
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 2473,
                    "end": 2479
                  }
                ],
                "start": 2469,
                "end": 2479
              },
              "start": 2467,
              "end": 2479
            },
            "start": 2462,
            "end": 2479
          },
          "init": null,
          "definite": false,
          "start": 2462,
          "end": 2479
        }
      ],
      "declare": true,
      "start": 2450,
      "end": 2480
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
          "start": 2485,
          "end": 2490
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null,
          "start": 2502,
          "end": 2503
        },
        "start": 2485,
        "end": 2503
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
                "start": 2569,
                "end": 2574
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2575,
                "end": 2578
              },
              "optional": false,
              "computed": false,
              "start": 2569,
              "end": 2578
            },
            "directive": null,
            "start": 2569,
            "end": 2579
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
                "start": 2584,
                "end": 2589
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 2590,
                "end": 2593
              },
              "optional": false,
              "computed": false,
              "start": 2584,
              "end": 2593
            },
            "directive": null,
            "start": 2584,
            "end": 2594
          }
        ],
        "start": 2505,
        "end": 2596
      },
      "alternate": null,
      "start": 2481,
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
            "name": "obj12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2617,
                "end": 2620
              },
              "start": 2615,
              "end": 2620
            },
            "start": 2610,
            "end": 2620
          },
          "init": null,
          "definite": false,
          "start": 2610,
          "end": 2620
        }
      ],
      "declare": true,
      "start": 2598,
      "end": 2621
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
          "start": 2626,
          "end": 2631
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null,
          "start": 2643,
          "end": 2644
        },
        "start": 2626,
        "end": 2644
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
                "start": 2652,
                "end": 2657
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2658,
                "end": 2661
              },
              "optional": false,
              "computed": false,
              "start": 2652,
              "end": 2661
            },
            "directive": null,
            "start": 2652,
            "end": 2662
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
                "start": 2667,
                "end": 2672
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 2673,
                "end": 2676
              },
              "optional": false,
              "computed": false,
              "start": 2667,
              "end": 2676
            },
            "directive": null,
            "start": 2667,
            "end": 2677
          }
        ],
        "start": 2646,
        "end": 2679
      },
      "alternate": null,
      "start": 2622,
      "end": 2679
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 2756,
        "end": 2768
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
              "start": 2775,
              "end": 2784
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
                  "start": 2786,
                  "end": 2788
                },
                "typeArguments": null,
                "start": 2786,
                "end": 2788
              },
              "start": 2784,
              "end": 2788
            },
            "accessibility": null,
            "static": false,
            "start": 2775,
            "end": 2789
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
                  "start": 2819,
                  "end": 2821
                },
                "typeArguments": null,
                "start": 2819,
                "end": 2821
              },
              "start": 2817,
              "end": 2821
            },
            "start": 2811,
            "end": 2822
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2847,
                "end": 2853
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 2854,
                "end": 2865
              },
              "optional": false,
              "computed": false,
              "start": 2847,
              "end": 2865
            },
            "computed": true,
            "optional": false,
            "kind": "method",
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
                    "type": "TSUnknownKeyword",
                    "start": 2874,
                    "end": 2881
                  },
                  "start": 2872,
                  "end": 2881
                },
                "start": 2867,
                "end": 2881
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
                  "start": 2884,
                  "end": 2889
                },
                "asserts": false,
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
                      "start": 2893,
                      "end": 2895
                    },
                    "typeArguments": null,
                    "start": 2893,
                    "end": 2895
                  },
                  "start": 2893,
                  "end": 2895
                },
                "start": 2884,
                "end": 2895
              },
              "start": 2882,
              "end": 2895
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2846,
            "end": 2896
          }
        ],
        "start": 2769,
        "end": 2920
      },
      "declare": false,
      "start": 2746,
      "end": 2920
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2931,
        "end": 2933
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
              "start": 2940,
              "end": 2944
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2946,
                "end": 2952
              },
              "start": 2944,
              "end": 2952
            },
            "accessibility": null,
            "static": false,
            "start": 2940,
            "end": 2953
          }
        ],
        "start": 2934,
        "end": 2955
      },
      "declare": false,
      "start": 2921,
      "end": 2955
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2966,
        "end": 2968
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
              "start": 2975,
              "end": 2979
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2981,
                "end": 2988
              },
              "start": 2979,
              "end": 2988
            },
            "accessibility": null,
            "static": false,
            "start": 2975,
            "end": 2989
          }
        ],
        "start": 2969,
        "end": 2991
      },
      "declare": false,
      "start": 2956,
      "end": 2991
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
                  "start": 3007,
                  "end": 3019
                },
                "typeArguments": null,
                "start": 3007,
                "end": 3019
              },
              "start": 3005,
              "end": 3019
            },
            "start": 3004,
            "end": 3019
          },
          "init": null,
          "definite": false,
          "start": 3004,
          "end": 3019
        }
      ],
      "declare": true,
      "start": 2992,
      "end": 3020
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
                      "start": 3041,
                      "end": 3043
                    },
                    "typeArguments": null,
                    "start": 3041,
                    "end": 3043
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "G2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3046,
                      "end": 3048
                    },
                    "typeArguments": null,
                    "start": 3046,
                    "end": 3048
                  }
                ],
                "start": 3041,
                "end": 3048
              },
              "start": 3039,
              "end": 3048
            },
            "start": 3034,
            "end": 3048
          },
          "init": null,
          "definite": false,
          "start": 3034,
          "end": 3048
        }
      ],
      "declare": true,
      "start": 3022,
      "end": 3049
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
          "start": 3054,
          "end": 3059
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "G",
          "optional": false,
          "typeAnnotation": null,
          "start": 3071,
          "end": 3072
        },
        "start": 3054,
        "end": 3072
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
                "start": 3140,
                "end": 3145
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3146,
                "end": 3150
              },
              "optional": false,
              "computed": false,
              "start": 3140,
              "end": 3150
            },
            "directive": null,
            "start": 3140,
            "end": 3151
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
                "start": 3156,
                "end": 3161
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3162,
                "end": 3166
              },
              "optional": false,
              "computed": false,
              "start": 3156,
              "end": 3166
            },
            "directive": null,
            "start": 3156,
            "end": 3167
          }
        ],
        "start": 3074,
        "end": 3169
      },
      "alternate": null,
      "start": 3050,
      "end": 3169
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
                "start": 3190,
                "end": 3193
              },
              "start": 3188,
              "end": 3193
            },
            "start": 3183,
            "end": 3193
          },
          "init": null,
          "definite": false,
          "start": 3183,
          "end": 3193
        }
      ],
      "declare": true,
      "start": 3171,
      "end": 3194
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
          "start": 3199,
          "end": 3204
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "G",
          "optional": false,
          "typeAnnotation": null,
          "start": 3216,
          "end": 3217
        },
        "start": 3199,
        "end": 3217
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
                "start": 3225,
                "end": 3230
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3231,
                "end": 3235
              },
              "optional": false,
              "computed": false,
              "start": 3225,
              "end": 3235
            },
            "directive": null,
            "start": 3225,
            "end": 3236
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
                "start": 3241,
                "end": 3246
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3247,
                "end": 3251
              },
              "optional": false,
              "computed": false,
              "start": 3241,
              "end": 3251
            },
            "directive": null,
            "start": 3241,
            "end": 3252
          }
        ],
        "start": 3219,
        "end": 3254
      },
      "alternate": null,
      "start": 3195,
      "end": 3254
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 3311,
        "end": 3323
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
              "start": 3330,
              "end": 3339
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3341,
                "end": 3344
              },
              "start": 3339,
              "end": 3344
            },
            "accessibility": null,
            "static": false,
            "start": 3330,
            "end": 3345
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
                  "start": 3442,
                  "end": 3443
                },
                "typeArguments": null,
                "start": 3442,
                "end": 3443
              },
              "start": 3440,
              "end": 3443
            },
            "start": 3434,
            "end": 3444
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 3471,
                "end": 3477
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 3478,
                "end": 3489
              },
              "optional": false,
              "computed": false,
              "start": 3471,
              "end": 3489
            },
            "computed": true,
            "optional": false,
            "kind": "method",
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
                    "type": "TSUnknownKeyword",
                    "start": 3498,
                    "end": 3505
                  },
                  "start": 3496,
                  "end": 3505
                },
                "start": 3491,
                "end": 3505
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
                  "start": 3508,
                  "end": 3513
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "H",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3517,
                      "end": 3518
                    },
                    "typeArguments": null,
                    "start": 3517,
                    "end": 3518
                  },
                  "start": 3517,
                  "end": 3518
                },
                "start": 3508,
                "end": 3518
              },
              "start": 3506,
              "end": 3518
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3470,
            "end": 3519
          }
        ],
        "start": 3324,
        "end": 3543
      },
      "declare": false,
      "start": 3301,
      "end": 3543
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null,
        "start": 3554,
        "end": 3555
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
              "start": 3562,
              "end": 3565
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3567,
                "end": 3573
              },
              "start": 3565,
              "end": 3573
            },
            "accessibility": null,
            "static": false,
            "start": 3562,
            "end": 3574
          }
        ],
        "start": 3556,
        "end": 3576
      },
      "declare": false,
      "start": 3544,
      "end": 3576
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
                  "start": 3592,
                  "end": 3604
                },
                "typeArguments": null,
                "start": 3592,
                "end": 3604
              },
              "start": 3590,
              "end": 3604
            },
            "start": 3589,
            "end": 3604
          },
          "init": null,
          "definite": false,
          "start": 3589,
          "end": 3604
        }
      ],
      "declare": true,
      "start": 3577,
      "end": 3605
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
                      "start": 3626,
                      "end": 3627
                    },
                    "typeArguments": null,
                    "start": 3626,
                    "end": 3627
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 3630,
                    "end": 3636
                  }
                ],
                "start": 3626,
                "end": 3636
              },
              "start": 3624,
              "end": 3636
            },
            "start": 3619,
            "end": 3636
          },
          "init": null,
          "definite": false,
          "start": 3619,
          "end": 3636
        }
      ],
      "declare": true,
      "start": 3607,
      "end": 3637
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
          "start": 3642,
          "end": 3647
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "H",
          "optional": false,
          "typeAnnotation": null,
          "start": 3659,
          "end": 3660
        },
        "start": 3642,
        "end": 3660
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
                "start": 3686,
                "end": 3691
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3692,
                "end": 3695
              },
              "optional": false,
              "computed": false,
              "start": 3686,
              "end": 3695
            },
            "directive": null,
            "start": 3686,
            "end": 3696
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
                "start": 3701,
                "end": 3706
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 3707,
                "end": 3710
              },
              "optional": false,
              "computed": false,
              "start": 3701,
              "end": 3710
            },
            "directive": null,
            "start": 3701,
            "end": 3711
          }
        ],
        "start": 3662,
        "end": 3713
      },
      "alternate": null,
      "start": 3638,
      "end": 3713
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
                "start": 3734,
                "end": 3737
              },
              "start": 3732,
              "end": 3737
            },
            "start": 3727,
            "end": 3737
          },
          "init": null,
          "definite": false,
          "start": 3727,
          "end": 3737
        }
      ],
      "declare": true,
      "start": 3715,
      "end": 3738
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
          "start": 3743,
          "end": 3748
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "H",
          "optional": false,
          "typeAnnotation": null,
          "start": 3760,
          "end": 3761
        },
        "start": 3743,
        "end": 3761
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
                "start": 3769,
                "end": 3774
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3775,
                "end": 3779
              },
              "optional": false,
              "computed": false,
              "start": 3769,
              "end": 3779
            },
            "directive": null,
            "start": 3769,
            "end": 3780
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
                "start": 3785,
                "end": 3790
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3791,
                "end": 3795
              },
              "optional": false,
              "computed": false,
              "start": 3785,
              "end": 3795
            },
            "directive": null,
            "start": 3785,
            "end": 3796
          }
        ],
        "start": 3763,
        "end": 3798
      },
      "alternate": null,
      "start": 3739,
      "end": 3798
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
                "start": 3819,
                "end": 3822
              },
              "start": 3817,
              "end": 3822
            },
            "start": 3812,
            "end": 3822
          },
          "init": null,
          "definite": false,
          "start": 3812,
          "end": 3822
        }
      ],
      "declare": true,
      "start": 3800,
      "end": 3823
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
          "start": 3828,
          "end": 3833
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null,
          "start": 3845,
          "end": 3851
        },
        "start": 3828,
        "end": 3851
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
                "start": 3903,
                "end": 3908
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3909,
                "end": 3913
              },
              "optional": false,
              "computed": false,
              "start": 3903,
              "end": 3913
            },
            "directive": null,
            "start": 3903,
            "end": 3914
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
                "start": 3919,
                "end": 3924
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3925,
                "end": 3929
              },
              "optional": false,
              "computed": false,
              "start": 3919,
              "end": 3929
            },
            "directive": null,
            "start": 3919,
            "end": 3930
          }
        ],
        "start": 3853,
        "end": 3932
      },
      "alternate": null,
      "start": 3824,
      "end": 3932
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
                "start": 3953,
                "end": 3956
              },
              "start": 3951,
              "end": 3956
            },
            "start": 3946,
            "end": 3956
          },
          "init": null,
          "definite": false,
          "start": 3946,
          "end": 3956
        }
      ],
      "declare": true,
      "start": 3934,
      "end": 3957
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
          "start": 3962,
          "end": 3967
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Function",
          "optional": false,
          "typeAnnotation": null,
          "start": 3979,
          "end": 3987
        },
        "start": 3962,
        "end": 3987
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
                "start": 4041,
                "end": 4046
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4047,
                "end": 4051
              },
              "optional": false,
              "computed": false,
              "start": 4041,
              "end": 4051
            },
            "directive": null,
            "start": 4041,
            "end": 4052
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
                "start": 4057,
                "end": 4062
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4063,
                "end": 4067
              },
              "optional": false,
              "computed": false,
              "start": 4057,
              "end": 4067
            },
            "directive": null,
            "start": 4057,
            "end": 4068
          }
        ],
        "start": 3989,
        "end": 4070
      },
      "alternate": null,
      "start": 3958,
      "end": 4070
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4070
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
    "value": "[",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 52,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 65,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 72,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 82,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 88,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 91,
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
    "type": "Keyword",
    "value": "interface",
    "start": 96,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 114,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 129,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 137,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "AConstructor",
    "start": 144,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 159,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 167,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 171,
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
    "value": "A",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 181,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 189,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 193,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 198,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 236,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 241,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 250,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 255,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 263,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 271,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 275,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 281,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 286,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 290,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 295,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 315,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 320,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 329,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 334,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 381,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "BConstructor",
    "start": 391,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 404,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 410,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "B",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 432,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 439,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 452,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 459,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 469,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 475,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 480,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 486,
    "end": 487
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 488,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 509,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 519,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 527,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "BConstructor",
    "start": 534,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 549,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 557,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 561,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 569,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 579,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 585,
    "end": 586
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 587,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 591,
    "end": 595
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 596,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "obj3",
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
    "type": "Numeric",
    "value": "1",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 660,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 665,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 669,
    "end": 670
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 671,
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
    "value": "obj3",
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
    "type": "Identifier",
    "value": "declare",
    "start": 703,
    "end": 710
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 711,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "obj4",
    "start": 715,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 721,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 724,
    "end": 725
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 726,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "obj4",
    "start": 730,
    "end": 734
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 735,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "obj4",
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
    "value": "foo",
    "start": 760,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 764,
    "end": 765
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 766,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "obj4",
    "start": 777,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 782,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 786,
    "end": 787
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "obj4",
    "start": 795,
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
    "value": "bar",
    "start": 800,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 804,
    "end": 805
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 806,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 813,
    "end": 814
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 852,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "CConstructor",
    "start": 862,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 875,
    "end": 876
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 881,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 886,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 893,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 902,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 904,
    "end": 905
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 910,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 915,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 922,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 931,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 940,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 947,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 960,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 967,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 977,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 983,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 986,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 991,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 995,
    "end": 996
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 997,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1007,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1016,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1021,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1036,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1048,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1054,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1064,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 1074,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1083,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1088,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1103,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1115,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1121,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1131,
    "end": 1138
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1139,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "CConstructor",
    "start": 1146,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1161,
    "end": 1168
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1169,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "obj5",
    "start": 1173,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1179,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1187,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "obj5",
    "start": 1191,
    "end": 1195
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1196,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "obj5",
    "start": 1235,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1240,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "obj5",
    "start": 1249,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "obj5",
    "start": 1261,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1266,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "obj5",
    "start": 1276,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1281,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1290,
    "end": 1297
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1298,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "obj6",
    "start": 1302,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1308,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1313,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "obj6",
    "start": 1317,
    "end": 1321
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1322,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "obj6",
    "start": 1342,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1347,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "obj6",
    "start": 1356,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1361,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "obj6",
    "start": 1371,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1376,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1413,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1431,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1436,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1446,
    "end": 1453
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1454,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1467,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1483,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 1490,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1503,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1510,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1520,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1526,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1536,
    "end": 1543
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1544,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "obj7",
    "start": 1548,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1558,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1566,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "obj7",
    "start": 1570,
    "end": 1574
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1575,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Identifier",
    "value": "obj7",
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
    "value": ";",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "obj7",
    "start": 1627,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1632,
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
    "type": "Identifier",
    "value": "declare",
    "start": 1640,
    "end": 1647
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1648,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "obj8",
    "start": 1652,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1658,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1663,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "obj8",
    "start": 1667,
    "end": 1671
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1672,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "obj8",
    "start": 1692,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1697,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Identifier",
    "value": "obj8",
    "start": 1706,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1711,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1770,
    "end": 1779
  },
  {
    "type": "Identifier",
    "value": "EConstructor",
    "start": 1780,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1799,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 1807,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 1812,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1821,
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
    "value": "hasInstance",
    "start": 1828,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1841,
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
    "value": "unknown",
    "start": 1848,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1858,
    "end": 1863
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1864,
    "end": 1866
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 1867,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 1872,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1878,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 1888,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1897,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1902,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1914,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1920,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1930,
    "end": 1939
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 1940,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1949,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1954,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1966,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1972,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1982,
    "end": 1989
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1990,
    "end": 1993
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "EConstructor",
    "start": 1997,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2012,
    "end": 2019
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2020,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "obj9",
    "start": 2024,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 2030,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2038,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Identifier",
    "value": "obj9",
    "start": 2042,
    "end": 2046
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2047,
    "end": 2057
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Identifier",
    "value": "obj9",
    "start": 2085,
    "end": 2089
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2090,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Identifier",
    "value": "obj9",
    "start": 2099,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 2104,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Identifier",
    "value": "obj9",
    "start": 2114,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 2119,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2128,
    "end": 2135
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2136,
    "end": 2139
  },
  {
    "type": "Identifier",
    "value": "obj10",
    "start": 2140,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2147,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2152,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Identifier",
    "value": "obj10",
    "start": 2156,
    "end": 2161
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2162,
    "end": 2172
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Identifier",
    "value": "obj10",
    "start": 2182,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2188,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Identifier",
    "value": "obj10",
    "start": 2197,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 2203,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Identifier",
    "value": "obj10",
    "start": 2213,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 2219,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2270,
    "end": 2279
  },
  {
    "type": "Identifier",
    "value": "FConstructor",
    "start": 2280,
    "end": 2292
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2299,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2307,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 2317,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 2324,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2337,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2344,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2354,
    "end": 2359
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2360,
    "end": 2362
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2363,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2370,
    "end": 2379
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2388,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2393,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2405,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2410,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2420,
    "end": 2427
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2428,
    "end": 2431
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Identifier",
    "value": "FConstructor",
    "start": 2435,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2450,
    "end": 2457
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2458,
    "end": 2461
  },
  {
    "type": "Identifier",
    "value": "obj11",
    "start": 2462,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2473,
    "end": 2479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2481,
    "end": 2483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Identifier",
    "value": "obj11",
    "start": 2485,
    "end": 2490
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2491,
    "end": 2501
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2505,
    "end": 2506
  },
  {
    "type": "Identifier",
    "value": "obj11",
    "start": 2569,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2574,
    "end": 2575
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2575,
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
    "value": "obj11",
    "start": 2584,
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
    "value": "bar",
    "start": 2590,
    "end": 2593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2593,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "obj12",
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
    "value": "any",
    "start": 2617,
    "end": 2620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2620,
    "end": 2621
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2622,
    "end": 2624
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Identifier",
    "value": "obj12",
    "start": 2626,
    "end": 2631
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2632,
    "end": 2642
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "Identifier",
    "value": "obj12",
    "start": 2652,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2658,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Identifier",
    "value": "obj12",
    "start": 2667,
    "end": 2672
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2672,
    "end": 2673
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2673,
    "end": 2676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2676,
    "end": 2677
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2678,
    "end": 2679
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2746,
    "end": 2755
  },
  {
    "type": "Identifier",
    "value": "GConstructor",
    "start": 2756,
    "end": 2768
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 2775,
    "end": 2784
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2784,
    "end": 2785
  },
  {
    "type": "Identifier",
    "value": "G1",
    "start": 2786,
    "end": 2788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2788,
    "end": 2789
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2811,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2815,
    "end": 2816
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2816,
    "end": 2817
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2817,
    "end": 2818
  },
  {
    "type": "Identifier",
    "value": "G2",
    "start": 2819,
    "end": 2821
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2821,
    "end": 2822
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2846,
    "end": 2847
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 2847,
    "end": 2853
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2853,
    "end": 2854
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 2854,
    "end": 2865
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2865,
    "end": 2866
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2866,
    "end": 2867
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2867,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2874,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2882,
    "end": 2883
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2884,
    "end": 2889
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2890,
    "end": 2892
  },
  {
    "type": "Identifier",
    "value": "G1",
    "start": 2893,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2921,
    "end": 2930
  },
  {
    "type": "Identifier",
    "value": "G1",
    "start": 2931,
    "end": 2933
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2934,
    "end": 2935
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 2940,
    "end": 2944
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2944,
    "end": 2945
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2946,
    "end": 2952
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2954,
    "end": 2955
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2956,
    "end": 2965
  },
  {
    "type": "Identifier",
    "value": "G2",
    "start": 2966,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2969,
    "end": 2970
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 2975,
    "end": 2979
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2979,
    "end": 2980
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2981,
    "end": 2988
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2988,
    "end": 2989
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2992,
    "end": 2999
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3000,
    "end": 3003
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 3004,
    "end": 3005
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3005,
    "end": 3006
  },
  {
    "type": "Identifier",
    "value": "GConstructor",
    "start": 3007,
    "end": 3019
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3019,
    "end": 3020
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3022,
    "end": 3029
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3030,
    "end": 3033
  },
  {
    "type": "Identifier",
    "value": "obj13",
    "start": 3034,
    "end": 3039
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Identifier",
    "value": "G1",
    "start": 3041,
    "end": 3043
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3044,
    "end": 3045
  },
  {
    "type": "Identifier",
    "value": "G2",
    "start": 3046,
    "end": 3048
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3048,
    "end": 3049
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3050,
    "end": 3052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3053,
    "end": 3054
  },
  {
    "type": "Identifier",
    "value": "obj13",
    "start": 3054,
    "end": 3059
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3060,
    "end": 3070
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 3071,
    "end": 3072
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3072,
    "end": 3073
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3074,
    "end": 3075
  },
  {
    "type": "Identifier",
    "value": "obj13",
    "start": 3140,
    "end": 3145
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3145,
    "end": 3146
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 3146,
    "end": 3150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3150,
    "end": 3151
  },
  {
    "type": "Identifier",
    "value": "obj13",
    "start": 3156,
    "end": 3161
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3161,
    "end": 3162
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 3162,
    "end": 3166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3166,
    "end": 3167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3168,
    "end": 3169
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3171,
    "end": 3178
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3179,
    "end": 3182
  },
  {
    "type": "Identifier",
    "value": "obj14",
    "start": 3183,
    "end": 3188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3188,
    "end": 3189
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3190,
    "end": 3193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3193,
    "end": 3194
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3195,
    "end": 3197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3198,
    "end": 3199
  },
  {
    "type": "Identifier",
    "value": "obj14",
    "start": 3199,
    "end": 3204
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3205,
    "end": 3215
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 3216,
    "end": 3217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3217,
    "end": 3218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3219,
    "end": 3220
  },
  {
    "type": "Identifier",
    "value": "obj14",
    "start": 3225,
    "end": 3230
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3230,
    "end": 3231
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 3231,
    "end": 3235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3235,
    "end": 3236
  },
  {
    "type": "Identifier",
    "value": "obj14",
    "start": 3241,
    "end": 3246
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3246,
    "end": 3247
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 3247,
    "end": 3251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3251,
    "end": 3252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3253,
    "end": 3254
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3301,
    "end": 3310
  },
  {
    "type": "Identifier",
    "value": "HConstructor",
    "start": 3311,
    "end": 3323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3324,
    "end": 3325
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 3330,
    "end": 3339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3339,
    "end": 3340
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3341,
    "end": 3344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3344,
    "end": 3345
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3434,
    "end": 3437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3438,
    "end": 3439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3439,
    "end": 3440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3440,
    "end": 3441
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 3442,
    "end": 3443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3443,
    "end": 3444
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3470,
    "end": 3471
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 3471,
    "end": 3477
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3477,
    "end": 3478
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 3478,
    "end": 3489
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3489,
    "end": 3490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3490,
    "end": 3491
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3491,
    "end": 3496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3496,
    "end": 3497
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3498,
    "end": 3505
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3505,
    "end": 3506
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3506,
    "end": 3507
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3508,
    "end": 3513
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 3514,
    "end": 3516
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 3517,
    "end": 3518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3518,
    "end": 3519
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3542,
    "end": 3543
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3544,
    "end": 3553
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 3554,
    "end": 3555
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3556,
    "end": 3557
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3562,
    "end": 3565
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3565,
    "end": 3566
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3567,
    "end": 3573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3573,
    "end": 3574
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3575,
    "end": 3576
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3577,
    "end": 3584
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3585,
    "end": 3588
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 3589,
    "end": 3590
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3590,
    "end": 3591
  },
  {
    "type": "Identifier",
    "value": "HConstructor",
    "start": 3592,
    "end": 3604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3604,
    "end": 3605
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3607,
    "end": 3614
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3615,
    "end": 3618
  },
  {
    "type": "Identifier",
    "value": "obj15",
    "start": 3619,
    "end": 3624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3624,
    "end": 3625
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 3626,
    "end": 3627
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3628,
    "end": 3629
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3630,
    "end": 3636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3636,
    "end": 3637
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3638,
    "end": 3640
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3641,
    "end": 3642
  },
  {
    "type": "Identifier",
    "value": "obj15",
    "start": 3642,
    "end": 3647
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3648,
    "end": 3658
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 3659,
    "end": 3660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3660,
    "end": 3661
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3662,
    "end": 3663
  },
  {
    "type": "Identifier",
    "value": "obj15",
    "start": 3686,
    "end": 3691
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3691,
    "end": 3692
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3692,
    "end": 3695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3695,
    "end": 3696
  },
  {
    "type": "Identifier",
    "value": "obj15",
    "start": 3701,
    "end": 3706
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3706,
    "end": 3707
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3707,
    "end": 3710
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3710,
    "end": 3711
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3712,
    "end": 3713
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3715,
    "end": 3722
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3723,
    "end": 3726
  },
  {
    "type": "Identifier",
    "value": "obj16",
    "start": 3727,
    "end": 3732
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3732,
    "end": 3733
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3734,
    "end": 3737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3737,
    "end": 3738
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3739,
    "end": 3741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3742,
    "end": 3743
  },
  {
    "type": "Identifier",
    "value": "obj16",
    "start": 3743,
    "end": 3748
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3749,
    "end": 3759
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 3760,
    "end": 3761
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3761,
    "end": 3762
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3763,
    "end": 3764
  },
  {
    "type": "Identifier",
    "value": "obj16",
    "start": 3769,
    "end": 3774
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3774,
    "end": 3775
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 3775,
    "end": 3779
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3779,
    "end": 3780
  },
  {
    "type": "Identifier",
    "value": "obj16",
    "start": 3785,
    "end": 3790
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3790,
    "end": 3791
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 3791,
    "end": 3795
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3795,
    "end": 3796
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3797,
    "end": 3798
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3800,
    "end": 3807
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3808,
    "end": 3811
  },
  {
    "type": "Identifier",
    "value": "obj17",
    "start": 3812,
    "end": 3817
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3817,
    "end": 3818
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3819,
    "end": 3822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3822,
    "end": 3823
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3824,
    "end": 3826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3827,
    "end": 3828
  },
  {
    "type": "Identifier",
    "value": "obj17",
    "start": 3828,
    "end": 3833
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3834,
    "end": 3844
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 3845,
    "end": 3851
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3851,
    "end": 3852
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3853,
    "end": 3854
  },
  {
    "type": "Identifier",
    "value": "obj17",
    "start": 3903,
    "end": 3908
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3908,
    "end": 3909
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 3909,
    "end": 3913
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3913,
    "end": 3914
  },
  {
    "type": "Identifier",
    "value": "obj17",
    "start": 3919,
    "end": 3924
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3924,
    "end": 3925
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 3925,
    "end": 3929
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3929,
    "end": 3930
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3931,
    "end": 3932
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3934,
    "end": 3941
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3942,
    "end": 3945
  },
  {
    "type": "Identifier",
    "value": "obj18",
    "start": 3946,
    "end": 3951
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3951,
    "end": 3952
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3953,
    "end": 3956
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3956,
    "end": 3957
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3958,
    "end": 3960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3961,
    "end": 3962
  },
  {
    "type": "Identifier",
    "value": "obj18",
    "start": 3962,
    "end": 3967
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3968,
    "end": 3978
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 3979,
    "end": 3987
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3987,
    "end": 3988
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3989,
    "end": 3990
  },
  {
    "type": "Identifier",
    "value": "obj18",
    "start": 4041,
    "end": 4046
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4046,
    "end": 4047
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 4047,
    "end": 4051
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4051,
    "end": 4052
  },
  {
    "type": "Identifier",
    "value": "obj18",
    "start": 4057,
    "end": 4062
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4062,
    "end": 4063
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 4063,
    "end": 4067
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4067,
    "end": 4068
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4069,
    "end": 4070
  }
]
```
