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
        "name": "Deep",
        "optional": false,
        "typeAnnotation": null,
        "start": 307,
        "end": 311
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 313
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 322,
                  "end": 323
                },
                "start": 322,
                "end": 323
              },
              "start": 322,
              "end": 325
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 312,
            "end": 325
          }
        ],
        "start": 311,
        "end": 326
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 330
            },
            "typeArguments": null,
            "start": 329,
            "end": 330
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "length",
              "raw": "\"length\"",
              "start": 331,
              "end": 339
            },
            "start": 331,
            "end": 339
          },
          "start": 329,
          "end": 340
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 100,
            "raw": "100",
            "start": 349,
            "end": 352
          },
          "start": 349,
          "end": 352
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 355,
          "end": 360
        },
        "falseType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Deep",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 367
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSRestType",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 372,
                            "end": 373
                          },
                          "typeArguments": null,
                          "start": 372,
                          "end": 373
                        },
                        "start": 369,
                        "end": 373
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 375,
                          "end": 376
                        },
                        "start": 375,
                        "end": 376
                      }
                    ],
                    "start": 368,
                    "end": 377
                  }
                ],
                "start": 367,
                "end": 378
              },
              "start": 363,
              "end": 378
            },
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 381,
                  "end": 382
                },
                "typeArguments": null,
                "start": 381,
                "end": 382
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "length",
                  "raw": "\"length\"",
                  "start": 383,
                  "end": 391
                },
                "start": 383,
                "end": 391
              },
              "start": 381,
              "end": 392
            }
          ],
          "start": 363,
          "end": 392
        },
        "start": 329,
        "end": 392
      },
      "declare": false,
      "start": 302,
      "end": 393
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Deep75",
        "optional": false,
        "typeAnnotation": null,
        "start": 399,
        "end": 405
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Deep",
          "optional": false,
          "typeAnnotation": null,
          "start": 408,
          "end": 412
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 414,
                    "end": 415
                  },
                  "start": 414,
                  "end": 415
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 417,
                    "end": 418
                  },
                  "start": 417,
                  "end": 418
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 420,
                    "end": 421
                  },
                  "start": 420,
                  "end": 421
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 423,
                    "end": 424
                  },
                  "start": 423,
                  "end": 424
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 426,
                    "end": 427
                  },
                  "start": 426,
                  "end": 427
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 429,
                    "end": 430
                  },
                  "start": 429,
                  "end": 430
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 432,
                    "end": 433
                  },
                  "start": 432,
                  "end": 433
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 435,
                    "end": 436
                  },
                  "start": 435,
                  "end": 436
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 438,
                    "end": 439
                  },
                  "start": 438,
                  "end": 439
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 441,
                    "end": 442
                  },
                  "start": 441,
                  "end": 442
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 444,
                    "end": 445
                  },
                  "start": 444,
                  "end": 445
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 447,
                    "end": 448
                  },
                  "start": 447,
                  "end": 448
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 450,
                    "end": 451
                  },
                  "start": 450,
                  "end": 451
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 453,
                    "end": 454
                  },
                  "start": 453,
                  "end": 454
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 456,
                    "end": 457
                  },
                  "start": 456,
                  "end": 457
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 459,
                    "end": 460
                  },
                  "start": 459,
                  "end": 460
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 462,
                    "end": 463
                  },
                  "start": 462,
                  "end": 463
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 465,
                    "end": 466
                  },
                  "start": 465,
                  "end": 466
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 468,
                    "end": 469
                  },
                  "start": 468,
                  "end": 469
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 471,
                    "end": 472
                  },
                  "start": 471,
                  "end": 472
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 474,
                    "end": 475
                  },
                  "start": 474,
                  "end": 475
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 477,
                    "end": 478
                  },
                  "start": 477,
                  "end": 478
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 480,
                    "end": 481
                  },
                  "start": 480,
                  "end": 481
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 483,
                    "end": 484
                  },
                  "start": 483,
                  "end": 484
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 486,
                    "end": 487
                  },
                  "start": 486,
                  "end": 487
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 489,
                    "end": 490
                  },
                  "start": 489,
                  "end": 490
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 492,
                    "end": 493
                  },
                  "start": 492,
                  "end": 493
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 495,
                    "end": 496
                  },
                  "start": 495,
                  "end": 496
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 498,
                    "end": 499
                  },
                  "start": 498,
                  "end": 499
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 501,
                    "end": 502
                  },
                  "start": 501,
                  "end": 502
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 504,
                    "end": 505
                  },
                  "start": 504,
                  "end": 505
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 507,
                    "end": 508
                  },
                  "start": 507,
                  "end": 508
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 510,
                    "end": 511
                  },
                  "start": 510,
                  "end": 511
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 513,
                    "end": 514
                  },
                  "start": 513,
                  "end": 514
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 516,
                    "end": 517
                  },
                  "start": 516,
                  "end": 517
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 519,
                    "end": 520
                  },
                  "start": 519,
                  "end": 520
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 522,
                    "end": 523
                  },
                  "start": 522,
                  "end": 523
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 525,
                    "end": 526
                  },
                  "start": 525,
                  "end": 526
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 528,
                    "end": 529
                  },
                  "start": 528,
                  "end": 529
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 531,
                    "end": 532
                  },
                  "start": 531,
                  "end": 532
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 534,
                    "end": 535
                  },
                  "start": 534,
                  "end": 535
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 537,
                    "end": 538
                  },
                  "start": 537,
                  "end": 538
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 540,
                    "end": 541
                  },
                  "start": 540,
                  "end": 541
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 543,
                    "end": 544
                  },
                  "start": 543,
                  "end": 544
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 546,
                    "end": 547
                  },
                  "start": 546,
                  "end": 547
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 549,
                    "end": 550
                  },
                  "start": 549,
                  "end": 550
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 552,
                    "end": 553
                  },
                  "start": 552,
                  "end": 553
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 555,
                    "end": 556
                  },
                  "start": 555,
                  "end": 556
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 558,
                    "end": 559
                  },
                  "start": 558,
                  "end": 559
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 561,
                    "end": 562
                  },
                  "start": 561,
                  "end": 562
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 564,
                    "end": 565
                  },
                  "start": 564,
                  "end": 565
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 567,
                    "end": 568
                  },
                  "start": 567,
                  "end": 568
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 570,
                    "end": 571
                  },
                  "start": 570,
                  "end": 571
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 573,
                    "end": 574
                  },
                  "start": 573,
                  "end": 574
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 576,
                    "end": 577
                  },
                  "start": 576,
                  "end": 577
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 579,
                    "end": 580
                  },
                  "start": 579,
                  "end": 580
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 582,
                    "end": 583
                  },
                  "start": 582,
                  "end": 583
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 585,
                    "end": 586
                  },
                  "start": 585,
                  "end": 586
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 588,
                    "end": 589
                  },
                  "start": 588,
                  "end": 589
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 591,
                    "end": 592
                  },
                  "start": 591,
                  "end": 592
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 594,
                    "end": 595
                  },
                  "start": 594,
                  "end": 595
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 597,
                    "end": 598
                  },
                  "start": 597,
                  "end": 598
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 600,
                    "end": 601
                  },
                  "start": 600,
                  "end": 601
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 603,
                    "end": 604
                  },
                  "start": 603,
                  "end": 604
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 606,
                    "end": 607
                  },
                  "start": 606,
                  "end": 607
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 609,
                    "end": 610
                  },
                  "start": 609,
                  "end": 610
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 612,
                    "end": 613
                  },
                  "start": 612,
                  "end": 613
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 615,
                    "end": 616
                  },
                  "start": 615,
                  "end": 616
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 618,
                    "end": 619
                  },
                  "start": 618,
                  "end": 619
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 621,
                    "end": 622
                  },
                  "start": 621,
                  "end": 622
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 624,
                    "end": 625
                  },
                  "start": 624,
                  "end": 625
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 627,
                    "end": 628
                  },
                  "start": 627,
                  "end": 628
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 630,
                    "end": 631
                  },
                  "start": 630,
                  "end": 631
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 633,
                    "end": 634
                  },
                  "start": 633,
                  "end": 634
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 636,
                    "end": 637
                  },
                  "start": 636,
                  "end": 637
                }
              ],
              "start": 413,
              "end": 638
            }
          ],
          "start": 412,
          "end": 639
        },
        "start": 408,
        "end": 639
      },
      "declare": false,
      "start": 394,
      "end": 640
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Deep50",
        "optional": false,
        "typeAnnotation": null,
        "start": 646,
        "end": 652
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Deep",
          "optional": false,
          "typeAnnotation": null,
          "start": 655,
          "end": 659
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 661,
                    "end": 662
                  },
                  "start": 661,
                  "end": 662
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 664,
                    "end": 665
                  },
                  "start": 664,
                  "end": 665
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 667,
                    "end": 668
                  },
                  "start": 667,
                  "end": 668
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 670,
                    "end": 671
                  },
                  "start": 670,
                  "end": 671
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 673,
                    "end": 674
                  },
                  "start": 673,
                  "end": 674
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 676,
                    "end": 677
                  },
                  "start": 676,
                  "end": 677
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 679,
                    "end": 680
                  },
                  "start": 679,
                  "end": 680
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 682,
                    "end": 683
                  },
                  "start": 682,
                  "end": 683
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 685,
                    "end": 686
                  },
                  "start": 685,
                  "end": 686
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 688,
                    "end": 689
                  },
                  "start": 688,
                  "end": 689
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 691,
                    "end": 692
                  },
                  "start": 691,
                  "end": 692
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 694,
                    "end": 695
                  },
                  "start": 694,
                  "end": 695
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 697,
                    "end": 698
                  },
                  "start": 697,
                  "end": 698
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 700,
                    "end": 701
                  },
                  "start": 700,
                  "end": 701
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 703,
                    "end": 704
                  },
                  "start": 703,
                  "end": 704
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 706,
                    "end": 707
                  },
                  "start": 706,
                  "end": 707
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 709,
                    "end": 710
                  },
                  "start": 709,
                  "end": 710
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 712,
                    "end": 713
                  },
                  "start": 712,
                  "end": 713
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 715,
                    "end": 716
                  },
                  "start": 715,
                  "end": 716
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 718,
                    "end": 719
                  },
                  "start": 718,
                  "end": 719
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 721,
                    "end": 722
                  },
                  "start": 721,
                  "end": 722
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 724,
                    "end": 725
                  },
                  "start": 724,
                  "end": 725
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 727,
                    "end": 728
                  },
                  "start": 727,
                  "end": 728
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 730,
                    "end": 731
                  },
                  "start": 730,
                  "end": 731
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 733,
                    "end": 734
                  },
                  "start": 733,
                  "end": 734
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 736,
                    "end": 737
                  },
                  "start": 736,
                  "end": 737
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 739,
                    "end": 740
                  },
                  "start": 739,
                  "end": 740
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 742,
                    "end": 743
                  },
                  "start": 742,
                  "end": 743
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 745,
                    "end": 746
                  },
                  "start": 745,
                  "end": 746
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 748,
                    "end": 749
                  },
                  "start": 748,
                  "end": 749
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 751,
                    "end": 752
                  },
                  "start": 751,
                  "end": 752
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 754,
                    "end": 755
                  },
                  "start": 754,
                  "end": 755
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 757,
                    "end": 758
                  },
                  "start": 757,
                  "end": 758
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 760,
                    "end": 761
                  },
                  "start": 760,
                  "end": 761
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 763,
                    "end": 764
                  },
                  "start": 763,
                  "end": 764
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 766,
                    "end": 767
                  },
                  "start": 766,
                  "end": 767
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 769,
                    "end": 770
                  },
                  "start": 769,
                  "end": 770
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 772,
                    "end": 773
                  },
                  "start": 772,
                  "end": 773
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 775,
                    "end": 776
                  },
                  "start": 775,
                  "end": 776
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 778,
                    "end": 779
                  },
                  "start": 778,
                  "end": 779
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 781,
                    "end": 782
                  },
                  "start": 781,
                  "end": 782
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 784,
                    "end": 785
                  },
                  "start": 784,
                  "end": 785
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 787,
                    "end": 788
                  },
                  "start": 787,
                  "end": 788
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 790,
                    "end": 791
                  },
                  "start": 790,
                  "end": 791
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 793,
                    "end": 794
                  },
                  "start": 793,
                  "end": 794
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 796,
                    "end": 797
                  },
                  "start": 796,
                  "end": 797
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 799,
                    "end": 800
                  },
                  "start": 799,
                  "end": 800
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 802,
                    "end": 803
                  },
                  "start": 802,
                  "end": 803
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 805,
                    "end": 806
                  },
                  "start": 805,
                  "end": 806
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 808,
                    "end": 809
                  },
                  "start": 808,
                  "end": 809
                }
              ],
              "start": 660,
              "end": 810
            }
          ],
          "start": 659,
          "end": 811
        },
        "start": 655,
        "end": 811
      },
      "declare": false,
      "start": 641,
      "end": 812
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Deep25",
        "optional": false,
        "typeAnnotation": null,
        "start": 818,
        "end": 824
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Deep",
          "optional": false,
          "typeAnnotation": null,
          "start": 827,
          "end": 831
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 833,
                    "end": 834
                  },
                  "start": 833,
                  "end": 834
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 836,
                    "end": 837
                  },
                  "start": 836,
                  "end": 837
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 839,
                    "end": 840
                  },
                  "start": 839,
                  "end": 840
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 842,
                    "end": 843
                  },
                  "start": 842,
                  "end": 843
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 845,
                    "end": 846
                  },
                  "start": 845,
                  "end": 846
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 848,
                    "end": 849
                  },
                  "start": 848,
                  "end": 849
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 851,
                    "end": 852
                  },
                  "start": 851,
                  "end": 852
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 854,
                    "end": 855
                  },
                  "start": 854,
                  "end": 855
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 857,
                    "end": 858
                  },
                  "start": 857,
                  "end": 858
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 860,
                    "end": 861
                  },
                  "start": 860,
                  "end": 861
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 863,
                    "end": 864
                  },
                  "start": 863,
                  "end": 864
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 866,
                    "end": 867
                  },
                  "start": 866,
                  "end": 867
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 869,
                    "end": 870
                  },
                  "start": 869,
                  "end": 870
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 872,
                    "end": 873
                  },
                  "start": 872,
                  "end": 873
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 875,
                    "end": 876
                  },
                  "start": 875,
                  "end": 876
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 878,
                    "end": 879
                  },
                  "start": 878,
                  "end": 879
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 881,
                    "end": 882
                  },
                  "start": 881,
                  "end": 882
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 884,
                    "end": 885
                  },
                  "start": 884,
                  "end": 885
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 887,
                    "end": 888
                  },
                  "start": 887,
                  "end": 888
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 890,
                    "end": 891
                  },
                  "start": 890,
                  "end": 891
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 893,
                    "end": 894
                  },
                  "start": 893,
                  "end": 894
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 896,
                    "end": 897
                  },
                  "start": 896,
                  "end": 897
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 899,
                    "end": 900
                  },
                  "start": 899,
                  "end": 900
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 902,
                    "end": 903
                  },
                  "start": 902,
                  "end": 903
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 905,
                    "end": 906
                  },
                  "start": 905,
                  "end": 906
                }
              ],
              "start": 832,
              "end": 907
            }
          ],
          "start": 831,
          "end": 908
        },
        "start": 827,
        "end": 908
      },
      "declare": false,
      "start": 813,
      "end": 909
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DeepAll",
        "optional": false,
        "typeAnnotation": null,
        "start": 915,
        "end": 922
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Deep",
          "optional": false,
          "typeAnnotation": null,
          "start": 925,
          "end": 929
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [],
              "start": 930,
              "end": 932
            }
          ],
          "start": 929,
          "end": 933
        },
        "start": 925,
        "end": 933
      },
      "declare": false,
      "start": 910,
      "end": 934
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 934
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 302,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "Deep",
    "start": 307,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 314,
    "end": 321
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 330,
    "end": 331
  },
  {
    "type": "String",
    "value": "\"length\"",
    "start": 331,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 341,
    "end": 348
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 349,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 355,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "Deep",
    "start": 363,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 369,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 373,
    "end": 374
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 382,
    "end": 383
  },
  {
    "type": "String",
    "value": "\"length\"",
    "start": 383,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 394,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "Deep75",
    "start": 399,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "Deep",
    "start": 408,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 413,
    "end": 414
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 415,
    "end": 416
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 418,
    "end": 419
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 421,
    "end": 422
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 424,
    "end": 425
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 427,
    "end": 428
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 430,
    "end": 431
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 433,
    "end": 434
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 436,
    "end": 437
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 439,
    "end": 440
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 442,
    "end": 443
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 445,
    "end": 446
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 448,
    "end": 449
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 451,
    "end": 452
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 454,
    "end": 455
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 457,
    "end": 458
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 460,
    "end": 461
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 463,
    "end": 464
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 466,
    "end": 467
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 469,
    "end": 470
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 472,
    "end": 473
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 475,
    "end": 476
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 478,
    "end": 479
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 481,
    "end": 482
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 484,
    "end": 485
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 487,
    "end": 488
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 490,
    "end": 491
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 493,
    "end": 494
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 496,
    "end": 497
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 499,
    "end": 500
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 502,
    "end": 503
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 505,
    "end": 506
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 508,
    "end": 509
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 511,
    "end": 512
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 514,
    "end": 515
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 517,
    "end": 518
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 520,
    "end": 521
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 523,
    "end": 524
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 526,
    "end": 527
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 529,
    "end": 530
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 532,
    "end": 533
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 535,
    "end": 536
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 538,
    "end": 539
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 541,
    "end": 542
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 544,
    "end": 545
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 547,
    "end": 548
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 550,
    "end": 551
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 553,
    "end": 554
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 556,
    "end": 557
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 559,
    "end": 560
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 562,
    "end": 563
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 565,
    "end": 566
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 568,
    "end": 569
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 571,
    "end": 572
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 574,
    "end": 575
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 577,
    "end": 578
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 580,
    "end": 581
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 583,
    "end": 584
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 586,
    "end": 587
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 589,
    "end": 590
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 592,
    "end": 593
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 595,
    "end": 596
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 598,
    "end": 599
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 601,
    "end": 602
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 604,
    "end": 605
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 607,
    "end": 608
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 610,
    "end": 611
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 613,
    "end": 614
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 616,
    "end": 617
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 619,
    "end": 620
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 622,
    "end": 623
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Numeric",
    "value": "0",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 628,
    "end": 629
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 631,
    "end": 632
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 634,
    "end": 635
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 641,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "Deep50",
    "start": 646,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "Deep",
    "start": 655,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 660,
    "end": 661
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 662,
    "end": 663
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 665,
    "end": 666
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 668,
    "end": 669
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 671,
    "end": 672
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 674,
    "end": 675
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 677,
    "end": 678
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 680,
    "end": 681
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 683,
    "end": 684
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 686,
    "end": 687
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 689,
    "end": 690
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 692,
    "end": 693
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 695,
    "end": 696
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 698,
    "end": 699
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 701,
    "end": 702
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 704,
    "end": 705
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 707,
    "end": 708
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 710,
    "end": 711
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 713,
    "end": 714
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 716,
    "end": 717
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 719,
    "end": 720
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 722,
    "end": 723
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 725,
    "end": 726
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 728,
    "end": 729
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 731,
    "end": 732
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 734,
    "end": 735
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 737,
    "end": 738
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 740,
    "end": 741
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 743,
    "end": 744
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 746,
    "end": 747
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 749,
    "end": 750
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 752,
    "end": 753
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 755,
    "end": 756
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 758,
    "end": 759
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 761,
    "end": 762
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 764,
    "end": 765
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 767,
    "end": 768
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 770,
    "end": 771
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 773,
    "end": 774
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 776,
    "end": 777
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 779,
    "end": 780
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 782,
    "end": 783
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Numeric",
    "value": "0",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 788,
    "end": 789
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 791,
    "end": 792
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 794,
    "end": 795
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 797,
    "end": 798
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 800,
    "end": 801
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 803,
    "end": 804
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 806,
    "end": 807
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": ">",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 813,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "Deep25",
    "start": 818,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "Deep",
    "start": 827,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 832,
    "end": 833
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 834,
    "end": 835
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 837,
    "end": 838
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 840,
    "end": 841
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 843,
    "end": 844
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 846,
    "end": 847
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 849,
    "end": 850
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 852,
    "end": 853
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 855,
    "end": 856
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 858,
    "end": 859
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 861,
    "end": 862
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 864,
    "end": 865
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 867,
    "end": 868
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 870,
    "end": 871
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 873,
    "end": 874
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 876,
    "end": 877
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 879,
    "end": 880
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 882,
    "end": 883
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 885,
    "end": 886
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 888,
    "end": 889
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 891,
    "end": 892
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 894,
    "end": 895
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 897,
    "end": 898
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 900,
    "end": 901
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 903,
    "end": 904
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 910,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "DeepAll",
    "start": 915,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "Deep",
    "start": 925,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 933,
    "end": 934
  }
]
```
