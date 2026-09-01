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
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 7
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 13
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 15,
                "end": 21
              },
              "start": 13,
              "end": 21
            },
            "accessibility": null,
            "static": false,
            "start": 12,
            "end": 21
          }
        ],
        "start": 10,
        "end": 23
      },
      "declare": false,
      "start": 0,
      "end": 24
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 30,
        "end": 32
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 37
            },
            "typeArguments": null,
            "start": 35,
            "end": 37
          },
          {
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 43
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 45,
                    "end": 51
                  },
                  "start": 43,
                  "end": 51
                },
                "accessibility": null,
                "static": false,
                "start": 42,
                "end": 51
              }
            ],
            "start": 40,
            "end": 53
          }
        ],
        "start": 35,
        "end": 53
      },
      "declare": false,
      "start": 25,
      "end": 54
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 62
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 71,
            "end": 75
          },
          "start": 68,
          "end": 75
        },
        "start": 65,
        "end": 75
      },
      "declare": false,
      "start": 55,
      "end": 76
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 84
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
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
                  "start": 99,
                  "end": 100
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 102,
                    "end": 108
                  },
                  "start": 100,
                  "end": 108
                },
                "accessibility": null,
                "static": false,
                "start": 99,
                "end": 108
              }
            ],
            "start": 97,
            "end": 110
          },
          "start": 94,
          "end": 110
        },
        "start": 87,
        "end": 110
      },
      "declare": false,
      "start": 77,
      "end": 111
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 119
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "elementType": {
          "type": "TSNumberKeyword",
          "start": 122,
          "end": 128
        },
        "start": 122,
        "end": 130
      },
      "declare": false,
      "start": 112,
      "end": 131
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T6",
        "optional": false,
        "typeAnnotation": null,
        "start": 137,
        "end": 139
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 143,
            "end": 149
          },
          {
            "type": "TSNumberKeyword",
            "start": 151,
            "end": 157
          }
        ],
        "start": 142,
        "end": 158
      },
      "declare": false,
      "start": 132,
      "end": 159
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T7",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 167
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 173,
          "end": 174
        },
        "constraint": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 178,
                "end": 181
              },
              "start": 178,
              "end": 181
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 184,
                "end": 187
              },
              "start": 184,
              "end": 187
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "c",
                "raw": "'c'",
                "start": 190,
                "end": 193
              },
              "start": 190,
              "end": 193
            }
          ],
          "start": 178,
          "end": 193
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 196,
          "end": 202
        },
        "optional": false,
        "readonly": null,
        "start": 170,
        "end": 204
      },
      "declare": false,
      "start": 160,
      "end": 205
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 217,
        "end": 219
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 228,
            "end": 230
          },
          "typeArguments": null,
          "start": 228,
          "end": 230
        }
      ],
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 234
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 236,
                "end": 242
              },
              "start": 234,
              "end": 242
            },
            "accessibility": null,
            "static": false,
            "start": 233,
            "end": 242
          }
        ],
        "start": 231,
        "end": 244
      },
      "declare": false,
      "start": 207,
      "end": 244
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 255,
        "end": 257
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null,
            "start": 266,
            "end": 268
          },
          "typeArguments": null,
          "start": 266,
          "end": 268
        }
      ],
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 272
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 274,
                "end": 280
              },
              "start": 272,
              "end": 280
            },
            "accessibility": null,
            "static": false,
            "start": 271,
            "end": 280
          }
        ],
        "start": 269,
        "end": 282
      },
      "declare": false,
      "start": 245,
      "end": 282
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null,
        "start": 293,
        "end": 295
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null,
            "start": 304,
            "end": 306
          },
          "typeArguments": null,
          "start": 304,
          "end": 306
        }
      ],
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 309,
              "end": 310
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 312,
                "end": 318
              },
              "start": 310,
              "end": 318
            },
            "accessibility": null,
            "static": false,
            "start": 309,
            "end": 318
          }
        ],
        "start": 307,
        "end": 320
      },
      "declare": false,
      "start": 283,
      "end": 320
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I4",
        "optional": false,
        "typeAnnotation": null,
        "start": 331,
        "end": 333
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "T4",
            "optional": false,
            "typeAnnotation": null,
            "start": 342,
            "end": 344
          },
          "typeArguments": null,
          "start": 342,
          "end": 344
        }
      ],
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 348
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 350,
                "end": 356
              },
              "start": 348,
              "end": 356
            },
            "accessibility": null,
            "static": false,
            "start": 347,
            "end": 356
          }
        ],
        "start": 345,
        "end": 358
      },
      "declare": false,
      "start": 321,
      "end": 358
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I5",
        "optional": false,
        "typeAnnotation": null,
        "start": 369,
        "end": 371
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "T5",
            "optional": false,
            "typeAnnotation": null,
            "start": 380,
            "end": 382
          },
          "typeArguments": null,
          "start": 380,
          "end": 382
        }
      ],
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 385,
              "end": 386
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 388,
                "end": 394
              },
              "start": 386,
              "end": 394
            },
            "accessibility": null,
            "static": false,
            "start": 385,
            "end": 394
          }
        ],
        "start": 383,
        "end": 396
      },
      "declare": false,
      "start": 359,
      "end": 396
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I6",
        "optional": false,
        "typeAnnotation": null,
        "start": 407,
        "end": 409
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "T6",
            "optional": false,
            "typeAnnotation": null,
            "start": 418,
            "end": 420
          },
          "typeArguments": null,
          "start": 418,
          "end": 420
        }
      ],
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 423,
              "end": 424
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 426,
                "end": 432
              },
              "start": 424,
              "end": 432
            },
            "accessibility": null,
            "static": false,
            "start": 423,
            "end": 432
          }
        ],
        "start": 421,
        "end": 434
      },
      "declare": false,
      "start": 397,
      "end": 434
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I7",
        "optional": false,
        "typeAnnotation": null,
        "start": 445,
        "end": 447
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "T7",
            "optional": false,
            "typeAnnotation": null,
            "start": 456,
            "end": 458
          },
          "typeArguments": null,
          "start": 456,
          "end": 458
        }
      ],
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 461,
              "end": 462
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 464,
                "end": 470
              },
              "start": 462,
              "end": 470
            },
            "accessibility": null,
            "static": false,
            "start": 461,
            "end": 470
          }
        ],
        "start": 459,
        "end": 472
      },
      "declare": false,
      "start": 435,
      "end": 472
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 479,
        "end": 490
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
              "start": 491,
              "end": 492
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 491,
            "end": 492
          }
        ],
        "start": 490,
        "end": 493
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 506,
              "end": 507
            },
            "typeArguments": null,
            "start": 506,
            "end": 507
          },
          "start": 503,
          "end": 507
        },
        "start": 496,
        "end": 507
      },
      "declare": false,
      "start": 474,
      "end": 508
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 526,
        "end": 537
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 538,
              "end": 539
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 538,
            "end": 539
          }
        ],
        "start": 537,
        "end": 540
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Constructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 544,
            "end": 555
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
                  "start": 556,
                  "end": 557
                },
                "typeArguments": null,
                "start": 556,
                "end": 557
              }
            ],
            "start": 555,
            "end": 558
          },
          "start": 544,
          "end": 558
        },
        "start": 542,
        "end": 558
      },
      "body": null,
      "expression": false,
      "start": 509,
      "end": 559
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
        "start": 567,
        "end": 569
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 578,
          "end": 589
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I1",
                "optional": false,
                "typeAnnotation": null,
                "start": 590,
                "end": 592
              },
              "typeArguments": null,
              "start": 590,
              "end": 592
            }
          ],
          "start": 589,
          "end": 593
        },
        "arguments": [],
        "optional": false,
        "start": 578,
        "end": 595
      },
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
              "start": 598,
              "end": 599
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 601,
                "end": 607
              },
              "start": 599,
              "end": 607
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
            "start": 598,
            "end": 607
          }
        ],
        "start": 596,
        "end": 609
      },
      "abstract": false,
      "declare": false,
      "start": 561,
      "end": 609
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
        "start": 616,
        "end": 618
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 627,
          "end": 638
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I2",
                "optional": false,
                "typeAnnotation": null,
                "start": 639,
                "end": 641
              },
              "typeArguments": null,
              "start": 639,
              "end": 641
            }
          ],
          "start": 638,
          "end": 642
        },
        "arguments": [],
        "optional": false,
        "start": 627,
        "end": 644
      },
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
              "start": 647,
              "end": 648
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 650,
                "end": 656
              },
              "start": 648,
              "end": 656
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
            "start": 647,
            "end": 656
          }
        ],
        "start": 645,
        "end": 658
      },
      "abstract": false,
      "declare": false,
      "start": 610,
      "end": 658
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
        "start": 665,
        "end": 667
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 676,
          "end": 687
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I3",
                "optional": false,
                "typeAnnotation": null,
                "start": 688,
                "end": 690
              },
              "typeArguments": null,
              "start": 688,
              "end": 690
            }
          ],
          "start": 687,
          "end": 691
        },
        "arguments": [],
        "optional": false,
        "start": 676,
        "end": 693
      },
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
              "start": 696,
              "end": 697
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 699,
                "end": 705
              },
              "start": 697,
              "end": 705
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
            "start": 696,
            "end": 705
          }
        ],
        "start": 694,
        "end": 707
      },
      "abstract": false,
      "declare": false,
      "start": 659,
      "end": 707
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C4",
        "optional": false,
        "typeAnnotation": null,
        "start": 714,
        "end": 716
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 725,
          "end": 736
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I4",
                "optional": false,
                "typeAnnotation": null,
                "start": 737,
                "end": 739
              },
              "typeArguments": null,
              "start": 737,
              "end": 739
            }
          ],
          "start": 736,
          "end": 740
        },
        "arguments": [],
        "optional": false,
        "start": 725,
        "end": 742
      },
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
              "start": 745,
              "end": 746
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 748,
                "end": 754
              },
              "start": 746,
              "end": 754
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
            "start": 745,
            "end": 754
          }
        ],
        "start": 743,
        "end": 756
      },
      "abstract": false,
      "declare": false,
      "start": 708,
      "end": 756
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C5",
        "optional": false,
        "typeAnnotation": null,
        "start": 763,
        "end": 765
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 774,
          "end": 785
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I5",
                "optional": false,
                "typeAnnotation": null,
                "start": 786,
                "end": 788
              },
              "typeArguments": null,
              "start": 786,
              "end": 788
            }
          ],
          "start": 785,
          "end": 789
        },
        "arguments": [],
        "optional": false,
        "start": 774,
        "end": 791
      },
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
              "start": 794,
              "end": 795
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 797,
                "end": 803
              },
              "start": 795,
              "end": 803
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
            "start": 794,
            "end": 803
          }
        ],
        "start": 792,
        "end": 805
      },
      "abstract": false,
      "declare": false,
      "start": 757,
      "end": 805
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C6",
        "optional": false,
        "typeAnnotation": null,
        "start": 812,
        "end": 814
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 823,
          "end": 834
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I6",
                "optional": false,
                "typeAnnotation": null,
                "start": 835,
                "end": 837
              },
              "typeArguments": null,
              "start": 835,
              "end": 837
            }
          ],
          "start": 834,
          "end": 838
        },
        "arguments": [],
        "optional": false,
        "start": 823,
        "end": 840
      },
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
              "start": 843,
              "end": 844
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 846,
                "end": 852
              },
              "start": 844,
              "end": 852
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
            "start": 843,
            "end": 852
          }
        ],
        "start": 841,
        "end": 854
      },
      "abstract": false,
      "declare": false,
      "start": 806,
      "end": 854
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C7",
        "optional": false,
        "typeAnnotation": null,
        "start": 861,
        "end": 863
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 872,
          "end": 883
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I7",
                "optional": false,
                "typeAnnotation": null,
                "start": 884,
                "end": 886
              },
              "typeArguments": null,
              "start": 884,
              "end": 886
            }
          ],
          "start": 883,
          "end": 887
        },
        "arguments": [],
        "optional": false,
        "start": 872,
        "end": 889
      },
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
              "start": 892,
              "end": 893
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 895,
                "end": 901
              },
              "start": 893,
              "end": 901
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
            "start": 892,
            "end": 901
          }
        ],
        "start": 890,
        "end": 903
      },
      "abstract": false,
      "declare": false,
      "start": 855,
      "end": 903
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx",
        "optional": false,
        "typeAnnotation": null,
        "start": 922,
        "end": 924
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSStringKeyword",
              "start": 928,
              "end": 934
            },
            "start": 926,
            "end": 934
          },
          "start": 925,
          "end": 934
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 937,
          "end": 943
        },
        "start": 935,
        "end": 943
      },
      "body": null,
      "expression": false,
      "start": 905,
      "end": 944
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CX",
        "optional": false,
        "typeAnnotation": null,
        "start": 959,
        "end": 961
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
              "start": 964,
              "end": 965
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 967,
                "end": 973
              },
              "start": 965,
              "end": 973
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
            "start": 964,
            "end": 973
          }
        ],
        "start": 962,
        "end": 975
      },
      "abstract": false,
      "declare": true,
      "start": 945,
      "end": 975
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EX",
        "optional": false,
        "typeAnnotation": null,
        "start": 989,
        "end": 991
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 994,
              "end": 995
            },
            "initializer": null,
            "computed": false,
            "start": 994,
            "end": 995
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 997,
              "end": 998
            },
            "initializer": null,
            "computed": false,
            "start": 997,
            "end": 998
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1000,
              "end": 1001
            },
            "initializer": null,
            "computed": false,
            "start": 1000,
            "end": 1001
          }
        ],
        "start": 992,
        "end": 1003
      },
      "const": false,
      "declare": true,
      "start": 976,
      "end": 1003
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NX",
        "optional": false,
        "typeAnnotation": null,
        "start": 1022,
        "end": 1024
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1040,
                    "end": 1041
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1044,
                    "end": 1045
                  },
                  "definite": false,
                  "start": 1040,
                  "end": 1045
                }
              ],
              "declare": false,
              "start": 1034,
              "end": 1045
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1027,
            "end": 1045
          }
        ],
        "start": 1025,
        "end": 1047
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 1004,
      "end": 1047
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1054,
        "end": 1057
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "fx",
          "optional": false,
          "typeAnnotation": null,
          "start": 1067,
          "end": 1069
        },
        "typeArguments": null,
        "start": 1060,
        "end": 1069
      },
      "declare": false,
      "start": 1049,
      "end": 1070
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1076,
        "end": 1079
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "CX",
          "optional": false,
          "typeAnnotation": null,
          "start": 1089,
          "end": 1091
        },
        "typeArguments": null,
        "start": 1082,
        "end": 1091
      },
      "declare": false,
      "start": 1071,
      "end": 1092
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1098,
        "end": 1101
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "EX",
          "optional": false,
          "typeAnnotation": null,
          "start": 1111,
          "end": 1113
        },
        "typeArguments": null,
        "start": 1104,
        "end": 1113
      },
      "declare": false,
      "start": 1093,
      "end": 1114
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1120,
        "end": 1123
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NX",
          "optional": false,
          "typeAnnotation": null,
          "start": 1133,
          "end": 1135
        },
        "typeArguments": null,
        "start": 1126,
        "end": 1135
      },
      "declare": false,
      "start": 1115,
      "end": 1136
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1148,
        "end": 1151
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "T10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1160,
            "end": 1163
          },
          "typeArguments": null,
          "start": 1160,
          "end": 1163
        }
      ],
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1166,
              "end": 1167
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1169,
                "end": 1175
              },
              "start": 1167,
              "end": 1175
            },
            "accessibility": null,
            "static": false,
            "start": 1166,
            "end": 1175
          }
        ],
        "start": 1164,
        "end": 1177
      },
      "declare": false,
      "start": 1138,
      "end": 1177
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1188,
        "end": 1191
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "T11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1200,
            "end": 1203
          },
          "typeArguments": null,
          "start": 1200,
          "end": 1203
        }
      ],
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1206,
              "end": 1207
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1209,
                "end": 1215
              },
              "start": 1207,
              "end": 1215
            },
            "accessibility": null,
            "static": false,
            "start": 1206,
            "end": 1215
          }
        ],
        "start": 1204,
        "end": 1217
      },
      "declare": false,
      "start": 1178,
      "end": 1217
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1228,
        "end": 1231
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "T12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1240,
            "end": 1243
          },
          "typeArguments": null,
          "start": 1240,
          "end": 1243
        }
      ],
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1246,
              "end": 1247
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1249,
                "end": 1255
              },
              "start": 1247,
              "end": 1255
            },
            "accessibility": null,
            "static": false,
            "start": 1246,
            "end": 1255
          }
        ],
        "start": 1244,
        "end": 1257
      },
      "declare": false,
      "start": 1218,
      "end": 1257
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1268,
        "end": 1271
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "T13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1280,
            "end": 1283
          },
          "typeArguments": null,
          "start": 1280,
          "end": 1283
        }
      ],
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1286,
              "end": 1287
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1289,
                "end": 1295
              },
              "start": 1287,
              "end": 1295
            },
            "accessibility": null,
            "static": false,
            "start": 1286,
            "end": 1295
          }
        ],
        "start": 1284,
        "end": 1297
      },
      "declare": false,
      "start": 1258,
      "end": 1297
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Identifiable",
        "optional": false,
        "typeAnnotation": null,
        "start": 1304,
        "end": 1316
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
              "start": 1317,
              "end": 1318
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1317,
            "end": 1318
          }
        ],
        "start": 1316,
        "end": 1319
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
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
                  "name": "_id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1324,
                  "end": 1327
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1329,
                    "end": 1335
                  },
                  "start": 1327,
                  "end": 1335
                },
                "accessibility": null,
                "static": false,
                "start": 1324,
                "end": 1335
              }
            ],
            "start": 1322,
            "end": 1337
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1340,
              "end": 1341
            },
            "typeArguments": null,
            "start": 1340,
            "end": 1341
          }
        ],
        "start": 1322,
        "end": 1341
      },
      "declare": false,
      "start": 1299,
      "end": 1342
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I20",
        "optional": false,
        "typeAnnotation": null,
        "start": 1354,
        "end": 1357
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Partial",
            "optional": false,
            "typeAnnotation": null,
            "start": 1366,
            "end": 1373
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1374,
                  "end": 1376
                },
                "typeArguments": null,
                "start": 1374,
                "end": 1376
              }
            ],
            "start": 1373,
            "end": 1377
          },
          "start": 1366,
          "end": 1377
        }
      ],
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1380,
              "end": 1381
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1383,
                "end": 1389
              },
              "start": 1381,
              "end": 1389
            },
            "accessibility": null,
            "static": false,
            "start": 1380,
            "end": 1389
          }
        ],
        "start": 1378,
        "end": 1391
      },
      "declare": false,
      "start": 1344,
      "end": 1391
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I21",
        "optional": false,
        "typeAnnotation": null,
        "start": 1402,
        "end": 1405
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Readonly",
            "optional": false,
            "typeAnnotation": null,
            "start": 1414,
            "end": 1422
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1423,
                  "end": 1425
                },
                "typeArguments": null,
                "start": 1423,
                "end": 1425
              }
            ],
            "start": 1422,
            "end": 1426
          },
          "start": 1414,
          "end": 1426
        }
      ],
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1429,
              "end": 1430
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1432,
                "end": 1438
              },
              "start": 1430,
              "end": 1438
            },
            "accessibility": null,
            "static": false,
            "start": 1429,
            "end": 1438
          }
        ],
        "start": 1427,
        "end": 1440
      },
      "declare": false,
      "start": 1392,
      "end": 1440
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I22",
        "optional": false,
        "typeAnnotation": null,
        "start": 1451,
        "end": 1454
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Identifiable",
            "optional": false,
            "typeAnnotation": null,
            "start": 1463,
            "end": 1475
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1476,
                  "end": 1478
                },
                "typeArguments": null,
                "start": 1476,
                "end": 1478
              }
            ],
            "start": 1475,
            "end": 1479
          },
          "start": 1463,
          "end": 1479
        }
      ],
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1482,
              "end": 1483
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1485,
                "end": 1491
              },
              "start": 1483,
              "end": 1491
            },
            "accessibility": null,
            "static": false,
            "start": 1482,
            "end": 1491
          }
        ],
        "start": 1480,
        "end": 1493
      },
      "declare": false,
      "start": 1441,
      "end": 1493
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I23",
        "optional": false,
        "typeAnnotation": null,
        "start": 1504,
        "end": 1507
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Identifiable",
            "optional": false,
            "typeAnnotation": null,
            "start": 1516,
            "end": 1528
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1529,
                      "end": 1531
                    },
                    "typeArguments": null,
                    "start": 1529,
                    "end": 1531
                  },
                  {
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1536,
                          "end": 1537
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1539,
                            "end": 1545
                          },
                          "start": 1537,
                          "end": 1545
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1536,
                        "end": 1545
                      }
                    ],
                    "start": 1534,
                    "end": 1546
                  }
                ],
                "start": 1529,
                "end": 1546
              }
            ],
            "start": 1528,
            "end": 1547
          },
          "start": 1516,
          "end": 1547
        }
      ],
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1550,
              "end": 1551
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1553,
                "end": 1559
              },
              "start": 1551,
              "end": 1559
            },
            "accessibility": null,
            "static": false,
            "start": 1550,
            "end": 1559
          }
        ],
        "start": 1548,
        "end": 1561
      },
      "declare": false,
      "start": 1494,
      "end": 1561
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C20",
        "optional": false,
        "typeAnnotation": null,
        "start": 1569,
        "end": 1572
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 1581,
          "end": 1592
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 1593,
                "end": 1600
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1601,
                      "end": 1603
                    },
                    "typeArguments": null,
                    "start": 1601,
                    "end": 1603
                  }
                ],
                "start": 1600,
                "end": 1604
              },
              "start": 1593,
              "end": 1604
            }
          ],
          "start": 1592,
          "end": 1605
        },
        "arguments": [],
        "optional": false,
        "start": 1581,
        "end": 1607
      },
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
              "start": 1610,
              "end": 1611
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1613,
                "end": 1619
              },
              "start": 1611,
              "end": 1619
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
            "start": 1610,
            "end": 1619
          }
        ],
        "start": 1608,
        "end": 1621
      },
      "abstract": false,
      "declare": false,
      "start": 1563,
      "end": 1621
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C21",
        "optional": false,
        "typeAnnotation": null,
        "start": 1628,
        "end": 1631
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 1640,
          "end": 1651
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 1652,
                "end": 1660
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1661,
                      "end": 1663
                    },
                    "typeArguments": null,
                    "start": 1661,
                    "end": 1663
                  }
                ],
                "start": 1660,
                "end": 1664
              },
              "start": 1652,
              "end": 1664
            }
          ],
          "start": 1651,
          "end": 1665
        },
        "arguments": [],
        "optional": false,
        "start": 1640,
        "end": 1667
      },
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
              "start": 1670,
              "end": 1671
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1673,
                "end": 1679
              },
              "start": 1671,
              "end": 1679
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
            "start": 1670,
            "end": 1679
          }
        ],
        "start": 1668,
        "end": 1681
      },
      "abstract": false,
      "declare": false,
      "start": 1622,
      "end": 1681
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C22",
        "optional": false,
        "typeAnnotation": null,
        "start": 1688,
        "end": 1691
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 1700,
          "end": 1711
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Identifiable",
                "optional": false,
                "typeAnnotation": null,
                "start": 1712,
                "end": 1724
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1725,
                      "end": 1727
                    },
                    "typeArguments": null,
                    "start": 1725,
                    "end": 1727
                  }
                ],
                "start": 1724,
                "end": 1728
              },
              "start": 1712,
              "end": 1728
            }
          ],
          "start": 1711,
          "end": 1729
        },
        "arguments": [],
        "optional": false,
        "start": 1700,
        "end": 1731
      },
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
              "start": 1734,
              "end": 1735
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1737,
                "end": 1743
              },
              "start": 1735,
              "end": 1743
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
            "start": 1734,
            "end": 1743
          }
        ],
        "start": 1732,
        "end": 1745
      },
      "abstract": false,
      "declare": false,
      "start": 1682,
      "end": 1745
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C23",
        "optional": false,
        "typeAnnotation": null,
        "start": 1752,
        "end": 1755
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 1764,
          "end": 1775
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Identifiable",
                "optional": false,
                "typeAnnotation": null,
                "start": 1776,
                "end": 1788
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1789,
                          "end": 1791
                        },
                        "typeArguments": null,
                        "start": 1789,
                        "end": 1791
                      },
                      {
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
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1796,
                              "end": 1797
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1799,
                                "end": 1805
                              },
                              "start": 1797,
                              "end": 1805
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1796,
                            "end": 1805
                          }
                        ],
                        "start": 1794,
                        "end": 1806
                      }
                    ],
                    "start": 1789,
                    "end": 1806
                  }
                ],
                "start": 1788,
                "end": 1807
              },
              "start": 1776,
              "end": 1807
            }
          ],
          "start": 1775,
          "end": 1808
        },
        "arguments": [],
        "optional": false,
        "start": 1764,
        "end": 1810
      },
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
              "start": 1813,
              "end": 1814
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1816,
                "end": 1822
              },
              "start": 1814,
              "end": 1822
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
            "start": 1813,
            "end": 1822
          }
        ],
        "start": 1811,
        "end": 1824
      },
      "abstract": false,
      "declare": false,
      "start": 1746,
      "end": 1824
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1824
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
    "value": "T1",
    "start": 5,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 15,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 25,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 30,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 35,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 55,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 60,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 68,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 71,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 77,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 82,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 94,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 112,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "T5",
    "start": 117,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 122,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 132,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "T6",
    "start": 137,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 143,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 151,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 160,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "T7",
    "start": 165,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 175,
    "end": 177
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 178,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 182,
    "end": 183
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 184,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 188,
    "end": 189
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 190,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 196,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 207,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 217,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 220,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 228,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 236,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 243,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 245,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 255,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 258,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 266,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 274,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 283,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 293,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 296,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 304,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 312,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 321,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "I4",
    "start": 331,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 334,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 342,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 350,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 357,
    "end": 358
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 359,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "I5",
    "start": 369,
    "end": 371
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 372,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "T5",
    "start": 380,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "string",
    "start": 388,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 395,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 397,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "I6",
    "start": 407,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 410,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "T6",
    "start": 418,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 426,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 433,
    "end": 434
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 435,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "I7",
    "start": 445,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 448,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "T7",
    "start": 456,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 464,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 474,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 479,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 496,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 503,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 509,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 517,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 526,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 544,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 558,
    "end": 559
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 561,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 567,
    "end": 569
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 570,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 578,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 590,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 601,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 608,
    "end": 609
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 610,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 616,
    "end": 618
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 619,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 627,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 639,
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
    "value": "(",
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
    "value": "{",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 650,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 657,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 659,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 665,
    "end": 667
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 668,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 676,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 688,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "x",
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
    "type": "Identifier",
    "value": "string",
    "start": 699,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 706,
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
    "value": "C4",
    "start": 714,
    "end": 716
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 717,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 725,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "I4",
    "start": 737,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 739,
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
    "value": "{",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 748,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 755,
    "end": 756
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 757,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 763,
    "end": 765
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 766,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 774,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "I5",
    "start": 786,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 797,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 804,
    "end": 805
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 806,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "C6",
    "start": 812,
    "end": 814
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 815,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 823,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "I6",
    "start": 835,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 846,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 853,
    "end": 854
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 855,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "C7",
    "start": 861,
    "end": 863
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 864,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 872,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "I7",
    "start": 884,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 895,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 905,
    "end": 912
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 913,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "fx",
    "start": 922,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 928,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 937,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 945,
    "end": 952
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 953,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "CX",
    "start": 959,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 964,
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
    "value": "number",
    "start": 967,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 976,
    "end": 983
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 984,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "EX",
    "start": 989,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1004,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1012,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "NX",
    "start": 1022,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1027,
    "end": 1033
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1034,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1049,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 1054,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1060,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "fx",
    "start": 1067,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1071,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 1076,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1082,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "CX",
    "start": 1089,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1093,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "T12",
    "start": 1098,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1104,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "EX",
    "start": 1111,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1115,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "T13",
    "start": 1120,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1126,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "NX",
    "start": 1133,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1138,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "I10",
    "start": 1148,
    "end": 1151
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1152,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 1160,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1169,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1178,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 1188,
    "end": 1191
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1192,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 1200,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1209,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1218,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "I12",
    "start": 1228,
    "end": 1231
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1232,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "T12",
    "start": 1240,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1249,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1258,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "I13",
    "start": 1268,
    "end": 1271
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1272,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "T13",
    "start": 1280,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1289,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1299,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "Identifiable",
    "start": 1304,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "_id",
    "start": 1324,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1329,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1344,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "I20",
    "start": 1354,
    "end": 1357
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1358,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1366,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1374,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1383,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1392,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "I21",
    "start": 1402,
    "end": 1405
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1406,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1414,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1423,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1432,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1441,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "I22",
    "start": 1451,
    "end": 1454
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1455,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "Identifiable",
    "start": 1463,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1476,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1485,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1494,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "I23",
    "start": 1504,
    "end": 1507
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1508,
    "end": 1515
  },
  {
    "type": "Identifier",
    "value": "Identifiable",
    "start": 1516,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1529,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1539,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1553,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1563,
    "end": 1568
  },
  {
    "type": "Identifier",
    "value": "C20",
    "start": 1569,
    "end": 1572
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1573,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 1581,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1593,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1601,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1613,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1622,
    "end": 1627
  },
  {
    "type": "Identifier",
    "value": "C21",
    "start": 1628,
    "end": 1631
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1632,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 1640,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1652,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1661,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1673,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1682,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "C22",
    "start": 1688,
    "end": 1691
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1692,
    "end": 1699
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 1700,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Identifier",
    "value": "Identifiable",
    "start": 1712,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1725,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1737,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1746,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "C23",
    "start": 1752,
    "end": 1755
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1756,
    "end": 1763
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 1764,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Identifier",
    "value": "Identifiable",
    "start": 1776,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1789,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1799,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1816,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1823,
    "end": 1824
  }
]
```
