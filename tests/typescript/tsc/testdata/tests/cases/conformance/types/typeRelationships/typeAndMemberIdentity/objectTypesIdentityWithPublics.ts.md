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
              "start": 65,
              "end": 68
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 70,
                "end": 76
              },
              "start": 68,
              "end": 76
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
            "start": 58,
            "end": 77
          }
        ],
        "start": 52,
        "end": 79
      },
      "abstract": false,
      "declare": false,
      "start": 44,
      "end": 79
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
        "start": 87,
        "end": 88
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
              "start": 102,
              "end": 105
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 107,
                "end": 113
              },
              "start": 105,
              "end": 113
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
            "start": 95,
            "end": 114
          }
        ],
        "start": 89,
        "end": 116
      },
      "abstract": false,
      "declare": false,
      "start": 81,
      "end": 116
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
        "start": 124,
        "end": 125
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
              "start": 126,
              "end": 127
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 126,
            "end": 127
          }
        ],
        "start": 125,
        "end": 128
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
              "start": 142,
              "end": 145
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
                  "start": 147,
                  "end": 148
                },
                "typeArguments": null,
                "start": 147,
                "end": 148
              },
              "start": 145,
              "end": 148
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
            "start": 135,
            "end": 149
          }
        ],
        "start": 129,
        "end": 151
      },
      "abstract": false,
      "declare": false,
      "start": 118,
      "end": 151
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 164
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
              "start": 171,
              "end": 174
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 176,
                "end": 182
              },
              "start": 174,
              "end": 182
            },
            "accessibility": null,
            "static": false,
            "start": 171,
            "end": 183
          }
        ],
        "start": 165,
        "end": 185
      },
      "declare": false,
      "start": 153,
      "end": 185
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
                      "start": 196,
                      "end": 199
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 201,
                        "end": 207
                      },
                      "start": 199,
                      "end": 207
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 196,
                    "end": 208
                  }
                ],
                "start": 194,
                "end": 210
              },
              "start": 192,
              "end": 210
            },
            "start": 191,
            "end": 210
          },
          "init": null,
          "definite": false,
          "start": 191,
          "end": 210
        }
      ],
      "declare": false,
      "start": 187,
      "end": 210
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
            "start": 215,
            "end": 216
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
                  "start": 221,
                  "end": 224
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 226,
                  "end": 228
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 221,
                "end": 228
              }
            ],
            "start": 219,
            "end": 230
          },
          "definite": false,
          "start": 215,
          "end": 230
        }
      ],
      "declare": false,
      "start": 211,
      "end": 231
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 242,
        "end": 246
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
                "start": 250,
                "end": 251
              },
              "typeArguments": null,
              "start": 250,
              "end": 251
            },
            "start": 248,
            "end": 251
          },
          "start": 247,
          "end": 251
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 233,
      "end": 253
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 267
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
                "start": 271,
                "end": 272
              },
              "typeArguments": null,
              "start": 271,
              "end": 272
            },
            "start": 269,
            "end": 272
          },
          "start": 268,
          "end": 272
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 254,
      "end": 274
    },
    {
      "type": "FunctionDeclaration",
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
              "type": "TSAnyKeyword",
              "start": 301,
              "end": 304
            },
            "start": 299,
            "end": 304
          },
          "start": 298,
          "end": 304
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 306,
        "end": 309
      },
      "expression": false,
      "start": 284,
      "end": 309
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 320,
        "end": 325
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
                "start": 329,
                "end": 330
              },
              "typeArguments": null,
              "start": 329,
              "end": 330
            },
            "start": 327,
            "end": 330
          },
          "start": 326,
          "end": 330
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 311,
      "end": 332
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 342,
        "end": 347
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
                "start": 351,
                "end": 352
              },
              "typeArguments": null,
              "start": 351,
              "end": 352
            },
            "start": 349,
            "end": 352
          },
          "start": 348,
          "end": 352
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 333,
      "end": 354
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 373,
        "end": 378
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
              "start": 382,
              "end": 385
            },
            "start": 380,
            "end": 385
          },
          "start": 379,
          "end": 385
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 387,
        "end": 390
      },
      "expression": false,
      "start": 364,
      "end": 390
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 401,
        "end": 406
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
                "start": 410,
                "end": 411
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 412,
                    "end": 418
                  }
                ],
                "start": 411,
                "end": 419
              },
              "start": 410,
              "end": 419
            },
            "start": 408,
            "end": 419
          },
          "start": 407,
          "end": 419
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 392,
      "end": 421
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 431,
        "end": 436
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
                "start": 440,
                "end": 441
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 442,
                    "end": 448
                  }
                ],
                "start": 441,
                "end": 449
              },
              "start": 440,
              "end": 449
            },
            "start": 438,
            "end": 449
          },
          "start": 437,
          "end": 449
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 422,
      "end": 451
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 470,
        "end": 475
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
              "start": 479,
              "end": 482
            },
            "start": 477,
            "end": 482
          },
          "start": 476,
          "end": 482
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 484,
        "end": 487
      },
      "expression": false,
      "start": 461,
      "end": 487
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 498,
        "end": 502
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
                "start": 506,
                "end": 507
              },
              "typeArguments": null,
              "start": 506,
              "end": 507
            },
            "start": 504,
            "end": 507
          },
          "start": 503,
          "end": 507
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 489,
      "end": 509
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 519,
        "end": 523
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
                "start": 527,
                "end": 528
              },
              "typeArguments": null,
              "start": 527,
              "end": 528
            },
            "start": 525,
            "end": 528
          },
          "start": 524,
          "end": 528
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 510,
      "end": 530
    },
    {
      "type": "FunctionDeclaration",
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
              "type": "TSAnyKeyword",
              "start": 557,
              "end": 560
            },
            "start": 555,
            "end": 560
          },
          "start": 554,
          "end": 560
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 562,
        "end": 565
      },
      "expression": false,
      "start": 540,
      "end": 565
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 576,
        "end": 580
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
                "start": 591,
                "end": 592
              },
              "typeArguments": null,
              "start": 584,
              "end": 592
            },
            "start": 582,
            "end": 592
          },
          "start": 581,
          "end": 592
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 567,
      "end": 594
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 604,
        "end": 608
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
                "start": 619,
                "end": 620
              },
              "typeArguments": null,
              "start": 612,
              "end": 620
            },
            "start": 610,
            "end": 620
          },
          "start": 609,
          "end": 620
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 595,
      "end": 622
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 641,
        "end": 645
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
              "start": 649,
              "end": 652
            },
            "start": 647,
            "end": 652
          },
          "start": 646,
          "end": 652
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 654,
        "end": 657
      },
      "expression": false,
      "start": 632,
      "end": 657
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 668,
        "end": 672
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
                "start": 683,
                "end": 684
              },
              "typeArguments": null,
              "start": 676,
              "end": 684
            },
            "start": 674,
            "end": 684
          },
          "start": 673,
          "end": 684
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 659,
      "end": 686
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 696,
        "end": 700
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
                "start": 711,
                "end": 712
              },
              "typeArguments": null,
              "start": 704,
              "end": 712
            },
            "start": 702,
            "end": 712
          },
          "start": 701,
          "end": 712
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 687,
      "end": 714
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 733,
        "end": 737
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
              "start": 741,
              "end": 744
            },
            "start": 739,
            "end": 744
          },
          "start": 738,
          "end": 744
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 746,
        "end": 749
      },
      "expression": false,
      "start": 724,
      "end": 749
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 760,
        "end": 764
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
                "start": 768,
                "end": 769
              },
              "typeArguments": null,
              "start": 768,
              "end": 769
            },
            "start": 766,
            "end": 769
          },
          "start": 765,
          "end": 769
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 751,
      "end": 771
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 781,
        "end": 785
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
                "start": 789,
                "end": 790
              },
              "typeArguments": null,
              "start": 789,
              "end": 790
            },
            "start": 787,
            "end": 790
          },
          "start": 786,
          "end": 790
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 772,
      "end": 792
    },
    {
      "type": "FunctionDeclaration",
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
              "type": "TSAnyKeyword",
              "start": 819,
              "end": 822
            },
            "start": 817,
            "end": 822
          },
          "start": 816,
          "end": 822
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 824,
        "end": 827
      },
      "expression": false,
      "start": 802,
      "end": 827
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 838,
        "end": 843
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
                "start": 847,
                "end": 848
              },
              "typeArguments": null,
              "start": 847,
              "end": 848
            },
            "start": 845,
            "end": 848
          },
          "start": 844,
          "end": 848
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 829,
      "end": 850
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 860,
        "end": 865
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
                "start": 869,
                "end": 870
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 871,
                    "end": 877
                  }
                ],
                "start": 870,
                "end": 878
              },
              "start": 869,
              "end": 878
            },
            "start": 867,
            "end": 878
          },
          "start": 866,
          "end": 878
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 851,
      "end": 880
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 899,
        "end": 904
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
              "start": 908,
              "end": 911
            },
            "start": 906,
            "end": 911
          },
          "start": 905,
          "end": 911
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 913,
        "end": 916
      },
      "expression": false,
      "start": 890,
      "end": 916
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 927,
        "end": 931
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
                "start": 935,
                "end": 936
              },
              "typeArguments": null,
              "start": 935,
              "end": 936
            },
            "start": 933,
            "end": 936
          },
          "start": 932,
          "end": 936
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 918,
      "end": 938
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 948,
        "end": 952
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
                "start": 956,
                "end": 957
              },
              "typeArguments": null,
              "start": 956,
              "end": 957
            },
            "start": 954,
            "end": 957
          },
          "start": 953,
          "end": 957
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 939,
      "end": 959
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 978,
        "end": 982
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
              "start": 986,
              "end": 989
            },
            "start": 984,
            "end": 989
          },
          "start": 983,
          "end": 989
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 991,
        "end": 994
      },
      "expression": false,
      "start": 969,
      "end": 994
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1005,
        "end": 1009
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
                "start": 1013,
                "end": 1014
              },
              "typeArguments": null,
              "start": 1013,
              "end": 1014
            },
            "start": 1011,
            "end": 1014
          },
          "start": 1010,
          "end": 1014
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 996,
      "end": 1016
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1026,
        "end": 1030
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
                "start": 1041,
                "end": 1042
              },
              "typeArguments": null,
              "start": 1034,
              "end": 1042
            },
            "start": 1032,
            "end": 1042
          },
          "start": 1031,
          "end": 1042
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1017,
      "end": 1044
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1063,
        "end": 1067
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
              "start": 1071,
              "end": 1074
            },
            "start": 1069,
            "end": 1074
          },
          "start": 1068,
          "end": 1074
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1076,
        "end": 1079
      },
      "expression": false,
      "start": 1054,
      "end": 1079
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1090,
        "end": 1094
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
                "start": 1098,
                "end": 1099
              },
              "typeArguments": null,
              "start": 1098,
              "end": 1099
            },
            "start": 1096,
            "end": 1099
          },
          "start": 1095,
          "end": 1099
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1081,
      "end": 1101
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1111,
        "end": 1115
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
                "start": 1119,
                "end": 1120
              },
              "typeArguments": null,
              "start": 1119,
              "end": 1120
            },
            "start": 1117,
            "end": 1120
          },
          "start": 1116,
          "end": 1120
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1102,
      "end": 1122
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1141,
        "end": 1145
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
              "start": 1149,
              "end": 1152
            },
            "start": 1147,
            "end": 1152
          },
          "start": 1146,
          "end": 1152
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1154,
        "end": 1157
      },
      "expression": false,
      "start": 1132,
      "end": 1157
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1168,
        "end": 1172
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
                "start": 1176,
                "end": 1177
              },
              "typeArguments": null,
              "start": 1176,
              "end": 1177
            },
            "start": 1174,
            "end": 1177
          },
          "start": 1173,
          "end": 1177
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1159,
      "end": 1179
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1189,
        "end": 1193
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
                "start": 1197,
                "end": 1198
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1199,
                    "end": 1205
                  }
                ],
                "start": 1198,
                "end": 1206
              },
              "start": 1197,
              "end": 1206
            },
            "start": 1195,
            "end": 1206
          },
          "start": 1194,
          "end": 1206
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1180,
      "end": 1208
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1227,
        "end": 1231
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
              "start": 1235,
              "end": 1238
            },
            "start": 1233,
            "end": 1238
          },
          "start": 1232,
          "end": 1238
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1240,
        "end": 1243
      },
      "expression": false,
      "start": 1218,
      "end": 1243
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1254,
        "end": 1259
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
                "start": 1263,
                "end": 1264
              },
              "typeArguments": null,
              "start": 1263,
              "end": 1264
            },
            "start": 1261,
            "end": 1264
          },
          "start": 1260,
          "end": 1264
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1245,
      "end": 1266
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1276,
        "end": 1281
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
                "start": 1292,
                "end": 1293
              },
              "typeArguments": null,
              "start": 1285,
              "end": 1293
            },
            "start": 1283,
            "end": 1293
          },
          "start": 1282,
          "end": 1293
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1267,
      "end": 1295
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1314,
        "end": 1319
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
              "start": 1323,
              "end": 1326
            },
            "start": 1321,
            "end": 1326
          },
          "start": 1320,
          "end": 1326
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1328,
        "end": 1331
      },
      "expression": false,
      "start": 1305,
      "end": 1331
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1342,
        "end": 1347
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
                "start": 1351,
                "end": 1352
              },
              "typeArguments": null,
              "start": 1351,
              "end": 1352
            },
            "start": 1349,
            "end": 1352
          },
          "start": 1348,
          "end": 1352
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1333,
      "end": 1354
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1364,
        "end": 1369
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
                "start": 1380,
                "end": 1381
              },
              "typeArguments": null,
              "start": 1373,
              "end": 1381
            },
            "start": 1371,
            "end": 1381
          },
          "start": 1370,
          "end": 1381
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1355,
      "end": 1383
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1402,
        "end": 1407
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
              "start": 1411,
              "end": 1414
            },
            "start": 1409,
            "end": 1414
          },
          "start": 1408,
          "end": 1414
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1416,
        "end": 1419
      },
      "expression": false,
      "start": 1393,
      "end": 1419
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1430,
        "end": 1435
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
                "start": 1439,
                "end": 1440
              },
              "typeArguments": null,
              "start": 1439,
              "end": 1440
            },
            "start": 1437,
            "end": 1440
          },
          "start": 1436,
          "end": 1440
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1421,
      "end": 1442
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1452,
        "end": 1457
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
                "start": 1461,
                "end": 1462
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1463,
                    "end": 1469
                  }
                ],
                "start": 1462,
                "end": 1470
              },
              "start": 1461,
              "end": 1470
            },
            "start": 1459,
            "end": 1470
          },
          "start": 1458,
          "end": 1470
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1443,
      "end": 1472
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1491,
        "end": 1496
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
              "start": 1500,
              "end": 1503
            },
            "start": 1498,
            "end": 1503
          },
          "start": 1497,
          "end": 1503
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1505,
        "end": 1508
      },
      "expression": false,
      "start": 1482,
      "end": 1508
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1519,
        "end": 1524
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
                "start": 1528,
                "end": 1529
              },
              "typeArguments": null,
              "start": 1528,
              "end": 1529
            },
            "start": 1526,
            "end": 1529
          },
          "start": 1525,
          "end": 1529
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1510,
      "end": 1531
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1541,
        "end": 1546
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
                "start": 1557,
                "end": 1558
              },
              "typeArguments": null,
              "start": 1550,
              "end": 1558
            },
            "start": 1548,
            "end": 1558
          },
          "start": 1547,
          "end": 1558
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1532,
      "end": 1560
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1579,
        "end": 1584
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
              "start": 1588,
              "end": 1591
            },
            "start": 1586,
            "end": 1591
          },
          "start": 1585,
          "end": 1591
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1593,
        "end": 1596
      },
      "expression": false,
      "start": 1570,
      "end": 1596
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1607,
        "end": 1612
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
                "start": 1616,
                "end": 1617
              },
              "typeArguments": null,
              "start": 1616,
              "end": 1617
            },
            "start": 1614,
            "end": 1617
          },
          "start": 1613,
          "end": 1617
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1598,
      "end": 1619
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1629,
        "end": 1634
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
                "start": 1645,
                "end": 1646
              },
              "typeArguments": null,
              "start": 1638,
              "end": 1646
            },
            "start": 1636,
            "end": 1646
          },
          "start": 1635,
          "end": 1646
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1620,
      "end": 1648
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1667,
        "end": 1672
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
              "start": 1676,
              "end": 1679
            },
            "start": 1674,
            "end": 1679
          },
          "start": 1673,
          "end": 1679
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1681,
        "end": 1684
      },
      "expression": false,
      "start": 1658,
      "end": 1684
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 44,
  "end": 1684
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
    "value": "public",
    "start": 58,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 65,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 70,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 81,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 95,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 102,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 118,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 135,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 142,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 153,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 171,
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
    "type": "Punctuator",
    "value": "}",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 187,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 196,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 201,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 211,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 221,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225
  },
  {
    "type": "String",
    "value": "''",
    "start": 226,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
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
    "value": "function",
    "start": 233,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 242,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 254,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 263,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 272,
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
    "value": "any",
    "start": 301,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 311,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 320,
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
    "value": "x",
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
    "value": "B",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 333,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 342,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "B",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 364,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 373,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 382,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 392,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 401,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 412,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 422,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 431,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 442,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 450,
    "end": 451
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 461,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 470,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 479,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "value": "function",
    "start": 489,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 498,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 508,
    "end": 509
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 510,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 519,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 529,
    "end": 530
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
    "value": "any",
    "start": 557,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 564,
    "end": 565
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 567,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 576,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 582,
    "end": 583
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 584,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 593,
    "end": 594
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 595,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 604,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 610,
    "end": 611
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 612,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 621,
    "end": 622
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 632,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 641,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 649,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 656,
    "end": 657
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 659,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 668,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 674,
    "end": 675
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 676,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 685,
    "end": 686
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 687,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 696,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 702,
    "end": 703
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 704,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 724,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 733,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 741,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 748,
    "end": 749
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 751,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 760,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 770,
    "end": 771
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 772,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 781,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "B",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 790,
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
    "value": "any",
    "start": 819,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 826,
    "end": 827
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 829,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 838,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 851,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 860,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 871,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 878,
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
    "value": "function",
    "start": 890,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 899,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 908,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "value": "foo6",
    "start": 927,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 931,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 932,
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
    "value": "A",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 937,
    "end": 938
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 939,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 948,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 958,
    "end": 959
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 969,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 978,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 982,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 986,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 993,
    "end": 994
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 996,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1005,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1017,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1026,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1034,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1054,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1063,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1071,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1081,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1090,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1098,
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
    "start": 1102,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1111,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1132,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1141,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1149,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1159,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1168,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "B",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1180,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1189,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1199,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1218,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1227,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1235,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1245,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1254,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1260,
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
    "value": "B",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1267,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1276,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1285,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1305,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1314,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1320,
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
    "value": "any",
    "start": 1323,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1333,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1342,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "B",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1355,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1364,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1373,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1393,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1402,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1411,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1421,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1430,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1443,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1452,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "C",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1463,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1482,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1491,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1500,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1510,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1519,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "I",
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
    "start": 1532,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1541,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1550,
    "end": 1556
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1570,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1579,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1588,
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
    "value": "{",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1598,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1607,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1620,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1629,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1638,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1658,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1667,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1676,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1683,
    "end": 1684
  }
]
```
