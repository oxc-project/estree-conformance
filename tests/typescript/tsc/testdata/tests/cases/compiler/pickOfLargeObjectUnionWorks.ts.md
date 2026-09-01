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
        "name": "HTMLDataAttributes",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 28
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "data-",
                          "cooked": "data-"
                        },
                        "tail": false,
                        "start": 42,
                        "end": 50
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 56,
                        "end": 58
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 50,
                        "end": 56
                      }
                    ],
                    "start": 42,
                    "end": 58
                  },
                  "start": 40,
                  "end": 58
                },
                "start": 36,
                "end": 58
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 61,
                "end": 68
              },
              "start": 59,
              "end": 68
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 35,
            "end": 68
          }
        ],
        "start": 29,
        "end": 70
      },
      "declare": false,
      "start": 0,
      "end": 70
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 86
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 95
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 97,
                "end": 103
              },
              "start": 95,
              "end": 103
            },
            "accessibility": null,
            "static": false,
            "start": 93,
            "end": 104
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop01",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 115
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 117,
                "end": 123
              },
              "start": 115,
              "end": 123
            },
            "accessibility": null,
            "static": false,
            "start": 109,
            "end": 124
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop02",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 135
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 137,
                "end": 143
              },
              "start": 135,
              "end": 143
            },
            "accessibility": null,
            "static": false,
            "start": 129,
            "end": 144
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop03",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 155
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 157,
                "end": 163
              },
              "start": 155,
              "end": 163
            },
            "accessibility": null,
            "static": false,
            "start": 149,
            "end": 164
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop04",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 175
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 177,
                "end": 183
              },
              "start": 175,
              "end": 183
            },
            "accessibility": null,
            "static": false,
            "start": 169,
            "end": 184
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop05",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 195
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 197,
                "end": 203
              },
              "start": 195,
              "end": 203
            },
            "accessibility": null,
            "static": false,
            "start": 189,
            "end": 204
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop06",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
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
            "start": 209,
            "end": 224
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop07",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 235
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 237,
                "end": 243
              },
              "start": 235,
              "end": 243
            },
            "accessibility": null,
            "static": false,
            "start": 229,
            "end": 244
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop08",
              "optional": false,
              "typeAnnotation": null,
              "start": 249,
              "end": 255
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 257,
                "end": 263
              },
              "start": 255,
              "end": 263
            },
            "accessibility": null,
            "static": false,
            "start": 249,
            "end": 264
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop09",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 275
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 277,
                "end": 283
              },
              "start": 275,
              "end": 283
            },
            "accessibility": null,
            "static": false,
            "start": 269,
            "end": 284
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop10",
              "optional": false,
              "typeAnnotation": null,
              "start": 289,
              "end": 295
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 297,
                "end": 303
              },
              "start": 295,
              "end": 303
            },
            "accessibility": null,
            "static": false,
            "start": 289,
            "end": 304
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop11",
              "optional": false,
              "typeAnnotation": null,
              "start": 309,
              "end": 315
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 317,
                "end": 323
              },
              "start": 315,
              "end": 323
            },
            "accessibility": null,
            "static": false,
            "start": 309,
            "end": 324
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop12",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 335
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 337,
                "end": 343
              },
              "start": 335,
              "end": 343
            },
            "accessibility": null,
            "static": false,
            "start": 329,
            "end": 344
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop13",
              "optional": false,
              "typeAnnotation": null,
              "start": 349,
              "end": 355
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 357,
                "end": 363
              },
              "start": 355,
              "end": 363
            },
            "accessibility": null,
            "static": false,
            "start": 349,
            "end": 364
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop14",
              "optional": false,
              "typeAnnotation": null,
              "start": 369,
              "end": 375
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 377,
                "end": 383
              },
              "start": 375,
              "end": 383
            },
            "accessibility": null,
            "static": false,
            "start": 369,
            "end": 384
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop15",
              "optional": false,
              "typeAnnotation": null,
              "start": 389,
              "end": 395
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 397,
                "end": 403
              },
              "start": 395,
              "end": 403
            },
            "accessibility": null,
            "static": false,
            "start": 389,
            "end": 404
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop16",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 415
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 417,
                "end": 423
              },
              "start": 415,
              "end": 423
            },
            "accessibility": null,
            "static": false,
            "start": 409,
            "end": 424
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop17",
              "optional": false,
              "typeAnnotation": null,
              "start": 429,
              "end": 435
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 437,
                "end": 443
              },
              "start": 435,
              "end": 443
            },
            "accessibility": null,
            "static": false,
            "start": 429,
            "end": 444
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop18",
              "optional": false,
              "typeAnnotation": null,
              "start": 449,
              "end": 455
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 457,
                "end": 463
              },
              "start": 455,
              "end": 463
            },
            "accessibility": null,
            "static": false,
            "start": 449,
            "end": 464
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop19",
              "optional": false,
              "typeAnnotation": null,
              "start": 469,
              "end": 475
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 477,
                "end": 483
              },
              "start": 475,
              "end": 483
            },
            "accessibility": null,
            "static": false,
            "start": 469,
            "end": 484
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop20",
              "optional": false,
              "typeAnnotation": null,
              "start": 489,
              "end": 495
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 497,
                "end": 503
              },
              "start": 495,
              "end": 503
            },
            "accessibility": null,
            "static": false,
            "start": 489,
            "end": 504
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop21",
              "optional": false,
              "typeAnnotation": null,
              "start": 509,
              "end": 515
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 517,
                "end": 523
              },
              "start": 515,
              "end": 523
            },
            "accessibility": null,
            "static": false,
            "start": 509,
            "end": 524
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop22",
              "optional": false,
              "typeAnnotation": null,
              "start": 529,
              "end": 535
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 537,
                "end": 543
              },
              "start": 535,
              "end": 543
            },
            "accessibility": null,
            "static": false,
            "start": 529,
            "end": 544
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop23",
              "optional": false,
              "typeAnnotation": null,
              "start": 549,
              "end": 555
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 557,
                "end": 563
              },
              "start": 555,
              "end": 563
            },
            "accessibility": null,
            "static": false,
            "start": 549,
            "end": 564
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop24",
              "optional": false,
              "typeAnnotation": null,
              "start": 569,
              "end": 575
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 577,
                "end": 583
              },
              "start": 575,
              "end": 583
            },
            "accessibility": null,
            "static": false,
            "start": 569,
            "end": 584
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop25",
              "optional": false,
              "typeAnnotation": null,
              "start": 589,
              "end": 595
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 597,
                "end": 603
              },
              "start": 595,
              "end": 603
            },
            "accessibility": null,
            "static": false,
            "start": 589,
            "end": 604
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop26",
              "optional": false,
              "typeAnnotation": null,
              "start": 609,
              "end": 615
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 617,
                "end": 623
              },
              "start": 615,
              "end": 623
            },
            "accessibility": null,
            "static": false,
            "start": 609,
            "end": 624
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop27",
              "optional": false,
              "typeAnnotation": null,
              "start": 629,
              "end": 635
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 637,
                "end": 643
              },
              "start": 635,
              "end": 643
            },
            "accessibility": null,
            "static": false,
            "start": 629,
            "end": 644
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop28",
              "optional": false,
              "typeAnnotation": null,
              "start": 649,
              "end": 655
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 657,
                "end": 663
              },
              "start": 655,
              "end": 663
            },
            "accessibility": null,
            "static": false,
            "start": 649,
            "end": 664
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop29",
              "optional": false,
              "typeAnnotation": null,
              "start": 669,
              "end": 675
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 677,
                "end": 683
              },
              "start": 675,
              "end": 683
            },
            "accessibility": null,
            "static": false,
            "start": 669,
            "end": 684
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop30",
              "optional": false,
              "typeAnnotation": null,
              "start": 689,
              "end": 695
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 697,
                "end": 703
              },
              "start": 695,
              "end": 703
            },
            "accessibility": null,
            "static": false,
            "start": 689,
            "end": 704
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop31",
              "optional": false,
              "typeAnnotation": null,
              "start": 709,
              "end": 715
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 717,
                "end": 723
              },
              "start": 715,
              "end": 723
            },
            "accessibility": null,
            "static": false,
            "start": 709,
            "end": 724
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop32",
              "optional": false,
              "typeAnnotation": null,
              "start": 729,
              "end": 735
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 737,
                "end": 743
              },
              "start": 735,
              "end": 743
            },
            "accessibility": null,
            "static": false,
            "start": 729,
            "end": 744
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop33",
              "optional": false,
              "typeAnnotation": null,
              "start": 749,
              "end": 755
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 757,
                "end": 763
              },
              "start": 755,
              "end": 763
            },
            "accessibility": null,
            "static": false,
            "start": 749,
            "end": 764
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop34",
              "optional": false,
              "typeAnnotation": null,
              "start": 769,
              "end": 775
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 777,
                "end": 783
              },
              "start": 775,
              "end": 783
            },
            "accessibility": null,
            "static": false,
            "start": 769,
            "end": 784
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop35",
              "optional": false,
              "typeAnnotation": null,
              "start": 789,
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
            "accessibility": null,
            "static": false,
            "start": 789,
            "end": 804
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop36",
              "optional": false,
              "typeAnnotation": null,
              "start": 809,
              "end": 815
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 817,
                "end": 823
              },
              "start": 815,
              "end": 823
            },
            "accessibility": null,
            "static": false,
            "start": 809,
            "end": 824
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop37",
              "optional": false,
              "typeAnnotation": null,
              "start": 829,
              "end": 835
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 837,
                "end": 843
              },
              "start": 835,
              "end": 843
            },
            "accessibility": null,
            "static": false,
            "start": 829,
            "end": 844
          }
        ],
        "start": 87,
        "end": 848
      },
      "declare": false,
      "start": 72,
      "end": 848
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 864,
        "end": 865
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 874,
            "end": 878
          },
          "typeArguments": null,
          "start": 874,
          "end": 878
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "HTMLDataAttributes",
            "optional": false,
            "typeAnnotation": null,
            "start": 880,
            "end": 898
          },
          "typeArguments": null,
          "start": 880,
          "end": 898
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
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 905,
              "end": 907
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 909,
                "end": 915
              },
              "start": 907,
              "end": 915
            },
            "accessibility": null,
            "static": false,
            "start": 905,
            "end": 916
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 921,
              "end": 923
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 925,
                "end": 931
              },
              "start": 923,
              "end": 931
            },
            "accessibility": null,
            "static": false,
            "start": 921,
            "end": 932
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 937,
              "end": 939
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 941,
                "end": 947
              },
              "start": 939,
              "end": 947
            },
            "accessibility": null,
            "static": false,
            "start": 937,
            "end": 948
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 953,
              "end": 955
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 957,
                "end": 963
              },
              "start": 955,
              "end": 963
            },
            "accessibility": null,
            "static": false,
            "start": 953,
            "end": 964
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 969,
              "end": 971
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 973,
                "end": 979
              },
              "start": 971,
              "end": 979
            },
            "accessibility": null,
            "static": false,
            "start": 969,
            "end": 980
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 985,
              "end": 987
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 989,
                "end": 995
              },
              "start": 987,
              "end": 995
            },
            "accessibility": null,
            "static": false,
            "start": 985,
            "end": 996
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a7",
              "optional": false,
              "typeAnnotation": null,
              "start": 1001,
              "end": 1003
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1005,
                "end": 1011
              },
              "start": 1003,
              "end": 1011
            },
            "accessibility": null,
            "static": false,
            "start": 1001,
            "end": 1012
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a8",
              "optional": false,
              "typeAnnotation": null,
              "start": 1017,
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
            "start": 1017,
            "end": 1028
          }
        ],
        "start": 899,
        "end": 1032
      },
      "declare": false,
      "start": 854,
      "end": 1032
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 1048,
        "end": 1049
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 1058,
            "end": 1062
          },
          "typeArguments": null,
          "start": 1058,
          "end": 1062
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "HTMLDataAttributes",
            "optional": false,
            "typeAnnotation": null,
            "start": 1064,
            "end": 1082
          },
          "typeArguments": null,
          "start": 1064,
          "end": 1082
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
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1089,
              "end": 1091
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1093,
                "end": 1099
              },
              "start": 1091,
              "end": 1099
            },
            "accessibility": null,
            "static": false,
            "start": 1089,
            "end": 1100
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1105,
              "end": 1107
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1109,
                "end": 1115
              },
              "start": 1107,
              "end": 1115
            },
            "accessibility": null,
            "static": false,
            "start": 1105,
            "end": 1116
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1121,
              "end": 1123
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1125,
                "end": 1131
              },
              "start": 1123,
              "end": 1131
            },
            "accessibility": null,
            "static": false,
            "start": 1121,
            "end": 1132
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1137,
              "end": 1139
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1141,
                "end": 1147
              },
              "start": 1139,
              "end": 1147
            },
            "accessibility": null,
            "static": false,
            "start": 1137,
            "end": 1148
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1153,
              "end": 1155
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1157,
                "end": 1163
              },
              "start": 1155,
              "end": 1163
            },
            "accessibility": null,
            "static": false,
            "start": 1153,
            "end": 1164
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1169,
              "end": 1171
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1173,
                "end": 1179
              },
              "start": 1171,
              "end": 1179
            },
            "accessibility": null,
            "static": false,
            "start": 1169,
            "end": 1180
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b7",
              "optional": false,
              "typeAnnotation": null,
              "start": 1185,
              "end": 1187
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1189,
                "end": 1195
              },
              "start": 1187,
              "end": 1195
            },
            "accessibility": null,
            "static": false,
            "start": 1185,
            "end": 1196
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b8",
              "optional": false,
              "typeAnnotation": null,
              "start": 1201,
              "end": 1203
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1205,
                "end": 1211
              },
              "start": 1203,
              "end": 1211
            },
            "accessibility": null,
            "static": false,
            "start": 1201,
            "end": 1212
          }
        ],
        "start": 1083,
        "end": 1216
      },
      "declare": false,
      "start": 1038,
      "end": 1216
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 1232,
        "end": 1233
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 1242,
            "end": 1246
          },
          "typeArguments": null,
          "start": 1242,
          "end": 1246
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "HTMLDataAttributes",
            "optional": false,
            "typeAnnotation": null,
            "start": 1248,
            "end": 1266
          },
          "typeArguments": null,
          "start": 1248,
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
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1273,
              "end": 1275
            },
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
            "accessibility": null,
            "static": false,
            "start": 1273,
            "end": 1284
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1289,
              "end": 1291
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1293,
                "end": 1299
              },
              "start": 1291,
              "end": 1299
            },
            "accessibility": null,
            "static": false,
            "start": 1289,
            "end": 1300
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1305,
              "end": 1307
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1309,
                "end": 1315
              },
              "start": 1307,
              "end": 1315
            },
            "accessibility": null,
            "static": false,
            "start": 1305,
            "end": 1316
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1321,
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
            "start": 1321,
            "end": 1332
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1337,
              "end": 1339
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1341,
                "end": 1347
              },
              "start": 1339,
              "end": 1347
            },
            "accessibility": null,
            "static": false,
            "start": 1337,
            "end": 1348
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1353,
              "end": 1355
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1357,
                "end": 1363
              },
              "start": 1355,
              "end": 1363
            },
            "accessibility": null,
            "static": false,
            "start": 1353,
            "end": 1364
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c7",
              "optional": false,
              "typeAnnotation": null,
              "start": 1369,
              "end": 1371
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1373,
                "end": 1379
              },
              "start": 1371,
              "end": 1379
            },
            "accessibility": null,
            "static": false,
            "start": 1369,
            "end": 1380
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c8",
              "optional": false,
              "typeAnnotation": null,
              "start": 1385,
              "end": 1387
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1389,
                "end": 1395
              },
              "start": 1387,
              "end": 1395
            },
            "accessibility": null,
            "static": false,
            "start": 1385,
            "end": 1396
          }
        ],
        "start": 1267,
        "end": 1400
      },
      "declare": false,
      "start": 1222,
      "end": 1400
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
            "name": "xyz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Pick",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1417,
                  "end": 1421
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
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1422,
                            "end": 1423
                          },
                          "typeArguments": null,
                          "start": 1422,
                          "end": 1423
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1426,
                            "end": 1427
                          },
                          "typeArguments": null,
                          "start": 1426,
                          "end": 1427
                        },
                        {
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
                          "typeArguments": null,
                          "start": 1430,
                          "end": 1431
                        }
                      ],
                      "start": 1422,
                      "end": 1431
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "id",
                        "raw": "'id'",
                        "start": 1433,
                        "end": 1437
                      },
                      "start": 1433,
                      "end": 1437
                    }
                  ],
                  "start": 1421,
                  "end": 1438
                },
                "start": 1417,
                "end": 1438
              },
              "start": 1415,
              "end": 1438
            },
            "start": 1412,
            "end": 1438
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
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1442,
                  "end": 1444
                },
                "value": {
                  "type": "Literal",
                  "value": "id",
                  "raw": "'id'",
                  "start": 1446,
                  "end": 1450
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1442,
                "end": 1450
              }
            ],
            "start": 1441,
            "end": 1451
          },
          "definite": false,
          "start": 1412,
          "end": 1451
        }
      ],
      "declare": false,
      "start": 1406,
      "end": 1451
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1451
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
    "value": "HTMLDataAttributes",
    "start": 10,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 36,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Template",
    "value": "`data-${",
    "start": 42,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 50,
    "end": 56
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 56,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 61,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 72,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 82,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 93,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 97,
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
    "value": "prop01",
    "start": 109,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 117,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "prop02",
    "start": 129,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 137,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "prop03",
    "start": 149,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 157,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "prop04",
    "start": 169,
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
    "value": "string",
    "start": 177,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "prop05",
    "start": 189,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 197,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "prop06",
    "start": 209,
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
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "prop07",
    "start": 229,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 237,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "prop08",
    "start": 249,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 257,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "prop09",
    "start": 269,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 277,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "prop10",
    "start": 289,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 297,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "prop11",
    "start": 309,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 317,
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
    "value": "prop12",
    "start": 329,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 337,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "prop13",
    "start": 349,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 357,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "prop14",
    "start": 369,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 377,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "prop15",
    "start": 389,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 397,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "prop16",
    "start": 409,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 417,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "prop17",
    "start": 429,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 437,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "prop18",
    "start": 449,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 457,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "prop19",
    "start": 469,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 477,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "prop20",
    "start": 489,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 497,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "prop21",
    "start": 509,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 517,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "prop22",
    "start": 529,
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
    "value": "string",
    "start": 537,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "prop23",
    "start": 549,
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
    "value": "string",
    "start": 557,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "prop24",
    "start": 569,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 577,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "prop25",
    "start": 589,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 597,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "prop26",
    "start": 609,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 617,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "prop27",
    "start": 629,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 637,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "prop28",
    "start": 649,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 657,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "prop29",
    "start": 669,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 677,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "prop30",
    "start": 689,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 697,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "prop31",
    "start": 709,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 717,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "prop32",
    "start": 729,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 737,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "prop33",
    "start": 749,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 757,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "prop34",
    "start": 769,
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
    "value": "string",
    "start": 777,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "prop35",
    "start": 789,
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
    "value": ";",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "prop36",
    "start": 809,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 817,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "prop37",
    "start": 829,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 837,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 847,
    "end": 848
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 854,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 864,
    "end": 865
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 866,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 874,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "HTMLDataAttributes",
    "start": 880,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 905,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 909,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 915,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 921,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 925,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 931,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 937,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 941,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 953,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 957,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 969,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 973,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 985,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 989,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 1001,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1005,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 1017,
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
    "type": "Punctuator",
    "value": "}",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1038,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1050,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1058,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "HTMLDataAttributes",
    "start": 1064,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1089,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1093,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1105,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1109,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1121,
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
    "value": "string",
    "start": 1125,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1137,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1141,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 1153,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1157,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1169,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1173,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 1185,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1189,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 1201,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1205,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1222,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1234,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1242,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "HTMLDataAttributes",
    "start": 1248,
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
    "value": "c1",
    "start": 1273,
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
    "value": ";",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1289,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1293,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 1305,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1309,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 1321,
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
    "value": ";",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 1337,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1341,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 1353,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1357,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "c7",
    "start": 1369,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1373,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "c8",
    "start": 1385,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1389,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1406,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 1412,
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
    "value": "Pick",
    "start": 1417,
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
    "value": "A",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "|",
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
    "value": ",",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "String",
    "value": "'id'",
    "start": 1433,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1442,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "String",
    "value": "'id'",
    "start": 1446,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1450,
    "end": 1451
  }
]
```
