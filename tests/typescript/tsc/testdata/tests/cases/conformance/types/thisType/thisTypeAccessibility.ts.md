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
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 13
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
              "start": 28,
              "end": 29
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 31,
                "end": 37
              },
              "start": 29,
              "end": 37
            },
            "value": {
              "type": "Literal",
              "value": 123,
              "raw": "123",
              "start": 40,
              "end": 43
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 20,
            "end": 44
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pp",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 61
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 63,
                "end": 69
              },
              "start": 61,
              "end": 69
            },
            "value": {
              "type": "Literal",
              "value": 123,
              "raw": "123",
              "start": 72,
              "end": 75
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 49,
            "end": 76
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ppp",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 91
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 93,
                "end": 99
              },
              "start": 91,
              "end": 99
            },
            "value": {
              "type": "Literal",
              "value": 123,
              "raw": "123",
              "start": 102,
              "end": 105
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 81,
            "end": 106
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sp",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 128
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 130,
                "end": 136
              },
              "start": 128,
              "end": 136
            },
            "value": {
              "type": "Literal",
              "value": 123,
              "raw": "123",
              "start": 139,
              "end": 142
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 111,
            "end": 143
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "spp",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 168
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 170,
                "end": 176
              },
              "start": 168,
              "end": 176
            },
            "value": {
              "type": "Literal",
              "value": 123,
              "raw": "123",
              "start": 179,
              "end": 182
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 148,
            "end": 183
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sppp",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 206
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 208,
                "end": 214
              },
              "start": 206,
              "end": 214
            },
            "value": {
              "type": "Literal",
              "value": 123,
              "raw": "123",
              "start": 217,
              "end": 220
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 188,
            "end": 221
          }
        ],
        "start": 14,
        "end": 223
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 223
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 235,
        "end": 242
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "extension1",
              "optional": false,
              "typeAnnotation": null,
              "start": 249,
              "end": 259
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 263,
                    "end": 269
                  },
                  "start": 261,
                  "end": 269
                },
                "start": 260,
                "end": 269
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 272,
                "end": 276
              },
              "start": 270,
              "end": 276
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 249,
            "end": 277
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "extension2",
              "optional": false,
              "typeAnnotation": null,
              "start": 282,
              "end": 292
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 296,
                    "end": 302
                  },
                  "start": 294,
                  "end": 302
                },
                "start": 293,
                "end": 302
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 305,
                "end": 309
              },
              "start": 303,
              "end": 309
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 282,
            "end": 310
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "extension3",
              "optional": false,
              "typeAnnotation": null,
              "start": 315,
              "end": 325
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 329,
                    "end": 335
                  },
                  "start": 327,
                  "end": 335
                },
                "start": 326,
                "end": 335
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 338,
                "end": 342
              },
              "start": 336,
              "end": 342
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 315,
            "end": 343
          }
        ],
        "start": 243,
        "end": 345
      },
      "declare": false,
      "start": 225,
      "end": 345
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyGenericClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 353,
        "end": 367
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
              "start": 368,
              "end": 369
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 368,
            "end": 369
          }
        ],
        "start": 367,
        "end": 370
      },
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
              "start": 385,
              "end": 386
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
                  "start": 388,
                  "end": 389
                },
                "typeArguments": null,
                "start": 388,
                "end": 389
              },
              "start": 386,
              "end": 389
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 377,
            "end": 390
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pp",
              "optional": false,
              "typeAnnotation": null,
              "start": 405,
              "end": 407
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
                  "start": 409,
                  "end": 410
                },
                "typeArguments": null,
                "start": 409,
                "end": 410
              },
              "start": 407,
              "end": 410
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 395,
            "end": 411
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ppp",
              "optional": false,
              "typeAnnotation": null,
              "start": 423,
              "end": 426
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
                  "start": 428,
                  "end": 429
                },
                "typeArguments": null,
                "start": 428,
                "end": 429
              },
              "start": 426,
              "end": 429
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 416,
            "end": 430
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sp",
              "optional": false,
              "typeAnnotation": null,
              "start": 450,
              "end": 452
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 454,
                "end": 460
              },
              "start": 452,
              "end": 460
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 435,
            "end": 461
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "spp",
              "optional": false,
              "typeAnnotation": null,
              "start": 483,
              "end": 486
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 488,
                "end": 494
              },
              "start": 486,
              "end": 494
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 466,
            "end": 495
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sppp",
              "optional": false,
              "typeAnnotation": null,
              "start": 514,
              "end": 518
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 520,
                "end": 526
              },
              "start": 518,
              "end": 526
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 500,
            "end": 527
          }
        ],
        "start": 371,
        "end": 529
      },
      "abstract": false,
      "declare": false,
      "start": 347,
      "end": 529
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 531,
              "end": 538
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 539,
              "end": 548
            },
            "optional": false,
            "computed": false,
            "start": 531,
            "end": 548
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "extension1",
            "optional": false,
            "typeAnnotation": null,
            "start": 549,
            "end": 559
          },
          "optional": false,
          "computed": false,
          "start": 531,
          "end": 559
        },
        "right": {
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
              "name": "this",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 578,
                    "end": 585
                  },
                  "typeArguments": null,
                  "start": 578,
                  "end": 585
                },
                "start": 576,
                "end": 585
              },
              "start": 572,
              "end": 585
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 590,
                  "end": 596
                },
                "start": 588,
                "end": 596
              },
              "start": 587,
              "end": 596
            }
          ],
          "returnType": null,
          "body": {
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
                      "type": "ThisExpression",
                      "start": 605,
                      "end": 609
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 610,
                      "end": 611
                    },
                    "optional": false,
                    "computed": false,
                    "start": 605,
                    "end": 611
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 614,
                    "end": 615
                  },
                  "start": 605,
                  "end": 615
                },
                "directive": null,
                "start": 605,
                "end": 616
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 621,
                      "end": 625
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 626,
                      "end": 628
                    },
                    "optional": false,
                    "computed": false,
                    "start": 621,
                    "end": 628
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 631,
                    "end": 632
                  },
                  "start": 621,
                  "end": 632
                },
                "directive": null,
                "start": 621,
                "end": 633
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 638,
                      "end": 642
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ppp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 643,
                      "end": 646
                    },
                    "optional": false,
                    "computed": false,
                    "start": 638,
                    "end": 646
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 649,
                    "end": 650
                  },
                  "start": 638,
                  "end": 650
                },
                "directive": null,
                "start": 638,
                "end": 651
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
                      "name": "MyClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 656,
                      "end": 663
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "sp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 664,
                      "end": 666
                    },
                    "optional": false,
                    "computed": false,
                    "start": 656,
                    "end": 666
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 669,
                    "end": 670
                  },
                  "start": 656,
                  "end": 670
                },
                "directive": null,
                "start": 656,
                "end": 671
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
                      "name": "MyClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 676,
                      "end": 683
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "spp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 684,
                      "end": 687
                    },
                    "optional": false,
                    "computed": false,
                    "start": 676,
                    "end": 687
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 690,
                    "end": 691
                  },
                  "start": 676,
                  "end": 691
                },
                "directive": null,
                "start": 676,
                "end": 692
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
                      "name": "MyClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 697,
                      "end": 704
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "sppp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 705,
                      "end": 709
                    },
                    "optional": false,
                    "computed": false,
                    "start": 697,
                    "end": 709
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 712,
                    "end": 713
                  },
                  "start": 697,
                  "end": 713
                },
                "directive": null,
                "start": 697,
                "end": 714
              }
            ],
            "start": 598,
            "end": 716
          },
          "expression": false,
          "start": 562,
          "end": 716
        },
        "start": 531,
        "end": 716
      },
      "directive": null,
      "start": 531,
      "end": 716
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 718,
              "end": 725
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 726,
              "end": 735
            },
            "optional": false,
            "computed": false,
            "start": 718,
            "end": 735
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "extension2",
            "optional": false,
            "typeAnnotation": null,
            "start": 736,
            "end": 746
          },
          "optional": false,
          "computed": false,
          "start": 718,
          "end": 746
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
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
                  "start": 758,
                  "end": 759
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 768,
                    "end": 775
                  },
                  "typeArguments": null,
                  "start": 768,
                  "end": 775
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 758,
                "end": 775
              }
            ],
            "start": 757,
            "end": 776
          },
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "this",
              "optional": false,
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
                    "start": 784,
                    "end": 785
                  },
                  "typeArguments": null,
                  "start": 784,
                  "end": 785
                },
                "start": 782,
                "end": 785
              },
              "start": 778,
              "end": 785
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 790,
                  "end": 796
                },
                "start": 788,
                "end": 796
              },
              "start": 787,
              "end": 796
            }
          ],
          "returnType": null,
          "body": {
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
                      "type": "ThisExpression",
                      "start": 805,
                      "end": 809
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 810,
                      "end": 811
                    },
                    "optional": false,
                    "computed": false,
                    "start": 805,
                    "end": 811
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 814,
                    "end": 815
                  },
                  "start": 805,
                  "end": 815
                },
                "directive": null,
                "start": 805,
                "end": 816
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 821,
                      "end": 825
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 826,
                      "end": 828
                    },
                    "optional": false,
                    "computed": false,
                    "start": 821,
                    "end": 828
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 831,
                    "end": 832
                  },
                  "start": 821,
                  "end": 832
                },
                "directive": null,
                "start": 821,
                "end": 833
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 838,
                      "end": 842
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ppp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 843,
                      "end": 846
                    },
                    "optional": false,
                    "computed": false,
                    "start": 838,
                    "end": 846
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 849,
                    "end": 850
                  },
                  "start": 838,
                  "end": 850
                },
                "directive": null,
                "start": 838,
                "end": 851
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
                      "name": "MyClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 856,
                      "end": 863
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "sp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 864,
                      "end": 866
                    },
                    "optional": false,
                    "computed": false,
                    "start": 856,
                    "end": 866
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 869,
                    "end": 870
                  },
                  "start": 856,
                  "end": 870
                },
                "directive": null,
                "start": 856,
                "end": 871
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
                      "name": "MyClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 876,
                      "end": 883
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "spp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 884,
                      "end": 887
                    },
                    "optional": false,
                    "computed": false,
                    "start": 876,
                    "end": 887
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 890,
                    "end": 891
                  },
                  "start": 876,
                  "end": 891
                },
                "directive": null,
                "start": 876,
                "end": 892
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
                      "name": "MyClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 897,
                      "end": 904
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "sppp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 905,
                      "end": 909
                    },
                    "optional": false,
                    "computed": false,
                    "start": 897,
                    "end": 909
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 912,
                    "end": 913
                  },
                  "start": 897,
                  "end": 913
                },
                "directive": null,
                "start": 897,
                "end": 914
              }
            ],
            "start": 798,
            "end": 916
          },
          "expression": false,
          "start": 749,
          "end": 916
        },
        "start": 718,
        "end": 916
      },
      "directive": null,
      "start": 718,
      "end": 916
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "extension3",
        "optional": false,
        "typeAnnotation": null,
        "start": 927,
        "end": 937
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
              "start": 938,
              "end": 939
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 948,
                "end": 955
              },
              "typeArguments": null,
              "start": 948,
              "end": 955
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 938,
            "end": 955
          }
        ],
        "start": 937,
        "end": 956
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
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
                "start": 964,
                "end": 965
              },
              "typeArguments": null,
              "start": 964,
              "end": 965
            },
            "start": 962,
            "end": 965
          },
          "start": 958,
          "end": 965
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 970,
              "end": 976
            },
            "start": 968,
            "end": 976
          },
          "start": 967,
          "end": 976
        }
      ],
      "returnType": null,
      "body": {
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
                  "type": "ThisExpression",
                  "start": 985,
                  "end": 989
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 990,
                  "end": 991
                },
                "optional": false,
                "computed": false,
                "start": 985,
                "end": 991
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 994,
                "end": 995
              },
              "start": 985,
              "end": 995
            },
            "directive": null,
            "start": 985,
            "end": 996
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 1001,
                  "end": 1005
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1006,
                  "end": 1008
                },
                "optional": false,
                "computed": false,
                "start": 1001,
                "end": 1008
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1011,
                "end": 1012
              },
              "start": 1001,
              "end": 1012
            },
            "directive": null,
            "start": 1001,
            "end": 1013
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 1018,
                  "end": 1022
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ppp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1023,
                  "end": 1026
                },
                "optional": false,
                "computed": false,
                "start": 1018,
                "end": 1026
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1029,
                "end": 1030
              },
              "start": 1018,
              "end": 1030
            },
            "directive": null,
            "start": 1018,
            "end": 1031
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
                  "name": "MyClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1036,
                  "end": 1043
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1044,
                  "end": 1046
                },
                "optional": false,
                "computed": false,
                "start": 1036,
                "end": 1046
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1049,
                "end": 1050
              },
              "start": 1036,
              "end": 1050
            },
            "directive": null,
            "start": 1036,
            "end": 1051
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
                  "name": "MyClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1056,
                  "end": 1063
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "spp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1064,
                  "end": 1067
                },
                "optional": false,
                "computed": false,
                "start": 1056,
                "end": 1067
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1070,
                "end": 1071
              },
              "start": 1056,
              "end": 1071
            },
            "directive": null,
            "start": 1056,
            "end": 1072
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
                  "name": "MyClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1077,
                  "end": 1084
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sppp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1085,
                  "end": 1089
                },
                "optional": false,
                "computed": false,
                "start": 1077,
                "end": 1089
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1092,
                "end": 1093
              },
              "start": 1077,
              "end": 1093
            },
            "directive": null,
            "start": 1077,
            "end": 1094
          }
        ],
        "start": 978,
        "end": 1096
      },
      "expression": false,
      "start": 918,
      "end": 1096
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 1098,
              "end": 1105
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 1106,
              "end": 1115
            },
            "optional": false,
            "computed": false,
            "start": 1098,
            "end": 1115
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "extension3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1116,
            "end": 1126
          },
          "optional": false,
          "computed": false,
          "start": 1098,
          "end": 1126
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "extension3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1129,
          "end": 1139
        },
        "start": 1098,
        "end": 1139
      },
      "directive": null,
      "start": 1098,
      "end": 1140
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "extension4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1151,
        "end": 1161
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
              "start": 1162,
              "end": 1163
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1172,
              "end": 1178
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1162,
            "end": 1178
          }
        ],
        "start": 1161,
        "end": 1179
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyGenericClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 1186,
                "end": 1200
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
                      "start": 1201,
                      "end": 1202
                    },
                    "typeArguments": null,
                    "start": 1201,
                    "end": 1202
                  }
                ],
                "start": 1200,
                "end": 1203
              },
              "start": 1186,
              "end": 1203
            },
            "start": 1184,
            "end": 1203
          },
          "start": 1180,
          "end": 1203
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
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
                "start": 1208,
                "end": 1209
              },
              "typeArguments": null,
              "start": 1208,
              "end": 1209
            },
            "start": 1206,
            "end": 1209
          },
          "start": 1205,
          "end": 1209
        }
      ],
      "returnType": null,
      "body": {
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
                  "type": "ThisExpression",
                  "start": 1217,
                  "end": 1221
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1222,
                  "end": 1223
                },
                "optional": false,
                "computed": false,
                "start": 1217,
                "end": 1223
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1226,
                "end": 1227
              },
              "start": 1217,
              "end": 1227
            },
            "directive": null,
            "start": 1217,
            "end": 1228
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 1233,
                  "end": 1237
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1238,
                  "end": 1240
                },
                "optional": false,
                "computed": false,
                "start": 1233,
                "end": 1240
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1243,
                "end": 1244
              },
              "start": 1233,
              "end": 1244
            },
            "directive": null,
            "start": 1233,
            "end": 1245
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 1250,
                  "end": 1254
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ppp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1255,
                  "end": 1258
                },
                "optional": false,
                "computed": false,
                "start": 1250,
                "end": 1258
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1261,
                "end": 1262
              },
              "start": 1250,
              "end": 1262
            },
            "directive": null,
            "start": 1250,
            "end": 1263
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
                  "name": "MyGenericClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1268,
                  "end": 1282
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1283,
                  "end": 1285
                },
                "optional": false,
                "computed": false,
                "start": 1268,
                "end": 1285
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1288,
                "end": 1289
              },
              "start": 1268,
              "end": 1289
            },
            "directive": null,
            "start": 1268,
            "end": 1290
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
                  "name": "MyGenericClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1295,
                  "end": 1309
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "spp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1310,
                  "end": 1313
                },
                "optional": false,
                "computed": false,
                "start": 1295,
                "end": 1313
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1316,
                "end": 1317
              },
              "start": 1295,
              "end": 1317
            },
            "directive": null,
            "start": 1295,
            "end": 1318
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
                  "name": "MyGenericClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1323,
                  "end": 1337
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sppp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1338,
                  "end": 1342
                },
                "optional": false,
                "computed": false,
                "start": 1323,
                "end": 1342
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 1345,
                "end": 1346
              },
              "start": 1323,
              "end": 1346
            },
            "directive": null,
            "start": 1323,
            "end": 1347
          }
        ],
        "start": 1211,
        "end": 1349
      },
      "expression": false,
      "start": 1142,
      "end": 1349
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1349
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 6,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 20,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 38,
    "end": 39
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 40,
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
    "value": "protected",
    "start": 49,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "pp",
    "start": 59,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 63,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 70,
    "end": 71
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 72,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 81,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "ppp",
    "start": 88,
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
    "value": "number",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 100,
    "end": 101
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 102,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 111,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 119,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "sp",
    "start": 126,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 130,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 137,
    "end": 138
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 139,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 148,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 158,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "spp",
    "start": 165,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 170,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 179,
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
    "value": "public",
    "start": 188,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 195,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "sppp",
    "start": 202,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 208,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 215,
    "end": 216
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 217,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 225,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 235,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "extension1",
    "start": 249,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 263,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 272,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "extension2",
    "start": 282,
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
    "value": "p",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 296,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 305,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "extension3",
    "start": 315,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "p",
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
    "value": "number",
    "start": 329,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 338,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 347,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "MyGenericClass",
    "start": 353,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 371,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 377,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "p",
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
    "value": "T",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 395,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "pp",
    "start": 405,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 416,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "ppp",
    "start": 423,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 429,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 435,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 443,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "sp",
    "start": 450,
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
    "value": "number",
    "start": 454,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 466,
    "end": 475
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 476,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "spp",
    "start": 483,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 488,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 500,
    "end": 506
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 507,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "sppp",
    "start": 514,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 520,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 531,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 539,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "extension1",
    "start": 549,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 560,
    "end": 561
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 562,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 572,
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
    "value": "MyClass",
    "start": 578,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 590,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 598,
    "end": 599
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 605,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 621,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "pp",
    "start": 626,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 632,
    "end": 633
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 638,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "ppp",
    "start": 643,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 656,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "sp",
    "start": 664,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 676,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "spp",
    "start": 684,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 697,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "sppp",
    "start": 705,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 718,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 726,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "extension2",
    "start": 736,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 747,
    "end": 748
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 749,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 758,
    "end": 759
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 760,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 768,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 778,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 790,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 798,
    "end": 799
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 805,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 815,
    "end": 816
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 821,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "pp",
    "start": 826,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 832,
    "end": 833
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 838,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "ppp",
    "start": 843,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 856,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "sp",
    "start": 864,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 876,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "spp",
    "start": 884,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 897,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "sppp",
    "start": 905,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 915,
    "end": 916
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 918,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "extension3",
    "start": 927,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 938,
    "end": 939
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 940,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 948,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 958,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 970,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 978,
    "end": 979
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 985,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 994,
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
    "value": "this",
    "start": 1001,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "pp",
    "start": 1006,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "p",
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
    "value": "this",
    "start": 1018,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "ppp",
    "start": 1023,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 1036,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "sp",
    "start": 1044,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 1056,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "spp",
    "start": 1064,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 1077,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "sppp",
    "start": 1085,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 1098,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 1106,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "extension3",
    "start": 1116,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "extension3",
    "start": 1129,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1142,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "extension4",
    "start": 1151,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1164,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1172,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1180,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "MyGenericClass",
    "start": 1186,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "p",
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
    "type": "Identifier",
    "value": "T",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1217,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1233,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "pp",
    "start": 1238,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1250,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "ppp",
    "start": 1255,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "MyGenericClass",
    "start": 1268,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "sp",
    "start": 1283,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "MyGenericClass",
    "start": 1295,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "spp",
    "start": 1310,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "MyGenericClass",
    "start": 1323,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Identifier",
    "value": "sppp",
    "start": 1338,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1348,
    "end": 1349
  }
]
```
