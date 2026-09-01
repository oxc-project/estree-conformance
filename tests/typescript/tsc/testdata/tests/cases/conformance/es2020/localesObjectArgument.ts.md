__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 10
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 21
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Locale",
                "optional": false,
                "typeAnnotation": null,
                "start": 22,
                "end": 28
              },
              "optional": false,
              "computed": false,
              "start": 17,
              "end": 28
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "en-US",
                "raw": "\"en-US\"",
                "start": 29,
                "end": 36
              }
            ],
            "start": 13,
            "end": 37
          },
          "definite": false,
          "start": 6,
          "end": 37
        }
      ],
      "declare": false,
      "start": 0,
      "end": 38
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
            "name": "deDE",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 49
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 60
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Locale",
                "optional": false,
                "typeAnnotation": null,
                "start": 61,
                "end": 67
              },
              "optional": false,
              "computed": false,
              "start": 56,
              "end": 67
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "de-DE",
                "raw": "\"de-DE\"",
                "start": 68,
                "end": 75
              }
            ],
            "start": 52,
            "end": 76
          },
          "definite": false,
          "start": 45,
          "end": 76
        }
      ],
      "declare": false,
      "start": 39,
      "end": 77
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
            "name": "jaJP",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 88
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 99
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Locale",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 106
              },
              "optional": false,
              "computed": false,
              "start": 95,
              "end": 106
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "ja-JP",
                "raw": "\"ja-JP\"",
                "start": 107,
                "end": 114
              }
            ],
            "start": 91,
            "end": 115
          },
          "definite": false,
          "start": 84,
          "end": 115
        }
      ],
      "declare": false,
      "start": 78,
      "end": 116
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
            "name": "now",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 127
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 138
            },
            "typeArguments": null,
            "arguments": [],
            "start": 130,
            "end": 140
          },
          "definite": false,
          "start": 124,
          "end": 140
        }
      ],
      "declare": false,
      "start": 118,
      "end": 141
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
            "name": "num",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 151
          },
          "init": {
            "type": "Literal",
            "value": 1000,
            "raw": "1000",
            "start": 154,
            "end": 158
          },
          "definite": false,
          "start": 148,
          "end": 158
        }
      ],
      "declare": false,
      "start": 142,
      "end": 159
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
            "name": "bigint",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 172
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "123456789123456789n",
            "bigint": "123456789123456789",
            "start": 175,
            "end": 194
          },
          "definite": false,
          "start": 166,
          "end": 194
        }
      ],
      "declare": false,
      "start": 160,
      "end": 195
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
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 205
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 208,
            "end": 210
          },
          "definite": false,
          "start": 202,
          "end": 210
        }
      ],
      "declare": false,
      "start": 196,
      "end": 211
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
            "name": "readonlyLocales",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 236,
                  "end": 244
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 245,
                        "end": 251
                      },
                      "start": 245,
                      "end": 253
                    }
                  ],
                  "start": 244,
                  "end": 254
                },
                "start": 236,
                "end": 254
              },
              "start": 234,
              "end": 254
            },
            "start": 219,
            "end": 254
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "de-DE",
                "raw": "'de-DE'",
                "start": 258,
                "end": 265
              },
              {
                "type": "Literal",
                "value": "ja-JP",
                "raw": "'ja-JP'",
                "start": 267,
                "end": 274
              }
            ],
            "start": 257,
            "end": 275
          },
          "definite": false,
          "start": 219,
          "end": 275
        }
      ],
      "declare": false,
      "start": 213,
      "end": 276
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "now",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 281
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleString",
            "optional": false,
            "typeAnnotation": null,
            "start": 282,
            "end": 296
          },
          "optional": false,
          "computed": false,
          "start": 278,
          "end": 296
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 301
          }
        ],
        "optional": false,
        "start": 278,
        "end": 302
      },
      "directive": null,
      "start": 278,
      "end": 303
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "now",
            "optional": false,
            "typeAnnotation": null,
            "start": 304,
            "end": 307
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleDateString",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 326
          },
          "optional": false,
          "computed": false,
          "start": 304,
          "end": 326
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 327,
            "end": 331
          }
        ],
        "optional": false,
        "start": 304,
        "end": 332
      },
      "directive": null,
      "start": 304,
      "end": 333
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "now",
            "optional": false,
            "typeAnnotation": null,
            "start": 334,
            "end": 337
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleTimeString",
            "optional": false,
            "typeAnnotation": null,
            "start": 338,
            "end": 356
          },
          "optional": false,
          "computed": false,
          "start": 334,
          "end": 356
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 357,
            "end": 361
          }
        ],
        "optional": false,
        "start": 334,
        "end": 362
      },
      "directive": null,
      "start": 334,
      "end": 363
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "now",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 367
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleString",
            "optional": false,
            "typeAnnotation": null,
            "start": 368,
            "end": 382
          },
          "optional": false,
          "computed": false,
          "start": 364,
          "end": 382
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 384,
                "end": 388
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 390,
                "end": 394
              }
            ],
            "start": 383,
            "end": 395
          }
        ],
        "optional": false,
        "start": 364,
        "end": 396
      },
      "directive": null,
      "start": 364,
      "end": 397
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "now",
            "optional": false,
            "typeAnnotation": null,
            "start": 398,
            "end": 401
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleDateString",
            "optional": false,
            "typeAnnotation": null,
            "start": 402,
            "end": 420
          },
          "optional": false,
          "computed": false,
          "start": 398,
          "end": 420
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 422,
                "end": 426
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 428,
                "end": 432
              }
            ],
            "start": 421,
            "end": 433
          }
        ],
        "optional": false,
        "start": 398,
        "end": 434
      },
      "directive": null,
      "start": 398,
      "end": 435
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "now",
            "optional": false,
            "typeAnnotation": null,
            "start": 436,
            "end": 439
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleTimeString",
            "optional": false,
            "typeAnnotation": null,
            "start": 440,
            "end": 458
          },
          "optional": false,
          "computed": false,
          "start": 436,
          "end": 458
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 460,
                "end": 464
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 466,
                "end": 470
              }
            ],
            "start": 459,
            "end": 471
          }
        ],
        "optional": false,
        "start": 436,
        "end": 472
      },
      "directive": null,
      "start": 436,
      "end": 473
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null,
            "start": 475,
            "end": 478
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleString",
            "optional": false,
            "typeAnnotation": null,
            "start": 479,
            "end": 493
          },
          "optional": false,
          "computed": false,
          "start": 475,
          "end": 493
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 494,
            "end": 498
          }
        ],
        "optional": false,
        "start": 475,
        "end": 499
      },
      "directive": null,
      "start": 475,
      "end": 500
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null,
            "start": 501,
            "end": 504
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleString",
            "optional": false,
            "typeAnnotation": null,
            "start": 505,
            "end": 519
          },
          "optional": false,
          "computed": false,
          "start": 501,
          "end": 519
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 521,
                "end": 525
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 527,
                "end": 531
              }
            ],
            "start": 520,
            "end": 532
          }
        ],
        "optional": false,
        "start": 501,
        "end": 533
      },
      "directive": null,
      "start": 501,
      "end": 534
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigint",
            "optional": false,
            "typeAnnotation": null,
            "start": 536,
            "end": 542
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleString",
            "optional": false,
            "typeAnnotation": null,
            "start": 543,
            "end": 557
          },
          "optional": false,
          "computed": false,
          "start": 536,
          "end": 557
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 558,
            "end": 562
          }
        ],
        "optional": false,
        "start": 536,
        "end": 563
      },
      "directive": null,
      "start": 536,
      "end": 564
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigint",
            "optional": false,
            "typeAnnotation": null,
            "start": 565,
            "end": 571
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleString",
            "optional": false,
            "typeAnnotation": null,
            "start": 572,
            "end": 586
          },
          "optional": false,
          "computed": false,
          "start": 565,
          "end": 586
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 588,
                "end": 592
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 594,
                "end": 598
              }
            ],
            "start": 587,
            "end": 599
          }
        ],
        "optional": false,
        "start": 565,
        "end": 600
      },
      "directive": null,
      "start": 565,
      "end": 601
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 603,
            "end": 606
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleLowerCase",
            "optional": false,
            "typeAnnotation": null,
            "start": 607,
            "end": 624
          },
          "optional": false,
          "computed": false,
          "start": 603,
          "end": 624
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 625,
            "end": 629
          }
        ],
        "optional": false,
        "start": 603,
        "end": 630
      },
      "directive": null,
      "start": 603,
      "end": 631
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 632,
            "end": 635
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleLowerCase",
            "optional": false,
            "typeAnnotation": null,
            "start": 636,
            "end": 653
          },
          "optional": false,
          "computed": false,
          "start": 632,
          "end": 653
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 655,
                "end": 659
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 661,
                "end": 665
              }
            ],
            "start": 654,
            "end": 666
          }
        ],
        "optional": false,
        "start": 632,
        "end": 667
      },
      "directive": null,
      "start": 632,
      "end": 668
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 669,
            "end": 672
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleUpperCase",
            "optional": false,
            "typeAnnotation": null,
            "start": 673,
            "end": 690
          },
          "optional": false,
          "computed": false,
          "start": 669,
          "end": 690
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 691,
            "end": 695
          }
        ],
        "optional": false,
        "start": 669,
        "end": 696
      },
      "directive": null,
      "start": 669,
      "end": 697
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 698,
            "end": 701
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleUpperCase",
            "optional": false,
            "typeAnnotation": null,
            "start": 702,
            "end": 719
          },
          "optional": false,
          "computed": false,
          "start": 698,
          "end": 719
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 721,
                "end": 725
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 727,
                "end": 731
              }
            ],
            "start": 720,
            "end": 732
          }
        ],
        "optional": false,
        "start": 698,
        "end": 733
      },
      "directive": null,
      "start": 698,
      "end": 734
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 735,
            "end": 738
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "localeCompare",
            "optional": false,
            "typeAnnotation": null,
            "start": 739,
            "end": 752
          },
          "optional": false,
          "computed": false,
          "start": 735,
          "end": 752
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 753,
            "end": 756
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 758,
            "end": 762
          }
        ],
        "optional": false,
        "start": 735,
        "end": 763
      },
      "directive": null,
      "start": 735,
      "end": 764
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 765,
            "end": 768
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "localeCompare",
            "optional": false,
            "typeAnnotation": null,
            "start": 769,
            "end": 782
          },
          "optional": false,
          "computed": false,
          "start": 765,
          "end": 782
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 783,
            "end": 786
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 789,
                "end": 793
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 795,
                "end": 799
              }
            ],
            "start": 788,
            "end": 800
          }
        ],
        "optional": false,
        "start": 765,
        "end": 801
      },
      "directive": null,
      "start": 765,
      "end": 802
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 808,
            "end": 812
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "PluralRules",
            "optional": false,
            "typeAnnotation": null,
            "start": 813,
            "end": 824
          },
          "optional": false,
          "computed": false,
          "start": 808,
          "end": 824
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 825,
            "end": 829
          }
        ],
        "start": 804,
        "end": 830
      },
      "directive": null,
      "start": 804,
      "end": 831
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 836,
            "end": 840
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "PluralRules",
            "optional": false,
            "typeAnnotation": null,
            "start": 841,
            "end": 852
          },
          "optional": false,
          "computed": false,
          "start": 836,
          "end": 852
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 854,
                "end": 858
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 860,
                "end": 864
              }
            ],
            "start": 853,
            "end": 865
          }
        ],
        "start": 832,
        "end": 866
      },
      "directive": null,
      "start": 832,
      "end": 867
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 872,
            "end": 876
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "PluralRules",
            "optional": false,
            "typeAnnotation": null,
            "start": 877,
            "end": 888
          },
          "optional": false,
          "computed": false,
          "start": 872,
          "end": 888
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyLocales",
            "optional": false,
            "typeAnnotation": null,
            "start": 889,
            "end": 904
          }
        ],
        "start": 868,
        "end": 905
      },
      "directive": null,
      "start": 868,
      "end": 906
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 907,
              "end": 911
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "PluralRules",
              "optional": false,
              "typeAnnotation": null,
              "start": 912,
              "end": 923
            },
            "optional": false,
            "computed": false,
            "start": 907,
            "end": 923
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 924,
            "end": 942
          },
          "optional": false,
          "computed": false,
          "start": 907,
          "end": 942
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 943,
            "end": 947
          }
        ],
        "optional": false,
        "start": 907,
        "end": 948
      },
      "directive": null,
      "start": 907,
      "end": 949
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 950,
              "end": 954
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "PluralRules",
              "optional": false,
              "typeAnnotation": null,
              "start": 955,
              "end": 966
            },
            "optional": false,
            "computed": false,
            "start": 950,
            "end": 966
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 967,
            "end": 985
          },
          "optional": false,
          "computed": false,
          "start": 950,
          "end": 985
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 987,
                "end": 991
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 993,
                "end": 997
              }
            ],
            "start": 986,
            "end": 998
          }
        ],
        "optional": false,
        "start": 950,
        "end": 999
      },
      "directive": null,
      "start": 950,
      "end": 1000
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 1001,
              "end": 1005
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "PluralRules",
              "optional": false,
              "typeAnnotation": null,
              "start": 1006,
              "end": 1017
            },
            "optional": false,
            "computed": false,
            "start": 1001,
            "end": 1017
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1018,
            "end": 1036
          },
          "optional": false,
          "computed": false,
          "start": 1001,
          "end": 1036
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyLocales",
            "optional": false,
            "typeAnnotation": null,
            "start": 1037,
            "end": 1052
          }
        ],
        "optional": false,
        "start": 1001,
        "end": 1053
      },
      "directive": null,
      "start": 1001,
      "end": 1054
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1060,
            "end": 1064
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "RelativeTimeFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 1065,
            "end": 1083
          },
          "optional": false,
          "computed": false,
          "start": 1060,
          "end": 1083
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 1084,
            "end": 1088
          }
        ],
        "start": 1056,
        "end": 1089
      },
      "directive": null,
      "start": 1056,
      "end": 1090
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1095,
            "end": 1099
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "RelativeTimeFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 1100,
            "end": 1118
          },
          "optional": false,
          "computed": false,
          "start": 1095,
          "end": 1118
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 1120,
                "end": 1124
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 1126,
                "end": 1130
              }
            ],
            "start": 1119,
            "end": 1131
          }
        ],
        "start": 1091,
        "end": 1132
      },
      "directive": null,
      "start": 1091,
      "end": 1133
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1138,
            "end": 1142
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "RelativeTimeFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 1143,
            "end": 1161
          },
          "optional": false,
          "computed": false,
          "start": 1138,
          "end": 1161
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyLocales",
            "optional": false,
            "typeAnnotation": null,
            "start": 1162,
            "end": 1177
          }
        ],
        "start": 1134,
        "end": 1178
      },
      "directive": null,
      "start": 1134,
      "end": 1179
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 1180,
              "end": 1184
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "RelativeTimeFormat",
              "optional": false,
              "typeAnnotation": null,
              "start": 1185,
              "end": 1203
            },
            "optional": false,
            "computed": false,
            "start": 1180,
            "end": 1203
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1204,
            "end": 1222
          },
          "optional": false,
          "computed": false,
          "start": 1180,
          "end": 1222
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 1223,
            "end": 1227
          }
        ],
        "optional": false,
        "start": 1180,
        "end": 1228
      },
      "directive": null,
      "start": 1180,
      "end": 1229
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 1230,
              "end": 1234
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "RelativeTimeFormat",
              "optional": false,
              "typeAnnotation": null,
              "start": 1235,
              "end": 1253
            },
            "optional": false,
            "computed": false,
            "start": 1230,
            "end": 1253
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1254,
            "end": 1272
          },
          "optional": false,
          "computed": false,
          "start": 1230,
          "end": 1272
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 1274,
                "end": 1278
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 1280,
                "end": 1284
              }
            ],
            "start": 1273,
            "end": 1285
          }
        ],
        "optional": false,
        "start": 1230,
        "end": 1286
      },
      "directive": null,
      "start": 1230,
      "end": 1287
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 1288,
              "end": 1292
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "RelativeTimeFormat",
              "optional": false,
              "typeAnnotation": null,
              "start": 1293,
              "end": 1311
            },
            "optional": false,
            "computed": false,
            "start": 1288,
            "end": 1311
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1312,
            "end": 1330
          },
          "optional": false,
          "computed": false,
          "start": 1288,
          "end": 1330
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyLocales",
            "optional": false,
            "typeAnnotation": null,
            "start": 1331,
            "end": 1346
          }
        ],
        "optional": false,
        "start": 1288,
        "end": 1347
      },
      "directive": null,
      "start": 1288,
      "end": 1348
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1354,
            "end": 1358
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Collator",
            "optional": false,
            "typeAnnotation": null,
            "start": 1359,
            "end": 1367
          },
          "optional": false,
          "computed": false,
          "start": 1354,
          "end": 1367
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 1368,
            "end": 1372
          }
        ],
        "start": 1350,
        "end": 1373
      },
      "directive": null,
      "start": 1350,
      "end": 1374
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1379,
            "end": 1383
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Collator",
            "optional": false,
            "typeAnnotation": null,
            "start": 1384,
            "end": 1392
          },
          "optional": false,
          "computed": false,
          "start": 1379,
          "end": 1392
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 1394,
                "end": 1398
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 1400,
                "end": 1404
              }
            ],
            "start": 1393,
            "end": 1405
          }
        ],
        "start": 1375,
        "end": 1406
      },
      "directive": null,
      "start": 1375,
      "end": 1407
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1412,
            "end": 1416
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Collator",
            "optional": false,
            "typeAnnotation": null,
            "start": 1417,
            "end": 1425
          },
          "optional": false,
          "computed": false,
          "start": 1412,
          "end": 1425
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyLocales",
            "optional": false,
            "typeAnnotation": null,
            "start": 1426,
            "end": 1441
          }
        ],
        "start": 1408,
        "end": 1442
      },
      "directive": null,
      "start": 1408,
      "end": 1443
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 1444,
              "end": 1448
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Collator",
              "optional": false,
              "typeAnnotation": null,
              "start": 1449,
              "end": 1457
            },
            "optional": false,
            "computed": false,
            "start": 1444,
            "end": 1457
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1458,
            "end": 1476
          },
          "optional": false,
          "computed": false,
          "start": 1444,
          "end": 1476
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 1477,
            "end": 1481
          }
        ],
        "optional": false,
        "start": 1444,
        "end": 1482
      },
      "directive": null,
      "start": 1444,
      "end": 1483
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 1484,
              "end": 1488
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Collator",
              "optional": false,
              "typeAnnotation": null,
              "start": 1489,
              "end": 1497
            },
            "optional": false,
            "computed": false,
            "start": 1484,
            "end": 1497
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1498,
            "end": 1516
          },
          "optional": false,
          "computed": false,
          "start": 1484,
          "end": 1516
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 1518,
                "end": 1522
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 1524,
                "end": 1528
              }
            ],
            "start": 1517,
            "end": 1529
          }
        ],
        "optional": false,
        "start": 1484,
        "end": 1530
      },
      "directive": null,
      "start": 1484,
      "end": 1531
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1537,
            "end": 1541
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "DateTimeFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 1542,
            "end": 1556
          },
          "optional": false,
          "computed": false,
          "start": 1537,
          "end": 1556
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 1557,
            "end": 1561
          }
        ],
        "start": 1533,
        "end": 1562
      },
      "directive": null,
      "start": 1533,
      "end": 1563
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1568,
            "end": 1572
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "DateTimeFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 1573,
            "end": 1587
          },
          "optional": false,
          "computed": false,
          "start": 1568,
          "end": 1587
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 1589,
                "end": 1593
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 1595,
                "end": 1599
              }
            ],
            "start": 1588,
            "end": 1600
          }
        ],
        "start": 1564,
        "end": 1601
      },
      "directive": null,
      "start": 1564,
      "end": 1602
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1607,
            "end": 1611
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "DateTimeFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 1612,
            "end": 1626
          },
          "optional": false,
          "computed": false,
          "start": 1607,
          "end": 1626
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyLocales",
            "optional": false,
            "typeAnnotation": null,
            "start": 1627,
            "end": 1642
          }
        ],
        "start": 1603,
        "end": 1643
      },
      "directive": null,
      "start": 1603,
      "end": 1644
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 1645,
              "end": 1649
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "DateTimeFormat",
              "optional": false,
              "typeAnnotation": null,
              "start": 1650,
              "end": 1664
            },
            "optional": false,
            "computed": false,
            "start": 1645,
            "end": 1664
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1665,
            "end": 1683
          },
          "optional": false,
          "computed": false,
          "start": 1645,
          "end": 1683
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 1684,
            "end": 1688
          }
        ],
        "optional": false,
        "start": 1645,
        "end": 1689
      },
      "directive": null,
      "start": 1645,
      "end": 1690
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 1691,
              "end": 1695
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "DateTimeFormat",
              "optional": false,
              "typeAnnotation": null,
              "start": 1696,
              "end": 1710
            },
            "optional": false,
            "computed": false,
            "start": 1691,
            "end": 1710
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1711,
            "end": 1729
          },
          "optional": false,
          "computed": false,
          "start": 1691,
          "end": 1729
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 1731,
                "end": 1735
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 1737,
                "end": 1741
              }
            ],
            "start": 1730,
            "end": 1742
          }
        ],
        "optional": false,
        "start": 1691,
        "end": 1743
      },
      "directive": null,
      "start": 1691,
      "end": 1744
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 1745,
              "end": 1749
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "DateTimeFormat",
              "optional": false,
              "typeAnnotation": null,
              "start": 1750,
              "end": 1764
            },
            "optional": false,
            "computed": false,
            "start": 1745,
            "end": 1764
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1765,
            "end": 1783
          },
          "optional": false,
          "computed": false,
          "start": 1745,
          "end": 1783
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyLocales",
            "optional": false,
            "typeAnnotation": null,
            "start": 1784,
            "end": 1799
          }
        ],
        "optional": false,
        "start": 1745,
        "end": 1800
      },
      "directive": null,
      "start": 1745,
      "end": 1801
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1807,
            "end": 1811
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 1812,
            "end": 1824
          },
          "optional": false,
          "computed": false,
          "start": 1807,
          "end": 1824
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 1825,
            "end": 1829
          }
        ],
        "start": 1803,
        "end": 1830
      },
      "directive": null,
      "start": 1803,
      "end": 1831
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1836,
            "end": 1840
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 1841,
            "end": 1853
          },
          "optional": false,
          "computed": false,
          "start": 1836,
          "end": 1853
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null,
                "start": 1855,
                "end": 1859
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null,
                "start": 1861,
                "end": 1865
              }
            ],
            "start": 1854,
            "end": 1866
          }
        ],
        "start": 1832,
        "end": 1867
      },
      "directive": null,
      "start": 1832,
      "end": 1868
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1873,
            "end": 1877
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberFormat",
            "optional": false,
            "typeAnnotation": null,
            "start": 1878,
            "end": 1890
          },
          "optional": false,
          "computed": false,
          "start": 1873,
          "end": 1890
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyLocales",
            "optional": false,
            "typeAnnotation": null,
            "start": 1891,
            "end": 1906
          }
        ],
        "start": 1869,
        "end": 1907
      },
      "directive": null,
      "start": 1869,
      "end": 1908
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 1909,
              "end": 1913
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "NumberFormat",
              "optional": false,
              "typeAnnotation": null,
              "start": 1914,
              "end": 1926
            },
            "optional": false,
            "computed": false,
            "start": 1909,
            "end": 1926
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1927,
            "end": 1945
          },
          "optional": false,
          "computed": false,
          "start": 1909,
          "end": 1945
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null,
            "start": 1946,
            "end": 1950
          }
        ],
        "optional": false,
        "start": 1909,
        "end": 1951
      },
      "directive": null,
      "start": 1909,
      "end": 1952
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null,
              "start": 1953,
              "end": 1957
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "NumberFormat",
              "optional": false,
              "typeAnnotation": null,
              "start": 1958,
              "end": 1970
            },
            "optional": false,
            "computed": false,
            "start": 1953,
            "end": 1970
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1971,
            "end": 1989
          },
          "optional": false,
          "computed": false,
          "start": 1953,
          "end": 1989
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyLocales",
            "optional": false,
            "typeAnnotation": null,
            "start": 1990,
            "end": 2005
          }
        ],
        "optional": false,
        "start": 1953,
        "end": 2006
      },
      "directive": null,
      "start": 1953,
      "end": 2007
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2007
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 6,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 13,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 17,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "Locale",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29
  },
  {
    "type": "String",
    "value": "\"en-US\"",
    "start": 29,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 39,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 45,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 52,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 56,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "Locale",
    "start": 61,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "String",
    "value": "\"de-DE\"",
    "start": 68,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 78,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 84,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 91,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 95,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "Locale",
    "start": 100,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
    "end": 107
  },
  {
    "type": "String",
    "value": "\"ja-JP\"",
    "start": 107,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 118,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "now",
    "start": 124,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 130,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 134,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 142,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 148,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 154,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 160,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 166,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 173,
    "end": 174
  },
  {
    "type": "Numeric",
    "value": "123456789123456789n",
    "start": 175,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 196,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 202,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 206,
    "end": 207
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 208,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 213,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "readonlyLocales",
    "start": 219,
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
    "value": "Readonly",
    "start": 236,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 245,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 257,
    "end": 258
  },
  {
    "type": "String",
    "value": "'de-DE'",
    "start": 258,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 265,
    "end": 266
  },
  {
    "type": "String",
    "value": "'ja-JP'",
    "start": 267,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "now",
    "start": 278,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 282,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 297,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "now",
    "start": 304,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "toLocaleDateString",
    "start": 308,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 327,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "now",
    "start": 334,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "toLocaleTimeString",
    "start": 338,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 357,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "now",
    "start": 364,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 368,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 384,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 390,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "now",
    "start": 398,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "toLocaleDateString",
    "start": 402,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 422,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 428,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "now",
    "start": 436,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "toLocaleTimeString",
    "start": 440,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 460,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 466,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "num",
    "start": 475,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 479,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 494,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 501,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 505,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 521,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 527,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 536,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 543,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 558,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 562,
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
    "value": "bigint",
    "start": 565,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 572,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 588,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 594,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 603,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "toLocaleLowerCase",
    "start": 607,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 625,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 632,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "toLocaleLowerCase",
    "start": 636,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 655,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 661,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 669,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "toLocaleUpperCase",
    "start": 673,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 691,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 698,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "toLocaleUpperCase",
    "start": 702,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 721,
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
    "value": "jaJP",
    "start": 727,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 735,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "localeCompare",
    "start": 739,
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
    "value": "str",
    "start": 753,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 758,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 762,
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
    "value": "str",
    "start": 765,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "localeCompare",
    "start": 769,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 783,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 789,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 795,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 801,
    "end": 802
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 804,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 808,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "PluralRules",
    "start": 813,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 825,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 830,
    "end": 831
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 832,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 836,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "PluralRules",
    "start": 841,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 854,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 860,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 866,
    "end": 867
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 868,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 872,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "PluralRules",
    "start": 877,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "readonlyLocales",
    "start": 889,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 907,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "PluralRules",
    "start": 912,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 924,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 943,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 950,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "PluralRules",
    "start": 955,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 967,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 986,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 987,
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
    "value": "jaJP",
    "start": 993,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1001,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "PluralRules",
    "start": 1006,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 1018,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "readonlyLocales",
    "start": 1037,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1056,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1060,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "RelativeTimeFormat",
    "start": 1065,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 1084,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1091,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1095,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "RelativeTimeFormat",
    "start": 1100,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 1120,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 1126,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1134,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1138,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "RelativeTimeFormat",
    "start": 1143,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "readonlyLocales",
    "start": 1162,
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
    "type": "Identifier",
    "value": "Intl",
    "start": 1180,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "RelativeTimeFormat",
    "start": 1185,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 1204,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 1223,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1230,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "RelativeTimeFormat",
    "start": 1235,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 1254,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 1274,
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
    "value": "jaJP",
    "start": 1280,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1288,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "RelativeTimeFormat",
    "start": 1293,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 1312,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "readonlyLocales",
    "start": 1331,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1350,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1354,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "Collator",
    "start": 1359,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 1368,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1375,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1379,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "Collator",
    "start": 1384,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 1394,
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
    "value": "jaJP",
    "start": 1400,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1408,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1412,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "Collator",
    "start": 1417,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "readonlyLocales",
    "start": 1426,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1444,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "Collator",
    "start": 1449,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 1458,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 1477,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1484,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "Collator",
    "start": 1489,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 1498,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 1518,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 1524,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "new",
    "start": 1533,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1537,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "DateTimeFormat",
    "start": 1542,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 1557,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1564,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1568,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "DateTimeFormat",
    "start": 1573,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 1589,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 1595,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1603,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1607,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "DateTimeFormat",
    "start": 1612,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Identifier",
    "value": "readonlyLocales",
    "start": 1627,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1645,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "DateTimeFormat",
    "start": 1650,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 1665,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 1684,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1691,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "DateTimeFormat",
    "start": 1696,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 1711,
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
    "value": "[",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 1731,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 1737,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1745,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "DateTimeFormat",
    "start": 1750,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 1765,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "readonlyLocales",
    "start": 1784,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1803,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1807,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 1812,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 1825,
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
    "value": ";",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1832,
    "end": 1835
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1836,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 1841,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Identifier",
    "value": "deDE",
    "start": 1855,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Identifier",
    "value": "jaJP",
    "start": 1861,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1869,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1873,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 1878,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Identifier",
    "value": "readonlyLocales",
    "start": 1891,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1909,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 1914,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 1927,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "enUS",
    "start": 1946,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 1953,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 1958,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 1971,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "readonlyLocales",
    "start": 1990,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2006,
    "end": 2007
  }
]
```
