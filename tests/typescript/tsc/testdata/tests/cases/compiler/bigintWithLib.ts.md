__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigintVal",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBigIntKeyword",
                "start": 40,
                "end": 46
              },
              "start": 38,
              "end": 46
            },
            "start": 29,
            "end": 46
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 55
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 123,
                "raw": "123",
                "start": 56,
                "end": 59
              }
            ],
            "optional": false,
            "start": 49,
            "end": 60
          },
          "definite": false,
          "start": 29,
          "end": 60
        }
      ],
      "declare": false,
      "start": 25,
      "end": 61
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 62,
          "end": 71
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 80
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "456",
              "raw": "\"456\"",
              "start": 81,
              "end": 86
            }
          ],
          "optional": false,
          "start": 74,
          "end": 87
        },
        "start": 62,
        "end": 87
      },
      "directive": null,
      "start": 62,
      "end": 88
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "BigInt",
          "optional": false,
          "typeAnnotation": null,
          "start": 93,
          "end": 99
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 100,
            "end": 103
          }
        ],
        "start": 89,
        "end": 104
      },
      "directive": null,
      "start": 89,
      "end": 105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 122,
          "end": 131
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 140
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "asIntN",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 147
            },
            "optional": false,
            "computed": false,
            "start": 134,
            "end": 147
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 148,
              "end": 149
            },
            {
              "type": "Literal",
              "value": null,
              "raw": "0xFFFFn",
              "bigint": "65535",
              "start": 151,
              "end": 158
            }
          ],
          "optional": false,
          "start": 134,
          "end": 159
        },
        "start": 122,
        "end": 159
      },
      "directive": null,
      "start": 122,
      "end": 160
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 161,
          "end": 170
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 179
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "asUintN",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 187
            },
            "optional": false,
            "computed": false,
            "start": 173,
            "end": 187
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 188,
              "end": 189
            },
            {
              "type": "Literal",
              "value": null,
              "raw": "0xFFFFn",
              "bigint": "65535",
              "start": 191,
              "end": 198
            }
          ],
          "optional": false,
          "start": 173,
          "end": 199
        },
        "start": 161,
        "end": 199
      },
      "directive": null,
      "start": 161,
      "end": 200
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 201,
          "end": 210
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 222
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "valueOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 230
            },
            "optional": false,
            "computed": false,
            "start": 213,
            "end": 230
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 213,
          "end": 232
        },
        "start": 201,
        "end": 232
      },
      "directive": null,
      "start": 201,
      "end": 233
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringVal",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 249,
                "end": 255
              },
              "start": 247,
              "end": 255
            },
            "start": 238,
            "end": 255
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "bigintVal",
                "optional": false,
                "typeAnnotation": null,
                "start": 258,
                "end": 267
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 268,
                "end": 276
              },
              "optional": false,
              "computed": false,
              "start": 258,
              "end": 276
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 258,
            "end": 278
          },
          "definite": false,
          "start": 238,
          "end": 278
        }
      ],
      "declare": false,
      "start": 234,
      "end": 279
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 280,
          "end": 289
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 292,
              "end": 301
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 302,
              "end": 310
            },
            "optional": false,
            "computed": false,
            "start": 292,
            "end": 310
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 311,
              "end": 312
            }
          ],
          "optional": false,
          "start": 292,
          "end": 313
        },
        "start": 280,
        "end": 313
      },
      "directive": null,
      "start": 280,
      "end": 314
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 315,
          "end": 324
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 336
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 351
            },
            "optional": false,
            "computed": false,
            "start": 327,
            "end": 351
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 327,
          "end": 353
        },
        "start": 315,
        "end": 353
      },
      "directive": null,
      "start": 315,
      "end": 354
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 355,
          "end": 364
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 367,
              "end": 376
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 377,
              "end": 391
            },
            "optional": false,
            "computed": false,
            "start": 367,
            "end": 391
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "de-DE",
              "raw": "'de-DE'",
              "start": 392,
              "end": 399
            }
          ],
          "optional": false,
          "start": 367,
          "end": 400
        },
        "start": 355,
        "end": 400
      },
      "directive": null,
      "start": 355,
      "end": 401
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 402,
          "end": 411
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 423
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 424,
              "end": 438
            },
            "optional": false,
            "computed": false,
            "start": 414,
            "end": 438
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "de-DE",
              "raw": "'de-DE'",
              "start": 439,
              "end": 446
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 450,
                    "end": 455
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 457,
                    "end": 467
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 450,
                  "end": 467
                }
              ],
              "start": 448,
              "end": 469
            }
          ],
          "optional": false,
          "start": 414,
          "end": 470
        },
        "start": 402,
        "end": 470
      },
      "directive": null,
      "start": 402,
      "end": 471
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 472,
          "end": 481
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigintVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 484,
              "end": 493
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 494,
              "end": 508
            },
            "optional": false,
            "computed": false,
            "start": 484,
            "end": 508
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "de-DE",
              "raw": "'de-DE'",
              "start": 509,
              "end": 516
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 520,
                    "end": 525
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 527,
                    "end": 537
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 520,
                  "end": 537
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 539,
                    "end": 547
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 549,
                    "end": 554
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 539,
                  "end": 554
                }
              ],
              "start": 518,
              "end": 556
            }
          ],
          "optional": false,
          "start": 484,
          "end": 557
        },
        "start": 472,
        "end": 557
      },
      "directive": null,
      "start": 472,
      "end": 557
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt64Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 598,
                  "end": 611
                },
                "typeArguments": null,
                "start": 598,
                "end": 611
              },
              "start": 596,
              "end": 611
            },
            "start": 585,
            "end": 611
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 618,
              "end": 631
            },
            "typeArguments": null,
            "arguments": [],
            "start": 614,
            "end": 633
          },
          "definite": false,
          "start": 585,
          "end": 633
        }
      ],
      "declare": false,
      "start": 581,
      "end": 634
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 635,
          "end": 646
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 653,
            "end": 666
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 667,
              "end": 669
            }
          ],
          "start": 649,
          "end": 670
        },
        "start": 635,
        "end": 670
      },
      "directive": null,
      "start": 635,
      "end": 671
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 672,
          "end": 683
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 690,
            "end": 703
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "1n",
                  "bigint": "1",
                  "start": 705,
                  "end": 707
                },
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "2n",
                  "bigint": "2",
                  "start": 709,
                  "end": 711
                },
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "3n",
                  "bigint": "3",
                  "start": 713,
                  "end": 715
                }
              ],
              "start": 704,
              "end": 716
            }
          ],
          "start": 686,
          "end": 717
        },
        "start": 672,
        "end": 717
      },
      "directive": null,
      "start": 672,
      "end": 718
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 719,
          "end": 730
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 737,
            "end": 750
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 752,
                  "end": 753
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 755,
                  "end": 756
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 758,
                  "end": 759
                }
              ],
              "start": 751,
              "end": 760
            }
          ],
          "start": 733,
          "end": 761
        },
        "start": 719,
        "end": 761
      },
      "directive": null,
      "start": 719,
      "end": 762
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 779,
          "end": 790
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 797,
            "end": 810
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 815,
                "end": 826
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 80,
                  "raw": "80",
                  "start": 827,
                  "end": 829
                }
              ],
              "start": 811,
              "end": 830
            }
          ],
          "start": 793,
          "end": 831
        },
        "start": 779,
        "end": 831
      },
      "directive": null,
      "start": 779,
      "end": 832
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 833,
          "end": 844
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 851,
            "end": 864
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 869,
                "end": 880
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 80,
                  "raw": "80",
                  "start": 881,
                  "end": 883
                }
              ],
              "start": 865,
              "end": 884
            },
            {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 886,
              "end": 887
            }
          ],
          "start": 847,
          "end": 888
        },
        "start": 833,
        "end": 888
      },
      "directive": null,
      "start": 833,
      "end": 889
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 890,
          "end": 901
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigInt64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 908,
            "end": 921
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 926,
                "end": 937
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 80,
                  "raw": "80",
                  "start": 938,
                  "end": 940
                }
              ],
              "start": 922,
              "end": 941
            },
            {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 943,
              "end": 944
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 946,
              "end": 947
            }
          ],
          "start": 904,
          "end": 948
        },
        "start": 890,
        "end": 948
      },
      "directive": null,
      "start": 890,
      "end": 949
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "len",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 959,
                "end": 965
              },
              "start": 957,
              "end": 965
            },
            "start": 954,
            "end": 965
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 968,
              "end": 979
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 980,
              "end": 986
            },
            "optional": false,
            "computed": false,
            "start": 968,
            "end": 986
          },
          "definite": false,
          "start": 954,
          "end": 986
        }
      ],
      "declare": false,
      "start": 950,
      "end": 987
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 988,
            "end": 999
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null,
            "start": 1000,
            "end": 1006
          },
          "optional": false,
          "computed": false,
          "start": 988,
          "end": 1006
        },
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 1009,
          "end": 1011
        },
        "start": 988,
        "end": 1011
      },
      "directive": null,
      "start": 988,
      "end": 1012
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "arrayBufferLike",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArrayBufferView",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1050,
                  "end": 1065
                },
                "typeArguments": null,
                "start": 1050,
                "end": 1065
              },
              "start": 1048,
              "end": 1065
            },
            "start": 1033,
            "end": 1065
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 1068,
            "end": 1079
          },
          "definite": false,
          "start": 1033,
          "end": 1079
        }
      ],
      "declare": false,
      "start": 1029,
      "end": 1080
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigUintArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigUint64Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1123,
                  "end": 1137
                },
                "typeArguments": null,
                "start": 1123,
                "end": 1137
              },
              "start": 1121,
              "end": 1137
            },
            "start": 1109,
            "end": 1137
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigUint64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1144,
              "end": 1158
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1140,
            "end": 1160
          },
          "definite": false,
          "start": 1109,
          "end": 1160
        }
      ],
      "declare": false,
      "start": 1105,
      "end": 1161
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1162,
          "end": 1174
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1181,
            "end": 1195
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 1196,
              "end": 1198
            }
          ],
          "start": 1177,
          "end": 1199
        },
        "start": 1162,
        "end": 1199
      },
      "directive": null,
      "start": 1162,
      "end": 1200
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1201,
          "end": 1213
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1220,
            "end": 1234
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "1n",
                  "bigint": "1",
                  "start": 1236,
                  "end": 1238
                },
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "2n",
                  "bigint": "2",
                  "start": 1240,
                  "end": 1242
                },
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "3n",
                  "bigint": "3",
                  "start": 1244,
                  "end": 1246
                }
              ],
              "start": 1235,
              "end": 1247
            }
          ],
          "start": 1216,
          "end": 1248
        },
        "start": 1201,
        "end": 1248
      },
      "directive": null,
      "start": 1201,
      "end": 1249
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1250,
          "end": 1262
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1269,
            "end": 1283
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1285,
                  "end": 1286
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1288,
                  "end": 1289
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 1291,
                  "end": 1292
                }
              ],
              "start": 1284,
              "end": 1293
            }
          ],
          "start": 1265,
          "end": 1294
        },
        "start": 1250,
        "end": 1294
      },
      "directive": null,
      "start": 1250,
      "end": 1295
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1312,
          "end": 1324
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1331,
            "end": 1345
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1350,
                "end": 1361
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 80,
                  "raw": "80",
                  "start": 1362,
                  "end": 1364
                }
              ],
              "start": 1346,
              "end": 1365
            }
          ],
          "start": 1327,
          "end": 1366
        },
        "start": 1312,
        "end": 1366
      },
      "directive": null,
      "start": 1312,
      "end": 1367
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1368,
          "end": 1380
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1387,
            "end": 1401
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1406,
                "end": 1417
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 80,
                  "raw": "80",
                  "start": 1418,
                  "end": 1420
                }
              ],
              "start": 1402,
              "end": 1421
            },
            {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 1423,
              "end": 1424
            }
          ],
          "start": 1383,
          "end": 1425
        },
        "start": 1368,
        "end": 1425
      },
      "directive": null,
      "start": 1368,
      "end": 1426
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigUintArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1427,
          "end": 1439
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "BigUint64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1446,
            "end": 1460
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayBuffer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1465,
                "end": 1476
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 80,
                  "raw": "80",
                  "start": 1477,
                  "end": 1479
                }
              ],
              "start": 1461,
              "end": 1480
            },
            {
              "type": "Literal",
              "value": 8,
              "raw": "8",
              "start": 1482,
              "end": 1483
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 1485,
              "end": 1486
            }
          ],
          "start": 1442,
          "end": 1487
        },
        "start": 1427,
        "end": 1487
      },
      "directive": null,
      "start": 1427,
      "end": 1488
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "len",
          "optional": false,
          "typeAnnotation": null,
          "start": 1489,
          "end": 1492
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 1495,
            "end": 1506
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null,
            "start": 1507,
            "end": 1513
          },
          "optional": false,
          "computed": false,
          "start": 1495,
          "end": 1513
        },
        "start": 1489,
        "end": 1513
      },
      "directive": null,
      "start": 1489,
      "end": 1514
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "bigIntArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 1515,
            "end": 1526
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null,
            "start": 1527,
            "end": 1533
          },
          "optional": false,
          "computed": false,
          "start": 1515,
          "end": 1533
        },
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 1536,
          "end": 1538
        },
        "start": 1515,
        "end": 1538
      },
      "directive": null,
      "start": 1515,
      "end": 1539
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "arrayBufferLike",
          "optional": false,
          "typeAnnotation": null,
          "start": 1556,
          "end": 1571
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 1574,
          "end": 1585
        },
        "start": 1556,
        "end": 1585
      },
      "directive": null,
      "start": 1556,
      "end": 1586
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
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 1625,
            "end": 1633
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "DataView",
              "optional": false,
              "typeAnnotation": null,
              "start": 1640,
              "end": 1648
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArrayBuffer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1653,
                  "end": 1664
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 80,
                    "raw": "80",
                    "start": 1665,
                    "end": 1667
                  }
                ],
                "start": 1649,
                "end": 1668
              }
            ],
            "start": 1636,
            "end": 1669
          },
          "definite": false,
          "start": 1625,
          "end": 1669
        }
      ],
      "declare": false,
      "start": 1619,
      "end": 1670
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
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 1671,
            "end": 1679
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigInt64",
            "optional": false,
            "typeAnnotation": null,
            "start": 1680,
            "end": 1691
          },
          "optional": false,
          "computed": false,
          "start": 1671,
          "end": 1691
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1692,
            "end": 1693
          },
          {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "1n",
              "bigint": "1",
              "start": 1696,
              "end": 1698
            },
            "prefix": true,
            "start": 1695,
            "end": 1698
          }
        ],
        "optional": false,
        "start": 1671,
        "end": 1699
      },
      "directive": null,
      "start": 1671,
      "end": 1700
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
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 1701,
            "end": 1709
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigInt64",
            "optional": false,
            "typeAnnotation": null,
            "start": 1710,
            "end": 1721
          },
          "optional": false,
          "computed": false,
          "start": 1701,
          "end": 1721
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1722,
            "end": 1723
          },
          {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "1n",
              "bigint": "1",
              "start": 1726,
              "end": 1728
            },
            "prefix": true,
            "start": 1725,
            "end": 1728
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1730,
            "end": 1734
          }
        ],
        "optional": false,
        "start": 1701,
        "end": 1735
      },
      "directive": null,
      "start": 1701,
      "end": 1736
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
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 1737,
            "end": 1745
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigInt64",
            "optional": false,
            "typeAnnotation": null,
            "start": 1746,
            "end": 1757
          },
          "optional": false,
          "computed": false,
          "start": 1737,
          "end": 1757
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1758,
            "end": 1759
          },
          {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1762,
              "end": 1763
            },
            "prefix": true,
            "start": 1761,
            "end": 1763
          }
        ],
        "optional": false,
        "start": 1737,
        "end": 1764
      },
      "directive": null,
      "start": 1737,
      "end": 1765
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
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 1782,
            "end": 1790
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigUint64",
            "optional": false,
            "typeAnnotation": null,
            "start": 1791,
            "end": 1803
          },
          "optional": false,
          "computed": false,
          "start": 1782,
          "end": 1803
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1804,
            "end": 1805
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "123n",
            "bigint": "123",
            "start": 1807,
            "end": 1811
          }
        ],
        "optional": false,
        "start": 1782,
        "end": 1812
      },
      "directive": null,
      "start": 1782,
      "end": 1813
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
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 1814,
            "end": 1822
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigUint64",
            "optional": false,
            "typeAnnotation": null,
            "start": 1823,
            "end": 1835
          },
          "optional": false,
          "computed": false,
          "start": 1814,
          "end": 1835
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1836,
            "end": 1837
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "123n",
            "bigint": "123",
            "start": 1839,
            "end": 1843
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1845,
            "end": 1849
          }
        ],
        "optional": false,
        "start": 1814,
        "end": 1850
      },
      "directive": null,
      "start": 1814,
      "end": 1851
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
            "name": "dataView",
            "optional": false,
            "typeAnnotation": null,
            "start": 1852,
            "end": 1860
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setBigUint64",
            "optional": false,
            "typeAnnotation": null,
            "start": 1861,
            "end": 1873
          },
          "optional": false,
          "computed": false,
          "start": 1852,
          "end": 1873
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1874,
            "end": 1875
          },
          {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 1877,
            "end": 1880
          }
        ],
        "optional": false,
        "start": 1852,
        "end": 1881
      },
      "directive": null,
      "start": 1852,
      "end": 1882
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 1899,
          "end": 1908
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null,
              "start": 1911,
              "end": 1919
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getBigInt64",
              "optional": false,
              "typeAnnotation": null,
              "start": 1920,
              "end": 1931
            },
            "optional": false,
            "computed": false,
            "start": 1911,
            "end": 1931
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1932,
              "end": 1933
            }
          ],
          "optional": false,
          "start": 1911,
          "end": 1934
        },
        "start": 1899,
        "end": 1934
      },
      "directive": null,
      "start": 1899,
      "end": 1935
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 1936,
          "end": 1945
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null,
              "start": 1948,
              "end": 1956
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getBigInt64",
              "optional": false,
              "typeAnnotation": null,
              "start": 1957,
              "end": 1968
            },
            "optional": false,
            "computed": false,
            "start": 1948,
            "end": 1968
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1969,
              "end": 1970
            },
            {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1972,
              "end": 1976
            }
          ],
          "optional": false,
          "start": 1948,
          "end": 1977
        },
        "start": 1936,
        "end": 1977
      },
      "directive": null,
      "start": 1936,
      "end": 1978
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 1979,
          "end": 1988
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null,
              "start": 1991,
              "end": 1999
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getBigUint64",
              "optional": false,
              "typeAnnotation": null,
              "start": 2000,
              "end": 2012
            },
            "optional": false,
            "computed": false,
            "start": 1991,
            "end": 2012
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 2013,
              "end": 2014
            }
          ],
          "optional": false,
          "start": 1991,
          "end": 2015
        },
        "start": 1979,
        "end": 2015
      },
      "directive": null,
      "start": 1979,
      "end": 2016
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigintVal",
          "optional": false,
          "typeAnnotation": null,
          "start": 2017,
          "end": 2026
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dataView",
              "optional": false,
              "typeAnnotation": null,
              "start": 2029,
              "end": 2037
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getBigUint64",
              "optional": false,
              "typeAnnotation": null,
              "start": 2038,
              "end": 2050
            },
            "optional": false,
            "computed": false,
            "start": 2029,
            "end": 2050
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 2051,
              "end": 2052
            },
            {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2054,
              "end": 2058
            }
          ],
          "optional": false,
          "start": 2029,
          "end": 2059
        },
        "start": 2017,
        "end": 2059
      },
      "directive": null,
      "start": 2017,
      "end": 2060
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
            "name": "w",
            "optional": false,
            "typeAnnotation": null,
            "start": 2103,
            "end": 2104
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "12n",
            "bigint": "12",
            "start": 2107,
            "end": 2110
          },
          "definite": false,
          "start": 2103,
          "end": 2110
        }
      ],
      "declare": false,
      "start": 2097,
      "end": 2111
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 2150,
            "end": 2151
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "12n",
              "bigint": "12",
              "start": 2155,
              "end": 2158
            },
            "prefix": true,
            "start": 2154,
            "end": 2158
          },
          "definite": false,
          "start": 2150,
          "end": 2158
        }
      ],
      "declare": false,
      "start": 2144,
      "end": 2159
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": null,
                  "raw": "12n",
                  "bigint": "12",
                  "start": 2202,
                  "end": 2205
                },
                "start": 2202,
                "end": 2205
              },
              "start": 2200,
              "end": 2205
            },
            "start": 2199,
            "end": 2205
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "12n",
            "bigint": "12",
            "start": 2208,
            "end": 2211
          },
          "definite": false,
          "start": 2199,
          "end": 2211
        }
      ],
      "declare": false,
      "start": 2193,
      "end": 2212
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 2241,
            "end": 2242
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "12n",
            "bigint": "12",
            "start": 2245,
            "end": 2248
          },
          "definite": false,
          "start": 2241,
          "end": 2248
        }
      ],
      "declare": false,
      "start": 2237,
      "end": 2249
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 2347,
                "end": 2351
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 2352,
                "end": 2364
              },
              "optional": false,
              "computed": false,
              "start": 2347,
              "end": 2364
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "fr",
                "raw": "\"fr\"",
                "start": 2365,
                "end": 2369
              }
            ],
            "start": 2343,
            "end": 2370
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "format",
            "optional": false,
            "typeAnnotation": null,
            "start": 2371,
            "end": 2377
          },
          "optional": false,
          "computed": false,
          "start": 2343,
          "end": 2377
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "3000n",
            "bigint": "3000",
            "start": 2378,
            "end": 2383
          }
        ],
        "optional": false,
        "start": 2343,
        "end": 2384
      },
      "directive": null,
      "start": 2343,
      "end": 2385
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 2390,
                "end": 2394
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberFormat",
                "optional": false,
                "typeAnnotation": null,
                "start": 2395,
                "end": 2407
              },
              "optional": false,
              "computed": false,
              "start": 2390,
              "end": 2407
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "fr",
                "raw": "\"fr\"",
                "start": 2408,
                "end": 2412
              }
            ],
            "start": 2386,
            "end": 2413
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "format",
            "optional": false,
            "typeAnnotation": null,
            "start": 2414,
            "end": 2420
          },
          "optional": false,
          "computed": false,
          "start": 2386,
          "end": 2420
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "bigintVal",
            "optional": false,
            "typeAnnotation": null,
            "start": 2421,
            "end": 2430
          }
        ],
        "optional": false,
        "start": 2386,
        "end": 2431
      },
      "directive": null,
      "start": 2386,
      "end": 2432
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 25,
  "end": 2432
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 25,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 29,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "BigInt",
    "start": 49,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 56,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 62,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "BigInt",
    "start": 74,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
    "end": 81
  },
  {
    "type": "String",
    "value": "\"456\"",
    "start": 81,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 89,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "BigInt",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 99,
    "end": 100
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 100,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 122,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "BigInt",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "asIntN",
    "start": 141,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 147,
    "end": 148
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 149,
    "end": 150
  },
  {
    "type": "Numeric",
    "value": "0xFFFFn",
    "start": 151,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 161,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "BigInt",
    "start": 173,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "asUintN",
    "start": 180,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 187,
    "end": 188
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 189,
    "end": 190
  },
  {
    "type": "Numeric",
    "value": "0xFFFFn",
    "start": 191,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 201,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 213,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "valueOf",
    "start": 223,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 234,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "stringVal",
    "start": 238,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 249,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 258,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 268,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "stringVal",
    "start": 280,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 292,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 302,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 310,
    "end": 311
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "stringVal",
    "start": 315,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 327,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 337,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Identifier",
    "value": "stringVal",
    "start": 355,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 367,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 377,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 391,
    "end": 392
  },
  {
    "type": "String",
    "value": "'de-DE'",
    "start": 392,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "stringVal",
    "start": 402,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 414,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 424,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 438,
    "end": 439
  },
  {
    "type": "String",
    "value": "'de-DE'",
    "start": 439,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 450,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 455,
    "end": 456
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 457,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "stringVal",
    "start": 472,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 484,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 494,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 508,
    "end": 509
  },
  {
    "type": "String",
    "value": "'de-DE'",
    "start": 509,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 520,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 527,
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
    "value": "currency",
    "start": 539,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 547,
    "end": 548
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 549,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 556,
    "end": 557
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 581,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "bigIntArray",
    "start": 585,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "BigInt64Array",
    "start": 598,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 612,
    "end": 613
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 614,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "BigInt64Array",
    "start": 618,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "bigIntArray",
    "start": 635,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 647,
    "end": 648
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 649,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "BigInt64Array",
    "start": 653,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 666,
    "end": 667
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 667,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "bigIntArray",
    "start": 672,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 684,
    "end": 685
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 686,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "BigInt64Array",
    "start": 690,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 704,
    "end": 705
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 705,
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
    "value": "2n",
    "start": 709,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 711,
    "end": 712
  },
  {
    "type": "Numeric",
    "value": "3n",
    "start": 713,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "bigIntArray",
    "start": 719,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 731,
    "end": 732
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 733,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "BigInt64Array",
    "start": 737,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 751,
    "end": 752
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 753,
    "end": 754
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 756,
    "end": 757
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "bigIntArray",
    "start": 779,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 791,
    "end": 792
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 793,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "BigInt64Array",
    "start": 797,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 811,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "ArrayBuffer",
    "start": 815,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 826,
    "end": 827
  },
  {
    "type": "Numeric",
    "value": "80",
    "start": 827,
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
    "value": ")",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "bigIntArray",
    "start": 833,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 845,
    "end": 846
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 847,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "BigInt64Array",
    "start": 851,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 864,
    "end": 865
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 865,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "ArrayBuffer",
    "start": 869,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 880,
    "end": 881
  },
  {
    "type": "Numeric",
    "value": "80",
    "start": 881,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 884,
    "end": 885
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "bigIntArray",
    "start": 890,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 902,
    "end": 903
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 904,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "BigInt64Array",
    "start": 908,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 921,
    "end": 922
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 922,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "ArrayBuffer",
    "start": 926,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 937,
    "end": 938
  },
  {
    "type": "Numeric",
    "value": "80",
    "start": 938,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 941,
    "end": 942
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 944,
    "end": 945
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 946,
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
    "type": "Keyword",
    "value": "let",
    "start": 950,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 954,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 959,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "bigIntArray",
    "start": 968,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 980,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 986,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "bigIntArray",
    "start": 988,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1000,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1009,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1029,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "arrayBufferLike",
    "start": 1033,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "ArrayBufferView",
    "start": 1050,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "bigIntArray",
    "start": 1068,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1105,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "bigUintArray",
    "start": 1109,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "BigUint64Array",
    "start": 1123,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1140,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "BigUint64Array",
    "start": 1144,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "bigUintArray",
    "start": 1162,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1177,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "BigUint64Array",
    "start": 1181,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1196,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "bigUintArray",
    "start": 1201,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1216,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "BigUint64Array",
    "start": 1220,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 1236,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Numeric",
    "value": "2n",
    "start": 1240,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Numeric",
    "value": "3n",
    "start": 1244,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "bigUintArray",
    "start": 1250,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1265,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "BigUint64Array",
    "start": 1269,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "bigUintArray",
    "start": 1312,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1327,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "BigUint64Array",
    "start": 1331,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1346,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "ArrayBuffer",
    "start": 1350,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Numeric",
    "value": "80",
    "start": 1362,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "bigUintArray",
    "start": 1368,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1383,
    "end": 1386
  },
  {
    "type": "Identifier",
    "value": "BigUint64Array",
    "start": 1387,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1402,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "ArrayBuffer",
    "start": 1406,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Numeric",
    "value": "80",
    "start": 1418,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "bigUintArray",
    "start": 1427,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1442,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "BigUint64Array",
    "start": 1446,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1461,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "ArrayBuffer",
    "start": 1465,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Numeric",
    "value": "80",
    "start": 1477,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 1489,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "bigIntArray",
    "start": 1495,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1507,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "bigIntArray",
    "start": 1515,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1527,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1536,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Identifier",
    "value": "arrayBufferLike",
    "start": 1556,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "bigIntArray",
    "start": 1574,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1619,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "dataView",
    "start": 1625,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1636,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "DataView",
    "start": 1640,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1649,
    "end": 1652
  },
  {
    "type": "Identifier",
    "value": "ArrayBuffer",
    "start": 1653,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Numeric",
    "value": "80",
    "start": 1665,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "dataView",
    "start": 1671,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "setBigInt64",
    "start": 1680,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 1696,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "dataView",
    "start": 1701,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Identifier",
    "value": "setBigInt64",
    "start": 1710,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 1726,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1730,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "dataView",
    "start": 1737,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Identifier",
    "value": "setBigInt64",
    "start": 1746,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Identifier",
    "value": "dataView",
    "start": 1782,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Identifier",
    "value": "setBigUint64",
    "start": 1791,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Numeric",
    "value": "123n",
    "start": 1807,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "dataView",
    "start": 1814,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "setBigUint64",
    "start": 1823,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Numeric",
    "value": "123n",
    "start": 1839,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1845,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Identifier",
    "value": "dataView",
    "start": 1852,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "setBigUint64",
    "start": 1861,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1877,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "bigintVal",
    "start": 1899,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Identifier",
    "value": "dataView",
    "start": 1911,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Identifier",
    "value": "getBigInt64",
    "start": 1920,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 1936,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "dataView",
    "start": 1948,
    "end": 1956
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Identifier",
    "value": "getBigInt64",
    "start": 1957,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1972,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 1979,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "dataView",
    "start": 1991,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "getBigUint64",
    "start": 2000,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 2017,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "dataView",
    "start": 2029,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Identifier",
    "value": "getBigUint64",
    "start": 2038,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2054,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2097,
    "end": 2102
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Numeric",
    "value": "12n",
    "start": 2107,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2144,
    "end": 2149
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Numeric",
    "value": "12n",
    "start": 2155,
    "end": 2158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2193,
    "end": 2198
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Numeric",
    "value": "12n",
    "start": 2202,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Numeric",
    "value": "12n",
    "start": 2208,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2237,
    "end": 2240
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Numeric",
    "value": "12n",
    "start": 2245,
    "end": 2248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2343,
    "end": 2346
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 2347,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 2352,
    "end": 2364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "String",
    "value": "\"fr\"",
    "start": 2365,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Identifier",
    "value": "format",
    "start": 2371,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Numeric",
    "value": "3000n",
    "start": 2378,
    "end": 2383
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2386,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 2390,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2394,
    "end": 2395
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 2395,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "String",
    "value": "\"fr\"",
    "start": 2408,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Identifier",
    "value": "format",
    "start": 2414,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Identifier",
    "value": "bigintVal",
    "start": 2421,
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
    "value": ";",
    "start": 2431,
    "end": 2432
  }
]
```
