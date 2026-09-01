__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
              "name": "x01",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 225
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 228,
                  "end": 229
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 233,
                  "end": 239
                },
                "start": 228,
                "end": 239
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 242,
                "end": 243
              },
              "start": 228,
              "end": 243
            },
            "definite": false,
            "start": 222,
            "end": 243
          }
        ],
        "declare": false,
        "start": 216,
        "end": 244
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 209,
      "end": 244
    },
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
              "name": "x02",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 261
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 264,
                    "end": 265
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 269,
                    "end": 272
                  },
                  "start": 264,
                  "end": 272
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 276,
                  "end": 282
                },
                "start": 264,
                "end": 282
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 285,
                "end": 286
              },
              "start": 264,
              "end": 286
            },
            "definite": false,
            "start": 258,
            "end": 286
          }
        ],
        "declare": false,
        "start": 252,
        "end": 287
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 245,
      "end": 287
    },
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
              "name": "x03",
              "optional": false,
              "typeAnnotation": null,
              "start": 302,
              "end": 305
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 308,
                    "end": 309
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 312,
                    "end": 313
                  },
                  "start": 308,
                  "end": 313
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 317,
                  "end": 323
                },
                "start": 308,
                "end": 323
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 326,
                "end": 327
              },
              "start": 308,
              "end": 327
            },
            "definite": false,
            "start": 302,
            "end": 327
          }
        ],
        "declare": false,
        "start": 296,
        "end": 328
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 289,
      "end": 328
    },
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
              "name": "x04",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 355
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 358,
                      "end": 359
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 362,
                      "end": 363
                    },
                    "start": 358,
                    "end": 363
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 367,
                    "end": 370
                  },
                  "start": 358,
                  "end": 370
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 374,
                  "end": 380
                },
                "start": 358,
                "end": 380
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 383,
                "end": 384
              },
              "start": 358,
              "end": 384
            },
            "definite": false,
            "start": 352,
            "end": 384
          }
        ],
        "declare": false,
        "start": 346,
        "end": 385
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 339,
      "end": 385
    },
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
              "name": "x05",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 412
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 415,
                  "end": 416
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 420,
                  "end": 426
                },
                "start": 415,
                "end": 426
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 429,
                  "end": 430
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 433,
                  "end": 434
                },
                "start": 429,
                "end": 434
              },
              "start": 415,
              "end": 434
            },
            "definite": false,
            "start": 409,
            "end": 434
          }
        ],
        "declare": false,
        "start": 403,
        "end": 435
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 396,
      "end": 435
    },
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
              "name": "x06",
              "optional": false,
              "typeAnnotation": null,
              "start": 449,
              "end": 452
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 455,
                    "end": 456
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 460,
                    "end": 463
                  },
                  "start": 455,
                  "end": 463
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 467,
                  "end": 473
                },
                "start": 455,
                "end": 473
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 476,
                  "end": 477
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 480,
                  "end": 481
                },
                "start": 476,
                "end": 481
              },
              "start": 455,
              "end": 481
            },
            "definite": false,
            "start": 449,
            "end": 481
          }
        ],
        "declare": false,
        "start": 443,
        "end": 482
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 436,
      "end": 482
    },
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
              "name": "x07",
              "optional": false,
              "typeAnnotation": null,
              "start": 497,
              "end": 500
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 503,
                    "end": 504
                  },
                  "operator": "*",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 507,
                    "end": 508
                  },
                  "start": 503,
                  "end": 508
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 512,
                  "end": 518
                },
                "start": 503,
                "end": 518
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 521,
                "end": 522
              },
              "start": 503,
              "end": 522
            },
            "definite": false,
            "start": 497,
            "end": 522
          }
        ],
        "declare": false,
        "start": 491,
        "end": 523
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 484,
      "end": 523
    },
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
              "name": "x08",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 540
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 543,
                      "end": 544
                    },
                    "operator": "*",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 547,
                      "end": 548
                    },
                    "start": 543,
                    "end": 548
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 552,
                    "end": 555
                  },
                  "start": 543,
                  "end": 555
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 559,
                  "end": 565
                },
                "start": 543,
                "end": 565
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 568,
                "end": 569
              },
              "start": 543,
              "end": 569
            },
            "definite": false,
            "start": 537,
            "end": 569
          }
        ],
        "declare": false,
        "start": 531,
        "end": 570
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 524,
      "end": 570
    },
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
              "name": "x09",
              "optional": false,
              "typeAnnotation": null,
              "start": 584,
              "end": 587
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 590,
                    "end": 591
                  },
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 595,
                    "end": 601
                  },
                  "start": 590,
                  "end": 601
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 604,
                  "end": 605
                },
                "start": 590,
                "end": 605
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 608,
                "end": 609
              },
              "start": 590,
              "end": 609
            },
            "definite": false,
            "start": 584,
            "end": 609
          }
        ],
        "declare": false,
        "start": 578,
        "end": 610
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 571,
      "end": 610
    },
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
              "name": "x10",
              "optional": false,
              "typeAnnotation": null,
              "start": 624,
              "end": 627
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 630,
                      "end": 631
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 635,
                      "end": 638
                    },
                    "start": 630,
                    "end": 638
                  },
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 642,
                    "end": 648
                  },
                  "start": 630,
                  "end": 648
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 651,
                  "end": 652
                },
                "start": 630,
                "end": 652
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 655,
                "end": 656
              },
              "start": 630,
              "end": 656
            },
            "definite": false,
            "start": 624,
            "end": 656
          }
        ],
        "declare": false,
        "start": 618,
        "end": 657
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 611,
      "end": 657
    },
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
              "name": "x11",
              "optional": false,
              "typeAnnotation": null,
              "start": 672,
              "end": 675
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 679,
                    "end": 680
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 683,
                    "end": 684
                  },
                  "start": 679,
                  "end": 684
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 688,
                  "end": 694
                },
                "start": 679,
                "end": 694
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 698,
                "end": 699
              },
              "start": 678,
              "end": 699
            },
            "definite": false,
            "start": 672,
            "end": 699
          }
        ],
        "declare": false,
        "start": 666,
        "end": 700
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 659,
      "end": 700
    },
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
              "name": "x12",
              "optional": false,
              "typeAnnotation": null,
              "start": 714,
              "end": 717
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 721,
                      "end": 722
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 725,
                      "end": 726
                    },
                    "start": 721,
                    "end": 726
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 730,
                    "end": 733
                  },
                  "start": 721,
                  "end": 733
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 737,
                  "end": 743
                },
                "start": 721,
                "end": 743
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 747,
                "end": 748
              },
              "start": 720,
              "end": 748
            },
            "definite": false,
            "start": 714,
            "end": 748
          }
        ],
        "declare": false,
        "start": 708,
        "end": 749
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 701,
      "end": 749
    },
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
              "name": "x13",
              "optional": false,
              "typeAnnotation": null,
              "start": 763,
              "end": 766
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 770,
                    "end": 771
                  },
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 775,
                    "end": 781
                  },
                  "start": 770,
                  "end": 781
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 784,
                  "end": 785
                },
                "start": 770,
                "end": 785
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 789,
                "end": 790
              },
              "start": 769,
              "end": 790
            },
            "definite": false,
            "start": 763,
            "end": 790
          }
        ],
        "declare": false,
        "start": 757,
        "end": 791
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 750,
      "end": 791
    },
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
              "name": "x14",
              "optional": false,
              "typeAnnotation": null,
              "start": 805,
              "end": 808
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 812,
                      "end": 813
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 817,
                      "end": 820
                    },
                    "start": 812,
                    "end": 820
                  },
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 824,
                    "end": 830
                  },
                  "start": 812,
                  "end": 830
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 833,
                  "end": 834
                },
                "start": 812,
                "end": 834
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 838,
                "end": 839
              },
              "start": 811,
              "end": 839
            },
            "definite": false,
            "start": 805,
            "end": 839
          }
        ],
        "declare": false,
        "start": 799,
        "end": 840
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 792,
      "end": 840
    },
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
              "name": "x15",
              "optional": false,
              "typeAnnotation": null,
              "start": 855,
              "end": 858
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 861,
                    "end": 862
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 865,
                    "end": 866
                  },
                  "start": 861,
                  "end": 866
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 870,
                  "end": 876
                },
                "start": 861,
                "end": 876
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 881,
                "end": 882
              },
              "start": 861,
              "end": 882
            },
            "definite": false,
            "start": 855,
            "end": 882
          }
        ],
        "declare": false,
        "start": 849,
        "end": 883
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 842,
      "end": 883
    },
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
              "name": "x16",
              "optional": false,
              "typeAnnotation": null,
              "start": 897,
              "end": 900
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 903,
                      "end": 904
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 907,
                      "end": 908
                    },
                    "start": 903,
                    "end": 908
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 912,
                    "end": 915
                  },
                  "start": 903,
                  "end": 915
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 919,
                  "end": 925
                },
                "start": 903,
                "end": 925
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 930,
                "end": 931
              },
              "start": 903,
              "end": 931
            },
            "definite": false,
            "start": 897,
            "end": 931
          }
        ],
        "declare": false,
        "start": 891,
        "end": 932
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 884,
      "end": 932
    },
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
              "name": "x17",
              "optional": false,
              "typeAnnotation": null,
              "start": 946,
              "end": 949
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 952,
                    "end": 953
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 956,
                    "end": 957
                  },
                  "start": 952,
                  "end": 957
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 961,
                  "end": 967
                },
                "start": 952,
                "end": 967
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 970,
                "end": 971
              },
              "start": 952,
              "end": 971
            },
            "definite": false,
            "start": 946,
            "end": 971
          }
        ],
        "declare": false,
        "start": 940,
        "end": 972
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 933,
      "end": 972
    },
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
              "name": "x18",
              "optional": false,
              "typeAnnotation": null,
              "start": 986,
              "end": 989
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 992,
                      "end": 993
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 996,
                      "end": 997
                    },
                    "start": 992,
                    "end": 997
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1001,
                    "end": 1004
                  },
                  "start": 992,
                  "end": 1004
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1008,
                  "end": 1014
                },
                "start": 992,
                "end": 1014
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1017,
                "end": 1018
              },
              "start": 992,
              "end": 1018
            },
            "definite": false,
            "start": 986,
            "end": 1018
          }
        ],
        "declare": false,
        "start": 980,
        "end": 1019
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 973,
      "end": 1019
    },
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
              "name": "x19",
              "optional": false,
              "typeAnnotation": null,
              "start": 1033,
              "end": 1036
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1039,
                    "end": 1040
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1043,
                    "end": 1044
                  },
                  "start": 1039,
                  "end": 1044
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1048,
                  "end": 1054
                },
                "start": 1039,
                "end": 1054
              },
              "operator": ">=",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1058,
                "end": 1059
              },
              "start": 1039,
              "end": 1059
            },
            "definite": false,
            "start": 1033,
            "end": 1059
          }
        ],
        "declare": false,
        "start": 1027,
        "end": 1060
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1020,
      "end": 1060
    },
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
              "name": "x20",
              "optional": false,
              "typeAnnotation": null,
              "start": 1074,
              "end": 1077
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1080,
                      "end": 1081
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1084,
                      "end": 1085
                    },
                    "start": 1080,
                    "end": 1085
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1089,
                    "end": 1092
                  },
                  "start": 1080,
                  "end": 1092
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1096,
                  "end": 1102
                },
                "start": 1080,
                "end": 1102
              },
              "operator": ">=",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1106,
                "end": 1107
              },
              "start": 1080,
              "end": 1107
            },
            "definite": false,
            "start": 1074,
            "end": 1107
          }
        ],
        "declare": false,
        "start": 1068,
        "end": 1108
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1061,
      "end": 1108
    },
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
              "name": "x21",
              "optional": false,
              "typeAnnotation": null,
              "start": 1123,
              "end": 1126
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1129,
                    "end": 1130
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1133,
                    "end": 1134
                  },
                  "start": 1129,
                  "end": 1134
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1138,
                  "end": 1144
                },
                "start": 1129,
                "end": 1144
              },
              "operator": ">>",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1148,
                "end": 1149
              },
              "start": 1129,
              "end": 1149
            },
            "definite": false,
            "start": 1123,
            "end": 1149
          }
        ],
        "declare": false,
        "start": 1117,
        "end": 1150
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1110,
      "end": 1150
    },
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
              "name": "x22",
              "optional": false,
              "typeAnnotation": null,
              "start": 1164,
              "end": 1167
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1170,
                      "end": 1171
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1174,
                      "end": 1175
                    },
                    "start": 1170,
                    "end": 1175
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1179,
                    "end": 1182
                  },
                  "start": 1170,
                  "end": 1182
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1186,
                  "end": 1192
                },
                "start": 1170,
                "end": 1192
              },
              "operator": ">>",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1196,
                "end": 1197
              },
              "start": 1170,
              "end": 1197
            },
            "definite": false,
            "start": 1164,
            "end": 1197
          }
        ],
        "declare": false,
        "start": 1158,
        "end": 1198
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1151,
      "end": 1198
    },
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
              "name": "x23",
              "optional": false,
              "typeAnnotation": null,
              "start": 1212,
              "end": 1215
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1218,
                    "end": 1219
                  },
                  "operator": ">>",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1223,
                    "end": 1224
                  },
                  "start": 1218,
                  "end": 1224
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1228,
                  "end": 1234
                },
                "start": 1218,
                "end": 1234
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1237,
                "end": 1238
              },
              "start": 1218,
              "end": 1238
            },
            "definite": false,
            "start": 1212,
            "end": 1238
          }
        ],
        "declare": false,
        "start": 1206,
        "end": 1239
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1199,
      "end": 1239
    },
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
              "name": "x24",
              "optional": false,
              "typeAnnotation": null,
              "start": 1263,
              "end": 1266
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1269,
                      "end": 1270
                    },
                    "operator": ">>",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1274,
                      "end": 1275
                    },
                    "start": 1269,
                    "end": 1275
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1279,
                    "end": 1282
                  },
                  "start": 1269,
                  "end": 1282
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1286,
                  "end": 1292
                },
                "start": 1269,
                "end": 1292
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1295,
                "end": 1296
              },
              "start": 1269,
              "end": 1296
            },
            "definite": false,
            "start": 1263,
            "end": 1296
          }
        ],
        "declare": false,
        "start": 1257,
        "end": 1297
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1250,
      "end": 1297
    },
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
              "name": "x25",
              "optional": false,
              "typeAnnotation": null,
              "start": 1421,
              "end": 1424
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1427,
                    "end": 1428
                  },
                  "operator": "*",
                  "right": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 1431,
                    "end": 1432
                  },
                  "start": 1427,
                  "end": 1432
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1436,
                  "end": 1442
                },
                "start": 1427,
                "end": 1442
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1445,
                "end": 1446
              },
              "start": 1427,
              "end": 1446
            },
            "definite": false,
            "start": 1421,
            "end": 1446
          }
        ],
        "declare": false,
        "start": 1415,
        "end": 1447
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1408,
      "end": 1447
    },
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
              "name": "x26",
              "optional": false,
              "typeAnnotation": null,
              "start": 1461,
              "end": 1464
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1467,
                      "end": 1468
                    },
                    "operator": "*",
                    "right": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 1471,
                      "end": 1472
                    },
                    "start": 1467,
                    "end": 1472
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1476,
                    "end": 1479
                  },
                  "start": 1467,
                  "end": 1479
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1483,
                  "end": 1489
                },
                "start": 1467,
                "end": 1489
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1492,
                "end": 1493
              },
              "start": 1467,
              "end": 1493
            },
            "definite": false,
            "start": 1461,
            "end": 1493
          }
        ],
        "declare": false,
        "start": 1455,
        "end": 1494
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1448,
      "end": 1494
    },
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
              "name": "x27",
              "optional": false,
              "typeAnnotation": null,
              "start": 1565,
              "end": 1568
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1571,
                    "end": 1572
                  },
                  "operator": "**",
                  "right": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 1576,
                    "end": 1577
                  },
                  "start": 1571,
                  "end": 1577
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1581,
                  "end": 1587
                },
                "start": 1571,
                "end": 1587
              },
              "operator": "**",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1591,
                "end": 1592
              },
              "start": 1571,
              "end": 1592
            },
            "definite": false,
            "start": 1565,
            "end": 1592
          }
        ],
        "declare": false,
        "start": 1559,
        "end": 1593
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1552,
      "end": 1593
    },
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
              "name": "x28",
              "optional": false,
              "typeAnnotation": null,
              "start": 1617,
              "end": 1620
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1623,
                      "end": 1624
                    },
                    "operator": "**",
                    "right": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 1628,
                      "end": 1629
                    },
                    "start": 1623,
                    "end": 1629
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1633,
                    "end": 1636
                  },
                  "start": 1623,
                  "end": 1636
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1640,
                  "end": 1646
                },
                "start": 1623,
                "end": 1646
              },
              "operator": "**",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1650,
                "end": 1651
              },
              "start": 1623,
              "end": 1651
            },
            "definite": false,
            "start": 1617,
            "end": 1651
          }
        ],
        "declare": false,
        "start": 1611,
        "end": 1652
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1604,
      "end": 1652
    },
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
              "name": "y01",
              "optional": false,
              "typeAnnotation": null,
              "start": 1677,
              "end": 1680
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1683,
                  "end": 1684
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1695,
                  "end": 1701
                },
                "start": 1683,
                "end": 1701
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1704,
                "end": 1705
              },
              "start": 1683,
              "end": 1705
            },
            "definite": false,
            "start": 1677,
            "end": 1705
          }
        ],
        "declare": false,
        "start": 1671,
        "end": 1706
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1664,
      "end": 1706
    },
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
              "name": "y02",
              "optional": false,
              "typeAnnotation": null,
              "start": 1720,
              "end": 1723
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1726,
                    "end": 1727
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1738,
                    "end": 1741
                  },
                  "start": 1726,
                  "end": 1741
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1752,
                  "end": 1758
                },
                "start": 1726,
                "end": 1758
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1761,
                "end": 1762
              },
              "start": 1726,
              "end": 1762
            },
            "definite": false,
            "start": 1720,
            "end": 1762
          }
        ],
        "declare": false,
        "start": 1714,
        "end": 1763
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1707,
      "end": 1763
    },
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
              "name": "y03",
              "optional": false,
              "typeAnnotation": null,
              "start": 1778,
              "end": 1781
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1784,
                    "end": 1785
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1788,
                    "end": 1789
                  },
                  "start": 1784,
                  "end": 1789
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1800,
                  "end": 1806
                },
                "start": 1784,
                "end": 1806
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1809,
                "end": 1810
              },
              "start": 1784,
              "end": 1810
            },
            "definite": false,
            "start": 1778,
            "end": 1810
          }
        ],
        "declare": false,
        "start": 1772,
        "end": 1811
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1765,
      "end": 1811
    },
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
              "name": "y04",
              "optional": false,
              "typeAnnotation": null,
              "start": 1835,
              "end": 1838
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1841,
                      "end": 1842
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1845,
                      "end": 1846
                    },
                    "start": 1841,
                    "end": 1846
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1857,
                    "end": 1860
                  },
                  "start": 1841,
                  "end": 1860
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1871,
                  "end": 1877
                },
                "start": 1841,
                "end": 1877
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1880,
                "end": 1881
              },
              "start": 1841,
              "end": 1881
            },
            "definite": false,
            "start": 1835,
            "end": 1881
          }
        ],
        "declare": false,
        "start": 1829,
        "end": 1882
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1822,
      "end": 1882
    },
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
              "name": "y05",
              "optional": false,
              "typeAnnotation": null,
              "start": 1906,
              "end": 1909
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1912,
                  "end": 1913
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1924,
                  "end": 1930
                },
                "start": 1912,
                "end": 1930
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1933,
                  "end": 1934
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1937,
                  "end": 1938
                },
                "start": 1933,
                "end": 1938
              },
              "start": 1912,
              "end": 1938
            },
            "definite": false,
            "start": 1906,
            "end": 1938
          }
        ],
        "declare": false,
        "start": 1900,
        "end": 1939
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1893,
      "end": 1939
    },
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
              "name": "y06",
              "optional": false,
              "typeAnnotation": null,
              "start": 1953,
              "end": 1956
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1959,
                    "end": 1960
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1971,
                    "end": 1974
                  },
                  "start": 1959,
                  "end": 1974
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1985,
                  "end": 1991
                },
                "start": 1959,
                "end": 1991
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1994,
                  "end": 1995
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1998,
                  "end": 1999
                },
                "start": 1994,
                "end": 1999
              },
              "start": 1959,
              "end": 1999
            },
            "definite": false,
            "start": 1953,
            "end": 1999
          }
        ],
        "declare": false,
        "start": 1947,
        "end": 2000
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1940,
      "end": 2000
    },
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
              "name": "y07",
              "optional": false,
              "typeAnnotation": null,
              "start": 2015,
              "end": 2018
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2021,
                    "end": 2022
                  },
                  "operator": "*",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2025,
                    "end": 2026
                  },
                  "start": 2021,
                  "end": 2026
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2037,
                  "end": 2043
                },
                "start": 2021,
                "end": 2043
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2046,
                "end": 2047
              },
              "start": 2021,
              "end": 2047
            },
            "definite": false,
            "start": 2015,
            "end": 2047
          }
        ],
        "declare": false,
        "start": 2009,
        "end": 2048
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2002,
      "end": 2048
    },
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
              "name": "y08",
              "optional": false,
              "typeAnnotation": null,
              "start": 2062,
              "end": 2065
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2068,
                      "end": 2069
                    },
                    "operator": "*",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2072,
                      "end": 2073
                    },
                    "start": 2068,
                    "end": 2073
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2084,
                    "end": 2087
                  },
                  "start": 2068,
                  "end": 2087
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2098,
                  "end": 2104
                },
                "start": 2068,
                "end": 2104
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2107,
                "end": 2108
              },
              "start": 2068,
              "end": 2108
            },
            "definite": false,
            "start": 2062,
            "end": 2108
          }
        ],
        "declare": false,
        "start": 2056,
        "end": 2109
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2049,
      "end": 2109
    },
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
              "name": "y09",
              "optional": false,
              "typeAnnotation": null,
              "start": 2123,
              "end": 2126
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2129,
                    "end": 2130
                  },
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2141,
                    "end": 2147
                  },
                  "start": 2129,
                  "end": 2147
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2150,
                  "end": 2151
                },
                "start": 2129,
                "end": 2151
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2154,
                "end": 2155
              },
              "start": 2129,
              "end": 2155
            },
            "definite": false,
            "start": 2123,
            "end": 2155
          }
        ],
        "declare": false,
        "start": 2117,
        "end": 2156
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2110,
      "end": 2156
    },
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
              "name": "y10",
              "optional": false,
              "typeAnnotation": null,
              "start": 2170,
              "end": 2173
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "TSSatisfiesExpression",
                    "expression": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2176,
                      "end": 2177
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2188,
                      "end": 2191
                    },
                    "start": 2176,
                    "end": 2191
                  },
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2202,
                    "end": 2208
                  },
                  "start": 2176,
                  "end": 2208
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2211,
                  "end": 2212
                },
                "start": 2176,
                "end": 2212
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2215,
                "end": 2216
              },
              "start": 2176,
              "end": 2216
            },
            "definite": false,
            "start": 2170,
            "end": 2216
          }
        ],
        "declare": false,
        "start": 2164,
        "end": 2217
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2157,
      "end": 2217
    },
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
              "name": "y11",
              "optional": false,
              "typeAnnotation": null,
              "start": 2232,
              "end": 2235
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2239,
                    "end": 2240
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2243,
                    "end": 2244
                  },
                  "start": 2239,
                  "end": 2244
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2255,
                  "end": 2261
                },
                "start": 2239,
                "end": 2261
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2265,
                "end": 2266
              },
              "start": 2238,
              "end": 2266
            },
            "definite": false,
            "start": 2232,
            "end": 2266
          }
        ],
        "declare": false,
        "start": 2226,
        "end": 2267
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2219,
      "end": 2267
    },
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
              "name": "y12",
              "optional": false,
              "typeAnnotation": null,
              "start": 2281,
              "end": 2284
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2288,
                      "end": 2289
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2292,
                      "end": 2293
                    },
                    "start": 2288,
                    "end": 2293
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2304,
                    "end": 2307
                  },
                  "start": 2288,
                  "end": 2307
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2318,
                  "end": 2324
                },
                "start": 2288,
                "end": 2324
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2328,
                "end": 2329
              },
              "start": 2287,
              "end": 2329
            },
            "definite": false,
            "start": 2281,
            "end": 2329
          }
        ],
        "declare": false,
        "start": 2275,
        "end": 2330
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2268,
      "end": 2330
    },
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
              "name": "y13",
              "optional": false,
              "typeAnnotation": null,
              "start": 2344,
              "end": 2347
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2351,
                    "end": 2352
                  },
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2363,
                    "end": 2369
                  },
                  "start": 2351,
                  "end": 2369
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2372,
                  "end": 2373
                },
                "start": 2351,
                "end": 2373
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2377,
                "end": 2378
              },
              "start": 2350,
              "end": 2378
            },
            "definite": false,
            "start": 2344,
            "end": 2378
          }
        ],
        "declare": false,
        "start": 2338,
        "end": 2379
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2331,
      "end": 2379
    },
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
              "name": "y14",
              "optional": false,
              "typeAnnotation": null,
              "start": 2393,
              "end": 2396
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "TSSatisfiesExpression",
                    "expression": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2400,
                      "end": 2401
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2412,
                      "end": 2415
                    },
                    "start": 2400,
                    "end": 2415
                  },
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2426,
                    "end": 2432
                  },
                  "start": 2400,
                  "end": 2432
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2435,
                  "end": 2436
                },
                "start": 2400,
                "end": 2436
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2440,
                "end": 2441
              },
              "start": 2399,
              "end": 2441
            },
            "definite": false,
            "start": 2393,
            "end": 2441
          }
        ],
        "declare": false,
        "start": 2387,
        "end": 2442
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2380,
      "end": 2442
    },
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
              "name": "y15",
              "optional": false,
              "typeAnnotation": null,
              "start": 2457,
              "end": 2460
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2463,
                    "end": 2464
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2467,
                    "end": 2468
                  },
                  "start": 2463,
                  "end": 2468
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2479,
                  "end": 2485
                },
                "start": 2463,
                "end": 2485
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2490,
                "end": 2491
              },
              "start": 2463,
              "end": 2491
            },
            "definite": false,
            "start": 2457,
            "end": 2491
          }
        ],
        "declare": false,
        "start": 2451,
        "end": 2492
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2444,
      "end": 2492
    },
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
              "name": "y16",
              "optional": false,
              "typeAnnotation": null,
              "start": 2506,
              "end": 2509
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2512,
                      "end": 2513
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2516,
                      "end": 2517
                    },
                    "start": 2512,
                    "end": 2517
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2528,
                    "end": 2531
                  },
                  "start": 2512,
                  "end": 2531
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2542,
                  "end": 2548
                },
                "start": 2512,
                "end": 2548
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2553,
                "end": 2554
              },
              "start": 2512,
              "end": 2554
            },
            "definite": false,
            "start": 2506,
            "end": 2554
          }
        ],
        "declare": false,
        "start": 2500,
        "end": 2555
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2493,
      "end": 2555
    },
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
              "name": "y17",
              "optional": false,
              "typeAnnotation": null,
              "start": 2569,
              "end": 2572
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2575,
                    "end": 2576
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2579,
                    "end": 2580
                  },
                  "start": 2575,
                  "end": 2580
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2591,
                  "end": 2597
                },
                "start": 2575,
                "end": 2597
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2600,
                "end": 2601
              },
              "start": 2575,
              "end": 2601
            },
            "definite": false,
            "start": 2569,
            "end": 2601
          }
        ],
        "declare": false,
        "start": 2563,
        "end": 2602
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2556,
      "end": 2602
    },
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
              "name": "y18",
              "optional": false,
              "typeAnnotation": null,
              "start": 2616,
              "end": 2619
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2622,
                      "end": 2623
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2626,
                      "end": 2627
                    },
                    "start": 2622,
                    "end": 2627
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2638,
                    "end": 2641
                  },
                  "start": 2622,
                  "end": 2641
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2652,
                  "end": 2658
                },
                "start": 2622,
                "end": 2658
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2661,
                "end": 2662
              },
              "start": 2622,
              "end": 2662
            },
            "definite": false,
            "start": 2616,
            "end": 2662
          }
        ],
        "declare": false,
        "start": 2610,
        "end": 2663
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2603,
      "end": 2663
    },
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
              "name": "y19",
              "optional": false,
              "typeAnnotation": null,
              "start": 2677,
              "end": 2680
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2683,
                    "end": 2684
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2687,
                    "end": 2688
                  },
                  "start": 2683,
                  "end": 2688
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2699,
                  "end": 2705
                },
                "start": 2683,
                "end": 2705
              },
              "operator": ">=",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2709,
                "end": 2710
              },
              "start": 2683,
              "end": 2710
            },
            "definite": false,
            "start": 2677,
            "end": 2710
          }
        ],
        "declare": false,
        "start": 2671,
        "end": 2711
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2664,
      "end": 2711
    },
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
              "name": "y20",
              "optional": false,
              "typeAnnotation": null,
              "start": 2725,
              "end": 2728
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2731,
                      "end": 2732
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2735,
                      "end": 2736
                    },
                    "start": 2731,
                    "end": 2736
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2747,
                    "end": 2750
                  },
                  "start": 2731,
                  "end": 2750
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2761,
                  "end": 2767
                },
                "start": 2731,
                "end": 2767
              },
              "operator": ">=",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2771,
                "end": 2772
              },
              "start": 2731,
              "end": 2772
            },
            "definite": false,
            "start": 2725,
            "end": 2772
          }
        ],
        "declare": false,
        "start": 2719,
        "end": 2773
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2712,
      "end": 2773
    },
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
              "name": "y21",
              "optional": false,
              "typeAnnotation": null,
              "start": 2788,
              "end": 2791
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2794,
                    "end": 2795
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2798,
                    "end": 2799
                  },
                  "start": 2794,
                  "end": 2799
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2810,
                  "end": 2816
                },
                "start": 2794,
                "end": 2816
              },
              "operator": ">>",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2820,
                "end": 2821
              },
              "start": 2794,
              "end": 2821
            },
            "definite": false,
            "start": 2788,
            "end": 2821
          }
        ],
        "declare": false,
        "start": 2782,
        "end": 2822
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2775,
      "end": 2822
    },
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
              "name": "y22",
              "optional": false,
              "typeAnnotation": null,
              "start": 2836,
              "end": 2839
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2842,
                      "end": 2843
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2846,
                      "end": 2847
                    },
                    "start": 2842,
                    "end": 2847
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2858,
                    "end": 2861
                  },
                  "start": 2842,
                  "end": 2861
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2872,
                  "end": 2878
                },
                "start": 2842,
                "end": 2878
              },
              "operator": ">>",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2882,
                "end": 2883
              },
              "start": 2842,
              "end": 2883
            },
            "definite": false,
            "start": 2836,
            "end": 2883
          }
        ],
        "declare": false,
        "start": 2830,
        "end": 2884
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2823,
      "end": 2884
    },
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
              "name": "y23",
              "optional": false,
              "typeAnnotation": null,
              "start": 2898,
              "end": 2901
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2904,
                    "end": 2905
                  },
                  "operator": ">>",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2909,
                    "end": 2910
                  },
                  "start": 2904,
                  "end": 2910
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2921,
                  "end": 2927
                },
                "start": 2904,
                "end": 2927
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2930,
                "end": 2931
              },
              "start": 2904,
              "end": 2931
            },
            "definite": false,
            "start": 2898,
            "end": 2931
          }
        ],
        "declare": false,
        "start": 2892,
        "end": 2932
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2885,
      "end": 2932
    },
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
              "name": "y24",
              "optional": false,
              "typeAnnotation": null,
              "start": 2956,
              "end": 2959
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2962,
                      "end": 2963
                    },
                    "operator": ">>",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2967,
                      "end": 2968
                    },
                    "start": 2962,
                    "end": 2968
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2979,
                    "end": 2982
                  },
                  "start": 2962,
                  "end": 2982
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2993,
                  "end": 2999
                },
                "start": 2962,
                "end": 2999
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 3002,
                "end": 3003
              },
              "start": 2962,
              "end": 3003
            },
            "definite": false,
            "start": 2956,
            "end": 3003
          }
        ],
        "declare": false,
        "start": 2950,
        "end": 3004
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2943,
      "end": 3004
    },
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
              "name": "y25",
              "optional": false,
              "typeAnnotation": null,
              "start": 3128,
              "end": 3131
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 3134,
                    "end": 3135
                  },
                  "operator": "*",
                  "right": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 3138,
                    "end": 3139
                  },
                  "start": 3134,
                  "end": 3139
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 3150,
                  "end": 3156
                },
                "start": 3134,
                "end": 3156
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 3159,
                "end": 3160
              },
              "start": 3134,
              "end": 3160
            },
            "definite": false,
            "start": 3128,
            "end": 3160
          }
        ],
        "declare": false,
        "start": 3122,
        "end": 3161
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3115,
      "end": 3161
    },
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
              "name": "y26",
              "optional": false,
              "typeAnnotation": null,
              "start": 3175,
              "end": 3178
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 3181,
                      "end": 3182
                    },
                    "operator": "*",
                    "right": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 3185,
                      "end": 3186
                    },
                    "start": 3181,
                    "end": 3186
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3197,
                    "end": 3200
                  },
                  "start": 3181,
                  "end": 3200
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 3211,
                  "end": 3217
                },
                "start": 3181,
                "end": 3217
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 3220,
                "end": 3221
              },
              "start": 3181,
              "end": 3221
            },
            "definite": false,
            "start": 3175,
            "end": 3221
          }
        ],
        "declare": false,
        "start": 3169,
        "end": 3222
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3162,
      "end": 3222
    },
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
              "name": "y27",
              "optional": false,
              "typeAnnotation": null,
              "start": 3293,
              "end": 3296
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 3299,
                    "end": 3300
                  },
                  "operator": "**",
                  "right": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 3304,
                    "end": 3305
                  },
                  "start": 3299,
                  "end": 3305
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 3316,
                  "end": 3322
                },
                "start": 3299,
                "end": 3322
              },
              "operator": "**",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 3326,
                "end": 3327
              },
              "start": 3299,
              "end": 3327
            },
            "definite": false,
            "start": 3293,
            "end": 3327
          }
        ],
        "declare": false,
        "start": 3287,
        "end": 3328
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3280,
      "end": 3328
    },
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
              "name": "y28",
              "optional": false,
              "typeAnnotation": null,
              "start": 3352,
              "end": 3355
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 3358,
                      "end": 3359
                    },
                    "operator": "**",
                    "right": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 3363,
                      "end": 3364
                    },
                    "start": 3358,
                    "end": 3364
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3375,
                    "end": 3378
                  },
                  "start": 3358,
                  "end": 3378
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 3389,
                  "end": 3395
                },
                "start": 3358,
                "end": 3395
              },
              "operator": "**",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 3399,
                "end": 3400
              },
              "start": 3358,
              "end": 3400
            },
            "definite": false,
            "start": 3352,
            "end": 3400
          }
        ],
        "declare": false,
        "start": 3346,
        "end": 3401
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3339,
      "end": 3401
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 209,
  "end": 3411
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 209,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 216,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "x01",
    "start": 222,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 226,
    "end": 227
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 230,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 233,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 240,
    "end": 241
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 245,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 252,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "x02",
    "start": 258,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 262,
    "end": 263
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 266,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 269,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 273,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 276,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 283,
    "end": 284
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 289,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 296,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "x03",
    "start": 302,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 306,
    "end": 307
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 310,
    "end": 311
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 314,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 317,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 324,
    "end": 325
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 339,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 346,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "x04",
    "start": 352,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 356,
    "end": 357
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 360,
    "end": 361
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 364,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 367,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 371,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 374,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 381,
    "end": 382
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 396,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 403,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "x05",
    "start": 409,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 413,
    "end": 414
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 417,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 420,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 427,
    "end": 428
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 431,
    "end": 432
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 434,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 436,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 443,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "x06",
    "start": 449,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 453,
    "end": 454
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 457,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 460,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 464,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 467,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 474,
    "end": 475
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 478,
    "end": 479
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 481,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 484,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 491,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "x07",
    "start": 497,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 501,
    "end": 502
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 505,
    "end": 506
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 509,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 512,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 519,
    "end": 520
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 524,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 531,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "x08",
    "start": 537,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 541,
    "end": 542
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 545,
    "end": 546
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 549,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 552,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 556,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 559,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 566,
    "end": 567
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 569,
    "end": 570
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 571,
    "end": 577
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 578,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "x09",
    "start": 584,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 588,
    "end": 589
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 592,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 595,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 602,
    "end": 603
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 606,
    "end": 607
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 609,
    "end": 610
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 611,
    "end": 617
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 618,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "x10",
    "start": 624,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 628,
    "end": 629
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 632,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 635,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 639,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 642,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 649,
    "end": 650
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 653,
    "end": 654
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 656,
    "end": 657
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 659,
    "end": 665
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 666,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "x11",
    "start": 672,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 678,
    "end": 679
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 681,
    "end": 682
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 685,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 688,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 696,
    "end": 697
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 699,
    "end": 700
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 701,
    "end": 707
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 708,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "x12",
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
    "type": "Punctuator",
    "value": "(",
    "start": 720,
    "end": 721
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 723,
    "end": 724
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 727,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 730,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 734,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 737,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 745,
    "end": 746
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 748,
    "end": 749
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 750,
    "end": 756
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 757,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "x13",
    "start": 763,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 769,
    "end": 770
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 772,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 775,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 782,
    "end": 783
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 787,
    "end": 788
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 790,
    "end": 791
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 792,
    "end": 798
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 799,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "x14",
    "start": 805,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 811,
    "end": 812
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 814,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 817,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 821,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 824,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 831,
    "end": 832
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 836,
    "end": 837
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 839,
    "end": 840
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 842,
    "end": 848
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 849,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "x15",
    "start": 855,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 859,
    "end": 860
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 863,
    "end": 864
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 867,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 870,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 877,
    "end": 880
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 882,
    "end": 883
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 884,
    "end": 890
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 891,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "x16",
    "start": 897,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 901,
    "end": 902
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 905,
    "end": 906
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 909,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 912,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 916,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 919,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 926,
    "end": 929
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 931,
    "end": 932
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 933,
    "end": 939
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 940,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "x17",
    "start": 946,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 950,
    "end": 951
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 954,
    "end": 955
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 956,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 958,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 961,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 968,
    "end": 969
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 971,
    "end": 972
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 973,
    "end": 979
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 980,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "x18",
    "start": 986,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 990,
    "end": 991
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 994,
    "end": 995
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 998,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1001,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1005,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1008,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "value": "export",
    "start": 1020,
    "end": 1026
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1027,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "x19",
    "start": 1033,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1045,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1048,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1055,
    "end": 1057
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1061,
    "end": 1067
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1068,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "x20",
    "start": 1074,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1086,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1089,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1093,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1096,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 1103,
    "end": 1105
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1110,
    "end": 1116
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1117,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "x21",
    "start": 1123,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1135,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1138,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1145,
    "end": 1147
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1151,
    "end": 1157
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1158,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "x22",
    "start": 1164,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1176,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1179,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1183,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1186,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1193,
    "end": 1195
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1199,
    "end": 1205
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1206,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "x23",
    "start": 1212,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1220,
    "end": 1222
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1225,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1228,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1250,
    "end": 1256
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1257,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "x24",
    "start": 1263,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 1271,
    "end": 1273
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1276,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1279,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1283,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1286,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1408,
    "end": 1414
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1415,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "x25",
    "start": 1421,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1433,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1436,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1448,
    "end": 1454
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1455,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "x26",
    "start": 1461,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1473,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1476,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1480,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1483,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1552,
    "end": 1558
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1559,
    "end": 1564
  },
  {
    "type": "Identifier",
    "value": "x27",
    "start": 1565,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 1573,
    "end": 1575
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1578,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1581,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 1588,
    "end": 1590
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "value": "export",
    "start": 1604,
    "end": 1610
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1611,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "x28",
    "start": 1617,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 1625,
    "end": 1627
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1630,
    "end": 1632
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1633,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1637,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1640,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 1647,
    "end": 1649
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1664,
    "end": 1670
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1671,
    "end": 1676
  },
  {
    "type": "Identifier",
    "value": "y01",
    "start": 1677,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 1685,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1695,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1707,
    "end": 1713
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1714,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "y02",
    "start": 1720,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 1728,
    "end": 1737
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1738,
    "end": 1741
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 1742,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1752,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1765,
    "end": 1771
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1772,
    "end": 1777
  },
  {
    "type": "Identifier",
    "value": "y03",
    "start": 1778,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 1790,
    "end": 1799
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1800,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1822,
    "end": 1828
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1829,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "y04",
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
    "type": "Numeric",
    "value": "1",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 1847,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1857,
    "end": 1860
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 1861,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1871,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1893,
    "end": 1899
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1900,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "y05",
    "start": 1906,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 1914,
    "end": 1923
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1924,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1940,
    "end": 1946
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1947,
    "end": 1952
  },
  {
    "type": "Identifier",
    "value": "y06",
    "start": 1953,
    "end": 1956
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 1961,
    "end": 1970
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1971,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 1975,
    "end": 1984
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1985,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2002,
    "end": 2008
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2009,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "y07",
    "start": 2015,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2027,
    "end": 2036
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2037,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2049,
    "end": 2055
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2056,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "y08",
    "start": 2062,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2074,
    "end": 2083
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2084,
    "end": 2087
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2088,
    "end": 2097
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2098,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2110,
    "end": 2116
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2117,
    "end": 2122
  },
  {
    "type": "Identifier",
    "value": "y09",
    "start": 2123,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2131,
    "end": 2140
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2141,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2157,
    "end": 2163
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2164,
    "end": 2169
  },
  {
    "type": "Identifier",
    "value": "y10",
    "start": 2170,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2178,
    "end": 2187
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2188,
    "end": 2191
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2192,
    "end": 2201
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2202,
    "end": 2208
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2219,
    "end": 2225
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2226,
    "end": 2231
  },
  {
    "type": "Identifier",
    "value": "y11",
    "start": 2232,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2245,
    "end": 2254
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2255,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2268,
    "end": 2274
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2275,
    "end": 2280
  },
  {
    "type": "Identifier",
    "value": "y12",
    "start": 2281,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2294,
    "end": 2303
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2304,
    "end": 2307
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2308,
    "end": 2317
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2318,
    "end": 2324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2326,
    "end": 2327
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2331,
    "end": 2337
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2338,
    "end": 2343
  },
  {
    "type": "Identifier",
    "value": "y13",
    "start": 2344,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2353,
    "end": 2362
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2363,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2380,
    "end": 2386
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2387,
    "end": 2392
  },
  {
    "type": "Identifier",
    "value": "y14",
    "start": 2393,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2402,
    "end": 2411
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2412,
    "end": 2415
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2416,
    "end": 2425
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2426,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2444,
    "end": 2450
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2451,
    "end": 2456
  },
  {
    "type": "Identifier",
    "value": "y15",
    "start": 2457,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2465,
    "end": 2466
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2469,
    "end": 2478
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2479,
    "end": 2485
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2486,
    "end": 2489
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2493,
    "end": 2499
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2500,
    "end": 2505
  },
  {
    "type": "Identifier",
    "value": "y16",
    "start": 2506,
    "end": 2509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2518,
    "end": 2527
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2528,
    "end": 2531
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2532,
    "end": 2541
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2542,
    "end": 2548
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2549,
    "end": 2552
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2553,
    "end": 2554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2556,
    "end": 2562
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2563,
    "end": 2568
  },
  {
    "type": "Identifier",
    "value": "y17",
    "start": 2569,
    "end": 2572
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2579,
    "end": 2580
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2581,
    "end": 2590
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2591,
    "end": 2597
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2600,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2601,
    "end": 2602
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2603,
    "end": 2609
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2610,
    "end": 2615
  },
  {
    "type": "Identifier",
    "value": "y18",
    "start": 2616,
    "end": 2619
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2620,
    "end": 2621
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2624,
    "end": 2625
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2628,
    "end": 2637
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2638,
    "end": 2641
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2642,
    "end": 2651
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2652,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2662,
    "end": 2663
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2664,
    "end": 2670
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2671,
    "end": 2676
  },
  {
    "type": "Identifier",
    "value": "y19",
    "start": 2677,
    "end": 2680
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2685,
    "end": 2686
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2689,
    "end": 2698
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2699,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 2706,
    "end": 2708
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2710,
    "end": 2711
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2712,
    "end": 2718
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2719,
    "end": 2724
  },
  {
    "type": "Identifier",
    "value": "y20",
    "start": 2725,
    "end": 2728
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2733,
    "end": 2734
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2737,
    "end": 2746
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2747,
    "end": 2750
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2751,
    "end": 2760
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2761,
    "end": 2767
  },
  {
    "type": "Punctuator",
    "value": ">=",
    "start": 2768,
    "end": 2770
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2775,
    "end": 2781
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2782,
    "end": 2787
  },
  {
    "type": "Identifier",
    "value": "y21",
    "start": 2788,
    "end": 2791
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2792,
    "end": 2793
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2794,
    "end": 2795
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2796,
    "end": 2797
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2800,
    "end": 2809
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2810,
    "end": 2816
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 2817,
    "end": 2819
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "type": "Keyword",
    "value": "export",
    "start": 2823,
    "end": 2829
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2830,
    "end": 2835
  },
  {
    "type": "Identifier",
    "value": "y22",
    "start": 2836,
    "end": 2839
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2840,
    "end": 2841
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2846,
    "end": 2847
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2848,
    "end": 2857
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2858,
    "end": 2861
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2862,
    "end": 2871
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2872,
    "end": 2878
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 2879,
    "end": 2881
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2882,
    "end": 2883
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2885,
    "end": 2891
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2892,
    "end": 2897
  },
  {
    "type": "Identifier",
    "value": "y23",
    "start": 2898,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2904,
    "end": 2905
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 2906,
    "end": 2908
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2909,
    "end": 2910
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2911,
    "end": 2920
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2921,
    "end": 2927
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2928,
    "end": 2929
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2943,
    "end": 2949
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2950,
    "end": 2955
  },
  {
    "type": "Identifier",
    "value": "y24",
    "start": 2956,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2962,
    "end": 2963
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 2964,
    "end": 2966
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2969,
    "end": 2978
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2979,
    "end": 2982
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2983,
    "end": 2992
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2993,
    "end": 2999
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3000,
    "end": 3001
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3003,
    "end": 3004
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3115,
    "end": 3121
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3122,
    "end": 3127
  },
  {
    "type": "Identifier",
    "value": "y25",
    "start": 3128,
    "end": 3131
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3134,
    "end": 3135
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3136,
    "end": 3137
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 3138,
    "end": 3139
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 3140,
    "end": 3149
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3150,
    "end": 3156
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3157,
    "end": 3158
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3160,
    "end": 3161
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3162,
    "end": 3168
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3169,
    "end": 3174
  },
  {
    "type": "Identifier",
    "value": "y26",
    "start": 3175,
    "end": 3178
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3179,
    "end": 3180
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3181,
    "end": 3182
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3183,
    "end": 3184
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 3185,
    "end": 3186
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 3187,
    "end": 3196
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3197,
    "end": 3200
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 3201,
    "end": 3210
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3211,
    "end": 3217
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3218,
    "end": 3219
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3220,
    "end": 3221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3280,
    "end": 3286
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3287,
    "end": 3292
  },
  {
    "type": "Identifier",
    "value": "y27",
    "start": 3293,
    "end": 3296
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3297,
    "end": 3298
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3299,
    "end": 3300
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 3301,
    "end": 3303
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 3304,
    "end": 3305
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 3306,
    "end": 3315
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3316,
    "end": 3322
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 3323,
    "end": 3325
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3326,
    "end": 3327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3327,
    "end": 3328
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3339,
    "end": 3345
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3346,
    "end": 3351
  },
  {
    "type": "Identifier",
    "value": "y28",
    "start": 3352,
    "end": 3355
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3356,
    "end": 3357
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3358,
    "end": 3359
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 3360,
    "end": 3362
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 3363,
    "end": 3364
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 3365,
    "end": 3374
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3375,
    "end": 3378
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 3379,
    "end": 3388
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3389,
    "end": 3395
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 3396,
    "end": 3398
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3399,
    "end": 3400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3400,
    "end": 3401
  }
]
```
