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
        "name": "Grand",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 112
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
              "start": 113,
              "end": 114
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 113,
            "end": 114
          }
        ],
        "start": 112,
        "end": 115
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
              "name": "grand",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 127
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
                  "start": 129,
                  "end": 130
                },
                "typeArguments": null,
                "start": 129,
                "end": 130
              },
              "start": 127,
              "end": 130
            },
            "accessibility": null,
            "static": false,
            "start": 122,
            "end": 131
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "shared",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 142
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
                  "start": 144,
                  "end": 145
                },
                "typeArguments": null,
                "start": 144,
                "end": 145
              },
              "start": 142,
              "end": 145
            },
            "accessibility": null,
            "static": false,
            "start": 136,
            "end": 146
          }
        ],
        "start": 116,
        "end": 148
      },
      "declare": false,
      "start": 97,
      "end": 148
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 159
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
              "start": 160,
              "end": 161
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 160,
            "end": 161
          }
        ],
        "start": 159,
        "end": 162
      },
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
              "name": "mixin",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 172
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
                  "start": 174,
                  "end": 175
                },
                "typeArguments": null,
                "start": 174,
                "end": 175
              },
              "start": 172,
              "end": 175
            },
            "accessibility": null,
            "static": false,
            "start": 167,
            "end": 175
          }
        ],
        "start": 165,
        "end": 177
      },
      "declare": false,
      "start": 149,
      "end": 178
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Fixed",
        "optional": false,
        "typeAnnotation": null,
        "start": 184,
        "end": 189
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
              "name": "fixed",
              "optional": false,
              "typeAnnotation": null,
              "start": 194,
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
            "start": 194,
            "end": 207
          }
        ],
        "start": 192,
        "end": 209
      },
      "declare": false,
      "start": 179,
      "end": 210
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 225
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
              "start": 226,
              "end": 227
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 226,
            "end": 227
          }
        ],
        "start": 225,
        "end": 228
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Grand",
            "optional": false,
            "typeAnnotation": null,
            "start": 237,
            "end": 242
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 243,
                    "end": 244
                  },
                  "typeArguments": null,
                  "start": 243,
                  "end": 244
                },
                "start": 243,
                "end": 246
              }
            ],
            "start": 242,
            "end": 247
          },
          "start": 237,
          "end": 247
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
              "name": "base",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 258
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
                  "start": 260,
                  "end": 261
                },
                "typeArguments": null,
                "start": 260,
                "end": 261
              },
              "start": 258,
              "end": 261
            },
            "accessibility": null,
            "static": false,
            "start": 254,
            "end": 262
          }
        ],
        "start": 248,
        "end": 264
      },
      "declare": false,
      "start": 211,
      "end": 264
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 275,
        "end": 282
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
              "start": 283,
              "end": 284
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 283,
            "end": 284
          }
        ],
        "start": 282,
        "end": 285
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 298
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
                  "start": 299,
                  "end": 300
                },
                "typeArguments": null,
                "start": 299,
                "end": 300
              }
            ],
            "start": 298,
            "end": 301
          },
          "start": 294,
          "end": 301
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Mixin",
            "optional": false,
            "typeAnnotation": null,
            "start": 303,
            "end": 308
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
                  "start": 309,
                  "end": 310
                },
                "typeArguments": null,
                "start": 309,
                "end": 310
              }
            ],
            "start": 308,
            "end": 311
          },
          "start": 303,
          "end": 311
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 313,
            "end": 318
          },
          "typeArguments": null,
          "start": 313,
          "end": 318
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
              "name": "shared",
              "optional": false,
              "typeAnnotation": null,
              "start": 325,
              "end": 331
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 333,
                    "end": 334
                  },
                  "typeArguments": null,
                  "start": 333,
                  "end": 334
                },
                "start": 333,
                "end": 336
              },
              "start": 331,
              "end": 336
            },
            "accessibility": null,
            "static": false,
            "start": 325,
            "end": 337
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 342,
              "end": 349
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
            "accessibility": null,
            "static": false,
            "start": 342,
            "end": 353
          }
        ],
        "start": 319,
        "end": 355
      },
      "declare": false,
      "start": 265,
      "end": 355
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
        "start": 362,
        "end": 363
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
              "start": 364,
              "end": 365
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 364,
            "end": 365
          }
        ],
        "start": 363,
        "end": 366
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
              "name": "declared",
              "optional": false,
              "typeAnnotation": null,
              "start": 373,
              "end": 381
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
                  "start": 384,
                  "end": 385
                },
                "typeArguments": null,
                "start": 384,
                "end": 385
              },
              "start": 382,
              "end": 385
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 373,
            "end": 386
          }
        ],
        "start": 367,
        "end": 388
      },
      "abstract": false,
      "declare": false,
      "start": 356,
      "end": 388
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 395,
        "end": 396
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
              "start": 397,
              "end": 398
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 397,
            "end": 398
          }
        ],
        "start": 396,
        "end": 399
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 408,
        "end": 409
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 410,
                "end": 411
              },
              "typeArguments": null,
              "start": 410,
              "end": 411
            },
            "start": 410,
            "end": 413
          }
        ],
        "start": 409,
        "end": 414
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Derived",
            "optional": false,
            "typeAnnotation": null,
            "start": 426,
            "end": 433
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
                  "start": 434,
                  "end": 435
                },
                "typeArguments": null,
                "start": 434,
                "end": 435
              }
            ],
            "start": 433,
            "end": 436
          },
          "start": 426,
          "end": 436
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "grand",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 448
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 451,
                    "end": 452
                  },
                  "typeArguments": null,
                  "start": 451,
                  "end": 452
                },
                "start": 451,
                "end": 454
              },
              "start": 449,
              "end": 454
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 443,
            "end": 455
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "shared",
              "optional": false,
              "typeAnnotation": null,
              "start": 460,
              "end": 466
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 469,
                    "end": 470
                  },
                  "typeArguments": null,
                  "start": 469,
                  "end": 470
                },
                "start": 469,
                "end": 472
              },
              "start": 467,
              "end": 472
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 460,
            "end": 473
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixin",
              "optional": false,
              "typeAnnotation": null,
              "start": 478,
              "end": 483
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
                  "start": 486,
                  "end": 487
                },
                "typeArguments": null,
                "start": 486,
                "end": 487
              },
              "start": 484,
              "end": 487
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 478,
            "end": 488
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fixed",
              "optional": false,
              "typeAnnotation": null,
              "start": 493,
              "end": 498
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 501,
                "end": 507
              },
              "start": 499,
              "end": 507
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 493,
            "end": 508
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "base",
              "optional": false,
              "typeAnnotation": null,
              "start": 513,
              "end": 517
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
                  "start": 520,
                  "end": 521
                },
                "typeArguments": null,
                "start": 520,
                "end": 521
              },
              "start": 518,
              "end": 521
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 513,
            "end": 522
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 527,
              "end": 534
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
                  "start": 537,
                  "end": 538
                },
                "typeArguments": null,
                "start": 537,
                "end": 538
              },
              "start": 535,
              "end": 538
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 527,
            "end": 539
          }
        ],
        "start": 437,
        "end": 541
      },
      "abstract": false,
      "declare": false,
      "start": 389,
      "end": 541
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 560,
                  "end": 567
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 568,
                      "end": 574
                    }
                  ],
                  "start": 567,
                  "end": 575
                },
                "start": 560,
                "end": 575
              },
              "start": 558,
              "end": 575
            },
            "start": 557,
            "end": 575
          },
          "init": null,
          "definite": false,
          "start": 557,
          "end": 575
        }
      ],
      "declare": true,
      "start": 543,
      "end": 576
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
            "name": "grand",
            "optional": false,
            "typeAnnotation": null,
            "start": 583,
            "end": 588
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 591,
              "end": 592
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "grand",
              "optional": false,
              "typeAnnotation": null,
              "start": 593,
              "end": 598
            },
            "optional": false,
            "computed": false,
            "start": 591,
            "end": 598
          },
          "definite": false,
          "start": 583,
          "end": 598
        }
      ],
      "declare": false,
      "start": 577,
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
            "name": "mixin",
            "optional": false,
            "typeAnnotation": null,
            "start": 606,
            "end": 611
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 614,
              "end": 615
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixin",
              "optional": false,
              "typeAnnotation": null,
              "start": 616,
              "end": 621
            },
            "optional": false,
            "computed": false,
            "start": 614,
            "end": 621
          },
          "definite": false,
          "start": 606,
          "end": 621
        }
      ],
      "declare": false,
      "start": 600,
      "end": 622
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
            "name": "fixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 629,
            "end": 634
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 637,
              "end": 638
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "fixed",
              "optional": false,
              "typeAnnotation": null,
              "start": 639,
              "end": 644
            },
            "optional": false,
            "computed": false,
            "start": 637,
            "end": 644
          },
          "definite": false,
          "start": 629,
          "end": 644
        }
      ],
      "declare": false,
      "start": 623,
      "end": 645
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
            "name": "shared",
            "optional": false,
            "typeAnnotation": null,
            "start": 652,
            "end": 658
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 661,
              "end": 662
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "shared",
              "optional": false,
              "typeAnnotation": null,
              "start": 663,
              "end": 669
            },
            "optional": false,
            "computed": false,
            "start": 661,
            "end": 669
          },
          "definite": false,
          "start": 652,
          "end": 669
        }
      ],
      "declare": false,
      "start": 646,
      "end": 670
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
            "name": "all",
            "optional": false,
            "typeAnnotation": null,
            "start": 677,
            "end": 680
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 688,
                  "end": 689
                },
                "start": 685,
                "end": 689
              }
            ],
            "start": 683,
            "end": 691
          },
          "definite": false,
          "start": 677,
          "end": 691
        }
      ],
      "declare": false,
      "start": 671,
      "end": 692
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
            "name": "keys",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 716,
                  "end": 717
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 727,
                      "end": 734
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSBooleanKeyword",
                          "start": 735,
                          "end": 742
                        }
                      ],
                      "start": 734,
                      "end": 743
                    },
                    "start": 727,
                    "end": 743
                  },
                  "start": 721,
                  "end": 743
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 746,
                    "end": 747
                  },
                  "typeArguments": null,
                  "start": 746,
                  "end": 747
                },
                "optional": false,
                "readonly": null,
                "start": 713,
                "end": 749
              },
              "start": 711,
              "end": 749
            },
            "start": 707,
            "end": 749
          },
          "init": null,
          "definite": false,
          "start": 707,
          "end": 749
        }
      ],
      "declare": true,
      "start": 693,
      "end": 750
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
            "name": "e",
            "optional": false,
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
                  "start": 769,
                  "end": 770
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 771,
                      "end": 777
                    }
                  ],
                  "start": 770,
                  "end": 778
                },
                "start": 769,
                "end": 778
              },
              "start": 767,
              "end": 778
            },
            "start": 766,
            "end": 778
          },
          "init": null,
          "definite": false,
          "start": 766,
          "end": 778
        }
      ],
      "declare": true,
      "start": 752,
      "end": 779
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
            "name": "declared",
            "optional": false,
            "typeAnnotation": null,
            "start": 786,
            "end": 794
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 797,
              "end": 798
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "declared",
              "optional": false,
              "typeAnnotation": null,
              "start": 799,
              "end": 807
            },
            "optional": false,
            "computed": false,
            "start": 797,
            "end": 807
          },
          "definite": false,
          "start": 786,
          "end": 807
        }
      ],
      "declare": false,
      "start": 780,
      "end": 808
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
            "name": "allE",
            "optional": false,
            "typeAnnotation": null,
            "start": 815,
            "end": 819
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 827,
                  "end": 828
                },
                "start": 824,
                "end": 828
              }
            ],
            "start": 822,
            "end": 830
          },
          "definite": false,
          "start": 815,
          "end": 830
        }
      ],
      "declare": false,
      "start": 809,
      "end": 831
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 831
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 97,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "Grand",
    "start": 107,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "grand",
    "start": 122,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "shared",
    "start": 136,
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
    "value": "T",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 149,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 154,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "mixin",
    "start": 167,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 179,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "Fixed",
    "start": 184,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "fixed",
    "start": 194,
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
    "value": "}",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 211,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 221,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 229,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "Grand",
    "start": 237,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 246,
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
    "value": "base",
    "start": 254,
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
    "value": "T",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 265,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 275,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 286,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 294,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 303,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "Fixed",
    "start": 313,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "shared",
    "start": 325,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "derived",
    "start": 342,
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
    "value": "T",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 356,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "declared",
    "start": 373,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 387,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 389,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 398,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 400,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 408,
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
    "value": "[",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 413,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 415,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 426,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "grand",
    "start": 443,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "shared",
    "start": 460,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "!",
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
    "value": "T",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "mixin",
    "start": 478,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "fixed",
    "start": 493,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 501,
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
    "value": "base",
    "start": 513,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 517,
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
    "value": "T",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "derived",
    "start": 527,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 543,
    "end": 550
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 551,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 560,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 568,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 577,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "grand",
    "start": 583,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "grand",
    "start": 593,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 598,
    "end": 599
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 600,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "mixin",
    "start": 606,
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
    "value": "d",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "mixin",
    "start": 616,
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
    "value": "const",
    "start": 623,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "fixed",
    "start": 629,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "fixed",
    "start": 639,
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
    "value": "const",
    "start": 646,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "shared",
    "start": 652,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "shared",
    "start": 663,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 669,
    "end": 670
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 671,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 677,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 685,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "declare",
    "start": 693,
    "end": 700
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 701,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 707,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 716,
    "end": 717
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 718,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 721,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 727,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 735,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "K",
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
    "type": "Punctuator",
    "value": ";",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 752,
    "end": 759
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 760,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 771,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 778,
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
    "value": "declared",
    "start": 786,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "declared",
    "start": 799,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 807,
    "end": 808
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 809,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "allE",
    "start": 815,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 824,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 830,
    "end": 831
  }
]
```
