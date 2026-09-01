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
        "name": "A_Primitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 16
      },
      "typeParameters": null,
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
              "name": "disabled",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 31
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 34,
                    "end": 41
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 44,
                    "end": 53
                  }
                ],
                "start": 34,
                "end": 53
              },
              "start": 32,
              "end": 53
            },
            "accessibility": null,
            "static": false,
            "start": 23,
            "end": 54
          }
        ],
        "start": 19,
        "end": 56
      },
      "declare": false,
      "start": 0,
      "end": 57
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B_Primitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 75
      },
      "typeParameters": null,
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
              "name": "disabled",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 90
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 93,
                "end": 100
              },
              "start": 91,
              "end": 100
            },
            "accessibility": null,
            "static": false,
            "start": 82,
            "end": 101
          }
        ],
        "start": 78,
        "end": 103
      },
      "declare": false,
      "start": 59,
      "end": 104
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C_Primitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 122
      },
      "typeParameters": null,
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
              "name": "disabled",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 137
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 140,
                    "end": 147
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 150,
                    "end": 159
                  }
                ],
                "start": 140,
                "end": 159
              },
              "start": 138,
              "end": 159
            },
            "accessibility": null,
            "static": false,
            "start": 129,
            "end": 160
          }
        ],
        "start": 125,
        "end": 162
      },
      "declare": false,
      "start": 106,
      "end": 163
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
            "name": "ab_primitive",
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
                      "name": "A_Primitive",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 193,
                      "end": 204
                    },
                    "typeArguments": null,
                    "start": 193,
                    "end": 204
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B_Primitive",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 207,
                      "end": 218
                    },
                    "typeArguments": null,
                    "start": 207,
                    "end": 218
                  }
                ],
                "start": 193,
                "end": 218
              },
              "start": 191,
              "end": 218
            },
            "start": 179,
            "end": 218
          },
          "init": null,
          "definite": false,
          "start": 179,
          "end": 218
        }
      ],
      "declare": true,
      "start": 165,
      "end": 219
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
            "name": "ac_primitive",
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
                      "name": "A_Primitive",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 248,
                      "end": 259
                    },
                    "typeArguments": null,
                    "start": 248,
                    "end": 259
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C_Primitive",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 262,
                      "end": 273
                    },
                    "typeArguments": null,
                    "start": 262,
                    "end": 273
                  }
                ],
                "start": 248,
                "end": 273
              },
              "start": 246,
              "end": 273
            },
            "start": 234,
            "end": 273
          },
          "init": null,
          "definite": false,
          "start": 234,
          "end": 273
        }
      ],
      "declare": true,
      "start": 220,
      "end": 274
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
            "name": "ab_disabled_read",
            "optional": false,
            "typeAnnotation": null,
            "start": 282,
            "end": 298
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ab_primitive",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 313
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "disabled",
              "optional": false,
              "typeAnnotation": null,
              "start": 314,
              "end": 322
            },
            "optional": false,
            "computed": false,
            "start": 301,
            "end": 322
          },
          "definite": false,
          "start": 282,
          "end": 322
        }
      ],
      "declare": false,
      "start": 276,
      "end": 323
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
            "name": "ac_disabled_read",
            "optional": false,
            "typeAnnotation": null,
            "start": 330,
            "end": 346
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ac_primitive",
              "optional": false,
              "typeAnnotation": null,
              "start": 349,
              "end": 361
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "disabled",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 370
            },
            "optional": false,
            "computed": false,
            "start": 349,
            "end": 370
          },
          "definite": false,
          "start": 330,
          "end": 370
        }
      ],
      "declare": false,
      "start": 324,
      "end": 371
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
            "name": "ab_primitive",
            "optional": false,
            "typeAnnotation": null,
            "start": 373,
            "end": 385
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "disabled",
            "optional": false,
            "typeAnnotation": null,
            "start": 386,
            "end": 394
          },
          "optional": false,
          "computed": false,
          "start": 373,
          "end": 394
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 397,
          "end": 406
        },
        "start": 373,
        "end": 406
      },
      "directive": null,
      "start": 373,
      "end": 407
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
            "name": "ac_primitive",
            "optional": false,
            "typeAnnotation": null,
            "start": 408,
            "end": 420
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "disabled",
            "optional": false,
            "typeAnnotation": null,
            "start": 421,
            "end": 429
          },
          "optional": false,
          "computed": false,
          "start": 408,
          "end": 429
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 432,
          "end": 441
        },
        "start": 408,
        "end": 441
      },
      "directive": null,
      "start": 408,
      "end": 442
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 449,
        "end": 452
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 459,
              "end": 463
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 465,
                "end": 472
              },
              "start": 463,
              "end": 472
            },
            "accessibility": null,
            "static": false,
            "start": 459,
            "end": 473
          }
        ],
        "start": 455,
        "end": 475
      },
      "declare": false,
      "start": 444,
      "end": 476
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A_Obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 483,
        "end": 488
      },
      "typeParameters": null,
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 495,
              "end": 499
            },
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
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 502,
                      "end": 505
                    },
                    "typeArguments": null,
                    "start": 502,
                    "end": 505
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 508,
                    "end": 517
                  }
                ],
                "start": 502,
                "end": 517
              },
              "start": 500,
              "end": 517
            },
            "accessibility": null,
            "static": false,
            "start": 495,
            "end": 518
          }
        ],
        "start": 491,
        "end": 520
      },
      "declare": false,
      "start": 478,
      "end": 521
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B_Obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 528,
        "end": 533
      },
      "typeParameters": null,
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 540,
              "end": 544
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 547,
                  "end": 550
                },
                "typeArguments": null,
                "start": 547,
                "end": 550
              },
              "start": 545,
              "end": 550
            },
            "accessibility": null,
            "static": false,
            "start": 540,
            "end": 551
          }
        ],
        "start": 536,
        "end": 553
      },
      "declare": false,
      "start": 523,
      "end": 554
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C_Obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 561,
        "end": 566
      },
      "typeParameters": null,
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 573,
              "end": 577
            },
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
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 580,
                      "end": 583
                    },
                    "typeArguments": null,
                    "start": 580,
                    "end": 583
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 586,
                    "end": 595
                  }
                ],
                "start": 580,
                "end": 595
              },
              "start": 578,
              "end": 595
            },
            "accessibility": null,
            "static": false,
            "start": 573,
            "end": 596
          }
        ],
        "start": 569,
        "end": 598
      },
      "declare": false,
      "start": 556,
      "end": 599
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
            "name": "ab_obj",
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
                      "name": "A_Obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 623,
                      "end": 628
                    },
                    "typeArguments": null,
                    "start": 623,
                    "end": 628
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B_Obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 631,
                      "end": 636
                    },
                    "typeArguments": null,
                    "start": 631,
                    "end": 636
                  }
                ],
                "start": 623,
                "end": 636
              },
              "start": 621,
              "end": 636
            },
            "start": 615,
            "end": 636
          },
          "init": null,
          "definite": false,
          "start": 615,
          "end": 636
        }
      ],
      "declare": true,
      "start": 601,
      "end": 637
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
            "name": "ac_obj",
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
                      "name": "A_Obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 660,
                      "end": 665
                    },
                    "typeArguments": null,
                    "start": 660,
                    "end": 665
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C_Obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 668,
                      "end": 673
                    },
                    "typeArguments": null,
                    "start": 668,
                    "end": 673
                  }
                ],
                "start": 660,
                "end": 673
              },
              "start": 658,
              "end": 673
            },
            "start": 652,
            "end": 673
          },
          "init": null,
          "definite": false,
          "start": 652,
          "end": 673
        }
      ],
      "declare": true,
      "start": 638,
      "end": 674
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
            "name": "ab_prop_read",
            "optional": false,
            "typeAnnotation": null,
            "start": 682,
            "end": 694
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ab_obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 697,
              "end": 703
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 704,
              "end": 708
            },
            "optional": false,
            "computed": false,
            "start": 697,
            "end": 708
          },
          "definite": false,
          "start": 682,
          "end": 708
        }
      ],
      "declare": false,
      "start": 676,
      "end": 709
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
            "name": "ac_prop_read",
            "optional": false,
            "typeAnnotation": null,
            "start": 716,
            "end": 728
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ac_obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 731,
              "end": 737
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 738,
              "end": 742
            },
            "optional": false,
            "computed": false,
            "start": 731,
            "end": 742
          },
          "definite": false,
          "start": 716,
          "end": 742
        }
      ],
      "declare": false,
      "start": 710,
      "end": 743
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
            "name": "ab_obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 745,
            "end": 751
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 752,
            "end": 756
          },
          "optional": false,
          "computed": false,
          "start": 745,
          "end": 756
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 759,
          "end": 768
        },
        "start": 745,
        "end": 768
      },
      "directive": null,
      "start": 745,
      "end": 769
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
            "name": "ac_obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 770,
            "end": 776
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 777,
            "end": 781
          },
          "optional": false,
          "computed": false,
          "start": 770,
          "end": 781
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 784,
          "end": 793
        },
        "start": 770,
        "end": 793
      },
      "directive": null,
      "start": 770,
      "end": 794
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 794
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
    "value": "A_Primitive",
    "start": 5,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "disabled",
    "start": 23,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 34,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 44,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 59,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "B_Primitive",
    "start": 64,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "disabled",
    "start": 82,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 93,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 106,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "C_Primitive",
    "start": 111,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "disabled",
    "start": 129,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 140,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 150,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 165,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 173,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "ab_primitive",
    "start": 179,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "A_Primitive",
    "start": 193,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "B_Primitive",
    "start": 207,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 220,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 228,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "ac_primitive",
    "start": 234,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "A_Primitive",
    "start": 248,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "C_Primitive",
    "start": 262,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 276,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "ab_disabled_read",
    "start": 282,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "ab_primitive",
    "start": 301,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "disabled",
    "start": 314,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 324,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "ac_disabled_read",
    "start": 330,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "ac_primitive",
    "start": 349,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "disabled",
    "start": 362,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "ab_primitive",
    "start": 373,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "disabled",
    "start": 386,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 397,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "ac_primitive",
    "start": 408,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "disabled",
    "start": 421,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 432,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 444,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 449,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 459,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 465,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 478,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "A_Obj",
    "start": 483,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 495,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 502,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 508,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 523,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "B_Obj",
    "start": 528,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 540,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 547,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 556,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "C_Obj",
    "start": 561,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 573,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 580,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 586,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 601,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 609,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "ab_obj",
    "start": 615,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "A_Obj",
    "start": 623,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "B_Obj",
    "start": 631,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 638,
    "end": 645
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 646,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "ac_obj",
    "start": 652,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "A_Obj",
    "start": 660,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "C_Obj",
    "start": 668,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 673,
    "end": 674
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 676,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "ab_prop_read",
    "start": 682,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "ab_obj",
    "start": 697,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 704,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 708,
    "end": 709
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 710,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "ac_prop_read",
    "start": 716,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "ac_obj",
    "start": 731,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 738,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "ab_obj",
    "start": 745,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 752,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 759,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "ac_obj",
    "start": 770,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 777,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 784,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 793,
    "end": 794
  }
]
```
