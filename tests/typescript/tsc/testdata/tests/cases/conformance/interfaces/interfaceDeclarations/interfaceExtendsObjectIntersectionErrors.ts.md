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
        "type": "TSArrayType",
        "elementType": {
          "type": "TSNumberKeyword",
          "start": 65,
          "end": 71
        },
        "start": 65,
        "end": 73
      },
      "declare": false,
      "start": 55,
      "end": 74
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 82
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 86,
            "end": 92
          },
          {
            "type": "TSNumberKeyword",
            "start": 94,
            "end": 100
          }
        ],
        "start": 85,
        "end": 101
      },
      "declare": false,
      "start": 75,
      "end": 102
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 110
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
          "start": 116,
          "end": 117
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
                "start": 121,
                "end": 124
              },
              "start": 121,
              "end": 124
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 127,
                "end": 130
              },
              "start": 127,
              "end": 130
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "c",
                "raw": "'c'",
                "start": 133,
                "end": 136
              },
              "start": 133,
              "end": 136
            }
          ],
          "start": 121,
          "end": 136
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 139,
          "end": 145
        },
        "optional": false,
        "readonly": null,
        "start": 113,
        "end": 147
      },
      "declare": false,
      "start": 103,
      "end": 148
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 160,
        "end": 162
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
            "start": 171,
            "end": 173
          },
          "typeArguments": null,
          "start": 171,
          "end": 173
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
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
            "start": 176,
            "end": 185
          }
        ],
        "start": 174,
        "end": 187
      },
      "declare": false,
      "start": 150,
      "end": 187
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 200
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
            "start": 209,
            "end": 211
          },
          "typeArguments": null,
          "start": 209,
          "end": 211
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 215
            },
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
            "accessibility": null,
            "static": false,
            "start": 214,
            "end": 223
          }
        ],
        "start": 212,
        "end": 225
      },
      "declare": false,
      "start": 188,
      "end": 225
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 238
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
            "start": 247,
            "end": 249
          },
          "typeArguments": null,
          "start": 247,
          "end": 249
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
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 258
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 260,
                "end": 266
              },
              "start": 258,
              "end": 266
            },
            "accessibility": null,
            "static": false,
            "start": 252,
            "end": 266
          }
        ],
        "start": 250,
        "end": 268
      },
      "declare": false,
      "start": 226,
      "end": 268
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I4",
        "optional": false,
        "typeAnnotation": null,
        "start": 279,
        "end": 281
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
            "start": 290,
            "end": 292
          },
          "typeArguments": null,
          "start": 290,
          "end": 292
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
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 295,
              "end": 296
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 298,
                "end": 304
              },
              "start": 296,
              "end": 304
            },
            "accessibility": null,
            "static": false,
            "start": 295,
            "end": 304
          }
        ],
        "start": 293,
        "end": 306
      },
      "declare": false,
      "start": 269,
      "end": 306
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I5",
        "optional": false,
        "typeAnnotation": null,
        "start": 317,
        "end": 319
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
            "start": 328,
            "end": 330
          },
          "typeArguments": null,
          "start": 328,
          "end": 330
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 334
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 336,
                "end": 342
              },
              "start": 334,
              "end": 342
            },
            "accessibility": null,
            "static": false,
            "start": 333,
            "end": 342
          }
        ],
        "start": 331,
        "end": 344
      },
      "declare": false,
      "start": 307,
      "end": 344
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 351,
        "end": 362
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
              "start": 363,
              "end": 364
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 363,
            "end": 364
          }
        ],
        "start": 362,
        "end": 365
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
              "start": 378,
              "end": 379
            },
            "typeArguments": null,
            "start": 378,
            "end": 379
          },
          "start": 375,
          "end": 379
        },
        "start": 368,
        "end": 379
      },
      "declare": false,
      "start": 346,
      "end": 380
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 398,
        "end": 409
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
              "start": 410,
              "end": 411
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 410,
            "end": 411
          }
        ],
        "start": 409,
        "end": 412
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
            "start": 416,
            "end": 427
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
                  "start": 428,
                  "end": 429
                },
                "typeArguments": null,
                "start": 428,
                "end": 429
              }
            ],
            "start": 427,
            "end": 430
          },
          "start": 416,
          "end": 430
        },
        "start": 414,
        "end": 430
      },
      "body": null,
      "expression": false,
      "start": 381,
      "end": 431
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
        "start": 439,
        "end": 441
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
          "start": 450,
          "end": 461
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
                "start": 462,
                "end": 464
              },
              "typeArguments": null,
              "start": 462,
              "end": 464
            }
          ],
          "start": 461,
          "end": 465
        },
        "arguments": [],
        "optional": false,
        "start": 450,
        "end": 467
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 470,
              "end": 471
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 473,
                "end": 479
              },
              "start": 471,
              "end": 479
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
            "start": 470,
            "end": 479
          }
        ],
        "start": 468,
        "end": 481
      },
      "abstract": false,
      "declare": false,
      "start": 433,
      "end": 481
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
        "start": 488,
        "end": 490
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
          "start": 499,
          "end": 510
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 511,
                "end": 513
              },
              "typeArguments": null,
              "start": 511,
              "end": 513
            }
          ],
          "start": 510,
          "end": 514
        },
        "arguments": [],
        "optional": false,
        "start": 499,
        "end": 516
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 520
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 522,
                "end": 528
              },
              "start": 520,
              "end": 528
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
            "start": 519,
            "end": 528
          }
        ],
        "start": 517,
        "end": 530
      },
      "abstract": false,
      "declare": false,
      "start": 482,
      "end": 530
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
        "start": 537,
        "end": 539
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
          "start": 548,
          "end": 559
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T3",
                "optional": false,
                "typeAnnotation": null,
                "start": 560,
                "end": 562
              },
              "typeArguments": null,
              "start": 560,
              "end": 562
            }
          ],
          "start": 559,
          "end": 563
        },
        "arguments": [],
        "optional": false,
        "start": 548,
        "end": 565
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
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 568,
              "end": 574
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 576,
                "end": 582
              },
              "start": 574,
              "end": 582
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
            "start": 568,
            "end": 582
          }
        ],
        "start": 566,
        "end": 584
      },
      "abstract": false,
      "declare": false,
      "start": 531,
      "end": 584
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
        "start": 591,
        "end": 593
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
          "start": 602,
          "end": 613
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T4",
                "optional": false,
                "typeAnnotation": null,
                "start": 614,
                "end": 616
              },
              "typeArguments": null,
              "start": 614,
              "end": 616
            }
          ],
          "start": 613,
          "end": 617
        },
        "arguments": [],
        "optional": false,
        "start": 602,
        "end": 619
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
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 622,
              "end": 623
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 625,
                "end": 631
              },
              "start": 623,
              "end": 631
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
            "start": 622,
            "end": 631
          }
        ],
        "start": 620,
        "end": 633
      },
      "abstract": false,
      "declare": false,
      "start": 585,
      "end": 633
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
        "start": 640,
        "end": 642
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
          "start": 651,
          "end": 662
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T5",
                "optional": false,
                "typeAnnotation": null,
                "start": 663,
                "end": 665
              },
              "typeArguments": null,
              "start": 663,
              "end": 665
            }
          ],
          "start": 662,
          "end": 666
        },
        "arguments": [],
        "optional": false,
        "start": 651,
        "end": 668
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 671,
              "end": 672
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 674,
                "end": 680
              },
              "start": 672,
              "end": 680
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
            "start": 671,
            "end": 680
          }
        ],
        "start": 669,
        "end": 682
      },
      "abstract": false,
      "declare": false,
      "start": 634,
      "end": 682
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
        "start": 698,
        "end": 700
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
              "start": 710,
              "end": 711
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 713,
                "end": 719
              },
              "start": 711,
              "end": 719
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 703,
            "end": 719
          }
        ],
        "start": 701,
        "end": 721
      },
      "abstract": false,
      "declare": true,
      "start": 684,
      "end": 721
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EX",
        "optional": false,
        "typeAnnotation": null,
        "start": 735,
        "end": 737
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
              "start": 740,
              "end": 741
            },
            "initializer": null,
            "computed": false,
            "start": 740,
            "end": 741
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 743,
              "end": 744
            },
            "initializer": null,
            "computed": false,
            "start": 743,
            "end": 744
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 746,
              "end": 747
            },
            "initializer": null,
            "computed": false,
            "start": 746,
            "end": 747
          }
        ],
        "start": 738,
        "end": 749
      },
      "const": false,
      "declare": true,
      "start": 722,
      "end": 749
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NX",
        "optional": false,
        "typeAnnotation": null,
        "start": 768,
        "end": 770
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
                    "start": 786,
                    "end": 787
                  },
                  "init": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 790,
                    "end": 797
                  },
                  "definite": false,
                  "start": 786,
                  "end": 797
                }
              ],
              "declare": false,
              "start": 780,
              "end": 797
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 773,
            "end": 797
          }
        ],
        "start": 771,
        "end": 799
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 750,
      "end": 799
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TCX",
        "optional": false,
        "typeAnnotation": null,
        "start": 806,
        "end": 809
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
          "start": 819,
          "end": 821
        },
        "typeArguments": null,
        "start": 812,
        "end": 821
      },
      "declare": false,
      "start": 801,
      "end": 822
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TEX",
        "optional": false,
        "typeAnnotation": null,
        "start": 828,
        "end": 831
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
          "start": 841,
          "end": 843
        },
        "typeArguments": null,
        "start": 834,
        "end": 843
      },
      "declare": false,
      "start": 823,
      "end": 844
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TNX",
        "optional": false,
        "typeAnnotation": null,
        "start": 850,
        "end": 853
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
          "start": 863,
          "end": 865
        },
        "typeArguments": null,
        "start": 856,
        "end": 865
      },
      "declare": false,
      "start": 845,
      "end": 866
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I10",
        "optional": false,
        "typeAnnotation": null,
        "start": 878,
        "end": 881
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "TCX",
            "optional": false,
            "typeAnnotation": null,
            "start": 890,
            "end": 893
          },
          "typeArguments": null,
          "start": 890,
          "end": 893
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 896,
              "end": 897
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 899,
                "end": 905
              },
              "start": 897,
              "end": 905
            },
            "accessibility": null,
            "static": false,
            "start": 896,
            "end": 905
          }
        ],
        "start": 894,
        "end": 907
      },
      "declare": false,
      "start": 868,
      "end": 907
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I11",
        "optional": false,
        "typeAnnotation": null,
        "start": 918,
        "end": 921
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "TEX",
            "optional": false,
            "typeAnnotation": null,
            "start": 930,
            "end": 933
          },
          "typeArguments": null,
          "start": 930,
          "end": 933
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
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 936,
              "end": 937
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 939,
                "end": 945
              },
              "start": 937,
              "end": 945
            },
            "accessibility": null,
            "static": false,
            "start": 936,
            "end": 945
          }
        ],
        "start": 934,
        "end": 947
      },
      "declare": false,
      "start": 908,
      "end": 947
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I12",
        "optional": false,
        "typeAnnotation": null,
        "start": 958,
        "end": 961
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "TNX",
            "optional": false,
            "typeAnnotation": null,
            "start": 970,
            "end": 973
          },
          "typeArguments": null,
          "start": 970,
          "end": 973
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 976,
              "end": 977
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 979,
                "end": 985
              },
              "start": 977,
              "end": 985
            },
            "accessibility": null,
            "static": false,
            "start": 976,
            "end": 985
          }
        ],
        "start": 974,
        "end": 987
      },
      "declare": false,
      "start": 948,
      "end": 987
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I14",
        "optional": false,
        "typeAnnotation": null,
        "start": 998,
        "end": 1001
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "TCX",
            "optional": false,
            "typeAnnotation": null,
            "start": 1010,
            "end": 1013
          },
          "typeArguments": null,
          "start": 1010,
          "end": 1013
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1020,
                    "end": 1026
                  },
                  "start": 1018,
                  "end": 1026
                },
                "start": 1017,
                "end": 1026
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1029,
                "end": 1035
              },
              "start": 1027,
              "end": 1035
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1016,
            "end": 1035
          }
        ],
        "start": 1014,
        "end": 1037
      },
      "declare": false,
      "start": 988,
      "end": 1037
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1048,
        "end": 1051
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "TEX",
            "optional": false,
            "typeAnnotation": null,
            "start": 1060,
            "end": 1063
          },
          "typeArguments": null,
          "start": 1060,
          "end": 1063
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1070,
                    "end": 1076
                  },
                  "start": 1068,
                  "end": 1076
                },
                "start": 1067,
                "end": 1076
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1079,
                "end": 1085
              },
              "start": 1077,
              "end": 1085
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1066,
            "end": 1085
          }
        ],
        "start": 1064,
        "end": 1087
      },
      "declare": false,
      "start": 1038,
      "end": 1087
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I16",
        "optional": false,
        "typeAnnotation": null,
        "start": 1098,
        "end": 1101
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "TNX",
            "optional": false,
            "typeAnnotation": null,
            "start": 1110,
            "end": 1113
          },
          "typeArguments": null,
          "start": 1110,
          "end": 1113
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1120,
                    "end": 1126
                  },
                  "start": 1118,
                  "end": 1126
                },
                "start": 1117,
                "end": 1126
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1129,
                "end": 1135
              },
              "start": 1127,
              "end": 1135
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1116,
            "end": 1135
          }
        ],
        "start": 1114,
        "end": 1137
      },
      "declare": false,
      "start": 1088,
      "end": 1137
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Identifiable",
        "optional": false,
        "typeAnnotation": null,
        "start": 1144,
        "end": 1156
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
              "start": 1157,
              "end": 1158
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1157,
            "end": 1158
          }
        ],
        "start": 1156,
        "end": 1159
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
                  "start": 1164,
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
                "start": 1164,
                "end": 1175
              }
            ],
            "start": 1162,
            "end": 1177
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1180,
              "end": 1181
            },
            "typeArguments": null,
            "start": 1180,
            "end": 1181
          }
        ],
        "start": 1162,
        "end": 1181
      },
      "declare": false,
      "start": 1139,
      "end": 1182
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I20",
        "optional": false,
        "typeAnnotation": null,
        "start": 1194,
        "end": 1197
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
            "start": 1206,
            "end": 1213
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
                  "start": 1214,
                  "end": 1216
                },
                "typeArguments": null,
                "start": 1214,
                "end": 1216
              }
            ],
            "start": 1213,
            "end": 1217
          },
          "start": 1206,
          "end": 1217
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1220,
              "end": 1221
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1223,
                "end": 1229
              },
              "start": 1221,
              "end": 1229
            },
            "accessibility": null,
            "static": false,
            "start": 1220,
            "end": 1229
          }
        ],
        "start": 1218,
        "end": 1231
      },
      "declare": false,
      "start": 1184,
      "end": 1231
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I21",
        "optional": false,
        "typeAnnotation": null,
        "start": 1242,
        "end": 1245
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
            "start": 1254,
            "end": 1262
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
                  "start": 1263,
                  "end": 1265
                },
                "typeArguments": null,
                "start": 1263,
                "end": 1265
              }
            ],
            "start": 1262,
            "end": 1266
          },
          "start": 1254,
          "end": 1266
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1269,
              "end": 1270
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1272,
                "end": 1278
              },
              "start": 1270,
              "end": 1278
            },
            "accessibility": null,
            "static": false,
            "start": 1269,
            "end": 1278
          }
        ],
        "start": 1267,
        "end": 1280
      },
      "declare": false,
      "start": 1232,
      "end": 1280
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I22",
        "optional": false,
        "typeAnnotation": null,
        "start": 1291,
        "end": 1294
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
            "start": 1303,
            "end": 1315
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
                  "start": 1316,
                  "end": 1318
                },
                "typeArguments": null,
                "start": 1316,
                "end": 1318
              }
            ],
            "start": 1315,
            "end": 1319
          },
          "start": 1303,
          "end": 1319
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1322,
              "end": 1323
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1325,
                "end": 1331
              },
              "start": 1323,
              "end": 1331
            },
            "accessibility": null,
            "static": false,
            "start": 1322,
            "end": 1331
          }
        ],
        "start": 1320,
        "end": 1333
      },
      "declare": false,
      "start": 1281,
      "end": 1333
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I23",
        "optional": false,
        "typeAnnotation": null,
        "start": 1344,
        "end": 1347
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
            "start": 1356,
            "end": 1368
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
                      "start": 1369,
                      "end": 1371
                    },
                    "typeArguments": null,
                    "start": 1369,
                    "end": 1371
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
                          "start": 1376,
                          "end": 1377
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1379,
                            "end": 1385
                          },
                          "start": 1377,
                          "end": 1385
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1376,
                        "end": 1385
                      }
                    ],
                    "start": 1374,
                    "end": 1386
                  }
                ],
                "start": 1369,
                "end": 1386
              }
            ],
            "start": 1368,
            "end": 1387
          },
          "start": 1356,
          "end": 1387
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1390,
              "end": 1391
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1393,
                "end": 1399
              },
              "start": 1391,
              "end": 1399
            },
            "accessibility": null,
            "static": false,
            "start": 1390,
            "end": 1399
          }
        ],
        "start": 1388,
        "end": 1401
      },
      "declare": false,
      "start": 1334,
      "end": 1401
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U",
        "optional": false,
        "typeAnnotation": null,
        "start": 1408,
        "end": 1409
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1414,
                  "end": 1415
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1417,
                    "end": 1423
                  },
                  "start": 1415,
                  "end": 1423
                },
                "accessibility": null,
                "static": false,
                "start": 1414,
                "end": 1423
              }
            ],
            "start": 1412,
            "end": 1425
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
                  "start": 1430,
                  "end": 1431
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1433,
                    "end": 1439
                  },
                  "start": 1431,
                  "end": 1439
                },
                "accessibility": null,
                "static": false,
                "start": 1430,
                "end": 1439
              }
            ],
            "start": 1428,
            "end": 1441
          }
        ],
        "start": 1412,
        "end": 1441
      },
      "declare": false,
      "start": 1403,
      "end": 1442
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I30",
        "optional": false,
        "typeAnnotation": null,
        "start": 1454,
        "end": 1457
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 1466,
            "end": 1467
          },
          "typeArguments": null,
          "start": 1466,
          "end": 1467
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
              "start": 1470,
              "end": 1471
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1473,
                "end": 1479
              },
              "start": 1471,
              "end": 1479
            },
            "accessibility": null,
            "static": false,
            "start": 1470,
            "end": 1479
          }
        ],
        "start": 1468,
        "end": 1481
      },
      "declare": false,
      "start": 1444,
      "end": 1481
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I31",
        "optional": false,
        "typeAnnotation": null,
        "start": 1492,
        "end": 1495
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
              "start": 1496,
              "end": 1497
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1496,
            "end": 1497
          }
        ],
        "start": 1495,
        "end": 1498
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1507,
            "end": 1508
          },
          "typeArguments": null,
          "start": 1507,
          "end": 1508
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
              "start": 1511,
              "end": 1512
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1514,
                "end": 1520
              },
              "start": 1512,
              "end": 1520
            },
            "accessibility": null,
            "static": false,
            "start": 1511,
            "end": 1520
          }
        ],
        "start": 1509,
        "end": 1522
      },
      "declare": false,
      "start": 1482,
      "end": 1522
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1522
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
    "type": "Identifier",
    "value": "number",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 75,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 80,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 86,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 94,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 103,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "T5",
    "start": 108,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 118,
    "end": 120
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 121,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 125,
    "end": 126
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 131,
    "end": 132
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 133,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 139,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 150,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 160,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 163,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 171,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 176,
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
    "value": "}",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 188,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 198,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 201,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 209,
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
    "value": "b",
    "start": 214,
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
    "value": "}",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 226,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 236,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 239,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 247,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 252,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 260,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 269,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "I4",
    "start": 279,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 282,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 290,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 293,
    "end": 294
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 298,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 305,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 307,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "I5",
    "start": 317,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 320,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "T5",
    "start": 328,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 336,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 346,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 351,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 368,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 375,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 381,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 389,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 398,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 416,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 433,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 439,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 442,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 450,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 462,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 465,
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
    "value": "{",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 473,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 480,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 482,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 488,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 491,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 499,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 511,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 522,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 529,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 531,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 537,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 540,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 548,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 560,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 568,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 576,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 583,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 585,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "C4",
    "start": 591,
    "end": 593
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 594,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 602,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 614,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 620,
    "end": 621
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 625,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 632,
    "end": 633
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 634,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "C5",
    "start": 640,
    "end": 642
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 643,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 651,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "T5",
    "start": 663,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "type": "Identifier",
    "value": "number",
    "start": 674,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 684,
    "end": 691
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 692,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "CX",
    "start": 698,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 701,
    "end": 702
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 703,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 713,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 722,
    "end": 729
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 730,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "EX",
    "start": 735,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "type": "Identifier",
    "value": "declare",
    "start": 750,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 758,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "NX",
    "start": 768,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 771,
    "end": 772
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 773,
    "end": 779
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 780,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 788,
    "end": 789
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 790,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 801,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "TCX",
    "start": 806,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 810,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 812,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "CX",
    "start": 819,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 823,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "TEX",
    "start": 828,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 832,
    "end": 833
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 834,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "EX",
    "start": 841,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 845,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "TNX",
    "start": 850,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 854,
    "end": 855
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 856,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "NX",
    "start": 863,
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
    "value": "interface",
    "start": 868,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "I10",
    "start": 878,
    "end": 881
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 882,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "TCX",
    "start": 890,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 899,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 906,
    "end": 907
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 908,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 918,
    "end": 921
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 922,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "TEX",
    "start": 930,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 934,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 939,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 946,
    "end": 947
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 948,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "I12",
    "start": 958,
    "end": 961
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 962,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "TNX",
    "start": 970,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 979,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 986,
    "end": 987
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 988,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "I14",
    "start": 998,
    "end": 1001
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1002,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "TCX",
    "start": 1010,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1020,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1029,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1038,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "I15",
    "start": 1048,
    "end": 1051
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1052,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "TEX",
    "start": 1060,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1070,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1079,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1088,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "I16",
    "start": 1098,
    "end": 1101
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1102,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "TNX",
    "start": 1110,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1120,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1129,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1139,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "Identifiable",
    "start": 1144,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "_id",
    "start": 1164,
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
    "type": "Punctuator",
    "value": "&",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1184,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "I20",
    "start": 1194,
    "end": 1197
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1198,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1206,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1214,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "a",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1223,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1232,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "I21",
    "start": 1242,
    "end": 1245
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1246,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1254,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1263,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1272,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1281,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "I22",
    "start": 1291,
    "end": 1294
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1295,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "Identifiable",
    "start": 1303,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1316,
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
    "value": "{",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1325,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1334,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "I23",
    "start": 1344,
    "end": 1347
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1348,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "Identifiable",
    "start": 1356,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1369,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1379,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1393,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1403,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1417,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1433,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "interface",
    "start": 1444,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "I30",
    "start": 1454,
    "end": 1457
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1458,
    "end": 1465
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1473,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1482,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "I31",
    "start": 1492,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1499,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1514,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1521,
    "end": 1522
  }
]
```
