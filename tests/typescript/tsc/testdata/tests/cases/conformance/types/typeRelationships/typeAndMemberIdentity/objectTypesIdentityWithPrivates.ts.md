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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 51
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 69
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 71,
                "end": 77
              },
              "start": 69,
              "end": 77
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
            "start": 58,
            "end": 78
          }
        ],
        "start": 52,
        "end": 80
      },
      "abstract": false,
      "declare": false,
      "start": 44,
      "end": 80
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 88,
        "end": 89
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 107
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 109,
                "end": 115
              },
              "start": 107,
              "end": 115
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
            "start": 96,
            "end": 116
          }
        ],
        "start": 90,
        "end": 118
      },
      "abstract": false,
      "declare": false,
      "start": 82,
      "end": 118
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
        "start": 126,
        "end": 127
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
              "start": 128,
              "end": 129
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 128,
            "end": 129
          }
        ],
        "start": 127,
        "end": 130
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 148
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
                  "start": 150,
                  "end": 151
                },
                "typeArguments": null,
                "start": 150,
                "end": 151
              },
              "start": 148,
              "end": 151
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
            "start": 137,
            "end": 152
          }
        ],
        "start": 131,
        "end": 154
      },
      "abstract": false,
      "declare": false,
      "start": 120,
      "end": 154
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 166,
        "end": 167
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
              "start": 174,
              "end": 177
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 179,
                "end": 185
              },
              "start": 177,
              "end": 185
            },
            "accessibility": null,
            "static": false,
            "start": 174,
            "end": 186
          }
        ],
        "start": 168,
        "end": 188
      },
      "declare": false,
      "start": 156,
      "end": 188
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PA",
        "optional": false,
        "typeAnnotation": null,
        "start": 196,
        "end": 198
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 207,
        "end": 208
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 209,
        "end": 212
      },
      "abstract": false,
      "declare": false,
      "start": 190,
      "end": 212
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PB",
        "optional": false,
        "typeAnnotation": null,
        "start": 220,
        "end": 222
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 231,
        "end": 232
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 233,
        "end": 236
      },
      "abstract": false,
      "declare": false,
      "start": 214,
      "end": 236
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
            "name": "a",
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 247,
                      "end": 250
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 252,
                        "end": 258
                      },
                      "start": 250,
                      "end": 258
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 247,
                    "end": 259
                  }
                ],
                "start": 245,
                "end": 261
              },
              "start": 243,
              "end": 261
            },
            "start": 242,
            "end": 261
          },
          "init": null,
          "definite": false,
          "start": 242,
          "end": 261
        }
      ],
      "declare": false,
      "start": 238,
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 266,
            "end": 267
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 272,
                  "end": 275
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 277,
                  "end": 279
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 272,
                "end": 279
              }
            ],
            "start": 270,
            "end": 281
          },
          "definite": false,
          "start": 266,
          "end": 281
        }
      ],
      "declare": false,
      "start": 262,
      "end": 282
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 293,
        "end": 297
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "start": 301,
                "end": 302
              },
              "typeArguments": null,
              "start": 301,
              "end": 302
            },
            "start": 299,
            "end": 302
          },
          "start": 298,
          "end": 302
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 284,
      "end": 304
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 314,
        "end": 318
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "start": 322,
                "end": 323
              },
              "typeArguments": null,
              "start": 322,
              "end": 323
            },
            "start": 320,
            "end": 323
          },
          "start": 319,
          "end": 323
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 305,
      "end": 325
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 344,
        "end": 348
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 352,
              "end": 355
            },
            "start": 350,
            "end": 355
          },
          "start": 349,
          "end": 355
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 357,
        "end": 360
      },
      "expression": false,
      "start": 335,
      "end": 360
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 371,
        "end": 376
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "start": 380,
                "end": 381
              },
              "typeArguments": null,
              "start": 380,
              "end": 381
            },
            "start": 378,
            "end": 381
          },
          "start": 377,
          "end": 381
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 362,
      "end": 383
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 393,
        "end": 398
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "start": 402,
                "end": 403
              },
              "typeArguments": null,
              "start": 402,
              "end": 403
            },
            "start": 400,
            "end": 403
          },
          "start": 399,
          "end": 403
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 384,
      "end": 405
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 424,
        "end": 429
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 433,
              "end": 436
            },
            "start": 431,
            "end": 436
          },
          "start": 430,
          "end": 436
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 438,
        "end": 441
      },
      "expression": false,
      "start": 415,
      "end": 441
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 452,
        "end": 457
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 461,
                "end": 462
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 463,
                    "end": 469
                  }
                ],
                "start": 462,
                "end": 470
              },
              "start": 461,
              "end": 470
            },
            "start": 459,
            "end": 470
          },
          "start": 458,
          "end": 470
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 443,
      "end": 472
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 482,
        "end": 487
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 491,
                "end": 492
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 493,
                    "end": 499
                  }
                ],
                "start": 492,
                "end": 500
              },
              "start": 491,
              "end": 500
            },
            "start": 489,
            "end": 500
          },
          "start": 488,
          "end": 500
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 473,
      "end": 502
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 521,
        "end": 526
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 530,
              "end": 533
            },
            "start": 528,
            "end": 533
          },
          "start": 527,
          "end": 533
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 535,
        "end": 538
      },
      "expression": false,
      "start": 512,
      "end": 538
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 549,
        "end": 553
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 557,
                "end": 558
              },
              "typeArguments": null,
              "start": 557,
              "end": 558
            },
            "start": 555,
            "end": 558
          },
          "start": 554,
          "end": 558
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 540,
      "end": 560
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 570,
        "end": 574
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 578,
                "end": 579
              },
              "typeArguments": null,
              "start": 578,
              "end": 579
            },
            "start": 576,
            "end": 579
          },
          "start": 575,
          "end": 579
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 561,
      "end": 581
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 600,
        "end": 604
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
          "start": 605,
          "end": 611
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 613,
        "end": 616
      },
      "expression": false,
      "start": 591,
      "end": 616
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 627,
        "end": 631
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 642,
                "end": 643
              },
              "typeArguments": null,
              "start": 635,
              "end": 643
            },
            "start": 633,
            "end": 643
          },
          "start": 632,
          "end": 643
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 618,
      "end": 645
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 655,
        "end": 659
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 670,
                "end": 671
              },
              "typeArguments": null,
              "start": 663,
              "end": 671
            },
            "start": 661,
            "end": 671
          },
          "start": 660,
          "end": 671
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 646,
      "end": 673
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 692,
        "end": 696
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 700,
              "end": 703
            },
            "start": 698,
            "end": 703
          },
          "start": 697,
          "end": 703
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 705,
        "end": 708
      },
      "expression": false,
      "start": 683,
      "end": 708
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 719,
        "end": 723
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 734,
                "end": 735
              },
              "typeArguments": null,
              "start": 727,
              "end": 735
            },
            "start": 725,
            "end": 735
          },
          "start": 724,
          "end": 735
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 710,
      "end": 737
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 747,
        "end": 751
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 762,
                "end": 763
              },
              "typeArguments": null,
              "start": 755,
              "end": 763
            },
            "start": 753,
            "end": 763
          },
          "start": 752,
          "end": 763
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 738,
      "end": 765
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 784,
        "end": 788
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 792,
              "end": 795
            },
            "start": 790,
            "end": 795
          },
          "start": 789,
          "end": 795
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 797,
        "end": 800
      },
      "expression": false,
      "start": 775,
      "end": 800
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 811,
        "end": 815
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "start": 819,
                "end": 820
              },
              "typeArguments": null,
              "start": 819,
              "end": 820
            },
            "start": 817,
            "end": 820
          },
          "start": 816,
          "end": 820
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 802,
      "end": 822
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 832,
        "end": 836
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "start": 840,
                "end": 841
              },
              "typeArguments": null,
              "start": 840,
              "end": 841
            },
            "start": 838,
            "end": 841
          },
          "start": 837,
          "end": 841
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 823,
      "end": 843
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 865,
        "end": 869
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 873,
              "end": 876
            },
            "start": 871,
            "end": 876
          },
          "start": 870,
          "end": 876
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 878,
        "end": 881
      },
      "expression": false,
      "start": 856,
      "end": 881
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 892,
        "end": 897
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "start": 901,
                "end": 902
              },
              "typeArguments": null,
              "start": 901,
              "end": 902
            },
            "start": 899,
            "end": 902
          },
          "start": 898,
          "end": 902
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 883,
      "end": 904
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 914,
        "end": 919
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 923,
                "end": 924
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 925,
                    "end": 931
                  }
                ],
                "start": 924,
                "end": 932
              },
              "start": 923,
              "end": 932
            },
            "start": 921,
            "end": 932
          },
          "start": 920,
          "end": 932
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 905,
      "end": 934
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 956,
        "end": 961
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 965,
              "end": 968
            },
            "start": 963,
            "end": 968
          },
          "start": 962,
          "end": 968
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 970,
        "end": 973
      },
      "expression": false,
      "start": 947,
      "end": 973
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 984,
        "end": 989
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "start": 993,
                "end": 994
              },
              "typeArguments": null,
              "start": 993,
              "end": 994
            },
            "start": 991,
            "end": 994
          },
          "start": 990,
          "end": 994
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 975,
      "end": 996
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1006,
        "end": 1011
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PA",
                "optional": false,
                "typeAnnotation": null,
                "start": 1015,
                "end": 1017
              },
              "typeArguments": null,
              "start": 1015,
              "end": 1017
            },
            "start": 1013,
            "end": 1017
          },
          "start": 1012,
          "end": 1017
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 997,
      "end": 1019
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1038,
        "end": 1043
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1047,
              "end": 1050
            },
            "start": 1045,
            "end": 1050
          },
          "start": 1044,
          "end": 1050
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1052,
        "end": 1055
      },
      "expression": false,
      "start": 1029,
      "end": 1055
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1066,
        "end": 1071
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "start": 1075,
                "end": 1076
              },
              "typeArguments": null,
              "start": 1075,
              "end": 1076
            },
            "start": 1073,
            "end": 1076
          },
          "start": 1072,
          "end": 1076
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1057,
      "end": 1078
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1088,
        "end": 1093
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1097,
                "end": 1099
              },
              "typeArguments": null,
              "start": 1097,
              "end": 1099
            },
            "start": 1095,
            "end": 1099
          },
          "start": 1094,
          "end": 1099
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1079,
      "end": 1101
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1123,
        "end": 1128
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1132,
              "end": 1135
            },
            "start": 1130,
            "end": 1135
          },
          "start": 1129,
          "end": 1135
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1137,
        "end": 1140
      },
      "expression": false,
      "start": 1114,
      "end": 1140
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1151,
        "end": 1155
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "start": 1159,
                "end": 1160
              },
              "typeArguments": null,
              "start": 1159,
              "end": 1160
            },
            "start": 1157,
            "end": 1160
          },
          "start": 1156,
          "end": 1160
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1142,
      "end": 1162
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1172,
        "end": 1176
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1180,
                "end": 1181
              },
              "typeArguments": null,
              "start": 1180,
              "end": 1181
            },
            "start": 1178,
            "end": 1181
          },
          "start": 1177,
          "end": 1181
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1163,
      "end": 1183
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1205,
        "end": 1209
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1213,
              "end": 1216
            },
            "start": 1211,
            "end": 1216
          },
          "start": 1210,
          "end": 1216
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1218,
        "end": 1221
      },
      "expression": false,
      "start": 1196,
      "end": 1221
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1232,
        "end": 1236
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "start": 1240,
                "end": 1241
              },
              "typeArguments": null,
              "start": 1240,
              "end": 1241
            },
            "start": 1238,
            "end": 1241
          },
          "start": 1237,
          "end": 1241
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1223,
      "end": 1243
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1253,
        "end": 1257
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1268,
                "end": 1269
              },
              "typeArguments": null,
              "start": 1261,
              "end": 1269
            },
            "start": 1259,
            "end": 1269
          },
          "start": 1258,
          "end": 1269
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1244,
      "end": 1271
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1293,
        "end": 1297
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1301,
              "end": 1304
            },
            "start": 1299,
            "end": 1304
          },
          "start": 1298,
          "end": 1304
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1306,
        "end": 1309
      },
      "expression": false,
      "start": 1284,
      "end": 1309
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1320,
        "end": 1324
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "start": 1328,
                "end": 1329
              },
              "typeArguments": null,
              "start": 1328,
              "end": 1329
            },
            "start": 1326,
            "end": 1329
          },
          "start": 1325,
          "end": 1329
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1311,
      "end": 1331
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1341,
        "end": 1345
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1349,
                "end": 1350
              },
              "typeArguments": null,
              "start": 1349,
              "end": 1350
            },
            "start": 1347,
            "end": 1350
          },
          "start": 1346,
          "end": 1350
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1332,
      "end": 1352
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1374,
        "end": 1378
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1382,
              "end": 1385
            },
            "start": 1380,
            "end": 1385
          },
          "start": 1379,
          "end": 1385
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1387,
        "end": 1390
      },
      "expression": false,
      "start": 1365,
      "end": 1390
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1401,
        "end": 1405
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "start": 1409,
                "end": 1410
              },
              "typeArguments": null,
              "start": 1409,
              "end": 1410
            },
            "start": 1407,
            "end": 1410
          },
          "start": 1406,
          "end": 1410
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1392,
      "end": 1412
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1422,
        "end": 1426
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 1430,
                "end": 1431
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1432,
                    "end": 1438
                  }
                ],
                "start": 1431,
                "end": 1439
              },
              "start": 1430,
              "end": 1439
            },
            "start": 1428,
            "end": 1439
          },
          "start": 1427,
          "end": 1439
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1413,
      "end": 1441
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1463,
        "end": 1467
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1471,
              "end": 1474
            },
            "start": 1469,
            "end": 1474
          },
          "start": 1468,
          "end": 1474
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1476,
        "end": 1479
      },
      "expression": false,
      "start": 1454,
      "end": 1479
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1490,
        "end": 1495
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "start": 1499,
                "end": 1500
              },
              "typeArguments": null,
              "start": 1499,
              "end": 1500
            },
            "start": 1497,
            "end": 1500
          },
          "start": 1496,
          "end": 1500
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1481,
      "end": 1502
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1512,
        "end": 1517
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1528,
                "end": 1529
              },
              "typeArguments": null,
              "start": 1521,
              "end": 1529
            },
            "start": 1519,
            "end": 1529
          },
          "start": 1518,
          "end": 1529
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1503,
      "end": 1531
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1553,
        "end": 1558
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1562,
              "end": 1565
            },
            "start": 1560,
            "end": 1565
          },
          "start": 1559,
          "end": 1565
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1567,
        "end": 1570
      },
      "expression": false,
      "start": 1544,
      "end": 1570
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1581,
        "end": 1586
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "start": 1590,
                "end": 1591
              },
              "typeArguments": null,
              "start": 1590,
              "end": 1591
            },
            "start": 1588,
            "end": 1591
          },
          "start": 1587,
          "end": 1591
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1572,
      "end": 1593
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1603,
        "end": 1608
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1619,
                "end": 1620
              },
              "typeArguments": null,
              "start": 1612,
              "end": 1620
            },
            "start": 1610,
            "end": 1620
          },
          "start": 1609,
          "end": 1620
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1594,
      "end": 1622
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1644,
        "end": 1649
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1653,
              "end": 1656
            },
            "start": 1651,
            "end": 1656
          },
          "start": 1650,
          "end": 1656
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1658,
        "end": 1661
      },
      "expression": false,
      "start": 1635,
      "end": 1661
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1672,
        "end": 1678
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "start": 1682,
                "end": 1683
              },
              "typeArguments": null,
              "start": 1682,
              "end": 1683
            },
            "start": 1680,
            "end": 1683
          },
          "start": 1679,
          "end": 1683
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1663,
      "end": 1685
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1695,
        "end": 1701
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PA",
                "optional": false,
                "typeAnnotation": null,
                "start": 1705,
                "end": 1707
              },
              "typeArguments": null,
              "start": 1705,
              "end": 1707
            },
            "start": 1703,
            "end": 1707
          },
          "start": 1702,
          "end": 1707
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1686,
      "end": 1709
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1731,
        "end": 1737
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1741,
              "end": 1744
            },
            "start": 1739,
            "end": 1744
          },
          "start": 1738,
          "end": 1744
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1746,
        "end": 1749
      },
      "expression": false,
      "start": 1722,
      "end": 1749
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1760,
        "end": 1766
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "start": 1770,
                "end": 1771
              },
              "typeArguments": null,
              "start": 1770,
              "end": 1771
            },
            "start": 1768,
            "end": 1771
          },
          "start": 1767,
          "end": 1771
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1751,
      "end": 1773
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1783,
        "end": 1789
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1793,
                "end": 1795
              },
              "typeArguments": null,
              "start": 1793,
              "end": 1795
            },
            "start": 1791,
            "end": 1795
          },
          "start": 1790,
          "end": 1795
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1774,
      "end": 1797
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1816,
        "end": 1822
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1826,
              "end": 1829
            },
            "start": 1824,
            "end": 1829
          },
          "start": 1823,
          "end": 1829
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1831,
        "end": 1834
      },
      "expression": false,
      "start": 1807,
      "end": 1834
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1845,
        "end": 1850
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1854,
                "end": 1855
              },
              "typeArguments": null,
              "start": 1854,
              "end": 1855
            },
            "start": 1852,
            "end": 1855
          },
          "start": 1851,
          "end": 1855
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1836,
      "end": 1857
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1867,
        "end": 1872
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 1876,
                "end": 1877
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1878,
                    "end": 1884
                  }
                ],
                "start": 1877,
                "end": 1885
              },
              "start": 1876,
              "end": 1885
            },
            "start": 1874,
            "end": 1885
          },
          "start": 1873,
          "end": 1885
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1858,
      "end": 1887
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1909,
        "end": 1914
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1918,
              "end": 1921
            },
            "start": 1916,
            "end": 1921
          },
          "start": 1915,
          "end": 1921
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1923,
        "end": 1926
      },
      "expression": false,
      "start": 1900,
      "end": 1926
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1937,
        "end": 1942
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1946,
                "end": 1947
              },
              "typeArguments": null,
              "start": 1946,
              "end": 1947
            },
            "start": 1944,
            "end": 1947
          },
          "start": 1943,
          "end": 1947
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1928,
      "end": 1949
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1959,
        "end": 1964
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1975,
                "end": 1976
              },
              "typeArguments": null,
              "start": 1968,
              "end": 1976
            },
            "start": 1966,
            "end": 1976
          },
          "start": 1965,
          "end": 1976
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1950,
      "end": 1978
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1997,
        "end": 2002
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2006,
              "end": 2009
            },
            "start": 2004,
            "end": 2009
          },
          "start": 2003,
          "end": 2009
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2011,
        "end": 2014
      },
      "expression": false,
      "start": 1988,
      "end": 2014
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2025,
        "end": 2030
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 2034,
                "end": 2035
              },
              "typeArguments": null,
              "start": 2034,
              "end": 2035
            },
            "start": 2032,
            "end": 2035
          },
          "start": 2031,
          "end": 2035
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2016,
      "end": 2037
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2047,
        "end": 2052
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 2063,
                "end": 2064
              },
              "typeArguments": null,
              "start": 2056,
              "end": 2064
            },
            "start": 2054,
            "end": 2064
          },
          "start": 2053,
          "end": 2064
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2038,
      "end": 2066
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2085,
        "end": 2090
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2094,
              "end": 2097
            },
            "start": 2092,
            "end": 2097
          },
          "start": 2091,
          "end": 2097
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2099,
        "end": 2102
      },
      "expression": false,
      "start": 2076,
      "end": 2102
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2113,
        "end": 2118
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 2122,
                "end": 2123
              },
              "typeArguments": null,
              "start": 2122,
              "end": 2123
            },
            "start": 2120,
            "end": 2123
          },
          "start": 2119,
          "end": 2123
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2104,
      "end": 2125
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2135,
        "end": 2140
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PA",
                "optional": false,
                "typeAnnotation": null,
                "start": 2144,
                "end": 2146
              },
              "typeArguments": null,
              "start": 2144,
              "end": 2146
            },
            "start": 2142,
            "end": 2146
          },
          "start": 2141,
          "end": 2146
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2126,
      "end": 2148
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2170,
        "end": 2175
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2179,
              "end": 2182
            },
            "start": 2177,
            "end": 2182
          },
          "start": 2176,
          "end": 2182
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2184,
        "end": 2187
      },
      "expression": false,
      "start": 2161,
      "end": 2187
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2198,
        "end": 2203
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 2207,
                "end": 2208
              },
              "typeArguments": null,
              "start": 2207,
              "end": 2208
            },
            "start": 2205,
            "end": 2208
          },
          "start": 2204,
          "end": 2208
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2189,
      "end": 2210
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2220,
        "end": 2225
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PB",
                "optional": false,
                "typeAnnotation": null,
                "start": 2229,
                "end": 2231
              },
              "typeArguments": null,
              "start": 2229,
              "end": 2231
            },
            "start": 2227,
            "end": 2231
          },
          "start": 2226,
          "end": 2231
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2211,
      "end": 2233
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2255,
        "end": 2260
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2264,
              "end": 2267
            },
            "start": 2262,
            "end": 2267
          },
          "start": 2261,
          "end": 2267
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2269,
        "end": 2272
      },
      "expression": false,
      "start": 2246,
      "end": 2272
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 44,
  "end": 2273
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 44,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 58,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 66,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 71,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 82,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 96,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 104,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 109,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 120,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 137,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 145,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 156,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 174,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 190,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "PA",
    "start": 196,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 199,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 214,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "PB",
    "start": 220,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 223,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "value": "}",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 238,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 247,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 252,
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
    "type": "Keyword",
    "value": "var",
    "start": 262,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 272,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 275,
    "end": 276
  },
  {
    "type": "String",
    "value": "''",
    "start": 277,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 284,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 293,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 301,
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
    "value": ";",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 305,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 314,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 335,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "foo1",
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
    "type": "Identifier",
    "value": "x",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 352,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 362,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 371,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 384,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 393,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "B",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "function",
    "start": 415,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 424,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 433,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 440,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 443,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 452,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 463,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 471,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 473,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 482,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 493,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 501,
    "end": 502
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 512,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 521,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 530,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 537,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 540,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 549,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 561,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 570,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "I",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 580,
    "end": 581
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 591,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 600,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 605,
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
    "value": ")",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 618,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 627,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 633,
    "end": 634
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 635,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 644,
    "end": 645
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 646,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 655,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 661,
    "end": 662
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 663,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 672,
    "end": 673
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 683,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 692,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 700,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 707,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 710,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 719,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 725,
    "end": 726
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 727,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 736,
    "end": 737
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 738,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 747,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 753,
    "end": 754
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 755,
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
    "value": ")",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 764,
    "end": 765
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 775,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 784,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 792,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 799,
    "end": 800
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 802,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 811,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 821,
    "end": 822
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 823,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 832,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 842,
    "end": 843
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 856,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 865,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 873,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 880,
    "end": 881
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 883,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 892,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 901,
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
    "value": ";",
    "start": 903,
    "end": 904
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 905,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 914,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 925,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 933,
    "end": 934
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 947,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 956,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 965,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 972,
    "end": 973
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 975,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 984,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 991,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "function",
    "start": 997,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 1006,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "PA",
    "start": 1015,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1029,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 1038,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1047,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1057,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "foo5d",
    "start": 1066,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1079,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "foo5d",
    "start": 1088,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "PB",
    "start": 1097,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1114,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "foo5d",
    "start": 1123,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1132,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "foo6",
    "start": 1151,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1163,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1172,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1196,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1205,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1213,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1223,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1232,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1244,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1253,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1261,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1284,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1293,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "any",
    "start": 1301,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1311,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1320,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1332,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1341,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1365,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1374,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1382,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1392,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1401,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1413,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1422,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1432,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1454,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1463,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1471,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1481,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1490,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1503,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1512,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1521,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 1544,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1553,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1562,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1572,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1581,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1594,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1603,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1612,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1635,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1644,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1653,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1663,
    "end": 1671
  },
  {
    "type": "Identifier",
    "value": "foo11b",
    "start": 1672,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1686,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "foo11b",
    "start": 1695,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Identifier",
    "value": "PA",
    "start": 1705,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1722,
    "end": 1730
  },
  {
    "type": "Identifier",
    "value": "foo11b",
    "start": 1731,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1741,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1751,
    "end": 1759
  },
  {
    "type": "Identifier",
    "value": "foo11c",
    "start": 1760,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1774,
    "end": 1782
  },
  {
    "type": "Identifier",
    "value": "foo11c",
    "start": 1783,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "PB",
    "start": 1793,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1807,
    "end": 1815
  },
  {
    "type": "Identifier",
    "value": "foo11c",
    "start": 1816,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1826,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1836,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1845,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1854,
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
    "value": ";",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1858,
    "end": 1866
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1867,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1878,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1900,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1909,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1918,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1928,
    "end": 1936
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1937,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1950,
    "end": 1958
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1959,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1968,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1988,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1997,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2006,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2016,
    "end": 2024
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2025,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "function",
    "start": 2038,
    "end": 2046
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2047,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2056,
    "end": 2062
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2076,
    "end": 2084
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2085,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2094,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2104,
    "end": 2112
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2113,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2119,
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
    "value": "I",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2126,
    "end": 2134
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2135,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Identifier",
    "value": "PA",
    "start": 2144,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2161,
    "end": 2169
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2170,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2179,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2189,
    "end": 2197
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 2198,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2211,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 2220,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Identifier",
    "value": "PB",
    "start": 2229,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2246,
    "end": 2254
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 2255,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2264,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2271,
    "end": 2272
  }
]
```
