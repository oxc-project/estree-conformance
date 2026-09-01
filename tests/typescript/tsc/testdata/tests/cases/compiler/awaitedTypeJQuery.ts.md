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
        "name": "Thenable",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 47
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
              "start": 48,
              "end": 49
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 48,
            "end": 49
          }
        ],
        "start": 47,
        "end": 50
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "PromiseLike",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 70
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
                  "start": 71,
                  "end": 72
                },
                "typeArguments": null,
                "start": 71,
                "end": 72
              }
            ],
            "start": 70,
            "end": 73
          },
          "start": 59,
          "end": 73
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 74,
        "end": 77
      },
      "declare": false,
      "start": 29,
      "end": 77
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PromiseBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 114,
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
              "name": "TR",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 128
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 126,
            "end": 128
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TJ",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 132
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 130,
            "end": 132
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TN",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 136
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 134,
            "end": 136
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "UR",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 144
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 142,
            "end": 144
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "UJ",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 148
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 146,
            "end": 148
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "UN",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 152
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 150,
            "end": 152
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "VR",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 160
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 158,
            "end": 160
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "VJ",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 164
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 162,
            "end": 164
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "VN",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 168
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 166,
            "end": 168
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SR",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 176
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 174,
            "end": 176
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SJ",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 180
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 178,
            "end": 180
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SN",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 184
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 182,
            "end": 184
          }
        ],
        "start": 125,
        "end": 185
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 196
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 197,
                    "end": 200
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 203,
                    "end": 208
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 197,
                  "end": 208
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 210,
                    "end": 213
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 216,
                    "end": 221
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 210,
                  "end": 221
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AND",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 223,
                    "end": 226
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 229,
                    "end": 234
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 223,
                  "end": 234
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 244,
                    "end": 247
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 250,
                    "end": 255
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 244,
                  "end": 255
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 257,
                    "end": 260
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 263,
                    "end": 268
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 257,
                  "end": 268
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BND",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 270,
                    "end": 273
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 276,
                    "end": 281
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 270,
                  "end": 281
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 291,
                    "end": 294
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 297,
                    "end": 302
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 291,
                  "end": 302
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 304,
                    "end": 307
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 310,
                    "end": 315
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 304,
                  "end": 315
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CND",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 317,
                    "end": 320
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 323,
                    "end": 328
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 317,
                  "end": 328
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 338,
                    "end": 341
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 344,
                    "end": 349
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 338,
                  "end": 349
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 351,
                    "end": 354
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 357,
                    "end": 362
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 351,
                  "end": 362
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RND",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 364,
                    "end": 367
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 370,
                    "end": 375
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 364,
                  "end": 375
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 385,
                    "end": 388
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 391,
                    "end": 396
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 385,
                  "end": 396
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 398,
                    "end": 401
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 404,
                    "end": 409
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 398,
                  "end": 409
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 411,
                    "end": 414
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 417,
                    "end": 422
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 411,
                  "end": 422
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 432,
                    "end": 435
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 438,
                    "end": 443
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 432,
                  "end": 443
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 445,
                    "end": 448
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 451,
                    "end": 456
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 445,
                  "end": 456
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BNF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 458,
                    "end": 461
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 464,
                    "end": 469
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 458,
                  "end": 469
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 479,
                    "end": 482
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 485,
                    "end": 490
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 479,
                  "end": 490
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 492,
                    "end": 495
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 498,
                    "end": 503
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 492,
                  "end": 503
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CNF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 505,
                    "end": 508
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 511,
                    "end": 516
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 505,
                  "end": 516
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 526,
                    "end": 529
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 532,
                    "end": 537
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 526,
                  "end": 537
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 539,
                    "end": 542
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 545,
                    "end": 550
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 539,
                  "end": 550
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RNF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 552,
                    "end": 555
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 558,
                    "end": 563
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 552,
                  "end": 563
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 573,
                    "end": 576
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 579,
                    "end": 584
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 573,
                  "end": 584
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 586,
                    "end": 589
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 592,
                    "end": 597
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 586,
                  "end": 597
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 599,
                    "end": 602
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 605,
                    "end": 610
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 599,
                  "end": 610
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 620,
                    "end": 623
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 626,
                    "end": 631
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 620,
                  "end": 631
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 633,
                    "end": 636
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 639,
                    "end": 644
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 633,
                  "end": 644
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BNP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 646,
                    "end": 649
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 652,
                    "end": 657
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 646,
                  "end": 657
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 667,
                    "end": 670
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 673,
                    "end": 678
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 667,
                  "end": 678
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 680,
                    "end": 683
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 686,
                    "end": 691
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 680,
                  "end": 691
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CNP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 693,
                    "end": 696
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 699,
                    "end": 704
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 693,
                  "end": 704
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 714,
                    "end": 717
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 720,
                    "end": 725
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 714,
                  "end": 725
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 727,
                    "end": 730
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 733,
                    "end": 738
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 727,
                  "end": 738
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RNP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 740,
                    "end": 743
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 746,
                    "end": 751
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 740,
                  "end": 751
                }
              ],
              "start": 196,
              "end": 752
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "doneFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TR",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 782,
                              "end": 784
                            },
                            "typeArguments": null,
                            "start": 782,
                            "end": 784
                          },
                          "start": 780,
                          "end": 784
                        },
                        "start": 779,
                        "end": 784
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UR",
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
                        "start": 786,
                        "end": 791
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VR",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 796,
                              "end": 798
                            },
                            "typeArguments": null,
                            "start": 796,
                            "end": 798
                          },
                          "start": 794,
                          "end": 798
                        },
                        "start": 793,
                        "end": 798
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 803,
                          "end": 804
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SR",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 806,
                                "end": 808
                              },
                              "typeArguments": null,
                              "start": 806,
                              "end": 808
                            },
                            "start": 806,
                            "end": 810
                          },
                          "start": 804,
                          "end": 810
                        },
                        "value": null,
                        "start": 800,
                        "end": 810
                      }
                    ],
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
                              "name": "PromiseBase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 815,
                              "end": 826
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 827,
                                    "end": 830
                                  },
                                  "typeArguments": null,
                                  "start": 827,
                                  "end": 830
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 832,
                                    "end": 835
                                  },
                                  "typeArguments": null,
                                  "start": 832,
                                  "end": 835
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AND",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 837,
                                    "end": 840
                                  },
                                  "typeArguments": null,
                                  "start": 837,
                                  "end": 840
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 858,
                                    "end": 861
                                  },
                                  "typeArguments": null,
                                  "start": 858,
                                  "end": 861
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 863,
                                    "end": 866
                                  },
                                  "typeArguments": null,
                                  "start": 863,
                                  "end": 866
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BND",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 868,
                                    "end": 871
                                  },
                                  "typeArguments": null,
                                  "start": 868,
                                  "end": 871
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 889,
                                    "end": 892
                                  },
                                  "typeArguments": null,
                                  "start": 889,
                                  "end": 892
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 894,
                                    "end": 897
                                  },
                                  "typeArguments": null,
                                  "start": 894,
                                  "end": 897
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CND",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 899,
                                    "end": 902
                                  },
                                  "typeArguments": null,
                                  "start": 899,
                                  "end": 902
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 920,
                                    "end": 923
                                  },
                                  "typeArguments": null,
                                  "start": 920,
                                  "end": 923
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 925,
                                    "end": 928
                                  },
                                  "typeArguments": null,
                                  "start": 925,
                                  "end": 928
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RND",
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
                              "start": 826,
                              "end": 934
                            },
                            "start": 815,
                            "end": 934
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 937,
                              "end": 945
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 946,
                                    "end": 949
                                  },
                                  "typeArguments": null,
                                  "start": 946,
                                  "end": 949
                                }
                              ],
                              "start": 945,
                              "end": 950
                            },
                            "start": 937,
                            "end": 950
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ARD",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 953,
                              "end": 956
                            },
                            "typeArguments": null,
                            "start": 953,
                            "end": 956
                          }
                        ],
                        "start": 815,
                        "end": 956
                      },
                      "start": 812,
                      "end": 956
                    },
                    "start": 778,
                    "end": 956
                  },
                  "start": 776,
                  "end": 956
                },
                "start": 766,
                "end": 956
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "failFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TJ",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 986,
                              "end": 988
                            },
                            "typeArguments": null,
                            "start": 986,
                            "end": 988
                          },
                          "start": 984,
                          "end": 988
                        },
                        "start": 983,
                        "end": 988
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UJ",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 993,
                              "end": 995
                            },
                            "typeArguments": null,
                            "start": 993,
                            "end": 995
                          },
                          "start": 991,
                          "end": 995
                        },
                        "start": 990,
                        "end": 995
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VJ",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1000,
                              "end": 1002
                            },
                            "typeArguments": null,
                            "start": 1000,
                            "end": 1002
                          },
                          "start": 998,
                          "end": 1002
                        },
                        "start": 997,
                        "end": 1002
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1007,
                          "end": 1008
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SJ",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1010,
                                "end": 1012
                              },
                              "typeArguments": null,
                              "start": 1010,
                              "end": 1012
                            },
                            "start": 1010,
                            "end": 1014
                          },
                          "start": 1008,
                          "end": 1014
                        },
                        "value": null,
                        "start": 1004,
                        "end": 1014
                      }
                    ],
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
                              "name": "PromiseBase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1019,
                              "end": 1030
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1031,
                                    "end": 1034
                                  },
                                  "typeArguments": null,
                                  "start": 1031,
                                  "end": 1034
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1036,
                                    "end": 1039
                                  },
                                  "typeArguments": null,
                                  "start": 1036,
                                  "end": 1039
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1041,
                                    "end": 1044
                                  },
                                  "typeArguments": null,
                                  "start": 1041,
                                  "end": 1044
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1062,
                                    "end": 1065
                                  },
                                  "typeArguments": null,
                                  "start": 1062,
                                  "end": 1065
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1067,
                                    "end": 1070
                                  },
                                  "typeArguments": null,
                                  "start": 1067,
                                  "end": 1070
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BNF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1072,
                                    "end": 1075
                                  },
                                  "typeArguments": null,
                                  "start": 1072,
                                  "end": 1075
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1093,
                                    "end": 1096
                                  },
                                  "typeArguments": null,
                                  "start": 1093,
                                  "end": 1096
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1098,
                                    "end": 1101
                                  },
                                  "typeArguments": null,
                                  "start": 1098,
                                  "end": 1101
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CNF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1103,
                                    "end": 1106
                                  },
                                  "typeArguments": null,
                                  "start": 1103,
                                  "end": 1106
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1124,
                                    "end": 1127
                                  },
                                  "typeArguments": null,
                                  "start": 1124,
                                  "end": 1127
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1129,
                                    "end": 1132
                                  },
                                  "typeArguments": null,
                                  "start": 1129,
                                  "end": 1132
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RNF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1134,
                                    "end": 1137
                                  },
                                  "typeArguments": null,
                                  "start": 1134,
                                  "end": 1137
                                }
                              ],
                              "start": 1030,
                              "end": 1138
                            },
                            "start": 1019,
                            "end": 1138
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1141,
                              "end": 1149
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1150,
                                    "end": 1153
                                  },
                                  "typeArguments": null,
                                  "start": 1150,
                                  "end": 1153
                                }
                              ],
                              "start": 1149,
                              "end": 1154
                            },
                            "start": 1141,
                            "end": 1154
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ARF",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1157,
                              "end": 1160
                            },
                            "typeArguments": null,
                            "start": 1157,
                            "end": 1160
                          }
                        ],
                        "start": 1019,
                        "end": 1160
                      },
                      "start": 1016,
                      "end": 1160
                    },
                    "start": 982,
                    "end": 1160
                  },
                  "start": 980,
                  "end": 1160
                },
                "start": 970,
                "end": 1160
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progressFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TN",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1194,
                              "end": 1196
                            },
                            "typeArguments": null,
                            "start": 1194,
                            "end": 1196
                          },
                          "start": 1192,
                          "end": 1196
                        },
                        "start": 1191,
                        "end": 1196
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UN",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1201,
                              "end": 1203
                            },
                            "typeArguments": null,
                            "start": 1201,
                            "end": 1203
                          },
                          "start": 1199,
                          "end": 1203
                        },
                        "start": 1198,
                        "end": 1203
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VN",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1208,
                              "end": 1210
                            },
                            "typeArguments": null,
                            "start": 1208,
                            "end": 1210
                          },
                          "start": 1206,
                          "end": 1210
                        },
                        "start": 1205,
                        "end": 1210
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1215,
                          "end": 1216
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SN",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1218,
                                "end": 1220
                              },
                              "typeArguments": null,
                              "start": 1218,
                              "end": 1220
                            },
                            "start": 1218,
                            "end": 1222
                          },
                          "start": 1216,
                          "end": 1222
                        },
                        "value": null,
                        "start": 1212,
                        "end": 1222
                      }
                    ],
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
                              "name": "PromiseBase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1227,
                              "end": 1238
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1239,
                                    "end": 1242
                                  },
                                  "typeArguments": null,
                                  "start": 1239,
                                  "end": 1242
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1244,
                                    "end": 1247
                                  },
                                  "typeArguments": null,
                                  "start": 1244,
                                  "end": 1247
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1249,
                                    "end": 1252
                                  },
                                  "typeArguments": null,
                                  "start": 1249,
                                  "end": 1252
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1270,
                                    "end": 1273
                                  },
                                  "typeArguments": null,
                                  "start": 1270,
                                  "end": 1273
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1275,
                                    "end": 1278
                                  },
                                  "typeArguments": null,
                                  "start": 1275,
                                  "end": 1278
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BNP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1280,
                                    "end": 1283
                                  },
                                  "typeArguments": null,
                                  "start": 1280,
                                  "end": 1283
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1301,
                                    "end": 1304
                                  },
                                  "typeArguments": null,
                                  "start": 1301,
                                  "end": 1304
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1306,
                                    "end": 1309
                                  },
                                  "typeArguments": null,
                                  "start": 1306,
                                  "end": 1309
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CNP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1311,
                                    "end": 1314
                                  },
                                  "typeArguments": null,
                                  "start": 1311,
                                  "end": 1314
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1332,
                                    "end": 1335
                                  },
                                  "typeArguments": null,
                                  "start": 1332,
                                  "end": 1335
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1337,
                                    "end": 1340
                                  },
                                  "typeArguments": null,
                                  "start": 1337,
                                  "end": 1340
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RNP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1342,
                                    "end": 1345
                                  },
                                  "typeArguments": null,
                                  "start": 1342,
                                  "end": 1345
                                }
                              ],
                              "start": 1238,
                              "end": 1346
                            },
                            "start": 1227,
                            "end": 1346
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1349,
                              "end": 1357
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1358,
                                    "end": 1361
                                  },
                                  "typeArguments": null,
                                  "start": 1358,
                                  "end": 1361
                                }
                              ],
                              "start": 1357,
                              "end": 1362
                            },
                            "start": 1349,
                            "end": 1362
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ANP",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1365,
                              "end": 1368
                            },
                            "typeArguments": null,
                            "start": 1365,
                            "end": 1368
                          }
                        ],
                        "start": 1227,
                        "end": 1368
                      },
                      "start": 1224,
                      "end": 1368
                    },
                    "start": 1190,
                    "end": 1368
                  },
                  "start": 1188,
                  "end": 1368
                },
                "start": 1174,
                "end": 1368
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PromiseBase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1371,
                  "end": 1382
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ARD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1383,
                            "end": 1386
                          },
                          "typeArguments": null,
                          "start": 1383,
                          "end": 1386
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ARF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1389,
                            "end": 1392
                          },
                          "typeArguments": null,
                          "start": 1389,
                          "end": 1392
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ARP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1395,
                            "end": 1398
                          },
                          "typeArguments": null,
                          "start": 1395,
                          "end": 1398
                        }
                      ],
                      "start": 1383,
                      "end": 1398
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AJD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1400,
                            "end": 1403
                          },
                          "typeArguments": null,
                          "start": 1400,
                          "end": 1403
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AJF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1406,
                            "end": 1409
                          },
                          "typeArguments": null,
                          "start": 1406,
                          "end": 1409
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AJP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1412,
                            "end": 1415
                          },
                          "typeArguments": null,
                          "start": 1412,
                          "end": 1415
                        }
                      ],
                      "start": 1400,
                      "end": 1415
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AND",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1417,
                            "end": 1420
                          },
                          "typeArguments": null,
                          "start": 1417,
                          "end": 1420
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ANF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1423,
                            "end": 1426
                          },
                          "typeArguments": null,
                          "start": 1423,
                          "end": 1426
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ANP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1429,
                            "end": 1432
                          },
                          "typeArguments": null,
                          "start": 1429,
                          "end": 1432
                        }
                      ],
                      "start": 1417,
                      "end": 1432
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BRD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1442,
                            "end": 1445
                          },
                          "typeArguments": null,
                          "start": 1442,
                          "end": 1445
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BRF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1448,
                            "end": 1451
                          },
                          "typeArguments": null,
                          "start": 1448,
                          "end": 1451
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BRP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1454,
                            "end": 1457
                          },
                          "typeArguments": null,
                          "start": 1454,
                          "end": 1457
                        }
                      ],
                      "start": 1442,
                      "end": 1457
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BJD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1459,
                            "end": 1462
                          },
                          "typeArguments": null,
                          "start": 1459,
                          "end": 1462
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BJF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1465,
                            "end": 1468
                          },
                          "typeArguments": null,
                          "start": 1465,
                          "end": 1468
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BJP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1471,
                            "end": 1474
                          },
                          "typeArguments": null,
                          "start": 1471,
                          "end": 1474
                        }
                      ],
                      "start": 1459,
                      "end": 1474
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BND",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1476,
                            "end": 1479
                          },
                          "typeArguments": null,
                          "start": 1476,
                          "end": 1479
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BNF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1482,
                            "end": 1485
                          },
                          "typeArguments": null,
                          "start": 1482,
                          "end": 1485
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BNP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1488,
                            "end": 1491
                          },
                          "typeArguments": null,
                          "start": 1488,
                          "end": 1491
                        }
                      ],
                      "start": 1476,
                      "end": 1491
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CRD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1501,
                            "end": 1504
                          },
                          "typeArguments": null,
                          "start": 1501,
                          "end": 1504
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CRF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1507,
                            "end": 1510
                          },
                          "typeArguments": null,
                          "start": 1507,
                          "end": 1510
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CRP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1513,
                            "end": 1516
                          },
                          "typeArguments": null,
                          "start": 1513,
                          "end": 1516
                        }
                      ],
                      "start": 1501,
                      "end": 1516
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CJD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1518,
                            "end": 1521
                          },
                          "typeArguments": null,
                          "start": 1518,
                          "end": 1521
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CJF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1524,
                            "end": 1527
                          },
                          "typeArguments": null,
                          "start": 1524,
                          "end": 1527
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CJP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1530,
                            "end": 1533
                          },
                          "typeArguments": null,
                          "start": 1530,
                          "end": 1533
                        }
                      ],
                      "start": 1518,
                      "end": 1533
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CND",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1535,
                            "end": 1538
                          },
                          "typeArguments": null,
                          "start": 1535,
                          "end": 1538
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CNF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1541,
                            "end": 1544
                          },
                          "typeArguments": null,
                          "start": 1541,
                          "end": 1544
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CNP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1547,
                            "end": 1550
                          },
                          "typeArguments": null,
                          "start": 1547,
                          "end": 1550
                        }
                      ],
                      "start": 1535,
                      "end": 1550
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RRD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1560,
                            "end": 1563
                          },
                          "typeArguments": null,
                          "start": 1560,
                          "end": 1563
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RRF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1566,
                            "end": 1569
                          },
                          "typeArguments": null,
                          "start": 1566,
                          "end": 1569
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RRP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1572,
                            "end": 1575
                          },
                          "typeArguments": null,
                          "start": 1572,
                          "end": 1575
                        }
                      ],
                      "start": 1560,
                      "end": 1575
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RJD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1577,
                            "end": 1580
                          },
                          "typeArguments": null,
                          "start": 1577,
                          "end": 1580
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RJF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1583,
                            "end": 1586
                          },
                          "typeArguments": null,
                          "start": 1583,
                          "end": 1586
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RJP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1589,
                            "end": 1592
                          },
                          "typeArguments": null,
                          "start": 1589,
                          "end": 1592
                        }
                      ],
                      "start": 1577,
                      "end": 1592
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RND",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1594,
                            "end": 1597
                          },
                          "typeArguments": null,
                          "start": 1594,
                          "end": 1597
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RNF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1600,
                            "end": 1603
                          },
                          "typeArguments": null,
                          "start": 1600,
                          "end": 1603
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RNP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1606,
                            "end": 1609
                          },
                          "typeArguments": null,
                          "start": 1606,
                          "end": 1609
                        }
                      ],
                      "start": 1594,
                      "end": 1609
                    }
                  ],
                  "start": 1382,
                  "end": 1610
                },
                "start": 1371,
                "end": 1610
              },
              "start": 1369,
              "end": 1610
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 192,
            "end": 1611
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 1616,
              "end": 1620
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1621,
                    "end": 1624
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1627,
                    "end": 1632
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1621,
                  "end": 1632
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1634,
                    "end": 1637
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1640,
                    "end": 1645
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1634,
                  "end": 1645
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1647,
                    "end": 1650
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1653,
                    "end": 1658
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1647,
                  "end": 1658
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1668,
                    "end": 1671
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1674,
                    "end": 1679
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1668,
                  "end": 1679
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1681,
                    "end": 1684
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1687,
                    "end": 1692
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1681,
                  "end": 1692
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BNF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1694,
                    "end": 1697
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1700,
                    "end": 1705
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1694,
                  "end": 1705
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1715,
                    "end": 1718
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1721,
                    "end": 1726
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1715,
                  "end": 1726
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1728,
                    "end": 1731
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1734,
                    "end": 1739
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1728,
                  "end": 1739
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CNF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1741,
                    "end": 1744
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1747,
                    "end": 1752
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1741,
                  "end": 1752
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1762,
                    "end": 1765
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1768,
                    "end": 1773
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1762,
                  "end": 1773
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1775,
                    "end": 1778
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1781,
                    "end": 1786
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1775,
                  "end": 1786
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RNF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1788,
                    "end": 1791
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1794,
                    "end": 1799
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1788,
                  "end": 1799
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1809,
                    "end": 1812
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1815,
                    "end": 1820
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1809,
                  "end": 1820
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1822,
                    "end": 1825
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1828,
                    "end": 1833
                  },
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
                    "name": "ANP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1835,
                    "end": 1838
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1841,
                    "end": 1846
                  },
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
                    "name": "BRP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1856,
                    "end": 1859
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1862,
                    "end": 1867
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1856,
                  "end": 1867
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1869,
                    "end": 1872
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1875,
                    "end": 1880
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1869,
                  "end": 1880
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BNP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1882,
                    "end": 1885
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1888,
                    "end": 1893
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1882,
                  "end": 1893
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1903,
                    "end": 1906
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1909,
                    "end": 1914
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1903,
                  "end": 1914
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1916,
                    "end": 1919
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1922,
                    "end": 1927
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1916,
                  "end": 1927
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CNP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1929,
                    "end": 1932
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1935,
                    "end": 1940
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1929,
                  "end": 1940
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1950,
                    "end": 1953
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1956,
                    "end": 1961
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1950,
                  "end": 1961
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1963,
                    "end": 1966
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1969,
                    "end": 1974
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1963,
                  "end": 1974
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RNP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1976,
                    "end": 1979
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 1982,
                    "end": 1987
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1976,
                  "end": 1987
                }
              ],
              "start": 1620,
              "end": 1988
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "doneFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 2014,
                    "end": 2018
                  },
                  "start": 2012,
                  "end": 2018
                },
                "start": 2002,
                "end": 2018
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "failFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TJ",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2048,
                              "end": 2050
                            },
                            "typeArguments": null,
                            "start": 2048,
                            "end": 2050
                          },
                          "start": 2046,
                          "end": 2050
                        },
                        "start": 2045,
                        "end": 2050
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UJ",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2055,
                              "end": 2057
                            },
                            "typeArguments": null,
                            "start": 2055,
                            "end": 2057
                          },
                          "start": 2053,
                          "end": 2057
                        },
                        "start": 2052,
                        "end": 2057
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VJ",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2062,
                              "end": 2064
                            },
                            "typeArguments": null,
                            "start": 2062,
                            "end": 2064
                          },
                          "start": 2060,
                          "end": 2064
                        },
                        "start": 2059,
                        "end": 2064
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2069,
                          "end": 2070
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SJ",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2072,
                                "end": 2074
                              },
                              "typeArguments": null,
                              "start": 2072,
                              "end": 2074
                            },
                            "start": 2072,
                            "end": 2076
                          },
                          "start": 2070,
                          "end": 2076
                        },
                        "value": null,
                        "start": 2066,
                        "end": 2076
                      }
                    ],
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
                              "name": "PromiseBase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2081,
                              "end": 2092
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2093,
                                    "end": 2096
                                  },
                                  "typeArguments": null,
                                  "start": 2093,
                                  "end": 2096
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2098,
                                    "end": 2101
                                  },
                                  "typeArguments": null,
                                  "start": 2098,
                                  "end": 2101
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2103,
                                    "end": 2106
                                  },
                                  "typeArguments": null,
                                  "start": 2103,
                                  "end": 2106
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2124,
                                    "end": 2127
                                  },
                                  "typeArguments": null,
                                  "start": 2124,
                                  "end": 2127
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2129,
                                    "end": 2132
                                  },
                                  "typeArguments": null,
                                  "start": 2129,
                                  "end": 2132
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BNF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2134,
                                    "end": 2137
                                  },
                                  "typeArguments": null,
                                  "start": 2134,
                                  "end": 2137
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2155,
                                    "end": 2158
                                  },
                                  "typeArguments": null,
                                  "start": 2155,
                                  "end": 2158
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2160,
                                    "end": 2163
                                  },
                                  "typeArguments": null,
                                  "start": 2160,
                                  "end": 2163
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CNF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2165,
                                    "end": 2168
                                  },
                                  "typeArguments": null,
                                  "start": 2165,
                                  "end": 2168
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2186,
                                    "end": 2189
                                  },
                                  "typeArguments": null,
                                  "start": 2186,
                                  "end": 2189
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2191,
                                    "end": 2194
                                  },
                                  "typeArguments": null,
                                  "start": 2191,
                                  "end": 2194
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RNF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2196,
                                    "end": 2199
                                  },
                                  "typeArguments": null,
                                  "start": 2196,
                                  "end": 2199
                                }
                              ],
                              "start": 2092,
                              "end": 2200
                            },
                            "start": 2081,
                            "end": 2200
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2203,
                              "end": 2211
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2212,
                                    "end": 2215
                                  },
                                  "typeArguments": null,
                                  "start": 2212,
                                  "end": 2215
                                }
                              ],
                              "start": 2211,
                              "end": 2216
                            },
                            "start": 2203,
                            "end": 2216
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ARF",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2219,
                              "end": 2222
                            },
                            "typeArguments": null,
                            "start": 2219,
                            "end": 2222
                          }
                        ],
                        "start": 2081,
                        "end": 2222
                      },
                      "start": 2078,
                      "end": 2222
                    },
                    "start": 2044,
                    "end": 2222
                  },
                  "start": 2042,
                  "end": 2222
                },
                "start": 2032,
                "end": 2222
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progressFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TN",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2256,
                              "end": 2258
                            },
                            "typeArguments": null,
                            "start": 2256,
                            "end": 2258
                          },
                          "start": 2254,
                          "end": 2258
                        },
                        "start": 2253,
                        "end": 2258
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UN",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2263,
                              "end": 2265
                            },
                            "typeArguments": null,
                            "start": 2263,
                            "end": 2265
                          },
                          "start": 2261,
                          "end": 2265
                        },
                        "start": 2260,
                        "end": 2265
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VN",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2270,
                              "end": 2272
                            },
                            "typeArguments": null,
                            "start": 2270,
                            "end": 2272
                          },
                          "start": 2268,
                          "end": 2272
                        },
                        "start": 2267,
                        "end": 2272
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2277,
                          "end": 2278
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SN",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2280,
                                "end": 2282
                              },
                              "typeArguments": null,
                              "start": 2280,
                              "end": 2282
                            },
                            "start": 2280,
                            "end": 2284
                          },
                          "start": 2278,
                          "end": 2284
                        },
                        "value": null,
                        "start": 2274,
                        "end": 2284
                      }
                    ],
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
                              "name": "PromiseBase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2289,
                              "end": 2300
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2301,
                                    "end": 2304
                                  },
                                  "typeArguments": null,
                                  "start": 2301,
                                  "end": 2304
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2306,
                                    "end": 2309
                                  },
                                  "typeArguments": null,
                                  "start": 2306,
                                  "end": 2309
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2311,
                                    "end": 2314
                                  },
                                  "typeArguments": null,
                                  "start": 2311,
                                  "end": 2314
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2332,
                                    "end": 2335
                                  },
                                  "typeArguments": null,
                                  "start": 2332,
                                  "end": 2335
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2337,
                                    "end": 2340
                                  },
                                  "typeArguments": null,
                                  "start": 2337,
                                  "end": 2340
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BNP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2342,
                                    "end": 2345
                                  },
                                  "typeArguments": null,
                                  "start": 2342,
                                  "end": 2345
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2363,
                                    "end": 2366
                                  },
                                  "typeArguments": null,
                                  "start": 2363,
                                  "end": 2366
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2368,
                                    "end": 2371
                                  },
                                  "typeArguments": null,
                                  "start": 2368,
                                  "end": 2371
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CNP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2373,
                                    "end": 2376
                                  },
                                  "typeArguments": null,
                                  "start": 2373,
                                  "end": 2376
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2394,
                                    "end": 2397
                                  },
                                  "typeArguments": null,
                                  "start": 2394,
                                  "end": 2397
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2399,
                                    "end": 2402
                                  },
                                  "typeArguments": null,
                                  "start": 2399,
                                  "end": 2402
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RNP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2404,
                                    "end": 2407
                                  },
                                  "typeArguments": null,
                                  "start": 2404,
                                  "end": 2407
                                }
                              ],
                              "start": 2300,
                              "end": 2408
                            },
                            "start": 2289,
                            "end": 2408
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2411,
                              "end": 2419
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2420,
                                    "end": 2423
                                  },
                                  "typeArguments": null,
                                  "start": 2420,
                                  "end": 2423
                                }
                              ],
                              "start": 2419,
                              "end": 2424
                            },
                            "start": 2411,
                            "end": 2424
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ANP",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2427,
                              "end": 2430
                            },
                            "typeArguments": null,
                            "start": 2427,
                            "end": 2430
                          }
                        ],
                        "start": 2289,
                        "end": 2430
                      },
                      "start": 2286,
                      "end": 2430
                    },
                    "start": 2252,
                    "end": 2430
                  },
                  "start": 2250,
                  "end": 2430
                },
                "start": 2236,
                "end": 2430
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PromiseBase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2433,
                  "end": 2444
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ARF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2445,
                            "end": 2448
                          },
                          "typeArguments": null,
                          "start": 2445,
                          "end": 2448
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ARP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2451,
                            "end": 2454
                          },
                          "typeArguments": null,
                          "start": 2451,
                          "end": 2454
                        }
                      ],
                      "start": 2445,
                      "end": 2454
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AJF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2456,
                            "end": 2459
                          },
                          "typeArguments": null,
                          "start": 2456,
                          "end": 2459
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AJP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2462,
                            "end": 2465
                          },
                          "typeArguments": null,
                          "start": 2462,
                          "end": 2465
                        }
                      ],
                      "start": 2456,
                      "end": 2465
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ANF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2467,
                            "end": 2470
                          },
                          "typeArguments": null,
                          "start": 2467,
                          "end": 2470
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ANP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2473,
                            "end": 2476
                          },
                          "typeArguments": null,
                          "start": 2473,
                          "end": 2476
                        }
                      ],
                      "start": 2467,
                      "end": 2476
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BRF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2486,
                            "end": 2489
                          },
                          "typeArguments": null,
                          "start": 2486,
                          "end": 2489
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BRP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2492,
                            "end": 2495
                          },
                          "typeArguments": null,
                          "start": 2492,
                          "end": 2495
                        }
                      ],
                      "start": 2486,
                      "end": 2495
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BJF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2497,
                            "end": 2500
                          },
                          "typeArguments": null,
                          "start": 2497,
                          "end": 2500
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BJP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2503,
                            "end": 2506
                          },
                          "typeArguments": null,
                          "start": 2503,
                          "end": 2506
                        }
                      ],
                      "start": 2497,
                      "end": 2506
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BNF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2508,
                            "end": 2511
                          },
                          "typeArguments": null,
                          "start": 2508,
                          "end": 2511
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BNP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2514,
                            "end": 2517
                          },
                          "typeArguments": null,
                          "start": 2514,
                          "end": 2517
                        }
                      ],
                      "start": 2508,
                      "end": 2517
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CRF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2527,
                            "end": 2530
                          },
                          "typeArguments": null,
                          "start": 2527,
                          "end": 2530
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CRP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2533,
                            "end": 2536
                          },
                          "typeArguments": null,
                          "start": 2533,
                          "end": 2536
                        }
                      ],
                      "start": 2527,
                      "end": 2536
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CJF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2538,
                            "end": 2541
                          },
                          "typeArguments": null,
                          "start": 2538,
                          "end": 2541
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CJP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2544,
                            "end": 2547
                          },
                          "typeArguments": null,
                          "start": 2544,
                          "end": 2547
                        }
                      ],
                      "start": 2538,
                      "end": 2547
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CNF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2549,
                            "end": 2552
                          },
                          "typeArguments": null,
                          "start": 2549,
                          "end": 2552
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CNP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2555,
                            "end": 2558
                          },
                          "typeArguments": null,
                          "start": 2555,
                          "end": 2558
                        }
                      ],
                      "start": 2549,
                      "end": 2558
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RRF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2568,
                            "end": 2571
                          },
                          "typeArguments": null,
                          "start": 2568,
                          "end": 2571
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RRP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2574,
                            "end": 2577
                          },
                          "typeArguments": null,
                          "start": 2574,
                          "end": 2577
                        }
                      ],
                      "start": 2568,
                      "end": 2577
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RJF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2579,
                            "end": 2582
                          },
                          "typeArguments": null,
                          "start": 2579,
                          "end": 2582
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RJP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2585,
                            "end": 2588
                          },
                          "typeArguments": null,
                          "start": 2585,
                          "end": 2588
                        }
                      ],
                      "start": 2579,
                      "end": 2588
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RNF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2590,
                            "end": 2593
                          },
                          "typeArguments": null,
                          "start": 2590,
                          "end": 2593
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RNP",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2596,
                            "end": 2599
                          },
                          "typeArguments": null,
                          "start": 2596,
                          "end": 2599
                        }
                      ],
                      "start": 2590,
                      "end": 2599
                    }
                  ],
                  "start": 2444,
                  "end": 2600
                },
                "start": 2433,
                "end": 2600
              },
              "start": 2431,
              "end": 2600
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1616,
            "end": 2601
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 2606,
              "end": 2610
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2611,
                    "end": 2614
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2617,
                    "end": 2622
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2611,
                  "end": 2622
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2624,
                    "end": 2627
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2630,
                    "end": 2635
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2624,
                  "end": 2635
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2637,
                    "end": 2640
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2643,
                    "end": 2648
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2637,
                  "end": 2648
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2658,
                    "end": 2661
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2664,
                    "end": 2669
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2658,
                  "end": 2669
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2671,
                    "end": 2674
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2677,
                    "end": 2682
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2671,
                  "end": 2682
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BNP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2684,
                    "end": 2687
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2690,
                    "end": 2695
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2684,
                  "end": 2695
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2705,
                    "end": 2708
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2711,
                    "end": 2716
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2705,
                  "end": 2716
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2718,
                    "end": 2721
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2724,
                    "end": 2729
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2718,
                  "end": 2729
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CNP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2731,
                    "end": 2734
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2737,
                    "end": 2742
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2731,
                  "end": 2742
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2752,
                    "end": 2755
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2758,
                    "end": 2763
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2752,
                  "end": 2763
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2765,
                    "end": 2768
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2771,
                    "end": 2776
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2765,
                  "end": 2776
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RNP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2778,
                    "end": 2781
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 2784,
                    "end": 2789
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2778,
                  "end": 2789
                }
              ],
              "start": 2610,
              "end": 2790
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "doneFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 2816,
                    "end": 2820
                  },
                  "start": 2814,
                  "end": 2820
                },
                "start": 2804,
                "end": 2820
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "failFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 2846,
                    "end": 2850
                  },
                  "start": 2844,
                  "end": 2850
                },
                "start": 2834,
                "end": 2850
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progressFilter",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TN",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2885,
                              "end": 2887
                            },
                            "typeArguments": null,
                            "start": 2885,
                            "end": 2887
                          },
                          "start": 2883,
                          "end": 2887
                        },
                        "start": 2882,
                        "end": 2887
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UN",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2892,
                              "end": 2894
                            },
                            "typeArguments": null,
                            "start": 2892,
                            "end": 2894
                          },
                          "start": 2890,
                          "end": 2894
                        },
                        "start": 2889,
                        "end": 2894
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VN",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2899,
                              "end": 2901
                            },
                            "typeArguments": null,
                            "start": 2899,
                            "end": 2901
                          },
                          "start": 2897,
                          "end": 2901
                        },
                        "start": 2896,
                        "end": 2901
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2906,
                          "end": 2907
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SN",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2909,
                                "end": 2911
                              },
                              "typeArguments": null,
                              "start": 2909,
                              "end": 2911
                            },
                            "start": 2909,
                            "end": 2913
                          },
                          "start": 2907,
                          "end": 2913
                        },
                        "value": null,
                        "start": 2903,
                        "end": 2913
                      }
                    ],
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
                              "name": "PromiseBase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2918,
                              "end": 2929
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2930,
                                    "end": 2933
                                  },
                                  "typeArguments": null,
                                  "start": 2930,
                                  "end": 2933
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2935,
                                    "end": 2938
                                  },
                                  "typeArguments": null,
                                  "start": 2935,
                                  "end": 2938
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2940,
                                    "end": 2943
                                  },
                                  "typeArguments": null,
                                  "start": 2940,
                                  "end": 2943
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2961,
                                    "end": 2964
                                  },
                                  "typeArguments": null,
                                  "start": 2961,
                                  "end": 2964
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2966,
                                    "end": 2969
                                  },
                                  "typeArguments": null,
                                  "start": 2966,
                                  "end": 2969
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BNP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2971,
                                    "end": 2974
                                  },
                                  "typeArguments": null,
                                  "start": 2971,
                                  "end": 2974
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2992,
                                    "end": 2995
                                  },
                                  "typeArguments": null,
                                  "start": 2992,
                                  "end": 2995
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2997,
                                    "end": 3000
                                  },
                                  "typeArguments": null,
                                  "start": 2997,
                                  "end": 3000
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CNP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3002,
                                    "end": 3005
                                  },
                                  "typeArguments": null,
                                  "start": 3002,
                                  "end": 3005
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3023,
                                    "end": 3026
                                  },
                                  "typeArguments": null,
                                  "start": 3023,
                                  "end": 3026
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3028,
                                    "end": 3031
                                  },
                                  "typeArguments": null,
                                  "start": 3028,
                                  "end": 3031
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RNP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3033,
                                    "end": 3036
                                  },
                                  "typeArguments": null,
                                  "start": 3033,
                                  "end": 3036
                                }
                              ],
                              "start": 2929,
                              "end": 3037
                            },
                            "start": 2918,
                            "end": 3037
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3040,
                              "end": 3048
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANP",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3049,
                                    "end": 3052
                                  },
                                  "typeArguments": null,
                                  "start": 3049,
                                  "end": 3052
                                }
                              ],
                              "start": 3048,
                              "end": 3053
                            },
                            "start": 3040,
                            "end": 3053
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ANP",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3056,
                              "end": 3059
                            },
                            "typeArguments": null,
                            "start": 3056,
                            "end": 3059
                          }
                        ],
                        "start": 2918,
                        "end": 3059
                      },
                      "start": 2915,
                      "end": 3059
                    },
                    "start": 2881,
                    "end": 3059
                  },
                  "start": 2879,
                  "end": 3059
                },
                "start": 2864,
                "end": 3059
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PromiseBase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3062,
                  "end": 3073
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ARP",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3074,
                        "end": 3077
                      },
                      "typeArguments": null,
                      "start": 3074,
                      "end": 3077
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AJP",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3079,
                        "end": 3082
                      },
                      "typeArguments": null,
                      "start": 3079,
                      "end": 3082
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ANP",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3084,
                        "end": 3087
                      },
                      "typeArguments": null,
                      "start": 3084,
                      "end": 3087
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BRP",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3097,
                        "end": 3100
                      },
                      "typeArguments": null,
                      "start": 3097,
                      "end": 3100
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BJP",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3102,
                        "end": 3105
                      },
                      "typeArguments": null,
                      "start": 3102,
                      "end": 3105
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BNP",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3107,
                        "end": 3110
                      },
                      "typeArguments": null,
                      "start": 3107,
                      "end": 3110
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CRP",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3120,
                        "end": 3123
                      },
                      "typeArguments": null,
                      "start": 3120,
                      "end": 3123
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CJP",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3125,
                        "end": 3128
                      },
                      "typeArguments": null,
                      "start": 3125,
                      "end": 3128
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CNP",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3130,
                        "end": 3133
                      },
                      "typeArguments": null,
                      "start": 3130,
                      "end": 3133
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RRP",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3143,
                        "end": 3146
                      },
                      "typeArguments": null,
                      "start": 3143,
                      "end": 3146
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RJP",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3148,
                        "end": 3151
                      },
                      "typeArguments": null,
                      "start": 3148,
                      "end": 3151
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RNP",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3153,
                        "end": 3156
                      },
                      "typeArguments": null,
                      "start": 3153,
                      "end": 3156
                    }
                  ],
                  "start": 3073,
                  "end": 3157
                },
                "start": 3062,
                "end": 3157
              },
              "start": 3060,
              "end": 3157
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2606,
            "end": 3158
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 3163,
              "end": 3167
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3168,
                    "end": 3171
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3174,
                    "end": 3179
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3168,
                  "end": 3179
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3181,
                    "end": 3184
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3187,
                    "end": 3192
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3181,
                  "end": 3192
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AND",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3194,
                    "end": 3197
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3200,
                    "end": 3205
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3194,
                  "end": 3205
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3215,
                    "end": 3218
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3221,
                    "end": 3226
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3215,
                  "end": 3226
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3228,
                    "end": 3231
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3234,
                    "end": 3239
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3228,
                  "end": 3239
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BND",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3241,
                    "end": 3244
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3247,
                    "end": 3252
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3241,
                  "end": 3252
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3262,
                    "end": 3265
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3268,
                    "end": 3273
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3262,
                  "end": 3273
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3275,
                    "end": 3278
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3281,
                    "end": 3286
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3275,
                  "end": 3286
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CND",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3288,
                    "end": 3291
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3294,
                    "end": 3299
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3288,
                  "end": 3299
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3309,
                    "end": 3312
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3315,
                    "end": 3320
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3309,
                  "end": 3320
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3322,
                    "end": 3325
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3328,
                    "end": 3333
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3322,
                  "end": 3333
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RND",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3335,
                    "end": 3338
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3341,
                    "end": 3346
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3335,
                  "end": 3346
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3356,
                    "end": 3359
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3362,
                    "end": 3367
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3356,
                  "end": 3367
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3369,
                    "end": 3372
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3375,
                    "end": 3380
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3369,
                  "end": 3380
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3382,
                    "end": 3385
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3388,
                    "end": 3393
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3382,
                  "end": 3393
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3403,
                    "end": 3406
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3409,
                    "end": 3414
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3403,
                  "end": 3414
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3416,
                    "end": 3419
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3422,
                    "end": 3427
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3416,
                  "end": 3427
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BNF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3429,
                    "end": 3432
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3435,
                    "end": 3440
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3429,
                  "end": 3440
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3450,
                    "end": 3453
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3456,
                    "end": 3461
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3450,
                  "end": 3461
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3463,
                    "end": 3466
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3469,
                    "end": 3474
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3463,
                  "end": 3474
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CNF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3476,
                    "end": 3479
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3482,
                    "end": 3487
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3476,
                  "end": 3487
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3497,
                    "end": 3500
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3503,
                    "end": 3508
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3497,
                  "end": 3508
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3510,
                    "end": 3513
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3516,
                    "end": 3521
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3510,
                  "end": 3521
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RNF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3523,
                    "end": 3526
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 3529,
                    "end": 3534
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3523,
                  "end": 3534
                }
              ],
              "start": 3167,
              "end": 3535
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "doneFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TR",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3565,
                              "end": 3567
                            },
                            "typeArguments": null,
                            "start": 3565,
                            "end": 3567
                          },
                          "start": 3563,
                          "end": 3567
                        },
                        "start": 3562,
                        "end": 3567
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UR",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3572,
                              "end": 3574
                            },
                            "typeArguments": null,
                            "start": 3572,
                            "end": 3574
                          },
                          "start": 3570,
                          "end": 3574
                        },
                        "start": 3569,
                        "end": 3574
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VR",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3579,
                              "end": 3581
                            },
                            "typeArguments": null,
                            "start": 3579,
                            "end": 3581
                          },
                          "start": 3577,
                          "end": 3581
                        },
                        "start": 3576,
                        "end": 3581
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3586,
                          "end": 3587
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SR",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3589,
                                "end": 3591
                              },
                              "typeArguments": null,
                              "start": 3589,
                              "end": 3591
                            },
                            "start": 3589,
                            "end": 3593
                          },
                          "start": 3587,
                          "end": 3593
                        },
                        "value": null,
                        "start": 3583,
                        "end": 3593
                      }
                    ],
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
                              "name": "PromiseBase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3598,
                              "end": 3609
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3610,
                                    "end": 3613
                                  },
                                  "typeArguments": null,
                                  "start": 3610,
                                  "end": 3613
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3615,
                                    "end": 3618
                                  },
                                  "typeArguments": null,
                                  "start": 3615,
                                  "end": 3618
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AND",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3620,
                                    "end": 3623
                                  },
                                  "typeArguments": null,
                                  "start": 3620,
                                  "end": 3623
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3641,
                                    "end": 3644
                                  },
                                  "typeArguments": null,
                                  "start": 3641,
                                  "end": 3644
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3646,
                                    "end": 3649
                                  },
                                  "typeArguments": null,
                                  "start": 3646,
                                  "end": 3649
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BND",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3651,
                                    "end": 3654
                                  },
                                  "typeArguments": null,
                                  "start": 3651,
                                  "end": 3654
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3672,
                                    "end": 3675
                                  },
                                  "typeArguments": null,
                                  "start": 3672,
                                  "end": 3675
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3677,
                                    "end": 3680
                                  },
                                  "typeArguments": null,
                                  "start": 3677,
                                  "end": 3680
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CND",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3682,
                                    "end": 3685
                                  },
                                  "typeArguments": null,
                                  "start": 3682,
                                  "end": 3685
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3703,
                                    "end": 3706
                                  },
                                  "typeArguments": null,
                                  "start": 3703,
                                  "end": 3706
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3708,
                                    "end": 3711
                                  },
                                  "typeArguments": null,
                                  "start": 3708,
                                  "end": 3711
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RND",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3713,
                                    "end": 3716
                                  },
                                  "typeArguments": null,
                                  "start": 3713,
                                  "end": 3716
                                }
                              ],
                              "start": 3609,
                              "end": 3717
                            },
                            "start": 3598,
                            "end": 3717
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3720,
                              "end": 3728
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3729,
                                    "end": 3732
                                  },
                                  "typeArguments": null,
                                  "start": 3729,
                                  "end": 3732
                                }
                              ],
                              "start": 3728,
                              "end": 3733
                            },
                            "start": 3720,
                            "end": 3733
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ARD",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3736,
                              "end": 3739
                            },
                            "typeArguments": null,
                            "start": 3736,
                            "end": 3739
                          }
                        ],
                        "start": 3598,
                        "end": 3739
                      },
                      "start": 3595,
                      "end": 3739
                    },
                    "start": 3561,
                    "end": 3739
                  },
                  "start": 3559,
                  "end": 3739
                },
                "start": 3549,
                "end": 3739
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "failFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TJ",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3769,
                              "end": 3771
                            },
                            "typeArguments": null,
                            "start": 3769,
                            "end": 3771
                          },
                          "start": 3767,
                          "end": 3771
                        },
                        "start": 3766,
                        "end": 3771
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UJ",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3776,
                              "end": 3778
                            },
                            "typeArguments": null,
                            "start": 3776,
                            "end": 3778
                          },
                          "start": 3774,
                          "end": 3778
                        },
                        "start": 3773,
                        "end": 3778
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VJ",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3783,
                              "end": 3785
                            },
                            "typeArguments": null,
                            "start": 3783,
                            "end": 3785
                          },
                          "start": 3781,
                          "end": 3785
                        },
                        "start": 3780,
                        "end": 3785
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3790,
                          "end": 3791
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SJ",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3793,
                                "end": 3795
                              },
                              "typeArguments": null,
                              "start": 3793,
                              "end": 3795
                            },
                            "start": 3793,
                            "end": 3797
                          },
                          "start": 3791,
                          "end": 3797
                        },
                        "value": null,
                        "start": 3787,
                        "end": 3797
                      }
                    ],
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
                              "name": "PromiseBase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3802,
                              "end": 3813
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3814,
                                    "end": 3817
                                  },
                                  "typeArguments": null,
                                  "start": 3814,
                                  "end": 3817
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3819,
                                    "end": 3822
                                  },
                                  "typeArguments": null,
                                  "start": 3819,
                                  "end": 3822
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3824,
                                    "end": 3827
                                  },
                                  "typeArguments": null,
                                  "start": 3824,
                                  "end": 3827
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3845,
                                    "end": 3848
                                  },
                                  "typeArguments": null,
                                  "start": 3845,
                                  "end": 3848
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3850,
                                    "end": 3853
                                  },
                                  "typeArguments": null,
                                  "start": 3850,
                                  "end": 3853
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BNF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3855,
                                    "end": 3858
                                  },
                                  "typeArguments": null,
                                  "start": 3855,
                                  "end": 3858
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3876,
                                    "end": 3879
                                  },
                                  "typeArguments": null,
                                  "start": 3876,
                                  "end": 3879
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3881,
                                    "end": 3884
                                  },
                                  "typeArguments": null,
                                  "start": 3881,
                                  "end": 3884
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CNF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3886,
                                    "end": 3889
                                  },
                                  "typeArguments": null,
                                  "start": 3886,
                                  "end": 3889
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3907,
                                    "end": 3910
                                  },
                                  "typeArguments": null,
                                  "start": 3907,
                                  "end": 3910
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3912,
                                    "end": 3915
                                  },
                                  "typeArguments": null,
                                  "start": 3912,
                                  "end": 3915
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RNF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3917,
                                    "end": 3920
                                  },
                                  "typeArguments": null,
                                  "start": 3917,
                                  "end": 3920
                                }
                              ],
                              "start": 3813,
                              "end": 3921
                            },
                            "start": 3802,
                            "end": 3921
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3924,
                              "end": 3932
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3933,
                                    "end": 3936
                                  },
                                  "typeArguments": null,
                                  "start": 3933,
                                  "end": 3936
                                }
                              ],
                              "start": 3932,
                              "end": 3937
                            },
                            "start": 3924,
                            "end": 3937
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ARF",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3940,
                              "end": 3943
                            },
                            "typeArguments": null,
                            "start": 3940,
                            "end": 3943
                          }
                        ],
                        "start": 3802,
                        "end": 3943
                      },
                      "start": 3799,
                      "end": 3943
                    },
                    "start": 3765,
                    "end": 3943
                  },
                  "start": 3763,
                  "end": 3943
                },
                "start": 3753,
                "end": 3943
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progressFilter",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 3974,
                    "end": 3978
                  },
                  "start": 3972,
                  "end": 3978
                },
                "start": 3957,
                "end": 3978
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PromiseBase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3981,
                  "end": 3992
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ARD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3993,
                            "end": 3996
                          },
                          "typeArguments": null,
                          "start": 3993,
                          "end": 3996
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ARF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3999,
                            "end": 4002
                          },
                          "typeArguments": null,
                          "start": 3999,
                          "end": 4002
                        }
                      ],
                      "start": 3993,
                      "end": 4002
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AJD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4004,
                            "end": 4007
                          },
                          "typeArguments": null,
                          "start": 4004,
                          "end": 4007
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AJF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4010,
                            "end": 4013
                          },
                          "typeArguments": null,
                          "start": 4010,
                          "end": 4013
                        }
                      ],
                      "start": 4004,
                      "end": 4013
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AND",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4015,
                            "end": 4018
                          },
                          "typeArguments": null,
                          "start": 4015,
                          "end": 4018
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ANF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4021,
                            "end": 4024
                          },
                          "typeArguments": null,
                          "start": 4021,
                          "end": 4024
                        }
                      ],
                      "start": 4015,
                      "end": 4024
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BRD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4034,
                            "end": 4037
                          },
                          "typeArguments": null,
                          "start": 4034,
                          "end": 4037
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BRF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4040,
                            "end": 4043
                          },
                          "typeArguments": null,
                          "start": 4040,
                          "end": 4043
                        }
                      ],
                      "start": 4034,
                      "end": 4043
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BJD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4045,
                            "end": 4048
                          },
                          "typeArguments": null,
                          "start": 4045,
                          "end": 4048
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BJF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4051,
                            "end": 4054
                          },
                          "typeArguments": null,
                          "start": 4051,
                          "end": 4054
                        }
                      ],
                      "start": 4045,
                      "end": 4054
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BND",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4056,
                            "end": 4059
                          },
                          "typeArguments": null,
                          "start": 4056,
                          "end": 4059
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BNF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4062,
                            "end": 4065
                          },
                          "typeArguments": null,
                          "start": 4062,
                          "end": 4065
                        }
                      ],
                      "start": 4056,
                      "end": 4065
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CRD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4075,
                            "end": 4078
                          },
                          "typeArguments": null,
                          "start": 4075,
                          "end": 4078
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CRF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4081,
                            "end": 4084
                          },
                          "typeArguments": null,
                          "start": 4081,
                          "end": 4084
                        }
                      ],
                      "start": 4075,
                      "end": 4084
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CJD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4086,
                            "end": 4089
                          },
                          "typeArguments": null,
                          "start": 4086,
                          "end": 4089
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CJF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4092,
                            "end": 4095
                          },
                          "typeArguments": null,
                          "start": 4092,
                          "end": 4095
                        }
                      ],
                      "start": 4086,
                      "end": 4095
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CND",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4097,
                            "end": 4100
                          },
                          "typeArguments": null,
                          "start": 4097,
                          "end": 4100
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "CNF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4103,
                            "end": 4106
                          },
                          "typeArguments": null,
                          "start": 4103,
                          "end": 4106
                        }
                      ],
                      "start": 4097,
                      "end": 4106
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RRD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4116,
                            "end": 4119
                          },
                          "typeArguments": null,
                          "start": 4116,
                          "end": 4119
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RRF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4122,
                            "end": 4125
                          },
                          "typeArguments": null,
                          "start": 4122,
                          "end": 4125
                        }
                      ],
                      "start": 4116,
                      "end": 4125
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RJD",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4127,
                            "end": 4130
                          },
                          "typeArguments": null,
                          "start": 4127,
                          "end": 4130
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RJF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4133,
                            "end": 4136
                          },
                          "typeArguments": null,
                          "start": 4133,
                          "end": 4136
                        }
                      ],
                      "start": 4127,
                      "end": 4136
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RND",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4138,
                            "end": 4141
                          },
                          "typeArguments": null,
                          "start": 4138,
                          "end": 4141
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RNF",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4144,
                            "end": 4147
                          },
                          "typeArguments": null,
                          "start": 4144,
                          "end": 4147
                        }
                      ],
                      "start": 4138,
                      "end": 4147
                    }
                  ],
                  "start": 3992,
                  "end": 4148
                },
                "start": 3981,
                "end": 4148
              },
              "start": 3979,
              "end": 4148
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3163,
            "end": 4149
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 4154,
              "end": 4158
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4159,
                    "end": 4162
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4165,
                    "end": 4170
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4159,
                  "end": 4170
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4172,
                    "end": 4175
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4178,
                    "end": 4183
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4172,
                  "end": 4183
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4185,
                    "end": 4188
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4191,
                    "end": 4196
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4185,
                  "end": 4196
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4206,
                    "end": 4209
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4212,
                    "end": 4217
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4206,
                  "end": 4217
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4219,
                    "end": 4222
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4225,
                    "end": 4230
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4219,
                  "end": 4230
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BNF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4232,
                    "end": 4235
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4238,
                    "end": 4243
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4232,
                  "end": 4243
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4253,
                    "end": 4256
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4259,
                    "end": 4264
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4253,
                  "end": 4264
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4266,
                    "end": 4269
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4272,
                    "end": 4277
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4266,
                  "end": 4277
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CNF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4279,
                    "end": 4282
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4285,
                    "end": 4290
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4279,
                  "end": 4290
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4300,
                    "end": 4303
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4306,
                    "end": 4311
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4300,
                  "end": 4311
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4313,
                    "end": 4316
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4319,
                    "end": 4324
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4313,
                  "end": 4324
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RNF",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4326,
                    "end": 4329
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4332,
                    "end": 4337
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4326,
                  "end": 4337
                }
              ],
              "start": 4158,
              "end": 4338
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "doneFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 4364,
                    "end": 4368
                  },
                  "start": 4362,
                  "end": 4368
                },
                "start": 4352,
                "end": 4368
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "failFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TJ",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4398,
                              "end": 4400
                            },
                            "typeArguments": null,
                            "start": 4398,
                            "end": 4400
                          },
                          "start": 4396,
                          "end": 4400
                        },
                        "start": 4395,
                        "end": 4400
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UJ",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4405,
                              "end": 4407
                            },
                            "typeArguments": null,
                            "start": 4405,
                            "end": 4407
                          },
                          "start": 4403,
                          "end": 4407
                        },
                        "start": 4402,
                        "end": 4407
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VJ",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4412,
                              "end": 4414
                            },
                            "typeArguments": null,
                            "start": 4412,
                            "end": 4414
                          },
                          "start": 4410,
                          "end": 4414
                        },
                        "start": 4409,
                        "end": 4414
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4419,
                          "end": 4420
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SJ",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4422,
                                "end": 4424
                              },
                              "typeArguments": null,
                              "start": 4422,
                              "end": 4424
                            },
                            "start": 4422,
                            "end": 4426
                          },
                          "start": 4420,
                          "end": 4426
                        },
                        "value": null,
                        "start": 4416,
                        "end": 4426
                      }
                    ],
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
                              "name": "PromiseBase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4431,
                              "end": 4442
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4443,
                                    "end": 4446
                                  },
                                  "typeArguments": null,
                                  "start": 4443,
                                  "end": 4446
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4448,
                                    "end": 4451
                                  },
                                  "typeArguments": null,
                                  "start": 4448,
                                  "end": 4451
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ANF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4453,
                                    "end": 4456
                                  },
                                  "typeArguments": null,
                                  "start": 4453,
                                  "end": 4456
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4474,
                                    "end": 4477
                                  },
                                  "typeArguments": null,
                                  "start": 4474,
                                  "end": 4477
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4479,
                                    "end": 4482
                                  },
                                  "typeArguments": null,
                                  "start": 4479,
                                  "end": 4482
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BNF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4484,
                                    "end": 4487
                                  },
                                  "typeArguments": null,
                                  "start": 4484,
                                  "end": 4487
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4505,
                                    "end": 4508
                                  },
                                  "typeArguments": null,
                                  "start": 4505,
                                  "end": 4508
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4510,
                                    "end": 4513
                                  },
                                  "typeArguments": null,
                                  "start": 4510,
                                  "end": 4513
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CNF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4515,
                                    "end": 4518
                                  },
                                  "typeArguments": null,
                                  "start": 4515,
                                  "end": 4518
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4536,
                                    "end": 4539
                                  },
                                  "typeArguments": null,
                                  "start": 4536,
                                  "end": 4539
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4541,
                                    "end": 4544
                                  },
                                  "typeArguments": null,
                                  "start": 4541,
                                  "end": 4544
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RNF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4546,
                                    "end": 4549
                                  },
                                  "typeArguments": null,
                                  "start": 4546,
                                  "end": 4549
                                }
                              ],
                              "start": 4442,
                              "end": 4550
                            },
                            "start": 4431,
                            "end": 4550
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4553,
                              "end": 4561
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARF",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4562,
                                    "end": 4565
                                  },
                                  "typeArguments": null,
                                  "start": 4562,
                                  "end": 4565
                                }
                              ],
                              "start": 4561,
                              "end": 4566
                            },
                            "start": 4553,
                            "end": 4566
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ARF",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4569,
                              "end": 4572
                            },
                            "typeArguments": null,
                            "start": 4569,
                            "end": 4572
                          }
                        ],
                        "start": 4431,
                        "end": 4572
                      },
                      "start": 4428,
                      "end": 4572
                    },
                    "start": 4394,
                    "end": 4572
                  },
                  "start": 4392,
                  "end": 4572
                },
                "start": 4382,
                "end": 4572
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progressFilter",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 4603,
                    "end": 4607
                  },
                  "start": 4601,
                  "end": 4607
                },
                "start": 4586,
                "end": 4607
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PromiseBase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4610,
                  "end": 4621
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ARF",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4622,
                        "end": 4625
                      },
                      "typeArguments": null,
                      "start": 4622,
                      "end": 4625
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AJF",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4627,
                        "end": 4630
                      },
                      "typeArguments": null,
                      "start": 4627,
                      "end": 4630
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ANF",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4632,
                        "end": 4635
                      },
                      "typeArguments": null,
                      "start": 4632,
                      "end": 4635
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BRF",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4645,
                        "end": 4648
                      },
                      "typeArguments": null,
                      "start": 4645,
                      "end": 4648
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BJF",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4650,
                        "end": 4653
                      },
                      "typeArguments": null,
                      "start": 4650,
                      "end": 4653
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BNF",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4655,
                        "end": 4658
                      },
                      "typeArguments": null,
                      "start": 4655,
                      "end": 4658
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CRF",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4668,
                        "end": 4671
                      },
                      "typeArguments": null,
                      "start": 4668,
                      "end": 4671
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CJF",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4673,
                        "end": 4676
                      },
                      "typeArguments": null,
                      "start": 4673,
                      "end": 4676
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CNF",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4678,
                        "end": 4681
                      },
                      "typeArguments": null,
                      "start": 4678,
                      "end": 4681
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RRF",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4691,
                        "end": 4694
                      },
                      "typeArguments": null,
                      "start": 4691,
                      "end": 4694
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RJF",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4696,
                        "end": 4699
                      },
                      "typeArguments": null,
                      "start": 4696,
                      "end": 4699
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RNF",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4701,
                        "end": 4704
                      },
                      "typeArguments": null,
                      "start": 4701,
                      "end": 4704
                    }
                  ],
                  "start": 4621,
                  "end": 4705
                },
                "start": 4610,
                "end": 4705
              },
              "start": 4608,
              "end": 4705
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 4154,
            "end": 4706
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 4711,
              "end": 4715
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ARD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4716,
                    "end": 4719
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4722,
                    "end": 4727
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4716,
                  "end": 4727
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AJD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4729,
                    "end": 4732
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4735,
                    "end": 4740
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4729,
                  "end": 4740
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AND",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4742,
                    "end": 4745
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4748,
                    "end": 4753
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4742,
                  "end": 4753
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BRD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4763,
                    "end": 4766
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4769,
                    "end": 4774
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4763,
                  "end": 4774
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BJD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4776,
                    "end": 4779
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4782,
                    "end": 4787
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4776,
                  "end": 4787
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BND",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4789,
                    "end": 4792
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4795,
                    "end": 4800
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4789,
                  "end": 4800
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CRD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4810,
                    "end": 4813
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4816,
                    "end": 4821
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4810,
                  "end": 4821
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CJD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4823,
                    "end": 4826
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4829,
                    "end": 4834
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4823,
                  "end": 4834
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CND",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4836,
                    "end": 4839
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4842,
                    "end": 4847
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4836,
                  "end": 4847
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RRD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4857,
                    "end": 4860
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4863,
                    "end": 4868
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4857,
                  "end": 4868
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RJD",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4870,
                    "end": 4873
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4876,
                    "end": 4881
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4870,
                  "end": 4881
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RND",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4883,
                    "end": 4886
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 4889,
                    "end": 4894
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4883,
                  "end": 4894
                }
              ],
              "start": 4715,
              "end": 4895
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "doneFilter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TR",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4925,
                              "end": 4927
                            },
                            "typeArguments": null,
                            "start": 4925,
                            "end": 4927
                          },
                          "start": 4923,
                          "end": 4927
                        },
                        "start": 4922,
                        "end": 4927
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "UR",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4932,
                              "end": 4934
                            },
                            "typeArguments": null,
                            "start": 4932,
                            "end": 4934
                          },
                          "start": 4930,
                          "end": 4934
                        },
                        "start": 4929,
                        "end": 4934
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "VR",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4939,
                              "end": 4941
                            },
                            "typeArguments": null,
                            "start": 4939,
                            "end": 4941
                          },
                          "start": 4937,
                          "end": 4941
                        },
                        "start": 4936,
                        "end": 4941
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4946,
                          "end": 4947
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SR",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4949,
                                "end": 4951
                              },
                              "typeArguments": null,
                              "start": 4949,
                              "end": 4951
                            },
                            "start": 4949,
                            "end": 4953
                          },
                          "start": 4947,
                          "end": 4953
                        },
                        "value": null,
                        "start": 4943,
                        "end": 4953
                      }
                    ],
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
                              "name": "PromiseBase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4958,
                              "end": 4969
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4970,
                                    "end": 4973
                                  },
                                  "typeArguments": null,
                                  "start": 4970,
                                  "end": 4973
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AJD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4975,
                                    "end": 4978
                                  },
                                  "typeArguments": null,
                                  "start": 4975,
                                  "end": 4978
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AND",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4980,
                                    "end": 4983
                                  },
                                  "typeArguments": null,
                                  "start": 4980,
                                  "end": 4983
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BRD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5001,
                                    "end": 5004
                                  },
                                  "typeArguments": null,
                                  "start": 5001,
                                  "end": 5004
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BJD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5006,
                                    "end": 5009
                                  },
                                  "typeArguments": null,
                                  "start": 5006,
                                  "end": 5009
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "BND",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5011,
                                    "end": 5014
                                  },
                                  "typeArguments": null,
                                  "start": 5011,
                                  "end": 5014
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CRD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5032,
                                    "end": 5035
                                  },
                                  "typeArguments": null,
                                  "start": 5032,
                                  "end": 5035
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CJD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5037,
                                    "end": 5040
                                  },
                                  "typeArguments": null,
                                  "start": 5037,
                                  "end": 5040
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CND",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5042,
                                    "end": 5045
                                  },
                                  "typeArguments": null,
                                  "start": 5042,
                                  "end": 5045
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RRD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5063,
                                    "end": 5066
                                  },
                                  "typeArguments": null,
                                  "start": 5063,
                                  "end": 5066
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RJD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5068,
                                    "end": 5071
                                  },
                                  "typeArguments": null,
                                  "start": 5068,
                                  "end": 5071
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RND",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5073,
                                    "end": 5076
                                  },
                                  "typeArguments": null,
                                  "start": 5073,
                                  "end": 5076
                                }
                              ],
                              "start": 4969,
                              "end": 5077
                            },
                            "start": 4958,
                            "end": 5077
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5080,
                              "end": 5088
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ARD",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5089,
                                    "end": 5092
                                  },
                                  "typeArguments": null,
                                  "start": 5089,
                                  "end": 5092
                                }
                              ],
                              "start": 5088,
                              "end": 5093
                            },
                            "start": 5080,
                            "end": 5093
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ARD",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5096,
                              "end": 5099
                            },
                            "typeArguments": null,
                            "start": 5096,
                            "end": 5099
                          }
                        ],
                        "start": 4958,
                        "end": 5099
                      },
                      "start": 4955,
                      "end": 5099
                    },
                    "start": 4921,
                    "end": 5099
                  },
                  "start": 4919,
                  "end": 5099
                },
                "start": 4909,
                "end": 5099
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "failFilter",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 5126,
                    "end": 5130
                  },
                  "start": 5124,
                  "end": 5130
                },
                "start": 5113,
                "end": 5130
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progressFilter",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 5161,
                    "end": 5165
                  },
                  "start": 5159,
                  "end": 5165
                },
                "start": 5144,
                "end": 5165
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PromiseBase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5168,
                  "end": 5179
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ARD",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5180,
                        "end": 5183
                      },
                      "typeArguments": null,
                      "start": 5180,
                      "end": 5183
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AJD",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5185,
                        "end": 5188
                      },
                      "typeArguments": null,
                      "start": 5185,
                      "end": 5188
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AND",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5190,
                        "end": 5193
                      },
                      "typeArguments": null,
                      "start": 5190,
                      "end": 5193
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BRD",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5203,
                        "end": 5206
                      },
                      "typeArguments": null,
                      "start": 5203,
                      "end": 5206
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BJD",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5208,
                        "end": 5211
                      },
                      "typeArguments": null,
                      "start": 5208,
                      "end": 5211
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BND",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5213,
                        "end": 5216
                      },
                      "typeArguments": null,
                      "start": 5213,
                      "end": 5216
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CRD",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5226,
                        "end": 5229
                      },
                      "typeArguments": null,
                      "start": 5226,
                      "end": 5229
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CJD",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5231,
                        "end": 5234
                      },
                      "typeArguments": null,
                      "start": 5231,
                      "end": 5234
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CND",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5236,
                        "end": 5239
                      },
                      "typeArguments": null,
                      "start": 5236,
                      "end": 5239
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RRD",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5249,
                        "end": 5252
                      },
                      "typeArguments": null,
                      "start": 5249,
                      "end": 5252
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RJD",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5254,
                        "end": 5257
                      },
                      "typeArguments": null,
                      "start": 5254,
                      "end": 5257
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RND",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5259,
                        "end": 5262
                      },
                      "typeArguments": null,
                      "start": 5259,
                      "end": 5262
                    }
                  ],
                  "start": 5179,
                  "end": 5263
                },
                "start": 5168,
                "end": 5263
              },
              "start": 5166,
              "end": 5263
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 4711,
            "end": 5264
          }
        ],
        "start": 186,
        "end": 5266
      },
      "declare": false,
      "start": 104,
      "end": 5266
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Promise3",
        "optional": false,
        "typeAnnotation": null,
        "start": 5278,
        "end": 5286
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TR",
              "optional": false,
              "typeAnnotation": null,
              "start": 5287,
              "end": 5289
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5287,
            "end": 5289
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TJ",
              "optional": false,
              "typeAnnotation": null,
              "start": 5291,
              "end": 5293
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5291,
            "end": 5293
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TN",
              "optional": false,
              "typeAnnotation": null,
              "start": 5295,
              "end": 5297
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5295,
            "end": 5297
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "UR",
              "optional": false,
              "typeAnnotation": null,
              "start": 5303,
              "end": 5305
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5303,
            "end": 5305
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "UJ",
              "optional": false,
              "typeAnnotation": null,
              "start": 5307,
              "end": 5309
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5307,
            "end": 5309
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "UN",
              "optional": false,
              "typeAnnotation": null,
              "start": 5311,
              "end": 5313
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5311,
            "end": 5313
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "VR",
              "optional": false,
              "typeAnnotation": null,
              "start": 5319,
              "end": 5321
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5319,
            "end": 5321
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "VJ",
              "optional": false,
              "typeAnnotation": null,
              "start": 5323,
              "end": 5325
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5323,
            "end": 5325
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "VN",
              "optional": false,
              "typeAnnotation": null,
              "start": 5327,
              "end": 5329
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5327,
            "end": 5329
          }
        ],
        "start": 5286,
        "end": 5330
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "PromiseBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 5339,
            "end": 5350
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TR",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5351,
                  "end": 5353
                },
                "typeArguments": null,
                "start": 5351,
                "end": 5353
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TJ",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5355,
                  "end": 5357
                },
                "typeArguments": null,
                "start": 5355,
                "end": 5357
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TN",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5359,
                  "end": 5361
                },
                "typeArguments": null,
                "start": 5359,
                "end": 5361
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UR",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5367,
                  "end": 5369
                },
                "typeArguments": null,
                "start": 5367,
                "end": 5369
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UJ",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5371,
                  "end": 5373
                },
                "typeArguments": null,
                "start": 5371,
                "end": 5373
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UN",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5375,
                  "end": 5377
                },
                "typeArguments": null,
                "start": 5375,
                "end": 5377
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VR",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5383,
                  "end": 5385
                },
                "typeArguments": null,
                "start": 5383,
                "end": 5385
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VJ",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5387,
                  "end": 5389
                },
                "typeArguments": null,
                "start": 5387,
                "end": 5389
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VN",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5391,
                  "end": 5393
                },
                "typeArguments": null,
                "start": 5391,
                "end": 5393
              },
              {
                "type": "TSNeverKeyword",
                "start": 5399,
                "end": 5404
              },
              {
                "type": "TSNeverKeyword",
                "start": 5406,
                "end": 5411
              },
              {
                "type": "TSNeverKeyword",
                "start": 5413,
                "end": 5418
              }
            ],
            "start": 5350,
            "end": 5419
          },
          "start": 5339,
          "end": 5419
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 5420,
        "end": 5423
      },
      "declare": false,
      "start": 5268,
      "end": 5423
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 5430,
        "end": 5431
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Awaited",
          "optional": false,
          "typeAnnotation": null,
          "start": 5434,
          "end": 5441
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise3",
                "optional": false,
                "typeAnnotation": null,
                "start": 5442,
                "end": 5450
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 5451,
                    "end": 5457
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5459,
                      "end": 5464
                    },
                    "typeArguments": null,
                    "start": 5459,
                    "end": 5464
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 5466,
                    "end": 5472
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 5474,
                    "end": 5476
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 5478,
                    "end": 5484
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 5486,
                    "end": 5493
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 5495,
                    "end": 5498
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Element",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5500,
                      "end": 5507
                    },
                    "typeArguments": null,
                    "start": 5500,
                    "end": 5507
                  },
                  {
                    "type": "TSNeverKeyword",
                    "start": 5509,
                    "end": 5514
                  }
                ],
                "start": 5450,
                "end": 5515
              },
              "start": 5442,
              "end": 5515
            }
          ],
          "start": 5441,
          "end": 5516
        },
        "start": 5434,
        "end": 5516
      },
      "declare": false,
      "start": 5425,
      "end": 5517
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 29,
  "end": 5527
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 29,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 39,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 51,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "PromiseLike",
    "start": 59,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 104,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "PromiseBase",
    "start": 114,
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
    "value": "TR",
    "start": 126,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "TJ",
    "start": 130,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "TN",
    "start": 134,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "UR",
    "start": 142,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "UJ",
    "start": 146,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "UN",
    "start": 150,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "VR",
    "start": 158,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "VJ",
    "start": 162,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "VN",
    "start": 166,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "SR",
    "start": 174,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "SJ",
    "start": 178,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "SN",
    "start": 182,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 192,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "ARD",
    "start": 197,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 203,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "AJD",
    "start": 210,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 216,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "AND",
    "start": 223,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 229,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "BRD",
    "start": 244,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 250,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "BJD",
    "start": 257,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 263,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "BND",
    "start": 270,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 276,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "CRD",
    "start": 291,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 297,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "CJD",
    "start": 304,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 310,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "CND",
    "start": 317,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 323,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "RRD",
    "start": 338,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 344,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "RJD",
    "start": 351,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 357,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "RND",
    "start": 364,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 370,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "ARF",
    "start": 385,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 391,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "AJF",
    "start": 398,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 404,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "ANF",
    "start": 411,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 417,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "BRF",
    "start": 432,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 438,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "BJF",
    "start": 445,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 451,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "BNF",
    "start": 458,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 464,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "CRF",
    "start": 479,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 485,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "CJF",
    "start": 492,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 498,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "CNF",
    "start": 505,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 511,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "RRF",
    "start": 526,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 532,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "RJF",
    "start": 539,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 545,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "RNF",
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
    "type": "Identifier",
    "value": "never",
    "start": 558,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "ARP",
    "start": 573,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 579,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "AJP",
    "start": 586,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 592,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "ANP",
    "start": 599,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 605,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "BRP",
    "start": 620,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 626,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "BJP",
    "start": 633,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 639,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "BNP",
    "start": 646,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 652,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "CRP",
    "start": 667,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 673,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "CJP",
    "start": 680,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 686,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "CNP",
    "start": 693,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 699,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "RRP",
    "start": 714,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 720,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "RJP",
    "start": 727,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 733,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "RNP",
    "start": 740,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 746,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "doneFilter",
    "start": 766,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "TR",
    "start": 782,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "u",
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
    "value": "UR",
    "start": 789,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "VR",
    "start": 796,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 800,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "SR",
    "start": 806,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 812,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "PromiseBase",
    "start": 815,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "ARD",
    "start": 827,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "AJD",
    "start": 832,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "AND",
    "start": 837,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "BRD",
    "start": 858,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "BJD",
    "start": 863,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "BND",
    "start": 868,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "CRD",
    "start": 889,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "CJD",
    "start": 894,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "CND",
    "start": 899,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "RRD",
    "start": 920,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "RJD",
    "start": 925,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "RND",
    "start": 930,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 937,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "ARD",
    "start": 946,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 951,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "ARD",
    "start": 953,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 956,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "failFilter",
    "start": 970,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 982,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "t",
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
    "value": "TJ",
    "start": 986,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "u",
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
    "value": "UJ",
    "start": 993,
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
    "value": "v",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "VJ",
    "start": 1000,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1004,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "SJ",
    "start": 1010,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "=>",
    "start": 1016,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "PromiseBase",
    "start": 1019,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "ARF",
    "start": 1031,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "AJF",
    "start": 1036,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "ANF",
    "start": 1041,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "BRF",
    "start": 1062,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "BJF",
    "start": 1067,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "BNF",
    "start": 1072,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "CRF",
    "start": 1093,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "CJF",
    "start": 1098,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "CNF",
    "start": 1103,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "RRF",
    "start": 1124,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "RJF",
    "start": 1129,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "RNF",
    "start": 1134,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 1141,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "ARF",
    "start": 1150,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "ARF",
    "start": 1157,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "progressFilter",
    "start": 1174,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1188,
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
    "value": "t",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "TN",
    "start": 1194,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "UN",
    "start": 1201,
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
    "value": "v",
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
    "value": "VN",
    "start": 1208,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1212,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "SN",
    "start": 1218,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1224,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "PromiseBase",
    "start": 1227,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "ARP",
    "start": 1239,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "AJP",
    "start": 1244,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "ANP",
    "start": 1249,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "BRP",
    "start": 1270,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "BJP",
    "start": 1275,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "BNP",
    "start": 1280,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "CRP",
    "start": 1301,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "CJP",
    "start": 1306,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "CNP",
    "start": 1311,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "RRP",
    "start": 1332,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "RJP",
    "start": 1337,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "RNP",
    "start": 1342,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 1349,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "ANP",
    "start": 1358,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "ANP",
    "start": 1365,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "PromiseBase",
    "start": 1371,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "ARD",
    "start": 1383,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "ARF",
    "start": 1389,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "ARP",
    "start": 1395,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "AJD",
    "start": 1400,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "AJF",
    "start": 1406,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "AJP",
    "start": 1412,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "AND",
    "start": 1417,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "ANF",
    "start": 1423,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "ANP",
    "start": 1429,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "BRD",
    "start": 1442,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "BRF",
    "start": 1448,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "BRP",
    "start": 1454,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "BJD",
    "start": 1459,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "BJF",
    "start": 1465,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Identifier",
    "value": "BJP",
    "start": 1471,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "BND",
    "start": 1476,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "BNF",
    "start": 1482,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "BNP",
    "start": 1488,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "CRD",
    "start": 1501,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "CRF",
    "start": 1507,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "CRP",
    "start": 1513,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "CJD",
    "start": 1518,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "CJF",
    "start": 1524,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "CJP",
    "start": 1530,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "CND",
    "start": 1535,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "CNF",
    "start": 1541,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "CNP",
    "start": 1547,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Identifier",
    "value": "RRD",
    "start": 1560,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Identifier",
    "value": "RRF",
    "start": 1566,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "RRP",
    "start": 1572,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "RJD",
    "start": 1577,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "RJF",
    "start": 1583,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "RJP",
    "start": 1589,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "RND",
    "start": 1594,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Identifier",
    "value": "RNF",
    "start": 1600,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "RNP",
    "start": 1606,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1616,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Identifier",
    "value": "ARF",
    "start": 1621,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1627,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Identifier",
    "value": "AJF",
    "start": 1634,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1640,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "ANF",
    "start": 1647,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1653,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "BRF",
    "start": 1668,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1674,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "BJF",
    "start": 1681,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1687,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Identifier",
    "value": "BNF",
    "start": 1694,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1700,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Identifier",
    "value": "CRF",
    "start": 1715,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1721,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Identifier",
    "value": "CJF",
    "start": 1728,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1734,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "CNF",
    "start": 1741,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1747,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "RRF",
    "start": 1762,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1768,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Identifier",
    "value": "RJF",
    "start": 1775,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1781,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Identifier",
    "value": "RNF",
    "start": 1788,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1794,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Identifier",
    "value": "ARP",
    "start": 1809,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1815,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Identifier",
    "value": "AJP",
    "start": 1822,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1828,
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
    "value": "ANP",
    "start": 1835,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1841,
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
    "value": "BRP",
    "start": 1856,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1862,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Identifier",
    "value": "BJP",
    "start": 1869,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1875,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Identifier",
    "value": "BNP",
    "start": 1882,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1888,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Identifier",
    "value": "CRP",
    "start": 1903,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1909,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Identifier",
    "value": "CJP",
    "start": 1916,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1922,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Identifier",
    "value": "CNP",
    "start": 1929,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1935,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "RRP",
    "start": 1950,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1956,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Identifier",
    "value": "RJP",
    "start": 1963,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1969,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Identifier",
    "value": "RNP",
    "start": 1976,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1982,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "doneFilter",
    "start": 2002,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2014,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "failFilter",
    "start": 2032,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Identifier",
    "value": "TJ",
    "start": 2048,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Identifier",
    "value": "UJ",
    "start": 2055,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "VJ",
    "start": 2062,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2066,
    "end": 2069
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Identifier",
    "value": "SJ",
    "start": 2072,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2078,
    "end": 2080
  },
  {
    "type": "Identifier",
    "value": "PromiseBase",
    "start": 2081,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Identifier",
    "value": "ARF",
    "start": 2093,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Identifier",
    "value": "AJF",
    "start": 2098,
    "end": 2101
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Identifier",
    "value": "ANF",
    "start": 2103,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "BRF",
    "start": 2124,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Identifier",
    "value": "BJF",
    "start": 2129,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "BNF",
    "start": 2134,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Identifier",
    "value": "CRF",
    "start": 2155,
    "end": 2158
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Identifier",
    "value": "CJF",
    "start": 2160,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Identifier",
    "value": "CNF",
    "start": 2165,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Identifier",
    "value": "RRF",
    "start": 2186,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Identifier",
    "value": "RJF",
    "start": 2191,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Identifier",
    "value": "RNF",
    "start": 2196,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 2203,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Identifier",
    "value": "ARF",
    "start": 2212,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Identifier",
    "value": "ARF",
    "start": 2219,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Identifier",
    "value": "progressFilter",
    "start": 2236,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Identifier",
    "value": "TN",
    "start": 2256,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Identifier",
    "value": "UN",
    "start": 2263,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2267,
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
    "value": "VN",
    "start": 2270,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2274,
    "end": 2277
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Identifier",
    "value": "SN",
    "start": 2280,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2286,
    "end": 2288
  },
  {
    "type": "Identifier",
    "value": "PromiseBase",
    "start": 2289,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Identifier",
    "value": "ARP",
    "start": 2301,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Identifier",
    "value": "AJP",
    "start": 2306,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Identifier",
    "value": "ANP",
    "start": 2311,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Identifier",
    "value": "BRP",
    "start": 2332,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Identifier",
    "value": "BJP",
    "start": 2337,
    "end": 2340
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Identifier",
    "value": "BNP",
    "start": 2342,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Identifier",
    "value": "CRP",
    "start": 2363,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Identifier",
    "value": "CJP",
    "start": 2368,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Identifier",
    "value": "CNP",
    "start": 2373,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Identifier",
    "value": "RRP",
    "start": 2394,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Identifier",
    "value": "RJP",
    "start": 2399,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Identifier",
    "value": "RNP",
    "start": 2404,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 2411,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Identifier",
    "value": "ANP",
    "start": 2420,
    "end": 2423
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Identifier",
    "value": "ANP",
    "start": 2427,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Identifier",
    "value": "PromiseBase",
    "start": 2433,
    "end": 2444
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Identifier",
    "value": "ARF",
    "start": 2445,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Identifier",
    "value": "ARP",
    "start": 2451,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Identifier",
    "value": "AJF",
    "start": 2456,
    "end": 2459
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Identifier",
    "value": "AJP",
    "start": 2462,
    "end": 2465
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2465,
    "end": 2466
  },
  {
    "type": "Identifier",
    "value": "ANF",
    "start": 2467,
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
    "value": "ANP",
    "start": 2473,
    "end": 2476
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2476,
    "end": 2477
  },
  {
    "type": "Identifier",
    "value": "BRF",
    "start": 2486,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Identifier",
    "value": "BRP",
    "start": 2492,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Identifier",
    "value": "BJF",
    "start": 2497,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Identifier",
    "value": "BJP",
    "start": 2503,
    "end": 2506
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Identifier",
    "value": "BNF",
    "start": 2508,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Identifier",
    "value": "BNP",
    "start": 2514,
    "end": 2517
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2517,
    "end": 2518
  },
  {
    "type": "Identifier",
    "value": "CRF",
    "start": 2527,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2531,
    "end": 2532
  },
  {
    "type": "Identifier",
    "value": "CRP",
    "start": 2533,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Identifier",
    "value": "CJF",
    "start": 2538,
    "end": 2541
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Identifier",
    "value": "CJP",
    "start": 2544,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2547,
    "end": 2548
  },
  {
    "type": "Identifier",
    "value": "CNF",
    "start": 2549,
    "end": 2552
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2553,
    "end": 2554
  },
  {
    "type": "Identifier",
    "value": "CNP",
    "start": 2555,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2558,
    "end": 2559
  },
  {
    "type": "Identifier",
    "value": "RRF",
    "start": 2568,
    "end": 2571
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2572,
    "end": 2573
  },
  {
    "type": "Identifier",
    "value": "RRP",
    "start": 2574,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Identifier",
    "value": "RJF",
    "start": 2579,
    "end": 2582
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "Identifier",
    "value": "RJP",
    "start": 2585,
    "end": 2588
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2588,
    "end": 2589
  },
  {
    "type": "Identifier",
    "value": "RNF",
    "start": 2590,
    "end": 2593
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2594,
    "end": 2595
  },
  {
    "type": "Identifier",
    "value": "RNP",
    "start": 2596,
    "end": 2599
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2599,
    "end": 2600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2600,
    "end": 2601
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2606,
    "end": 2610
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Identifier",
    "value": "ARP",
    "start": 2611,
    "end": 2614
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2617,
    "end": 2622
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Identifier",
    "value": "AJP",
    "start": 2624,
    "end": 2627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2628,
    "end": 2629
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2630,
    "end": 2635
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2635,
    "end": 2636
  },
  {
    "type": "Identifier",
    "value": "ANP",
    "start": 2637,
    "end": 2640
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2641,
    "end": 2642
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2643,
    "end": 2648
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Identifier",
    "value": "BRP",
    "start": 2658,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2662,
    "end": 2663
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2664,
    "end": 2669
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2669,
    "end": 2670
  },
  {
    "type": "Identifier",
    "value": "BJP",
    "start": 2671,
    "end": 2674
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2675,
    "end": 2676
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2677,
    "end": 2682
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Identifier",
    "value": "BNP",
    "start": 2684,
    "end": 2687
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2688,
    "end": 2689
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2690,
    "end": 2695
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2695,
    "end": 2696
  },
  {
    "type": "Identifier",
    "value": "CRP",
    "start": 2705,
    "end": 2708
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2711,
    "end": 2716
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Identifier",
    "value": "CJP",
    "start": 2718,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2724,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "Identifier",
    "value": "CNP",
    "start": 2731,
    "end": 2734
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2737,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Identifier",
    "value": "RRP",
    "start": 2752,
    "end": 2755
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2756,
    "end": 2757
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2758,
    "end": 2763
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2763,
    "end": 2764
  },
  {
    "type": "Identifier",
    "value": "RJP",
    "start": 2765,
    "end": 2768
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2771,
    "end": 2776
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "Identifier",
    "value": "RNP",
    "start": 2778,
    "end": 2781
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2784,
    "end": 2789
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2790,
    "end": 2791
  },
  {
    "type": "Identifier",
    "value": "doneFilter",
    "start": 2804,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2814,
    "end": 2815
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2816,
    "end": 2820
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "Identifier",
    "value": "failFilter",
    "start": 2834,
    "end": 2844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2846,
    "end": 2850
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Identifier",
    "value": "progressFilter",
    "start": 2864,
    "end": 2878
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2882,
    "end": 2883
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Identifier",
    "value": "TN",
    "start": 2885,
    "end": 2887
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2887,
    "end": 2888
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2890,
    "end": 2891
  },
  {
    "type": "Identifier",
    "value": "UN",
    "start": 2892,
    "end": 2894
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2894,
    "end": 2895
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2896,
    "end": 2897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2897,
    "end": 2898
  },
  {
    "type": "Identifier",
    "value": "VN",
    "start": 2899,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2903,
    "end": 2906
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2906,
    "end": 2907
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "Identifier",
    "value": "SN",
    "start": 2909,
    "end": 2911
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2911,
    "end": 2912
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2912,
    "end": 2913
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2913,
    "end": 2914
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2915,
    "end": 2917
  },
  {
    "type": "Identifier",
    "value": "PromiseBase",
    "start": 2918,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Identifier",
    "value": "ARP",
    "start": 2930,
    "end": 2933
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Identifier",
    "value": "AJP",
    "start": 2935,
    "end": 2938
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2938,
    "end": 2939
  },
  {
    "type": "Identifier",
    "value": "ANP",
    "start": 2940,
    "end": 2943
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2943,
    "end": 2944
  },
  {
    "type": "Identifier",
    "value": "BRP",
    "start": 2961,
    "end": 2964
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Identifier",
    "value": "BJP",
    "start": 2966,
    "end": 2969
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2969,
    "end": 2970
  },
  {
    "type": "Identifier",
    "value": "BNP",
    "start": 2971,
    "end": 2974
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2974,
    "end": 2975
  },
  {
    "type": "Identifier",
    "value": "CRP",
    "start": 2992,
    "end": 2995
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Identifier",
    "value": "CJP",
    "start": 2997,
    "end": 3000
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3000,
    "end": 3001
  },
  {
    "type": "Identifier",
    "value": "CNP",
    "start": 3002,
    "end": 3005
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3005,
    "end": 3006
  },
  {
    "type": "Identifier",
    "value": "RRP",
    "start": 3023,
    "end": 3026
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3026,
    "end": 3027
  },
  {
    "type": "Identifier",
    "value": "RJP",
    "start": 3028,
    "end": 3031
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3031,
    "end": 3032
  },
  {
    "type": "Identifier",
    "value": "RNP",
    "start": 3033,
    "end": 3036
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3036,
    "end": 3037
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3038,
    "end": 3039
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 3040,
    "end": 3048
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3048,
    "end": 3049
  },
  {
    "type": "Identifier",
    "value": "ANP",
    "start": 3049,
    "end": 3052
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3052,
    "end": 3053
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Identifier",
    "value": "ANP",
    "start": 3056,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3060,
    "end": 3061
  },
  {
    "type": "Identifier",
    "value": "PromiseBase",
    "start": 3062,
    "end": 3073
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Identifier",
    "value": "ARP",
    "start": 3074,
    "end": 3077
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3077,
    "end": 3078
  },
  {
    "type": "Identifier",
    "value": "AJP",
    "start": 3079,
    "end": 3082
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Identifier",
    "value": "ANP",
    "start": 3084,
    "end": 3087
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3087,
    "end": 3088
  },
  {
    "type": "Identifier",
    "value": "BRP",
    "start": 3097,
    "end": 3100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3100,
    "end": 3101
  },
  {
    "type": "Identifier",
    "value": "BJP",
    "start": 3102,
    "end": 3105
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3105,
    "end": 3106
  },
  {
    "type": "Identifier",
    "value": "BNP",
    "start": 3107,
    "end": 3110
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3110,
    "end": 3111
  },
  {
    "type": "Identifier",
    "value": "CRP",
    "start": 3120,
    "end": 3123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3123,
    "end": 3124
  },
  {
    "type": "Identifier",
    "value": "CJP",
    "start": 3125,
    "end": 3128
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Identifier",
    "value": "CNP",
    "start": 3130,
    "end": 3133
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3133,
    "end": 3134
  },
  {
    "type": "Identifier",
    "value": "RRP",
    "start": 3143,
    "end": 3146
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3146,
    "end": 3147
  },
  {
    "type": "Identifier",
    "value": "RJP",
    "start": 3148,
    "end": 3151
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3151,
    "end": 3152
  },
  {
    "type": "Identifier",
    "value": "RNP",
    "start": 3153,
    "end": 3156
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3156,
    "end": 3157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3157,
    "end": 3158
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3163,
    "end": 3167
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3167,
    "end": 3168
  },
  {
    "type": "Identifier",
    "value": "ARD",
    "start": 3168,
    "end": 3171
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3172,
    "end": 3173
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3174,
    "end": 3179
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3179,
    "end": 3180
  },
  {
    "type": "Identifier",
    "value": "AJD",
    "start": 3181,
    "end": 3184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3185,
    "end": 3186
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3187,
    "end": 3192
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Identifier",
    "value": "AND",
    "start": 3194,
    "end": 3197
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3198,
    "end": 3199
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3200,
    "end": 3205
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3205,
    "end": 3206
  },
  {
    "type": "Identifier",
    "value": "BRD",
    "start": 3215,
    "end": 3218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3219,
    "end": 3220
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3221,
    "end": 3226
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3226,
    "end": 3227
  },
  {
    "type": "Identifier",
    "value": "BJD",
    "start": 3228,
    "end": 3231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3234,
    "end": 3239
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3239,
    "end": 3240
  },
  {
    "type": "Identifier",
    "value": "BND",
    "start": 3241,
    "end": 3244
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3245,
    "end": 3246
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3247,
    "end": 3252
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3252,
    "end": 3253
  },
  {
    "type": "Identifier",
    "value": "CRD",
    "start": 3262,
    "end": 3265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3266,
    "end": 3267
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3268,
    "end": 3273
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3273,
    "end": 3274
  },
  {
    "type": "Identifier",
    "value": "CJD",
    "start": 3275,
    "end": 3278
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3279,
    "end": 3280
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3281,
    "end": 3286
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3286,
    "end": 3287
  },
  {
    "type": "Identifier",
    "value": "CND",
    "start": 3288,
    "end": 3291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3292,
    "end": 3293
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3294,
    "end": 3299
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3299,
    "end": 3300
  },
  {
    "type": "Identifier",
    "value": "RRD",
    "start": 3309,
    "end": 3312
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3313,
    "end": 3314
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3315,
    "end": 3320
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3320,
    "end": 3321
  },
  {
    "type": "Identifier",
    "value": "RJD",
    "start": 3322,
    "end": 3325
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3326,
    "end": 3327
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3328,
    "end": 3333
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3333,
    "end": 3334
  },
  {
    "type": "Identifier",
    "value": "RND",
    "start": 3335,
    "end": 3338
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3339,
    "end": 3340
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3341,
    "end": 3346
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3346,
    "end": 3347
  },
  {
    "type": "Identifier",
    "value": "ARF",
    "start": 3356,
    "end": 3359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3360,
    "end": 3361
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3362,
    "end": 3367
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3367,
    "end": 3368
  },
  {
    "type": "Identifier",
    "value": "AJF",
    "start": 3369,
    "end": 3372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3373,
    "end": 3374
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3375,
    "end": 3380
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3380,
    "end": 3381
  },
  {
    "type": "Identifier",
    "value": "ANF",
    "start": 3382,
    "end": 3385
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3386,
    "end": 3387
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3388,
    "end": 3393
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3393,
    "end": 3394
  },
  {
    "type": "Identifier",
    "value": "BRF",
    "start": 3403,
    "end": 3406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3407,
    "end": 3408
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3409,
    "end": 3414
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3414,
    "end": 3415
  },
  {
    "type": "Identifier",
    "value": "BJF",
    "start": 3416,
    "end": 3419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3420,
    "end": 3421
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3422,
    "end": 3427
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3427,
    "end": 3428
  },
  {
    "type": "Identifier",
    "value": "BNF",
    "start": 3429,
    "end": 3432
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3433,
    "end": 3434
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3435,
    "end": 3440
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3440,
    "end": 3441
  },
  {
    "type": "Identifier",
    "value": "CRF",
    "start": 3450,
    "end": 3453
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3454,
    "end": 3455
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3456,
    "end": 3461
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3461,
    "end": 3462
  },
  {
    "type": "Identifier",
    "value": "CJF",
    "start": 3463,
    "end": 3466
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3467,
    "end": 3468
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3469,
    "end": 3474
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3474,
    "end": 3475
  },
  {
    "type": "Identifier",
    "value": "CNF",
    "start": 3476,
    "end": 3479
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3480,
    "end": 3481
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3482,
    "end": 3487
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3487,
    "end": 3488
  },
  {
    "type": "Identifier",
    "value": "RRF",
    "start": 3497,
    "end": 3500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3501,
    "end": 3502
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3503,
    "end": 3508
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3508,
    "end": 3509
  },
  {
    "type": "Identifier",
    "value": "RJF",
    "start": 3510,
    "end": 3513
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3514,
    "end": 3515
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3516,
    "end": 3521
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3521,
    "end": 3522
  },
  {
    "type": "Identifier",
    "value": "RNF",
    "start": 3523,
    "end": 3526
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3527,
    "end": 3528
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3529,
    "end": 3534
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3534,
    "end": 3535
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3535,
    "end": 3536
  },
  {
    "type": "Identifier",
    "value": "doneFilter",
    "start": 3549,
    "end": 3559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3559,
    "end": 3560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3561,
    "end": 3562
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3562,
    "end": 3563
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3563,
    "end": 3564
  },
  {
    "type": "Identifier",
    "value": "TR",
    "start": 3565,
    "end": 3567
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3567,
    "end": 3568
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 3569,
    "end": 3570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3570,
    "end": 3571
  },
  {
    "type": "Identifier",
    "value": "UR",
    "start": 3572,
    "end": 3574
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3574,
    "end": 3575
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3576,
    "end": 3577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3577,
    "end": 3578
  },
  {
    "type": "Identifier",
    "value": "VR",
    "start": 3579,
    "end": 3581
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3581,
    "end": 3582
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3583,
    "end": 3586
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 3586,
    "end": 3587
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3587,
    "end": 3588
  },
  {
    "type": "Identifier",
    "value": "SR",
    "start": 3589,
    "end": 3591
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3591,
    "end": 3592
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3592,
    "end": 3593
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3593,
    "end": 3594
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3595,
    "end": 3597
  },
  {
    "type": "Identifier",
    "value": "PromiseBase",
    "start": 3598,
    "end": 3609
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3609,
    "end": 3610
  },
  {
    "type": "Identifier",
    "value": "ARD",
    "start": 3610,
    "end": 3613
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3613,
    "end": 3614
  },
  {
    "type": "Identifier",
    "value": "AJD",
    "start": 3615,
    "end": 3618
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3618,
    "end": 3619
  },
  {
    "type": "Identifier",
    "value": "AND",
    "start": 3620,
    "end": 3623
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3623,
    "end": 3624
  },
  {
    "type": "Identifier",
    "value": "BRD",
    "start": 3641,
    "end": 3644
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3644,
    "end": 3645
  },
  {
    "type": "Identifier",
    "value": "BJD",
    "start": 3646,
    "end": 3649
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3649,
    "end": 3650
  },
  {
    "type": "Identifier",
    "value": "BND",
    "start": 3651,
    "end": 3654
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3654,
    "end": 3655
  },
  {
    "type": "Identifier",
    "value": "CRD",
    "start": 3672,
    "end": 3675
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3675,
    "end": 3676
  },
  {
    "type": "Identifier",
    "value": "CJD",
    "start": 3677,
    "end": 3680
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3680,
    "end": 3681
  },
  {
    "type": "Identifier",
    "value": "CND",
    "start": 3682,
    "end": 3685
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3685,
    "end": 3686
  },
  {
    "type": "Identifier",
    "value": "RRD",
    "start": 3703,
    "end": 3706
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3706,
    "end": 3707
  },
  {
    "type": "Identifier",
    "value": "RJD",
    "start": 3708,
    "end": 3711
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3711,
    "end": 3712
  },
  {
    "type": "Identifier",
    "value": "RND",
    "start": 3713,
    "end": 3716
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3716,
    "end": 3717
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3718,
    "end": 3719
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 3720,
    "end": 3728
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3728,
    "end": 3729
  },
  {
    "type": "Identifier",
    "value": "ARD",
    "start": 3729,
    "end": 3732
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3732,
    "end": 3733
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3734,
    "end": 3735
  },
  {
    "type": "Identifier",
    "value": "ARD",
    "start": 3736,
    "end": 3739
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3739,
    "end": 3740
  },
  {
    "type": "Identifier",
    "value": "failFilter",
    "start": 3753,
    "end": 3763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3763,
    "end": 3764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3765,
    "end": 3766
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3766,
    "end": 3767
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3767,
    "end": 3768
  },
  {
    "type": "Identifier",
    "value": "TJ",
    "start": 3769,
    "end": 3771
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3771,
    "end": 3772
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 3773,
    "end": 3774
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3774,
    "end": 3775
  },
  {
    "type": "Identifier",
    "value": "UJ",
    "start": 3776,
    "end": 3778
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3778,
    "end": 3779
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3780,
    "end": 3781
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3781,
    "end": 3782
  },
  {
    "type": "Identifier",
    "value": "VJ",
    "start": 3783,
    "end": 3785
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3785,
    "end": 3786
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3787,
    "end": 3790
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 3790,
    "end": 3791
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3791,
    "end": 3792
  },
  {
    "type": "Identifier",
    "value": "SJ",
    "start": 3793,
    "end": 3795
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3795,
    "end": 3796
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3796,
    "end": 3797
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3797,
    "end": 3798
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3799,
    "end": 3801
  },
  {
    "type": "Identifier",
    "value": "PromiseBase",
    "start": 3802,
    "end": 3813
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3813,
    "end": 3814
  },
  {
    "type": "Identifier",
    "value": "ARF",
    "start": 3814,
    "end": 3817
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3817,
    "end": 3818
  },
  {
    "type": "Identifier",
    "value": "AJF",
    "start": 3819,
    "end": 3822
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3822,
    "end": 3823
  },
  {
    "type": "Identifier",
    "value": "ANF",
    "start": 3824,
    "end": 3827
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3827,
    "end": 3828
  },
  {
    "type": "Identifier",
    "value": "BRF",
    "start": 3845,
    "end": 3848
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3848,
    "end": 3849
  },
  {
    "type": "Identifier",
    "value": "BJF",
    "start": 3850,
    "end": 3853
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3853,
    "end": 3854
  },
  {
    "type": "Identifier",
    "value": "BNF",
    "start": 3855,
    "end": 3858
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3858,
    "end": 3859
  },
  {
    "type": "Identifier",
    "value": "CRF",
    "start": 3876,
    "end": 3879
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3879,
    "end": 3880
  },
  {
    "type": "Identifier",
    "value": "CJF",
    "start": 3881,
    "end": 3884
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3884,
    "end": 3885
  },
  {
    "type": "Identifier",
    "value": "CNF",
    "start": 3886,
    "end": 3889
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3889,
    "end": 3890
  },
  {
    "type": "Identifier",
    "value": "RRF",
    "start": 3907,
    "end": 3910
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3910,
    "end": 3911
  },
  {
    "type": "Identifier",
    "value": "RJF",
    "start": 3912,
    "end": 3915
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3915,
    "end": 3916
  },
  {
    "type": "Identifier",
    "value": "RNF",
    "start": 3917,
    "end": 3920
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3920,
    "end": 3921
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3922,
    "end": 3923
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 3924,
    "end": 3932
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3932,
    "end": 3933
  },
  {
    "type": "Identifier",
    "value": "ARF",
    "start": 3933,
    "end": 3936
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3936,
    "end": 3937
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3938,
    "end": 3939
  },
  {
    "type": "Identifier",
    "value": "ARF",
    "start": 3940,
    "end": 3943
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3943,
    "end": 3944
  },
  {
    "type": "Identifier",
    "value": "progressFilter",
    "start": 3957,
    "end": 3971
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3971,
    "end": 3972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3972,
    "end": 3973
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3974,
    "end": 3978
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3978,
    "end": 3979
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3979,
    "end": 3980
  },
  {
    "type": "Identifier",
    "value": "PromiseBase",
    "start": 3981,
    "end": 3992
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3992,
    "end": 3993
  },
  {
    "type": "Identifier",
    "value": "ARD",
    "start": 3993,
    "end": 3996
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3997,
    "end": 3998
  },
  {
    "type": "Identifier",
    "value": "ARF",
    "start": 3999,
    "end": 4002
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4002,
    "end": 4003
  },
  {
    "type": "Identifier",
    "value": "AJD",
    "start": 4004,
    "end": 4007
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4008,
    "end": 4009
  },
  {
    "type": "Identifier",
    "value": "AJF",
    "start": 4010,
    "end": 4013
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4013,
    "end": 4014
  },
  {
    "type": "Identifier",
    "value": "AND",
    "start": 4015,
    "end": 4018
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4019,
    "end": 4020
  },
  {
    "type": "Identifier",
    "value": "ANF",
    "start": 4021,
    "end": 4024
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4024,
    "end": 4025
  },
  {
    "type": "Identifier",
    "value": "BRD",
    "start": 4034,
    "end": 4037
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4038,
    "end": 4039
  },
  {
    "type": "Identifier",
    "value": "BRF",
    "start": 4040,
    "end": 4043
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4043,
    "end": 4044
  },
  {
    "type": "Identifier",
    "value": "BJD",
    "start": 4045,
    "end": 4048
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4049,
    "end": 4050
  },
  {
    "type": "Identifier",
    "value": "BJF",
    "start": 4051,
    "end": 4054
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4054,
    "end": 4055
  },
  {
    "type": "Identifier",
    "value": "BND",
    "start": 4056,
    "end": 4059
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4060,
    "end": 4061
  },
  {
    "type": "Identifier",
    "value": "BNF",
    "start": 4062,
    "end": 4065
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4065,
    "end": 4066
  },
  {
    "type": "Identifier",
    "value": "CRD",
    "start": 4075,
    "end": 4078
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4079,
    "end": 4080
  },
  {
    "type": "Identifier",
    "value": "CRF",
    "start": 4081,
    "end": 4084
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4084,
    "end": 4085
  },
  {
    "type": "Identifier",
    "value": "CJD",
    "start": 4086,
    "end": 4089
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4090,
    "end": 4091
  },
  {
    "type": "Identifier",
    "value": "CJF",
    "start": 4092,
    "end": 4095
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4095,
    "end": 4096
  },
  {
    "type": "Identifier",
    "value": "CND",
    "start": 4097,
    "end": 4100
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4101,
    "end": 4102
  },
  {
    "type": "Identifier",
    "value": "CNF",
    "start": 4103,
    "end": 4106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4106,
    "end": 4107
  },
  {
    "type": "Identifier",
    "value": "RRD",
    "start": 4116,
    "end": 4119
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4120,
    "end": 4121
  },
  {
    "type": "Identifier",
    "value": "RRF",
    "start": 4122,
    "end": 4125
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4125,
    "end": 4126
  },
  {
    "type": "Identifier",
    "value": "RJD",
    "start": 4127,
    "end": 4130
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4131,
    "end": 4132
  },
  {
    "type": "Identifier",
    "value": "RJF",
    "start": 4133,
    "end": 4136
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4136,
    "end": 4137
  },
  {
    "type": "Identifier",
    "value": "RND",
    "start": 4138,
    "end": 4141
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4142,
    "end": 4143
  },
  {
    "type": "Identifier",
    "value": "RNF",
    "start": 4144,
    "end": 4147
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4147,
    "end": 4148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4148,
    "end": 4149
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4154,
    "end": 4158
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4158,
    "end": 4159
  },
  {
    "type": "Identifier",
    "value": "ARF",
    "start": 4159,
    "end": 4162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4163,
    "end": 4164
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4165,
    "end": 4170
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4170,
    "end": 4171
  },
  {
    "type": "Identifier",
    "value": "AJF",
    "start": 4172,
    "end": 4175
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4176,
    "end": 4177
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4178,
    "end": 4183
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4183,
    "end": 4184
  },
  {
    "type": "Identifier",
    "value": "ANF",
    "start": 4185,
    "end": 4188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4189,
    "end": 4190
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4191,
    "end": 4196
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4196,
    "end": 4197
  },
  {
    "type": "Identifier",
    "value": "BRF",
    "start": 4206,
    "end": 4209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4210,
    "end": 4211
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4212,
    "end": 4217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4217,
    "end": 4218
  },
  {
    "type": "Identifier",
    "value": "BJF",
    "start": 4219,
    "end": 4222
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4223,
    "end": 4224
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4225,
    "end": 4230
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4230,
    "end": 4231
  },
  {
    "type": "Identifier",
    "value": "BNF",
    "start": 4232,
    "end": 4235
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4236,
    "end": 4237
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4238,
    "end": 4243
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4243,
    "end": 4244
  },
  {
    "type": "Identifier",
    "value": "CRF",
    "start": 4253,
    "end": 4256
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4257,
    "end": 4258
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4259,
    "end": 4264
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4264,
    "end": 4265
  },
  {
    "type": "Identifier",
    "value": "CJF",
    "start": 4266,
    "end": 4269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4270,
    "end": 4271
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4272,
    "end": 4277
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4277,
    "end": 4278
  },
  {
    "type": "Identifier",
    "value": "CNF",
    "start": 4279,
    "end": 4282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4283,
    "end": 4284
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4285,
    "end": 4290
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4290,
    "end": 4291
  },
  {
    "type": "Identifier",
    "value": "RRF",
    "start": 4300,
    "end": 4303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4304,
    "end": 4305
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4306,
    "end": 4311
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4311,
    "end": 4312
  },
  {
    "type": "Identifier",
    "value": "RJF",
    "start": 4313,
    "end": 4316
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4317,
    "end": 4318
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4319,
    "end": 4324
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4324,
    "end": 4325
  },
  {
    "type": "Identifier",
    "value": "RNF",
    "start": 4326,
    "end": 4329
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4330,
    "end": 4331
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4332,
    "end": 4337
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4337,
    "end": 4338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4338,
    "end": 4339
  },
  {
    "type": "Identifier",
    "value": "doneFilter",
    "start": 4352,
    "end": 4362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4362,
    "end": 4363
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4364,
    "end": 4368
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4368,
    "end": 4369
  },
  {
    "type": "Identifier",
    "value": "failFilter",
    "start": 4382,
    "end": 4392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4392,
    "end": 4393
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4394,
    "end": 4395
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4395,
    "end": 4396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4396,
    "end": 4397
  },
  {
    "type": "Identifier",
    "value": "TJ",
    "start": 4398,
    "end": 4400
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4400,
    "end": 4401
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 4402,
    "end": 4403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4403,
    "end": 4404
  },
  {
    "type": "Identifier",
    "value": "UJ",
    "start": 4405,
    "end": 4407
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4407,
    "end": 4408
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4409,
    "end": 4410
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4410,
    "end": 4411
  },
  {
    "type": "Identifier",
    "value": "VJ",
    "start": 4412,
    "end": 4414
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4414,
    "end": 4415
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4416,
    "end": 4419
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4419,
    "end": 4420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4420,
    "end": 4421
  },
  {
    "type": "Identifier",
    "value": "SJ",
    "start": 4422,
    "end": 4424
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4424,
    "end": 4425
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4425,
    "end": 4426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4426,
    "end": 4427
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4428,
    "end": 4430
  },
  {
    "type": "Identifier",
    "value": "PromiseBase",
    "start": 4431,
    "end": 4442
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4442,
    "end": 4443
  },
  {
    "type": "Identifier",
    "value": "ARF",
    "start": 4443,
    "end": 4446
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4446,
    "end": 4447
  },
  {
    "type": "Identifier",
    "value": "AJF",
    "start": 4448,
    "end": 4451
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4451,
    "end": 4452
  },
  {
    "type": "Identifier",
    "value": "ANF",
    "start": 4453,
    "end": 4456
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4456,
    "end": 4457
  },
  {
    "type": "Identifier",
    "value": "BRF",
    "start": 4474,
    "end": 4477
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4477,
    "end": 4478
  },
  {
    "type": "Identifier",
    "value": "BJF",
    "start": 4479,
    "end": 4482
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4482,
    "end": 4483
  },
  {
    "type": "Identifier",
    "value": "BNF",
    "start": 4484,
    "end": 4487
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4487,
    "end": 4488
  },
  {
    "type": "Identifier",
    "value": "CRF",
    "start": 4505,
    "end": 4508
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4508,
    "end": 4509
  },
  {
    "type": "Identifier",
    "value": "CJF",
    "start": 4510,
    "end": 4513
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4513,
    "end": 4514
  },
  {
    "type": "Identifier",
    "value": "CNF",
    "start": 4515,
    "end": 4518
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4518,
    "end": 4519
  },
  {
    "type": "Identifier",
    "value": "RRF",
    "start": 4536,
    "end": 4539
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4539,
    "end": 4540
  },
  {
    "type": "Identifier",
    "value": "RJF",
    "start": 4541,
    "end": 4544
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4544,
    "end": 4545
  },
  {
    "type": "Identifier",
    "value": "RNF",
    "start": 4546,
    "end": 4549
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4549,
    "end": 4550
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4551,
    "end": 4552
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 4553,
    "end": 4561
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4561,
    "end": 4562
  },
  {
    "type": "Identifier",
    "value": "ARF",
    "start": 4562,
    "end": 4565
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4565,
    "end": 4566
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4567,
    "end": 4568
  },
  {
    "type": "Identifier",
    "value": "ARF",
    "start": 4569,
    "end": 4572
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4572,
    "end": 4573
  },
  {
    "type": "Identifier",
    "value": "progressFilter",
    "start": 4586,
    "end": 4600
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4600,
    "end": 4601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4601,
    "end": 4602
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4603,
    "end": 4607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4607,
    "end": 4608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4608,
    "end": 4609
  },
  {
    "type": "Identifier",
    "value": "PromiseBase",
    "start": 4610,
    "end": 4621
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4621,
    "end": 4622
  },
  {
    "type": "Identifier",
    "value": "ARF",
    "start": 4622,
    "end": 4625
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4625,
    "end": 4626
  },
  {
    "type": "Identifier",
    "value": "AJF",
    "start": 4627,
    "end": 4630
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4630,
    "end": 4631
  },
  {
    "type": "Identifier",
    "value": "ANF",
    "start": 4632,
    "end": 4635
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4635,
    "end": 4636
  },
  {
    "type": "Identifier",
    "value": "BRF",
    "start": 4645,
    "end": 4648
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4648,
    "end": 4649
  },
  {
    "type": "Identifier",
    "value": "BJF",
    "start": 4650,
    "end": 4653
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4653,
    "end": 4654
  },
  {
    "type": "Identifier",
    "value": "BNF",
    "start": 4655,
    "end": 4658
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4658,
    "end": 4659
  },
  {
    "type": "Identifier",
    "value": "CRF",
    "start": 4668,
    "end": 4671
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4671,
    "end": 4672
  },
  {
    "type": "Identifier",
    "value": "CJF",
    "start": 4673,
    "end": 4676
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4676,
    "end": 4677
  },
  {
    "type": "Identifier",
    "value": "CNF",
    "start": 4678,
    "end": 4681
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4681,
    "end": 4682
  },
  {
    "type": "Identifier",
    "value": "RRF",
    "start": 4691,
    "end": 4694
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4694,
    "end": 4695
  },
  {
    "type": "Identifier",
    "value": "RJF",
    "start": 4696,
    "end": 4699
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4699,
    "end": 4700
  },
  {
    "type": "Identifier",
    "value": "RNF",
    "start": 4701,
    "end": 4704
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4704,
    "end": 4705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4705,
    "end": 4706
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4711,
    "end": 4715
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4715,
    "end": 4716
  },
  {
    "type": "Identifier",
    "value": "ARD",
    "start": 4716,
    "end": 4719
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4720,
    "end": 4721
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4722,
    "end": 4727
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4727,
    "end": 4728
  },
  {
    "type": "Identifier",
    "value": "AJD",
    "start": 4729,
    "end": 4732
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4733,
    "end": 4734
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4735,
    "end": 4740
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4740,
    "end": 4741
  },
  {
    "type": "Identifier",
    "value": "AND",
    "start": 4742,
    "end": 4745
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4746,
    "end": 4747
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4748,
    "end": 4753
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4753,
    "end": 4754
  },
  {
    "type": "Identifier",
    "value": "BRD",
    "start": 4763,
    "end": 4766
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4767,
    "end": 4768
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4769,
    "end": 4774
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4774,
    "end": 4775
  },
  {
    "type": "Identifier",
    "value": "BJD",
    "start": 4776,
    "end": 4779
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4780,
    "end": 4781
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4782,
    "end": 4787
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4787,
    "end": 4788
  },
  {
    "type": "Identifier",
    "value": "BND",
    "start": 4789,
    "end": 4792
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4793,
    "end": 4794
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4795,
    "end": 4800
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4800,
    "end": 4801
  },
  {
    "type": "Identifier",
    "value": "CRD",
    "start": 4810,
    "end": 4813
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4814,
    "end": 4815
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4816,
    "end": 4821
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4821,
    "end": 4822
  },
  {
    "type": "Identifier",
    "value": "CJD",
    "start": 4823,
    "end": 4826
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4827,
    "end": 4828
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4829,
    "end": 4834
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4834,
    "end": 4835
  },
  {
    "type": "Identifier",
    "value": "CND",
    "start": 4836,
    "end": 4839
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4840,
    "end": 4841
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4842,
    "end": 4847
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4847,
    "end": 4848
  },
  {
    "type": "Identifier",
    "value": "RRD",
    "start": 4857,
    "end": 4860
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4861,
    "end": 4862
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4863,
    "end": 4868
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4868,
    "end": 4869
  },
  {
    "type": "Identifier",
    "value": "RJD",
    "start": 4870,
    "end": 4873
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4874,
    "end": 4875
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4876,
    "end": 4881
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4881,
    "end": 4882
  },
  {
    "type": "Identifier",
    "value": "RND",
    "start": 4883,
    "end": 4886
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4887,
    "end": 4888
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4889,
    "end": 4894
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4894,
    "end": 4895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4895,
    "end": 4896
  },
  {
    "type": "Identifier",
    "value": "doneFilter",
    "start": 4909,
    "end": 4919
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4919,
    "end": 4920
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4921,
    "end": 4922
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4922,
    "end": 4923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4923,
    "end": 4924
  },
  {
    "type": "Identifier",
    "value": "TR",
    "start": 4925,
    "end": 4927
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4927,
    "end": 4928
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 4929,
    "end": 4930
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4930,
    "end": 4931
  },
  {
    "type": "Identifier",
    "value": "UR",
    "start": 4932,
    "end": 4934
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4934,
    "end": 4935
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4936,
    "end": 4937
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4937,
    "end": 4938
  },
  {
    "type": "Identifier",
    "value": "VR",
    "start": 4939,
    "end": 4941
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4941,
    "end": 4942
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4943,
    "end": 4946
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4946,
    "end": 4947
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4947,
    "end": 4948
  },
  {
    "type": "Identifier",
    "value": "SR",
    "start": 4949,
    "end": 4951
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4951,
    "end": 4952
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4952,
    "end": 4953
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4953,
    "end": 4954
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4955,
    "end": 4957
  },
  {
    "type": "Identifier",
    "value": "PromiseBase",
    "start": 4958,
    "end": 4969
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4969,
    "end": 4970
  },
  {
    "type": "Identifier",
    "value": "ARD",
    "start": 4970,
    "end": 4973
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4973,
    "end": 4974
  },
  {
    "type": "Identifier",
    "value": "AJD",
    "start": 4975,
    "end": 4978
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4978,
    "end": 4979
  },
  {
    "type": "Identifier",
    "value": "AND",
    "start": 4980,
    "end": 4983
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4983,
    "end": 4984
  },
  {
    "type": "Identifier",
    "value": "BRD",
    "start": 5001,
    "end": 5004
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5004,
    "end": 5005
  },
  {
    "type": "Identifier",
    "value": "BJD",
    "start": 5006,
    "end": 5009
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5009,
    "end": 5010
  },
  {
    "type": "Identifier",
    "value": "BND",
    "start": 5011,
    "end": 5014
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5014,
    "end": 5015
  },
  {
    "type": "Identifier",
    "value": "CRD",
    "start": 5032,
    "end": 5035
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5035,
    "end": 5036
  },
  {
    "type": "Identifier",
    "value": "CJD",
    "start": 5037,
    "end": 5040
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5040,
    "end": 5041
  },
  {
    "type": "Identifier",
    "value": "CND",
    "start": 5042,
    "end": 5045
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5045,
    "end": 5046
  },
  {
    "type": "Identifier",
    "value": "RRD",
    "start": 5063,
    "end": 5066
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5066,
    "end": 5067
  },
  {
    "type": "Identifier",
    "value": "RJD",
    "start": 5068,
    "end": 5071
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5071,
    "end": 5072
  },
  {
    "type": "Identifier",
    "value": "RND",
    "start": 5073,
    "end": 5076
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5076,
    "end": 5077
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5078,
    "end": 5079
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 5080,
    "end": 5088
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5088,
    "end": 5089
  },
  {
    "type": "Identifier",
    "value": "ARD",
    "start": 5089,
    "end": 5092
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5092,
    "end": 5093
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5094,
    "end": 5095
  },
  {
    "type": "Identifier",
    "value": "ARD",
    "start": 5096,
    "end": 5099
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5099,
    "end": 5100
  },
  {
    "type": "Identifier",
    "value": "failFilter",
    "start": 5113,
    "end": 5123
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5123,
    "end": 5124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5124,
    "end": 5125
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5126,
    "end": 5130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5130,
    "end": 5131
  },
  {
    "type": "Identifier",
    "value": "progressFilter",
    "start": 5144,
    "end": 5158
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5158,
    "end": 5159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5159,
    "end": 5160
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5161,
    "end": 5165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5165,
    "end": 5166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5166,
    "end": 5167
  },
  {
    "type": "Identifier",
    "value": "PromiseBase",
    "start": 5168,
    "end": 5179
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5179,
    "end": 5180
  },
  {
    "type": "Identifier",
    "value": "ARD",
    "start": 5180,
    "end": 5183
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5183,
    "end": 5184
  },
  {
    "type": "Identifier",
    "value": "AJD",
    "start": 5185,
    "end": 5188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5188,
    "end": 5189
  },
  {
    "type": "Identifier",
    "value": "AND",
    "start": 5190,
    "end": 5193
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5193,
    "end": 5194
  },
  {
    "type": "Identifier",
    "value": "BRD",
    "start": 5203,
    "end": 5206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5206,
    "end": 5207
  },
  {
    "type": "Identifier",
    "value": "BJD",
    "start": 5208,
    "end": 5211
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5211,
    "end": 5212
  },
  {
    "type": "Identifier",
    "value": "BND",
    "start": 5213,
    "end": 5216
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5216,
    "end": 5217
  },
  {
    "type": "Identifier",
    "value": "CRD",
    "start": 5226,
    "end": 5229
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5229,
    "end": 5230
  },
  {
    "type": "Identifier",
    "value": "CJD",
    "start": 5231,
    "end": 5234
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5234,
    "end": 5235
  },
  {
    "type": "Identifier",
    "value": "CND",
    "start": 5236,
    "end": 5239
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5239,
    "end": 5240
  },
  {
    "type": "Identifier",
    "value": "RRD",
    "start": 5249,
    "end": 5252
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5252,
    "end": 5253
  },
  {
    "type": "Identifier",
    "value": "RJD",
    "start": 5254,
    "end": 5257
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5257,
    "end": 5258
  },
  {
    "type": "Identifier",
    "value": "RND",
    "start": 5259,
    "end": 5262
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5262,
    "end": 5263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5263,
    "end": 5264
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5265,
    "end": 5266
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5268,
    "end": 5277
  },
  {
    "type": "Identifier",
    "value": "Promise3",
    "start": 5278,
    "end": 5286
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5286,
    "end": 5287
  },
  {
    "type": "Identifier",
    "value": "TR",
    "start": 5287,
    "end": 5289
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5289,
    "end": 5290
  },
  {
    "type": "Identifier",
    "value": "TJ",
    "start": 5291,
    "end": 5293
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5293,
    "end": 5294
  },
  {
    "type": "Identifier",
    "value": "TN",
    "start": 5295,
    "end": 5297
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5297,
    "end": 5298
  },
  {
    "type": "Identifier",
    "value": "UR",
    "start": 5303,
    "end": 5305
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5305,
    "end": 5306
  },
  {
    "type": "Identifier",
    "value": "UJ",
    "start": 5307,
    "end": 5309
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5309,
    "end": 5310
  },
  {
    "type": "Identifier",
    "value": "UN",
    "start": 5311,
    "end": 5313
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5313,
    "end": 5314
  },
  {
    "type": "Identifier",
    "value": "VR",
    "start": 5319,
    "end": 5321
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5321,
    "end": 5322
  },
  {
    "type": "Identifier",
    "value": "VJ",
    "start": 5323,
    "end": 5325
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5325,
    "end": 5326
  },
  {
    "type": "Identifier",
    "value": "VN",
    "start": 5327,
    "end": 5329
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5329,
    "end": 5330
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5331,
    "end": 5338
  },
  {
    "type": "Identifier",
    "value": "PromiseBase",
    "start": 5339,
    "end": 5350
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5350,
    "end": 5351
  },
  {
    "type": "Identifier",
    "value": "TR",
    "start": 5351,
    "end": 5353
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5353,
    "end": 5354
  },
  {
    "type": "Identifier",
    "value": "TJ",
    "start": 5355,
    "end": 5357
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5357,
    "end": 5358
  },
  {
    "type": "Identifier",
    "value": "TN",
    "start": 5359,
    "end": 5361
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5361,
    "end": 5362
  },
  {
    "type": "Identifier",
    "value": "UR",
    "start": 5367,
    "end": 5369
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5369,
    "end": 5370
  },
  {
    "type": "Identifier",
    "value": "UJ",
    "start": 5371,
    "end": 5373
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5373,
    "end": 5374
  },
  {
    "type": "Identifier",
    "value": "UN",
    "start": 5375,
    "end": 5377
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5377,
    "end": 5378
  },
  {
    "type": "Identifier",
    "value": "VR",
    "start": 5383,
    "end": 5385
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5385,
    "end": 5386
  },
  {
    "type": "Identifier",
    "value": "VJ",
    "start": 5387,
    "end": 5389
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5389,
    "end": 5390
  },
  {
    "type": "Identifier",
    "value": "VN",
    "start": 5391,
    "end": 5393
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5393,
    "end": 5394
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5399,
    "end": 5404
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5404,
    "end": 5405
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5406,
    "end": 5411
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5411,
    "end": 5412
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5413,
    "end": 5418
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5418,
    "end": 5419
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5420,
    "end": 5421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5422,
    "end": 5423
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5425,
    "end": 5429
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5430,
    "end": 5431
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5432,
    "end": 5433
  },
  {
    "type": "Identifier",
    "value": "Awaited",
    "start": 5434,
    "end": 5441
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5441,
    "end": 5442
  },
  {
    "type": "Identifier",
    "value": "Promise3",
    "start": 5442,
    "end": 5450
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5450,
    "end": 5451
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5451,
    "end": 5457
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5457,
    "end": 5458
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 5459,
    "end": 5464
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5464,
    "end": 5465
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5466,
    "end": 5472
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5472,
    "end": 5473
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5474,
    "end": 5475
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5475,
    "end": 5476
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5476,
    "end": 5477
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5478,
    "end": 5484
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5484,
    "end": 5485
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5486,
    "end": 5493
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5493,
    "end": 5494
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 5495,
    "end": 5498
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5498,
    "end": 5499
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 5500,
    "end": 5507
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5507,
    "end": 5508
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5509,
    "end": 5514
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5514,
    "end": 5515
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5515,
    "end": 5516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5516,
    "end": 5517
  }
]
```
