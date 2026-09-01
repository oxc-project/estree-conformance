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
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 88,
        "end": 90
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
              "start": 91,
              "end": 92
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 91,
            "end": 92
          }
        ],
        "start": 90,
        "end": 93
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
              "start": 100,
              "end": 103
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
                  "start": 105,
                  "end": 106
                },
                "typeArguments": null,
                "start": 105,
                "end": 106
              },
              "start": 103,
              "end": 106
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
            "start": 100,
            "end": 107
          }
        ],
        "start": 94,
        "end": 109
      },
      "abstract": false,
      "declare": false,
      "start": 82,
      "end": 109
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D1",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 119
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
              "start": 120,
              "end": 121
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 130,
                "end": 131
              },
              "typeArguments": null,
              "start": 130,
              "end": 131
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 120,
            "end": 131
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 134
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 133,
            "end": 134
          }
        ],
        "start": 119,
        "end": 135
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 144,
        "end": 146
      },
      "superTypeArguments": {
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
              "start": 147,
              "end": 148
            },
            "typeArguments": null,
            "start": 147,
            "end": 148
          }
        ],
        "start": 146,
        "end": 149
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 160,
                    "end": 166
                  },
                  "start": 158,
                  "end": 166
                },
                "start": 157,
                "end": 166
              }
            ],
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
                  "start": 169,
                  "end": 170
                },
                "typeArguments": null,
                "start": 169,
                "end": 170
              },
              "start": 167,
              "end": 170
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 156,
            "end": 171
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 179
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
                  "start": 181,
                  "end": 182
                },
                "typeArguments": null,
                "start": 181,
                "end": 182
              },
              "start": 179,
              "end": 182
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
            "start": 176,
            "end": 183
          }
        ],
        "start": 150,
        "end": 191
      },
      "abstract": false,
      "declare": false,
      "start": 111,
      "end": 191
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D2",
        "optional": false,
        "typeAnnotation": null,
        "start": 199,
        "end": 201
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
              "start": 202,
              "end": 203
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 212,
                "end": 213
              },
              "typeArguments": null,
              "start": 212,
              "end": 213
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 202,
            "end": 213
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 216
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 215,
            "end": 216
          }
        ],
        "start": 201,
        "end": 217
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 226,
        "end": 228
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 230
            },
            "typeArguments": null,
            "start": 229,
            "end": 230
          }
        ],
        "start": 228,
        "end": 231
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 242,
                    "end": 248
                  },
                  "start": 240,
                  "end": 248
                },
                "start": 239,
                "end": 248
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 251,
                  "end": 252
                },
                "typeArguments": null,
                "start": 251,
                "end": 252
              },
              "start": 249,
              "end": 252
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 238,
            "end": 253
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 261
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
                  "start": 263,
                  "end": 264
                },
                "typeArguments": null,
                "start": 263,
                "end": 264
              },
              "start": 261,
              "end": 264
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
            "start": 258,
            "end": 265
          }
        ],
        "start": 232,
        "end": 273
      },
      "abstract": false,
      "declare": false,
      "start": 193,
      "end": 273
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D3",
        "optional": false,
        "typeAnnotation": null,
        "start": 281,
        "end": 283
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
              "start": 284,
              "end": 285
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 295
              },
              "typeArguments": null,
              "start": 294,
              "end": 295
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 284,
            "end": 295
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 297,
              "end": 298
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 297,
            "end": 298
          }
        ],
        "start": 283,
        "end": 299
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 308,
        "end": 310
      },
      "superTypeArguments": {
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
              "start": 311,
              "end": 312
            },
            "typeArguments": null,
            "start": 311,
            "end": 312
          }
        ],
        "start": 310,
        "end": 313
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 324,
                    "end": 330
                  },
                  "start": 322,
                  "end": 330
                },
                "start": 321,
                "end": 330
              }
            ],
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
                  "start": 333,
                  "end": 334
                },
                "typeArguments": null,
                "start": 333,
                "end": 334
              },
              "start": 331,
              "end": 334
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 320,
            "end": 335
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 343
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 345,
                  "end": 346
                },
                "typeArguments": null,
                "start": 345,
                "end": 346
              },
              "start": 343,
              "end": 346
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
            "start": 340,
            "end": 347
          }
        ],
        "start": 314,
        "end": 358
      },
      "abstract": false,
      "declare": false,
      "start": 275,
      "end": 358
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D4",
        "optional": false,
        "typeAnnotation": null,
        "start": 366,
        "end": 368
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
              "start": 369,
              "end": 370
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 379,
                "end": 380
              },
              "typeArguments": null,
              "start": 379,
              "end": 380
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 369,
            "end": 380
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 383
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 382,
            "end": 383
          }
        ],
        "start": 368,
        "end": 384
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 393,
        "end": 395
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 396,
              "end": 397
            },
            "typeArguments": null,
            "start": 396,
            "end": 397
          }
        ],
        "start": 395,
        "end": 398
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 409,
                    "end": 415
                  },
                  "start": 407,
                  "end": 415
                },
                "start": 406,
                "end": 415
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 418,
                  "end": 419
                },
                "typeArguments": null,
                "start": 418,
                "end": 419
              },
              "start": 416,
              "end": 419
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 405,
            "end": 420
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 425,
              "end": 428
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 430,
                  "end": 431
                },
                "typeArguments": null,
                "start": 430,
                "end": 431
              },
              "start": 428,
              "end": 431
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
            "start": 425,
            "end": 432
          }
        ],
        "start": 399,
        "end": 440
      },
      "abstract": false,
      "declare": false,
      "start": 360,
      "end": 440
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D5",
        "optional": false,
        "typeAnnotation": null,
        "start": 516,
        "end": 518
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
              "start": 519,
              "end": 520
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 529,
                "end": 530
              },
              "typeArguments": null,
              "start": 529,
              "end": 530
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 519,
            "end": 530
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 532,
              "end": 533
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 542,
                "end": 543
              },
              "typeArguments": null,
              "start": 542,
              "end": 543
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 532,
            "end": 543
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 545,
              "end": 546
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 545,
            "end": 546
          }
        ],
        "start": 518,
        "end": 547
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 556,
        "end": 558
      },
      "superTypeArguments": {
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
              "start": 559,
              "end": 560
            },
            "typeArguments": null,
            "start": 559,
            "end": 560
          }
        ],
        "start": 558,
        "end": 561
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 572,
                    "end": 578
                  },
                  "start": 570,
                  "end": 578
                },
                "start": 569,
                "end": 578
              }
            ],
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
                  "start": 581,
                  "end": 582
                },
                "typeArguments": null,
                "start": 581,
                "end": 582
              },
              "start": 579,
              "end": 582
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 568,
            "end": 583
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
              "end": 591
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
                  "start": 593,
                  "end": 594
                },
                "typeArguments": null,
                "start": 593,
                "end": 594
              },
              "start": 591,
              "end": 594
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
            "start": 588,
            "end": 595
          }
        ],
        "start": 562,
        "end": 603
      },
      "abstract": false,
      "declare": false,
      "start": 510,
      "end": 603
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D6",
        "optional": false,
        "typeAnnotation": null,
        "start": 611,
        "end": 613
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
              "start": 614,
              "end": 615
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 624,
                "end": 625
              },
              "typeArguments": null,
              "start": 624,
              "end": 625
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 614,
            "end": 625
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 627,
              "end": 628
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 637,
                "end": 638
              },
              "typeArguments": null,
              "start": 637,
              "end": 638
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 627,
            "end": 638
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 640,
              "end": 641
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 640,
            "end": 641
          }
        ],
        "start": 613,
        "end": 642
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 651,
        "end": 653
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 654,
              "end": 655
            },
            "typeArguments": null,
            "start": 654,
            "end": 655
          }
        ],
        "start": 653,
        "end": 656
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 667,
                    "end": 673
                  },
                  "start": 665,
                  "end": 673
                },
                "start": 664,
                "end": 673
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 676,
                  "end": 677
                },
                "typeArguments": null,
                "start": 676,
                "end": 677
              },
              "start": 674,
              "end": 677
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 663,
            "end": 678
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 683,
              "end": 686
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
                  "start": 688,
                  "end": 689
                },
                "typeArguments": null,
                "start": 688,
                "end": 689
              },
              "start": 686,
              "end": 689
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
            "start": 683,
            "end": 690
          }
        ],
        "start": 657,
        "end": 692
      },
      "abstract": false,
      "declare": false,
      "start": 605,
      "end": 692
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D7",
        "optional": false,
        "typeAnnotation": null,
        "start": 700,
        "end": 702
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
              "start": 703,
              "end": 704
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 713,
                "end": 714
              },
              "typeArguments": null,
              "start": 713,
              "end": 714
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 703,
            "end": 714
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 716,
              "end": 717
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 726,
                "end": 727
              },
              "typeArguments": null,
              "start": 726,
              "end": 727
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 716,
            "end": 727
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 729,
              "end": 730
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 729,
            "end": 730
          }
        ],
        "start": 702,
        "end": 731
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 740,
        "end": 742
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 743,
              "end": 744
            },
            "typeArguments": null,
            "start": 743,
            "end": 744
          }
        ],
        "start": 742,
        "end": 745
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 756,
                    "end": 762
                  },
                  "start": 754,
                  "end": 762
                },
                "start": 753,
                "end": 762
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 765,
                  "end": 766
                },
                "typeArguments": null,
                "start": 765,
                "end": 766
              },
              "start": 763,
              "end": 766
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 752,
            "end": 767
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 772,
              "end": 775
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
                  "start": 777,
                  "end": 778
                },
                "typeArguments": null,
                "start": 777,
                "end": 778
              },
              "start": 775,
              "end": 778
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
            "start": 772,
            "end": 779
          }
        ],
        "start": 746,
        "end": 787
      },
      "abstract": false,
      "declare": false,
      "start": 694,
      "end": 787
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D8",
        "optional": false,
        "typeAnnotation": null,
        "start": 866,
        "end": 868
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
              "start": 869,
              "end": 870
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 879,
                "end": 880
              },
              "typeArguments": null,
              "start": 879,
              "end": 880
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 869,
            "end": 880
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 882,
              "end": 883
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 892,
                "end": 893
              },
              "typeArguments": null,
              "start": 892,
              "end": 893
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 882,
            "end": 893
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 895,
              "end": 896
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 895,
            "end": 896
          }
        ],
        "start": 868,
        "end": 897
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 906,
        "end": 908
      },
      "superTypeArguments": {
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
              "start": 909,
              "end": 910
            },
            "typeArguments": null,
            "start": 909,
            "end": 910
          }
        ],
        "start": 908,
        "end": 911
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 922,
                    "end": 928
                  },
                  "start": 920,
                  "end": 928
                },
                "start": 919,
                "end": 928
              }
            ],
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
                  "start": 931,
                  "end": 932
                },
                "typeArguments": null,
                "start": 931,
                "end": 932
              },
              "start": 929,
              "end": 932
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 918,
            "end": 933
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 938,
              "end": 941
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 943,
                  "end": 944
                },
                "typeArguments": null,
                "start": 943,
                "end": 944
              },
              "start": 941,
              "end": 944
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
            "start": 938,
            "end": 945
          }
        ],
        "start": 912,
        "end": 956
      },
      "abstract": false,
      "declare": false,
      "start": 860,
      "end": 956
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D9",
        "optional": false,
        "typeAnnotation": null,
        "start": 964,
        "end": 966
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
              "start": 967,
              "end": 968
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 977,
                "end": 978
              },
              "typeArguments": null,
              "start": 977,
              "end": 978
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 967,
            "end": 978
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 980,
              "end": 981
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 990,
                "end": 991
              },
              "typeArguments": null,
              "start": 990,
              "end": 991
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 980,
            "end": 991
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 993,
              "end": 994
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 993,
            "end": 994
          }
        ],
        "start": 966,
        "end": 995
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1004,
        "end": 1006
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1007,
              "end": 1008
            },
            "typeArguments": null,
            "start": 1007,
            "end": 1008
          }
        ],
        "start": 1006,
        "end": 1009
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1029,
                  "end": 1030
                },
                "typeArguments": null,
                "start": 1029,
                "end": 1030
              },
              "start": 1027,
              "end": 1030
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1016,
            "end": 1031
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1036,
              "end": 1039
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1041,
                  "end": 1042
                },
                "typeArguments": null,
                "start": 1041,
                "end": 1042
              },
              "start": 1039,
              "end": 1042
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
            "start": 1036,
            "end": 1043
          }
        ],
        "start": 1010,
        "end": 1051
      },
      "abstract": false,
      "declare": false,
      "start": 958,
      "end": 1051
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1059,
        "end": 1062
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
              "start": 1063,
              "end": 1064
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1073,
                "end": 1074
              },
              "typeArguments": null,
              "start": 1073,
              "end": 1074
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1063,
            "end": 1074
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1076,
              "end": 1077
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 1086,
                "end": 1087
              },
              "typeArguments": null,
              "start": 1086,
              "end": 1087
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1076,
            "end": 1087
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1089,
              "end": 1090
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1089,
            "end": 1090
          }
        ],
        "start": 1062,
        "end": 1091
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1100,
        "end": 1102
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1103,
              "end": 1104
            },
            "typeArguments": null,
            "start": 1103,
            "end": 1104
          }
        ],
        "start": 1102,
        "end": 1105
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 1116,
                    "end": 1122
                  },
                  "start": 1114,
                  "end": 1122
                },
                "start": 1113,
                "end": 1122
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1125,
                  "end": 1126
                },
                "typeArguments": null,
                "start": 1125,
                "end": 1126
              },
              "start": 1123,
              "end": 1126
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1112,
            "end": 1127
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1132,
              "end": 1135
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1137,
                  "end": 1138
                },
                "typeArguments": null,
                "start": 1137,
                "end": 1138
              },
              "start": 1135,
              "end": 1138
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
            "start": 1132,
            "end": 1139
          }
        ],
        "start": 1106,
        "end": 1147
      },
      "abstract": false,
      "declare": false,
      "start": 1053,
      "end": 1147
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1220,
        "end": 1223
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
              "start": 1224,
              "end": 1225
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1234,
                "end": 1235
              },
              "typeArguments": null,
              "start": 1234,
              "end": 1235
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1224,
            "end": 1235
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1237,
              "end": 1238
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 1247,
                "end": 1248
              },
              "typeArguments": null,
              "start": 1247,
              "end": 1248
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1237,
            "end": 1248
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1250,
              "end": 1251
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1250,
            "end": 1251
          }
        ],
        "start": 1223,
        "end": 1252
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1261,
        "end": 1263
      },
      "superTypeArguments": {
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
              "start": 1264,
              "end": 1265
            },
            "typeArguments": null,
            "start": 1264,
            "end": 1265
          }
        ],
        "start": 1263,
        "end": 1266
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 1277,
                    "end": 1283
                  },
                  "start": 1275,
                  "end": 1283
                },
                "start": 1274,
                "end": 1283
              }
            ],
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
                  "start": 1286,
                  "end": 1287
                },
                "typeArguments": null,
                "start": 1286,
                "end": 1287
              },
              "start": 1284,
              "end": 1287
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1273,
            "end": 1288
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1293,
              "end": 1296
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1293,
            "end": 1300
          }
        ],
        "start": 1267,
        "end": 1311
      },
      "abstract": false,
      "declare": false,
      "start": 1214,
      "end": 1311
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1319,
        "end": 1322
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
              "start": 1323,
              "end": 1324
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1333,
                "end": 1334
              },
              "typeArguments": null,
              "start": 1333,
              "end": 1334
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1323,
            "end": 1334
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1336,
              "end": 1337
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 1346,
                "end": 1347
              },
              "typeArguments": null,
              "start": 1346,
              "end": 1347
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1336,
            "end": 1347
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1349,
              "end": 1350
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1349,
            "end": 1350
          }
        ],
        "start": 1322,
        "end": 1351
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1360,
        "end": 1362
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1363,
              "end": 1364
            },
            "typeArguments": null,
            "start": 1363,
            "end": 1364
          }
        ],
        "start": 1362,
        "end": 1365
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 1376,
                    "end": 1382
                  },
                  "start": 1374,
                  "end": 1382
                },
                "start": 1373,
                "end": 1382
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1385,
                  "end": 1386
                },
                "typeArguments": null,
                "start": 1385,
                "end": 1386
              },
              "start": 1383,
              "end": 1386
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1372,
            "end": 1387
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1392,
              "end": 1395
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1397,
                  "end": 1398
                },
                "typeArguments": null,
                "start": 1397,
                "end": 1398
              },
              "start": 1395,
              "end": 1398
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
            "start": 1392,
            "end": 1399
          }
        ],
        "start": 1366,
        "end": 1410
      },
      "abstract": false,
      "declare": false,
      "start": 1313,
      "end": 1410
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1418,
        "end": 1421
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
              "start": 1422,
              "end": 1423
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1432,
                "end": 1433
              },
              "typeArguments": null,
              "start": 1432,
              "end": 1433
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1422,
            "end": 1433
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1435,
              "end": 1436
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 1445,
                "end": 1446
              },
              "typeArguments": null,
              "start": 1445,
              "end": 1446
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1435,
            "end": 1446
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1448,
              "end": 1449
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1448,
            "end": 1449
          }
        ],
        "start": 1421,
        "end": 1450
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1459,
        "end": 1461
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1462,
              "end": 1463
            },
            "typeArguments": null,
            "start": 1462,
            "end": 1463
          }
        ],
        "start": 1461,
        "end": 1464
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 1475,
                    "end": 1481
                  },
                  "start": 1473,
                  "end": 1481
                },
                "start": 1472,
                "end": 1481
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1484,
                  "end": 1485
                },
                "typeArguments": null,
                "start": 1484,
                "end": 1485
              },
              "start": 1482,
              "end": 1485
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1471,
            "end": 1486
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1491,
              "end": 1494
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1496,
                  "end": 1497
                },
                "typeArguments": null,
                "start": 1496,
                "end": 1497
              },
              "start": 1494,
              "end": 1497
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
            "start": 1491,
            "end": 1498
          }
        ],
        "start": 1465,
        "end": 1506
      },
      "abstract": false,
      "declare": false,
      "start": 1412,
      "end": 1506
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1594,
        "end": 1597
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
              "start": 1598,
              "end": 1599
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1608,
                "end": 1609
              },
              "typeArguments": null,
              "start": 1608,
              "end": 1609
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1598,
            "end": 1609
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1611,
              "end": 1612
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 1621,
                "end": 1622
              },
              "typeArguments": null,
              "start": 1621,
              "end": 1622
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1611,
            "end": 1622
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1624,
              "end": 1625
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 1634,
                "end": 1638
              },
              "typeArguments": null,
              "start": 1634,
              "end": 1638
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1624,
            "end": 1638
          }
        ],
        "start": 1597,
        "end": 1639
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1648,
        "end": 1650
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null,
              "start": 1651,
              "end": 1655
            },
            "typeArguments": null,
            "start": 1651,
            "end": 1655
          }
        ],
        "start": 1650,
        "end": 1656
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 1667,
                    "end": 1673
                  },
                  "start": 1665,
                  "end": 1673
                },
                "start": 1664,
                "end": 1673
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1676,
                  "end": 1680
                },
                "typeArguments": null,
                "start": 1676,
                "end": 1680
              },
              "start": 1674,
              "end": 1680
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1663,
            "end": 1681
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1686,
              "end": 1689
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
                  "start": 1691,
                  "end": 1692
                },
                "typeArguments": null,
                "start": 1691,
                "end": 1692
              },
              "start": 1689,
              "end": 1692
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
            "start": 1686,
            "end": 1693
          }
        ],
        "start": 1657,
        "end": 1701
      },
      "abstract": false,
      "declare": false,
      "start": 1588,
      "end": 1701
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1709,
        "end": 1712
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
              "start": 1713,
              "end": 1714
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1723,
                "end": 1724
              },
              "typeArguments": null,
              "start": 1723,
              "end": 1724
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1713,
            "end": 1724
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1726,
              "end": 1727
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 1736,
                "end": 1737
              },
              "typeArguments": null,
              "start": 1736,
              "end": 1737
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1726,
            "end": 1737
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1739,
              "end": 1740
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 1749,
                "end": 1753
              },
              "typeArguments": null,
              "start": 1749,
              "end": 1753
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1739,
            "end": 1753
          }
        ],
        "start": 1712,
        "end": 1754
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1763,
        "end": 1765
      },
      "superTypeArguments": {
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
              "start": 1766,
              "end": 1767
            },
            "typeArguments": null,
            "start": 1766,
            "end": 1767
          }
        ],
        "start": 1765,
        "end": 1768
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 1779,
                    "end": 1785
                  },
                  "start": 1777,
                  "end": 1785
                },
                "start": 1776,
                "end": 1785
              }
            ],
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
                  "start": 1788,
                  "end": 1789
                },
                "typeArguments": null,
                "start": 1788,
                "end": 1789
              },
              "start": 1786,
              "end": 1789
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1775,
            "end": 1790
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1795,
              "end": 1798
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
                  "start": 1800,
                  "end": 1801
                },
                "typeArguments": null,
                "start": 1800,
                "end": 1801
              },
              "start": 1798,
              "end": 1801
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
            "start": 1795,
            "end": 1802
          }
        ],
        "start": 1769,
        "end": 1810
      },
      "abstract": false,
      "declare": false,
      "start": 1703,
      "end": 1810
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D16",
        "optional": false,
        "typeAnnotation": null,
        "start": 1818,
        "end": 1821
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
              "start": 1822,
              "end": 1823
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1832,
                "end": 1833
              },
              "typeArguments": null,
              "start": 1832,
              "end": 1833
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1822,
            "end": 1833
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1835,
              "end": 1836
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 1845,
                "end": 1846
              },
              "typeArguments": null,
              "start": 1845,
              "end": 1846
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1835,
            "end": 1846
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1848,
              "end": 1849
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 1858,
                "end": 1862
              },
              "typeArguments": null,
              "start": 1858,
              "end": 1862
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1848,
            "end": 1862
          }
        ],
        "start": 1821,
        "end": 1863
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1872,
        "end": 1874
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1875,
              "end": 1876
            },
            "typeArguments": null,
            "start": 1875,
            "end": 1876
          }
        ],
        "start": 1874,
        "end": 1877
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 1888,
                    "end": 1894
                  },
                  "start": 1886,
                  "end": 1894
                },
                "start": 1885,
                "end": 1894
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1897,
                  "end": 1898
                },
                "typeArguments": null,
                "start": 1897,
                "end": 1898
              },
              "start": 1895,
              "end": 1898
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1884,
            "end": 1899
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1904,
              "end": 1907
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
                  "start": 1909,
                  "end": 1910
                },
                "typeArguments": null,
                "start": 1909,
                "end": 1910
              },
              "start": 1907,
              "end": 1910
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
            "start": 1904,
            "end": 1911
          }
        ],
        "start": 1878,
        "end": 1913
      },
      "abstract": false,
      "declare": false,
      "start": 1812,
      "end": 1913
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D17",
        "optional": false,
        "typeAnnotation": null,
        "start": 1921,
        "end": 1924
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
              "start": 1925,
              "end": 1926
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1935,
                "end": 1936
              },
              "typeArguments": null,
              "start": 1935,
              "end": 1936
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1925,
            "end": 1936
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1938,
              "end": 1939
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 1948,
                "end": 1949
              },
              "typeArguments": null,
              "start": 1948,
              "end": 1949
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1938,
            "end": 1949
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1951,
              "end": 1952
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 1961,
                "end": 1965
              },
              "typeArguments": null,
              "start": 1961,
              "end": 1965
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1951,
            "end": 1965
          }
        ],
        "start": 1924,
        "end": 1966
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1975,
        "end": 1977
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1978,
              "end": 1979
            },
            "typeArguments": null,
            "start": 1978,
            "end": 1979
          }
        ],
        "start": 1977,
        "end": 1980
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 1991,
                    "end": 1997
                  },
                  "start": 1989,
                  "end": 1997
                },
                "start": 1988,
                "end": 1997
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2000,
                  "end": 2001
                },
                "typeArguments": null,
                "start": 2000,
                "end": 2001
              },
              "start": 1998,
              "end": 2001
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1987,
            "end": 2002
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2007,
              "end": 2010
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
                  "start": 2012,
                  "end": 2013
                },
                "typeArguments": null,
                "start": 2012,
                "end": 2013
              },
              "start": 2010,
              "end": 2013
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
            "start": 2007,
            "end": 2014
          }
        ],
        "start": 1981,
        "end": 2016
      },
      "abstract": false,
      "declare": false,
      "start": 1915,
      "end": 2016
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D18",
        "optional": false,
        "typeAnnotation": null,
        "start": 2107,
        "end": 2110
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
              "start": 2111,
              "end": 2112
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2121,
                "end": 2122
              },
              "typeArguments": null,
              "start": 2121,
              "end": 2122
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2111,
            "end": 2122
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2124,
              "end": 2125
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 2134,
                "end": 2135
              },
              "typeArguments": null,
              "start": 2134,
              "end": 2135
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2124,
            "end": 2135
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 2137,
              "end": 2138
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 2147,
                "end": 2151
              },
              "typeArguments": null,
              "start": 2147,
              "end": 2151
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2137,
            "end": 2151
          }
        ],
        "start": 2110,
        "end": 2152
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2161,
        "end": 2163
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null,
              "start": 2164,
              "end": 2168
            },
            "typeArguments": null,
            "start": 2164,
            "end": 2168
          }
        ],
        "start": 2163,
        "end": 2169
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 2180,
                    "end": 2186
                  },
                  "start": 2178,
                  "end": 2186
                },
                "start": 2177,
                "end": 2186
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2189,
                  "end": 2193
                },
                "typeArguments": null,
                "start": 2189,
                "end": 2193
              },
              "start": 2187,
              "end": 2193
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2176,
            "end": 2194
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2199,
              "end": 2202
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
                  "start": 2204,
                  "end": 2205
                },
                "typeArguments": null,
                "start": 2204,
                "end": 2205
              },
              "start": 2202,
              "end": 2205
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
            "start": 2199,
            "end": 2206
          }
        ],
        "start": 2170,
        "end": 2214
      },
      "abstract": false,
      "declare": false,
      "start": 2101,
      "end": 2214
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D19",
        "optional": false,
        "typeAnnotation": null,
        "start": 2222,
        "end": 2225
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
              "start": 2226,
              "end": 2227
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2236,
                "end": 2237
              },
              "typeArguments": null,
              "start": 2236,
              "end": 2237
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2226,
            "end": 2237
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2239,
              "end": 2240
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 2249,
                "end": 2250
              },
              "typeArguments": null,
              "start": 2249,
              "end": 2250
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2239,
            "end": 2250
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 2252,
              "end": 2253
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 2262,
                "end": 2266
              },
              "typeArguments": null,
              "start": 2262,
              "end": 2266
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2252,
            "end": 2266
          }
        ],
        "start": 2225,
        "end": 2267
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2276,
        "end": 2278
      },
      "superTypeArguments": {
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
              "start": 2279,
              "end": 2280
            },
            "typeArguments": null,
            "start": 2279,
            "end": 2280
          }
        ],
        "start": 2278,
        "end": 2281
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 2292,
                    "end": 2298
                  },
                  "start": 2290,
                  "end": 2298
                },
                "start": 2289,
                "end": 2298
              }
            ],
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
                  "start": 2301,
                  "end": 2302
                },
                "typeArguments": null,
                "start": 2301,
                "end": 2302
              },
              "start": 2299,
              "end": 2302
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2288,
            "end": 2303
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2308,
              "end": 2311
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2313,
                  "end": 2314
                },
                "typeArguments": null,
                "start": 2313,
                "end": 2314
              },
              "start": 2311,
              "end": 2314
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
            "start": 2308,
            "end": 2315
          }
        ],
        "start": 2282,
        "end": 2326
      },
      "abstract": false,
      "declare": false,
      "start": 2216,
      "end": 2326
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D20",
        "optional": false,
        "typeAnnotation": null,
        "start": 2334,
        "end": 2337
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
              "start": 2338,
              "end": 2339
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2348,
                "end": 2349
              },
              "typeArguments": null,
              "start": 2348,
              "end": 2349
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2338,
            "end": 2349
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2351,
              "end": 2352
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 2361,
                "end": 2362
              },
              "typeArguments": null,
              "start": 2361,
              "end": 2362
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2351,
            "end": 2362
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 2364,
              "end": 2365
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 2374,
                "end": 2378
              },
              "typeArguments": null,
              "start": 2374,
              "end": 2378
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2364,
            "end": 2378
          }
        ],
        "start": 2337,
        "end": 2379
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2388,
        "end": 2390
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2391,
              "end": 2392
            },
            "typeArguments": null,
            "start": 2391,
            "end": 2392
          }
        ],
        "start": 2390,
        "end": 2393
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 2404,
                    "end": 2410
                  },
                  "start": 2402,
                  "end": 2410
                },
                "start": 2401,
                "end": 2410
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2413,
                  "end": 2414
                },
                "typeArguments": null,
                "start": 2413,
                "end": 2414
              },
              "start": 2411,
              "end": 2414
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2400,
            "end": 2415
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2420,
              "end": 2423
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2425,
                  "end": 2426
                },
                "typeArguments": null,
                "start": 2425,
                "end": 2426
              },
              "start": 2423,
              "end": 2426
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
            "start": 2420,
            "end": 2427
          }
        ],
        "start": 2394,
        "end": 2435
      },
      "abstract": false,
      "declare": false,
      "start": 2328,
      "end": 2435
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D21",
        "optional": false,
        "typeAnnotation": null,
        "start": 2443,
        "end": 2446
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
              "start": 2447,
              "end": 2448
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2457,
                "end": 2458
              },
              "typeArguments": null,
              "start": 2457,
              "end": 2458
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2447,
            "end": 2458
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2460,
              "end": 2461
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 2470,
                "end": 2471
              },
              "typeArguments": null,
              "start": 2470,
              "end": 2471
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2460,
            "end": 2471
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 2473,
              "end": 2474
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 2483,
                "end": 2487
              },
              "typeArguments": null,
              "start": 2483,
              "end": 2487
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2473,
            "end": 2487
          }
        ],
        "start": 2446,
        "end": 2488
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2497,
        "end": 2499
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 2500,
              "end": 2501
            },
            "typeArguments": null,
            "start": 2500,
            "end": 2501
          }
        ],
        "start": 2499,
        "end": 2502
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 2513,
                    "end": 2519
                  },
                  "start": 2511,
                  "end": 2519
                },
                "start": 2510,
                "end": 2519
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2522,
                  "end": 2523
                },
                "typeArguments": null,
                "start": 2522,
                "end": 2523
              },
              "start": 2520,
              "end": 2523
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2509,
            "end": 2524
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2529,
              "end": 2532
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2534,
                  "end": 2535
                },
                "typeArguments": null,
                "start": 2534,
                "end": 2535
              },
              "start": 2532,
              "end": 2535
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
            "start": 2529,
            "end": 2536
          }
        ],
        "start": 2503,
        "end": 2538
      },
      "abstract": false,
      "declare": false,
      "start": 2437,
      "end": 2538
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D22",
        "optional": false,
        "typeAnnotation": null,
        "start": 2626,
        "end": 2629
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
              "start": 2630,
              "end": 2631
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2640,
                "end": 2641
              },
              "typeArguments": null,
              "start": 2640,
              "end": 2641
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2630,
            "end": 2641
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2643,
              "end": 2644
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 2653,
                "end": 2654
              },
              "typeArguments": null,
              "start": 2653,
              "end": 2654
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2643,
            "end": 2654
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 2656,
              "end": 2657
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 2666,
                "end": 2670
              },
              "typeArguments": null,
              "start": 2666,
              "end": 2670
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2656,
            "end": 2670
          }
        ],
        "start": 2629,
        "end": 2671
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2680,
        "end": 2682
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null,
              "start": 2683,
              "end": 2687
            },
            "typeArguments": null,
            "start": 2683,
            "end": 2687
          }
        ],
        "start": 2682,
        "end": 2688
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 2699,
                    "end": 2705
                  },
                  "start": 2697,
                  "end": 2705
                },
                "start": 2696,
                "end": 2705
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2708,
                  "end": 2712
                },
                "typeArguments": null,
                "start": 2708,
                "end": 2712
              },
              "start": 2706,
              "end": 2712
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2695,
            "end": 2713
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2718,
              "end": 2721
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
                  "start": 2723,
                  "end": 2724
                },
                "typeArguments": null,
                "start": 2723,
                "end": 2724
              },
              "start": 2721,
              "end": 2724
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
            "start": 2718,
            "end": 2725
          }
        ],
        "start": 2689,
        "end": 2733
      },
      "abstract": false,
      "declare": false,
      "start": 2620,
      "end": 2733
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D23",
        "optional": false,
        "typeAnnotation": null,
        "start": 2741,
        "end": 2744
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
              "start": 2745,
              "end": 2746
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2755,
                "end": 2756
              },
              "typeArguments": null,
              "start": 2755,
              "end": 2756
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2745,
            "end": 2756
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2758,
              "end": 2759
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 2768,
                "end": 2769
              },
              "typeArguments": null,
              "start": 2768,
              "end": 2769
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2758,
            "end": 2769
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 2771,
              "end": 2772
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 2781,
                "end": 2785
              },
              "typeArguments": null,
              "start": 2781,
              "end": 2785
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2771,
            "end": 2785
          }
        ],
        "start": 2744,
        "end": 2786
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2795,
        "end": 2797
      },
      "superTypeArguments": {
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
              "start": 2798,
              "end": 2799
            },
            "typeArguments": null,
            "start": 2798,
            "end": 2799
          }
        ],
        "start": 2797,
        "end": 2800
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 2811,
                    "end": 2817
                  },
                  "start": 2809,
                  "end": 2817
                },
                "start": 2808,
                "end": 2817
              }
            ],
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
                  "start": 2820,
                  "end": 2821
                },
                "typeArguments": null,
                "start": 2820,
                "end": 2821
              },
              "start": 2818,
              "end": 2821
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2807,
            "end": 2822
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2827,
              "end": 2830
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2832,
                  "end": 2833
                },
                "typeArguments": null,
                "start": 2832,
                "end": 2833
              },
              "start": 2830,
              "end": 2833
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
            "start": 2827,
            "end": 2834
          }
        ],
        "start": 2801,
        "end": 2845
      },
      "abstract": false,
      "declare": false,
      "start": 2735,
      "end": 2845
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D24",
        "optional": false,
        "typeAnnotation": null,
        "start": 2853,
        "end": 2856
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
              "start": 2857,
              "end": 2858
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2867,
                "end": 2868
              },
              "typeArguments": null,
              "start": 2867,
              "end": 2868
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2857,
            "end": 2868
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2870,
              "end": 2871
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 2880,
                "end": 2881
              },
              "typeArguments": null,
              "start": 2880,
              "end": 2881
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2870,
            "end": 2881
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 2883,
              "end": 2884
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 2893,
                "end": 2897
              },
              "typeArguments": null,
              "start": 2893,
              "end": 2897
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2883,
            "end": 2897
          }
        ],
        "start": 2856,
        "end": 2898
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2907,
        "end": 2909
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2910,
              "end": 2911
            },
            "typeArguments": null,
            "start": 2910,
            "end": 2911
          }
        ],
        "start": 2909,
        "end": 2912
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 2923,
                    "end": 2929
                  },
                  "start": 2921,
                  "end": 2929
                },
                "start": 2920,
                "end": 2929
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2932,
                  "end": 2933
                },
                "typeArguments": null,
                "start": 2932,
                "end": 2933
              },
              "start": 2930,
              "end": 2933
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2919,
            "end": 2934
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2939,
              "end": 2942
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2944,
                  "end": 2945
                },
                "typeArguments": null,
                "start": 2944,
                "end": 2945
              },
              "start": 2942,
              "end": 2945
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
            "start": 2939,
            "end": 2946
          }
        ],
        "start": 2913,
        "end": 2957
      },
      "abstract": false,
      "declare": false,
      "start": 2847,
      "end": 2957
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D25",
        "optional": false,
        "typeAnnotation": null,
        "start": 2965,
        "end": 2968
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
              "start": 2969,
              "end": 2970
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2979,
                "end": 2980
              },
              "typeArguments": null,
              "start": 2979,
              "end": 2980
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2969,
            "end": 2980
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2982,
              "end": 2983
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 2992,
                "end": 2993
              },
              "typeArguments": null,
              "start": 2992,
              "end": 2993
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2982,
            "end": 2993
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 2995,
              "end": 2996
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 3005,
                "end": 3009
              },
              "typeArguments": null,
              "start": 3005,
              "end": 3009
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2995,
            "end": 3009
          }
        ],
        "start": 2968,
        "end": 3010
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 3019,
        "end": 3021
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 3022,
              "end": 3023
            },
            "typeArguments": null,
            "start": 3022,
            "end": 3023
          }
        ],
        "start": 3021,
        "end": 3024
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 3035,
                    "end": 3041
                  },
                  "start": 3033,
                  "end": 3041
                },
                "start": 3032,
                "end": 3041
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3044,
                  "end": 3045
                },
                "typeArguments": null,
                "start": 3044,
                "end": 3045
              },
              "start": 3042,
              "end": 3045
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 3031,
            "end": 3046
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3051,
              "end": 3054
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3056,
                  "end": 3057
                },
                "typeArguments": null,
                "start": 3056,
                "end": 3057
              },
              "start": 3054,
              "end": 3057
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
            "start": 3051,
            "end": 3058
          }
        ],
        "start": 3025,
        "end": 3066
      },
      "abstract": false,
      "declare": false,
      "start": 2959,
      "end": 3066
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D26",
        "optional": false,
        "typeAnnotation": null,
        "start": 3148,
        "end": 3151
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
              "start": 3152,
              "end": 3153
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 3162,
                "end": 3163
              },
              "typeArguments": null,
              "start": 3162,
              "end": 3163
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3152,
            "end": 3163
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3165,
              "end": 3166
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 3175,
                "end": 3176
              },
              "typeArguments": null,
              "start": 3175,
              "end": 3176
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3165,
            "end": 3176
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 3178,
              "end": 3179
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 3188,
                "end": 3192
              },
              "typeArguments": null,
              "start": 3188,
              "end": 3192
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3178,
            "end": 3192
          }
        ],
        "start": 3151,
        "end": 3193
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 3202,
        "end": 3204
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null,
              "start": 3205,
              "end": 3209
            },
            "typeArguments": null,
            "start": 3205,
            "end": 3209
          }
        ],
        "start": 3204,
        "end": 3210
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 3221,
                    "end": 3227
                  },
                  "start": 3219,
                  "end": 3227
                },
                "start": 3218,
                "end": 3227
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3230,
                  "end": 3234
                },
                "typeArguments": null,
                "start": 3230,
                "end": 3234
              },
              "start": 3228,
              "end": 3234
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 3217,
            "end": 3235
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3240,
              "end": 3243
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3245,
                  "end": 3249
                },
                "typeArguments": null,
                "start": 3245,
                "end": 3249
              },
              "start": 3243,
              "end": 3249
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
            "start": 3240,
            "end": 3250
          }
        ],
        "start": 3211,
        "end": 3258
      },
      "abstract": false,
      "declare": false,
      "start": 3142,
      "end": 3258
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D27",
        "optional": false,
        "typeAnnotation": null,
        "start": 3266,
        "end": 3269
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
              "start": 3270,
              "end": 3271
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 3280,
                "end": 3281
              },
              "typeArguments": null,
              "start": 3280,
              "end": 3281
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3270,
            "end": 3281
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3283,
              "end": 3284
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 3293,
                "end": 3294
              },
              "typeArguments": null,
              "start": 3293,
              "end": 3294
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3283,
            "end": 3294
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 3296,
              "end": 3297
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 3306,
                "end": 3310
              },
              "typeArguments": null,
              "start": 3306,
              "end": 3310
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3296,
            "end": 3310
          }
        ],
        "start": 3269,
        "end": 3311
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 3320,
        "end": 3322
      },
      "superTypeArguments": {
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
              "start": 3323,
              "end": 3324
            },
            "typeArguments": null,
            "start": 3323,
            "end": 3324
          }
        ],
        "start": 3322,
        "end": 3325
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 3336,
                    "end": 3342
                  },
                  "start": 3334,
                  "end": 3342
                },
                "start": 3333,
                "end": 3342
              }
            ],
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
                  "start": 3345,
                  "end": 3346
                },
                "typeArguments": null,
                "start": 3345,
                "end": 3346
              },
              "start": 3343,
              "end": 3346
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 3332,
            "end": 3347
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3352,
              "end": 3355
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3357,
                  "end": 3361
                },
                "typeArguments": null,
                "start": 3357,
                "end": 3361
              },
              "start": 3355,
              "end": 3361
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
            "start": 3352,
            "end": 3362
          }
        ],
        "start": 3326,
        "end": 3373
      },
      "abstract": false,
      "declare": false,
      "start": 3260,
      "end": 3373
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D28",
        "optional": false,
        "typeAnnotation": null,
        "start": 3381,
        "end": 3384
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
              "start": 3385,
              "end": 3386
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 3395,
                "end": 3396
              },
              "typeArguments": null,
              "start": 3395,
              "end": 3396
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3385,
            "end": 3396
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3398,
              "end": 3399
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 3408,
                "end": 3409
              },
              "typeArguments": null,
              "start": 3408,
              "end": 3409
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3398,
            "end": 3409
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 3411,
              "end": 3412
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 3421,
                "end": 3425
              },
              "typeArguments": null,
              "start": 3421,
              "end": 3425
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3411,
            "end": 3425
          }
        ],
        "start": 3384,
        "end": 3426
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 3435,
        "end": 3437
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3438,
              "end": 3439
            },
            "typeArguments": null,
            "start": 3438,
            "end": 3439
          }
        ],
        "start": 3437,
        "end": 3440
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 3451,
                    "end": 3457
                  },
                  "start": 3449,
                  "end": 3457
                },
                "start": 3448,
                "end": 3457
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3460,
                  "end": 3461
                },
                "typeArguments": null,
                "start": 3460,
                "end": 3461
              },
              "start": 3458,
              "end": 3461
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 3447,
            "end": 3462
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3467,
              "end": 3470
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3472,
                  "end": 3476
                },
                "typeArguments": null,
                "start": 3472,
                "end": 3476
              },
              "start": 3470,
              "end": 3476
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
            "start": 3467,
            "end": 3477
          }
        ],
        "start": 3441,
        "end": 3488
      },
      "abstract": false,
      "declare": false,
      "start": 3375,
      "end": 3488
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D29",
        "optional": false,
        "typeAnnotation": null,
        "start": 3496,
        "end": 3499
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
              "start": 3500,
              "end": 3501
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 3510,
                "end": 3511
              },
              "typeArguments": null,
              "start": 3510,
              "end": 3511
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3500,
            "end": 3511
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3513,
              "end": 3514
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 3523,
                "end": 3524
              },
              "typeArguments": null,
              "start": 3523,
              "end": 3524
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3513,
            "end": 3524
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 3526,
              "end": 3527
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 3536,
                "end": 3540
              },
              "typeArguments": null,
              "start": 3536,
              "end": 3540
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3526,
            "end": 3540
          }
        ],
        "start": 3499,
        "end": 3541
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 3550,
        "end": 3552
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 3553,
              "end": 3554
            },
            "typeArguments": null,
            "start": 3553,
            "end": 3554
          }
        ],
        "start": 3552,
        "end": 3555
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
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
                    "start": 3566,
                    "end": 3572
                  },
                  "start": 3564,
                  "end": 3572
                },
                "start": 3563,
                "end": 3572
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3575,
                  "end": 3576
                },
                "typeArguments": null,
                "start": 3575,
                "end": 3576
              },
              "start": 3573,
              "end": 3576
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 3562,
            "end": 3577
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3582,
              "end": 3585
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3587,
                  "end": 3591
                },
                "typeArguments": null,
                "start": 3587,
                "end": 3591
              },
              "start": 3585,
              "end": 3591
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
            "start": 3582,
            "end": 3592
          }
        ],
        "start": 3556,
        "end": 3603
      },
      "abstract": false,
      "declare": false,
      "start": 3490,
      "end": 3603
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 82,
  "end": 3603
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 82,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 88,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 100,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 111,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 117,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 122,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 136,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 144,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 160,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 176,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 181,
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
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 193,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "D2",
    "start": 199,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 204,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 218,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 226,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 242,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "type": "Identifier",
    "value": "foo",
    "start": 258,
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
    "value": "T",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 275,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "D3",
    "start": 281,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "U",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 300,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 308,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 324,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 330,
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
    "value": ";",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 340,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 357,
    "end": 358
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 360,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "D4",
    "start": 366,
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
    "type": "Keyword",
    "value": "extends",
    "start": 371,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 385,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 393,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 406,
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
    "value": "string",
    "start": 409,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 425,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 439,
    "end": 440
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 510,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "D5",
    "start": 516,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 519,
    "end": 520
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 521,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 532,
    "end": 533
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 534,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 546,
    "end": 547
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 548,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 556,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "[",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 572,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 588,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 602,
    "end": 603
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 605,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "D6",
    "start": 611,
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
    "value": "T",
    "start": 614,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 616,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 627,
    "end": 628
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 629,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 641,
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
    "value": "C3",
    "start": 651,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 667,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "U",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 683,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 691,
    "end": 692
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 694,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "D7",
    "start": 700,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 703,
    "end": 704
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 705,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 716,
    "end": 717
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 718,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 730,
    "end": 731
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 732,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 740,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "[",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 756,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 772,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Punctuator",
    "value": "}",
    "start": 786,
    "end": 787
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 860,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "D8",
    "start": 866,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 869,
    "end": 870
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 871,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 882,
    "end": 883
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 884,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 896,
    "end": 897
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 898,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 906,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 919,
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
    "value": "string",
    "start": 922,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "T",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 938,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 955,
    "end": 956
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 958,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "D9",
    "start": 964,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 967,
    "end": 968
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 969,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 980,
    "end": 981
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 982,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 991,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 994,
    "end": 995
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 996,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 1004,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1010,
    "end": 1011
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
    "value": "U",
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
    "value": "foo",
    "start": 1036,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1053,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "D10",
    "start": 1059,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1065,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1078,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1092,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 1100,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1116,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1132,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1214,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "D11",
    "start": 1220,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1226,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1239,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1253,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 1261,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1264,
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
    "type": "Punctuator",
    "value": "[",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1277,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1293,
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
    "value": "V",
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
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1313,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "D12",
    "start": 1319,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1325,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1338,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1352,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 1360,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1376,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1392,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1412,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "D13",
    "start": 1418,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1424,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1437,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1451,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 1459,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "string",
    "start": 1475,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1491,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1588,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "D14",
    "start": 1594,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1600,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1613,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1626,
    "end": 1633
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1634,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1640,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 1648,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1651,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1667,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "Date",
    "start": 1676,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1686,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1703,
    "end": 1708
  },
  {
    "type": "Identifier",
    "value": "D15",
    "start": 1709,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1715,
    "end": 1722
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1728,
    "end": 1735
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1741,
    "end": 1748
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1749,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1755,
    "end": 1762
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 1763,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1779,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1795,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1812,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "D16",
    "start": 1818,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1824,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1837,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1850,
    "end": 1857
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1858,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1864,
    "end": 1871
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 1872,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1888,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1904,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1915,
    "end": 1920
  },
  {
    "type": "Identifier",
    "value": "D17",
    "start": 1921,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1927,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1940,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1953,
    "end": 1960
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1961,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1967,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 1975,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1991,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2007,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2101,
    "end": 2106
  },
  {
    "type": "Identifier",
    "value": "D18",
    "start": 2107,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2113,
    "end": 2120
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2126,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2139,
    "end": 2146
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2147,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2153,
    "end": 2160
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 2161,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2164,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2180,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2189,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2199,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2216,
    "end": 2221
  },
  {
    "type": "Identifier",
    "value": "D19",
    "start": 2222,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2228,
    "end": 2235
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2241,
    "end": 2248
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2254,
    "end": 2261
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2262,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2268,
    "end": 2275
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 2276,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2292,
    "end": 2298
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2308,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2328,
    "end": 2333
  },
  {
    "type": "Identifier",
    "value": "D20",
    "start": 2334,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2340,
    "end": 2347
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2353,
    "end": 2360
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2366,
    "end": 2373
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2374,
    "end": 2378
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2380,
    "end": 2387
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 2388,
    "end": 2390
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2394,
    "end": 2395
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2404,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2420,
    "end": 2423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2437,
    "end": 2442
  },
  {
    "type": "Identifier",
    "value": "D21",
    "start": 2443,
    "end": 2446
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2449,
    "end": 2456
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2458,
    "end": 2459
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2462,
    "end": 2469
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2475,
    "end": 2482
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2483,
    "end": 2487
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2489,
    "end": 2496
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 2497,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2509,
    "end": 2510
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2511,
    "end": 2512
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2513,
    "end": 2519
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2519,
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
    "value": "V",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2529,
    "end": 2532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2620,
    "end": 2625
  },
  {
    "type": "Identifier",
    "value": "D22",
    "start": 2626,
    "end": 2629
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2629,
    "end": 2630
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2632,
    "end": 2639
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2641,
    "end": 2642
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2645,
    "end": 2652
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2656,
    "end": 2657
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2658,
    "end": 2665
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2666,
    "end": 2670
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2670,
    "end": 2671
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2672,
    "end": 2679
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 2680,
    "end": 2682
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2683,
    "end": 2687
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2689,
    "end": 2690
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2695,
    "end": 2696
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2696,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2699,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2708,
    "end": 2712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2712,
    "end": 2713
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2718,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2732,
    "end": 2733
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2735,
    "end": 2740
  },
  {
    "type": "Identifier",
    "value": "D23",
    "start": 2741,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2745,
    "end": 2746
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2747,
    "end": 2754
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2755,
    "end": 2756
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2756,
    "end": 2757
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2758,
    "end": 2759
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2760,
    "end": 2767
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2768,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2773,
    "end": 2780
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2781,
    "end": 2785
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2785,
    "end": 2786
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2787,
    "end": 2794
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 2795,
    "end": 2797
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2797,
    "end": 2798
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2799,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2801,
    "end": 2802
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2807,
    "end": 2808
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2811,
    "end": 2817
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2817,
    "end": 2818
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2818,
    "end": 2819
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2821,
    "end": 2822
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2827,
    "end": 2830
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2830,
    "end": 2831
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2847,
    "end": 2852
  },
  {
    "type": "Identifier",
    "value": "D24",
    "start": 2853,
    "end": 2856
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2856,
    "end": 2857
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2859,
    "end": 2866
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2867,
    "end": 2868
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2868,
    "end": 2869
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2870,
    "end": 2871
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2872,
    "end": 2879
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2880,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2885,
    "end": 2892
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 2893,
    "end": 2897
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2897,
    "end": 2898
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2899,
    "end": 2906
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 2907,
    "end": 2909
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2909,
    "end": 2910
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2910,
    "end": 2911
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2911,
    "end": 2912
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2913,
    "end": 2914
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2920,
    "end": 2921
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2921,
    "end": 2922
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2923,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2932,
    "end": 2933
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2939,
    "end": 2942
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2944,
    "end": 2945
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2945,
    "end": 2946
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2959,
    "end": 2964
  },
  {
    "type": "Identifier",
    "value": "D25",
    "start": 2965,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2969,
    "end": 2970
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2971,
    "end": 2978
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2979,
    "end": 2980
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2980,
    "end": 2981
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2984,
    "end": 2991
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2997,
    "end": 3004
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 3005,
    "end": 3009
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3009,
    "end": 3010
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3011,
    "end": 3018
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 3019,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3023,
    "end": 3024
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3025,
    "end": 3026
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3031,
    "end": 3032
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3032,
    "end": 3033
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3033,
    "end": 3034
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3035,
    "end": 3041
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3041,
    "end": 3042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3042,
    "end": 3043
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3044,
    "end": 3045
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3045,
    "end": 3046
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3051,
    "end": 3054
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3057,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3065,
    "end": 3066
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3142,
    "end": 3147
  },
  {
    "type": "Identifier",
    "value": "D26",
    "start": 3148,
    "end": 3151
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3151,
    "end": 3152
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3152,
    "end": 3153
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3154,
    "end": 3161
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3162,
    "end": 3163
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3163,
    "end": 3164
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3165,
    "end": 3166
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3167,
    "end": 3174
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3175,
    "end": 3176
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3176,
    "end": 3177
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3178,
    "end": 3179
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3180,
    "end": 3187
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 3188,
    "end": 3192
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3194,
    "end": 3201
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 3202,
    "end": 3204
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3204,
    "end": 3205
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 3205,
    "end": 3209
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3209,
    "end": 3210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3211,
    "end": 3212
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3217,
    "end": 3218
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3218,
    "end": 3219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3219,
    "end": 3220
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3221,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 3230,
    "end": 3234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3234,
    "end": 3235
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3240,
    "end": 3243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3243,
    "end": 3244
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 3245,
    "end": 3249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3257,
    "end": 3258
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3260,
    "end": 3265
  },
  {
    "type": "Identifier",
    "value": "D27",
    "start": 3266,
    "end": 3269
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3269,
    "end": 3270
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3270,
    "end": 3271
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3272,
    "end": 3279
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3280,
    "end": 3281
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3281,
    "end": 3282
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3283,
    "end": 3284
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3285,
    "end": 3292
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3293,
    "end": 3294
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3294,
    "end": 3295
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3296,
    "end": 3297
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3298,
    "end": 3305
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 3306,
    "end": 3310
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3310,
    "end": 3311
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3312,
    "end": 3319
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 3320,
    "end": 3322
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3322,
    "end": 3323
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3323,
    "end": 3324
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3324,
    "end": 3325
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3326,
    "end": 3327
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3332,
    "end": 3333
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3333,
    "end": 3334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3334,
    "end": 3335
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3336,
    "end": 3342
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3342,
    "end": 3343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3343,
    "end": 3344
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3345,
    "end": 3346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3346,
    "end": 3347
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3352,
    "end": 3355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3355,
    "end": 3356
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 3357,
    "end": 3361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3361,
    "end": 3362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3372,
    "end": 3373
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3375,
    "end": 3380
  },
  {
    "type": "Identifier",
    "value": "D28",
    "start": 3381,
    "end": 3384
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3384,
    "end": 3385
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3385,
    "end": 3386
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3387,
    "end": 3394
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3395,
    "end": 3396
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3396,
    "end": 3397
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3398,
    "end": 3399
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3400,
    "end": 3407
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3408,
    "end": 3409
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3409,
    "end": 3410
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3411,
    "end": 3412
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3413,
    "end": 3420
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 3421,
    "end": 3425
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3425,
    "end": 3426
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3427,
    "end": 3434
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 3435,
    "end": 3437
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3437,
    "end": 3438
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3438,
    "end": 3439
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3439,
    "end": 3440
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3441,
    "end": 3442
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3447,
    "end": 3448
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3448,
    "end": 3449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3449,
    "end": 3450
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3451,
    "end": 3457
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3457,
    "end": 3458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3458,
    "end": 3459
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3460,
    "end": 3461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3461,
    "end": 3462
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3467,
    "end": 3470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3470,
    "end": 3471
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 3472,
    "end": 3476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3476,
    "end": 3477
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3487,
    "end": 3488
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3490,
    "end": 3495
  },
  {
    "type": "Identifier",
    "value": "D29",
    "start": 3496,
    "end": 3499
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3499,
    "end": 3500
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3500,
    "end": 3501
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3502,
    "end": 3509
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3510,
    "end": 3511
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3511,
    "end": 3512
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3513,
    "end": 3514
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3515,
    "end": 3522
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3523,
    "end": 3524
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3524,
    "end": 3525
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3526,
    "end": 3527
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3528,
    "end": 3535
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 3536,
    "end": 3540
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3540,
    "end": 3541
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3542,
    "end": 3549
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 3550,
    "end": 3552
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3552,
    "end": 3553
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3553,
    "end": 3554
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": "[",
    "start": 3562,
    "end": 3563
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3563,
    "end": 3564
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3564,
    "end": 3565
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3566,
    "end": 3572
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3572,
    "end": 3573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3573,
    "end": 3574
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3575,
    "end": 3576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3576,
    "end": 3577
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3582,
    "end": 3585
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3585,
    "end": 3586
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 3587,
    "end": 3591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3591,
    "end": 3592
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3602,
    "end": 3603
  }
]
```
