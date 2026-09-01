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
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9,
                "end": 15
              },
              "start": 7,
              "end": 15
            },
            "start": 4,
            "end": 15
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 15
        }
      ],
      "declare": false,
      "start": 0,
      "end": 16
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 26
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 30,
                "end": 31
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 33,
                "end": 34
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 36,
                "end": 37
              }
            ],
            "start": 29,
            "end": 38
          },
          "definite": false,
          "start": 23,
          "end": 38
        }
      ],
      "declare": false,
      "start": 17,
      "end": 39
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 40,
          "end": 43
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 49
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 64
            },
            "optional": false,
            "computed": false,
            "start": 46,
            "end": 64
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 46,
          "end": 66
        },
        "start": 40,
        "end": 66
      },
      "directive": null,
      "start": 40,
      "end": 67
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 77
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 83
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 98
            },
            "optional": false,
            "computed": false,
            "start": 80,
            "end": 98
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 99,
              "end": 106
            }
          ],
          "optional": false,
          "start": 80,
          "end": 107
        },
        "start": 74,
        "end": 107
      },
      "directive": null,
      "start": 74,
      "end": 108
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 115,
          "end": 118
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 124
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 139
            },
            "optional": false,
            "computed": false,
            "start": 121,
            "end": 139
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 140,
              "end": 147
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
                    "start": 151,
                    "end": 156
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 158,
                    "end": 168
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 151,
                  "end": 168
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
                    "start": 170,
                    "end": 178
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 180,
                    "end": 185
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 170,
                  "end": 185
                }
              ],
              "start": 149,
              "end": 187
            }
          ],
          "optional": false,
          "start": 121,
          "end": 188
        },
        "start": 115,
        "end": 188
      },
      "directive": null,
      "start": 115,
      "end": 189
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
            "name": "dates",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 219,
                      "end": 223
                    },
                    "typeArguments": null,
                    "start": 219,
                    "end": 223
                  },
                  "start": 219,
                  "end": 225
                },
                "start": 210,
                "end": 225
              },
              "start": 208,
              "end": 225
            },
            "start": 203,
            "end": 225
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 233,
                  "end": 237
                },
                "typeArguments": null,
                "arguments": [],
                "start": 229,
                "end": 239
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 245,
                  "end": 249
                },
                "typeArguments": null,
                "arguments": [],
                "start": 241,
                "end": 251
              }
            ],
            "start": 228,
            "end": 252
          },
          "definite": false,
          "start": 203,
          "end": 252
        }
      ],
      "declare": false,
      "start": 197,
      "end": 253
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 254,
          "end": 257
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dates",
              "optional": false,
              "typeAnnotation": null,
              "start": 260,
              "end": 265
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 280
            },
            "optional": false,
            "computed": false,
            "start": 260,
            "end": 280
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 260,
          "end": 282
        },
        "start": 254,
        "end": 282
      },
      "directive": null,
      "start": 254,
      "end": 283
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 290,
          "end": 293
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dates",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 301
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 302,
              "end": 316
            },
            "optional": false,
            "computed": false,
            "start": 296,
            "end": 316
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "fr",
              "raw": "'fr'",
              "start": 317,
              "end": 321
            }
          ],
          "optional": false,
          "start": 296,
          "end": 322
        },
        "start": 290,
        "end": 322
      },
      "directive": null,
      "start": 290,
      "end": 323
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 330,
          "end": 333
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dates",
              "optional": false,
              "typeAnnotation": null,
              "start": 336,
              "end": 341
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 342,
              "end": 356
            },
            "optional": false,
            "computed": false,
            "start": 336,
            "end": 356
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "fr",
              "raw": "'fr'",
              "start": 357,
              "end": 361
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
                    "name": "timeZone",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 365,
                    "end": 373
                  },
                  "value": {
                    "type": "Literal",
                    "value": "UTC",
                    "raw": "'UTC'",
                    "start": 375,
                    "end": 380
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 365,
                  "end": 380
                }
              ],
              "start": 363,
              "end": 382
            }
          ],
          "optional": false,
          "start": 336,
          "end": 383
        },
        "start": 330,
        "end": 383
      },
      "directive": null,
      "start": 330,
      "end": 384
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
            "name": "mixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 398,
            "end": 403
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 407,
                "end": 408
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 414,
                  "end": 418
                },
                "typeArguments": null,
                "arguments": [],
                "start": 410,
                "end": 420
              },
              {
                "type": "Literal",
                "value": 59782,
                "raw": "59782",
                "start": 422,
                "end": 427
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 433,
                  "end": 437
                },
                "typeArguments": null,
                "arguments": [],
                "start": 429,
                "end": 439
              }
            ],
            "start": 406,
            "end": 440
          },
          "definite": false,
          "start": 398,
          "end": 440
        }
      ],
      "declare": false,
      "start": 392,
      "end": 441
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 442,
          "end": 445
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixed",
              "optional": false,
              "typeAnnotation": null,
              "start": 448,
              "end": 453
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 468
            },
            "optional": false,
            "computed": false,
            "start": 448,
            "end": 468
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 448,
          "end": 470
        },
        "start": 442,
        "end": 470
      },
      "directive": null,
      "start": 442,
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
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 478,
          "end": 481
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixed",
              "optional": false,
              "typeAnnotation": null,
              "start": 484,
              "end": 489
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 490,
              "end": 504
            },
            "optional": false,
            "computed": false,
            "start": 484,
            "end": 504
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "fr",
              "raw": "'fr'",
              "start": 505,
              "end": 509
            }
          ],
          "optional": false,
          "start": 484,
          "end": 510
        },
        "start": 478,
        "end": 510
      },
      "directive": null,
      "start": 478,
      "end": 511
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 518,
          "end": 521
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixed",
              "optional": false,
              "typeAnnotation": null,
              "start": 524,
              "end": 529
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 530,
              "end": 544
            },
            "optional": false,
            "computed": false,
            "start": 524,
            "end": 544
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "de",
              "raw": "'de'",
              "start": 545,
              "end": 549
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
                    "start": 553,
                    "end": 558
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 560,
                    "end": 570
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 553,
                  "end": 570
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
                    "start": 572,
                    "end": 580
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 582,
                    "end": 587
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 572,
                  "end": 587
                }
              ],
              "start": 551,
              "end": 589
            }
          ],
          "optional": false,
          "start": 524,
          "end": 590
        },
        "start": 518,
        "end": 590
      },
      "directive": null,
      "start": 518,
      "end": 591
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 598,
          "end": 601
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "mixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 605,
                "end": 610
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 614,
                  "end": 627
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 628,
                          "end": 634
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Date",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 637,
                            "end": 641
                          },
                          "typeArguments": null,
                          "start": 637,
                          "end": 641
                        }
                      ],
                      "start": 628,
                      "end": 641
                    }
                  ],
                  "start": 627,
                  "end": 642
                },
                "start": 614,
                "end": 642
              },
              "start": 605,
              "end": 642
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 644,
              "end": 658
            },
            "optional": false,
            "computed": false,
            "start": 604,
            "end": 658
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "de",
              "raw": "'de'",
              "start": 659,
              "end": 663
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
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 667,
                    "end": 675
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 677,
                    "end": 682
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 667,
                  "end": 682
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 684,
                    "end": 689
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 691,
                    "end": 701
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 684,
                  "end": 701
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "timeZone",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 703,
                    "end": 711
                  },
                  "value": {
                    "type": "Literal",
                    "value": "UTC",
                    "raw": "'UTC'",
                    "start": 713,
                    "end": 718
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 703,
                  "end": 718
                }
              ],
              "start": 665,
              "end": 720
            }
          ],
          "optional": false,
          "start": 604,
          "end": 721
        },
        "start": 598,
        "end": 721
      },
      "directive": null,
      "start": 598,
      "end": 722
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
            "name": "int8Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 736,
            "end": 745
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 752,
              "end": 761
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 762,
                "end": 763
              }
            ],
            "start": 748,
            "end": 764
          },
          "definite": false,
          "start": 736,
          "end": 764
        }
      ],
      "declare": false,
      "start": 730,
      "end": 765
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 766,
          "end": 769
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 772,
              "end": 781
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 782,
              "end": 796
            },
            "optional": false,
            "computed": false,
            "start": 772,
            "end": 796
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 772,
          "end": 798
        },
        "start": 766,
        "end": 798
      },
      "directive": null,
      "start": 766,
      "end": 799
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 806,
          "end": 809
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 812,
              "end": 821
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 822,
              "end": 836
            },
            "optional": false,
            "computed": false,
            "start": 812,
            "end": 836
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 837,
              "end": 844
            }
          ],
          "optional": false,
          "start": 812,
          "end": 845
        },
        "start": 806,
        "end": 845
      },
      "directive": null,
      "start": 806,
      "end": 846
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 853,
          "end": 856
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 859,
              "end": 868
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 869,
              "end": 883
            },
            "optional": false,
            "computed": false,
            "start": 859,
            "end": 883
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 884,
              "end": 891
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
                    "start": 895,
                    "end": 900
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 902,
                    "end": 912
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 895,
                  "end": 912
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
                    "start": 914,
                    "end": 922
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 924,
                    "end": 929
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 914,
                  "end": 929
                }
              ],
              "start": 893,
              "end": 931
            }
          ],
          "optional": false,
          "start": 859,
          "end": 932
        },
        "start": 853,
        "end": 932
      },
      "directive": null,
      "start": 853,
      "end": 933
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
            "name": "uint8Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 947,
            "end": 957
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 964,
              "end": 974
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 975,
                "end": 976
              }
            ],
            "start": 960,
            "end": 977
          },
          "definite": false,
          "start": 947,
          "end": 977
        }
      ],
      "declare": false,
      "start": 941,
      "end": 978
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 979,
          "end": 982
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 985,
              "end": 995
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 996,
              "end": 1010
            },
            "optional": false,
            "computed": false,
            "start": 985,
            "end": 1010
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 985,
          "end": 1012
        },
        "start": 979,
        "end": 1012
      },
      "directive": null,
      "start": 979,
      "end": 1013
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1020,
          "end": 1023
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1026,
              "end": 1036
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1037,
              "end": 1051
            },
            "optional": false,
            "computed": false,
            "start": 1026,
            "end": 1051
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1052,
              "end": 1059
            }
          ],
          "optional": false,
          "start": 1026,
          "end": 1060
        },
        "start": 1020,
        "end": 1060
      },
      "directive": null,
      "start": 1020,
      "end": 1061
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1068,
          "end": 1071
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1074,
              "end": 1084
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1085,
              "end": 1099
            },
            "optional": false,
            "computed": false,
            "start": 1074,
            "end": 1099
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1100,
              "end": 1107
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
                    "start": 1111,
                    "end": 1116
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 1118,
                    "end": 1128
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1111,
                  "end": 1128
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
                    "start": 1130,
                    "end": 1138
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 1140,
                    "end": 1145
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1130,
                  "end": 1145
                }
              ],
              "start": 1109,
              "end": 1147
            }
          ],
          "optional": false,
          "start": 1074,
          "end": 1148
        },
        "start": 1068,
        "end": 1148
      },
      "directive": null,
      "start": 1068,
      "end": 1149
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
            "name": "uint8ClampedArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 1163,
            "end": 1180
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 1187,
              "end": 1204
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1205,
                "end": 1206
              }
            ],
            "start": 1183,
            "end": 1207
          },
          "definite": false,
          "start": 1163,
          "end": 1207
        }
      ],
      "declare": false,
      "start": 1157,
      "end": 1208
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1209,
          "end": 1212
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 1215,
              "end": 1232
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1233,
              "end": 1247
            },
            "optional": false,
            "computed": false,
            "start": 1215,
            "end": 1247
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1215,
          "end": 1249
        },
        "start": 1209,
        "end": 1249
      },
      "directive": null,
      "start": 1209,
      "end": 1250
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1257,
          "end": 1260
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 1263,
              "end": 1280
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1281,
              "end": 1295
            },
            "optional": false,
            "computed": false,
            "start": 1263,
            "end": 1295
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1296,
              "end": 1303
            }
          ],
          "optional": false,
          "start": 1263,
          "end": 1304
        },
        "start": 1257,
        "end": 1304
      },
      "directive": null,
      "start": 1257,
      "end": 1305
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1312,
          "end": 1315
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 1318,
              "end": 1335
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1336,
              "end": 1350
            },
            "optional": false,
            "computed": false,
            "start": 1318,
            "end": 1350
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1351,
              "end": 1358
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
                    "start": 1362,
                    "end": 1367
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 1369,
                    "end": 1379
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1362,
                  "end": 1379
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
                    "start": 1381,
                    "end": 1389
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 1391,
                    "end": 1396
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1381,
                  "end": 1396
                }
              ],
              "start": 1360,
              "end": 1398
            }
          ],
          "optional": false,
          "start": 1318,
          "end": 1399
        },
        "start": 1312,
        "end": 1399
      },
      "directive": null,
      "start": 1312,
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
            "name": "int16Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1414,
            "end": 1424
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1431,
              "end": 1441
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1442,
                "end": 1443
              }
            ],
            "start": 1427,
            "end": 1444
          },
          "definite": false,
          "start": 1414,
          "end": 1444
        }
      ],
      "declare": false,
      "start": 1408,
      "end": 1445
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1446,
          "end": 1449
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1452,
              "end": 1462
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1463,
              "end": 1477
            },
            "optional": false,
            "computed": false,
            "start": 1452,
            "end": 1477
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1452,
          "end": 1479
        },
        "start": 1446,
        "end": 1479
      },
      "directive": null,
      "start": 1446,
      "end": 1480
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1487,
          "end": 1490
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1493,
              "end": 1503
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1504,
              "end": 1518
            },
            "optional": false,
            "computed": false,
            "start": 1493,
            "end": 1518
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1519,
              "end": 1526
            }
          ],
          "optional": false,
          "start": 1493,
          "end": 1527
        },
        "start": 1487,
        "end": 1527
      },
      "directive": null,
      "start": 1487,
      "end": 1528
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1535,
          "end": 1538
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1541,
              "end": 1551
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1552,
              "end": 1566
            },
            "optional": false,
            "computed": false,
            "start": 1541,
            "end": 1566
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1567,
              "end": 1574
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
                    "start": 1578,
                    "end": 1583
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 1585,
                    "end": 1595
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1578,
                  "end": 1595
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
                    "start": 1597,
                    "end": 1605
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 1607,
                    "end": 1612
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1597,
                  "end": 1612
                }
              ],
              "start": 1576,
              "end": 1614
            }
          ],
          "optional": false,
          "start": 1541,
          "end": 1615
        },
        "start": 1535,
        "end": 1615
      },
      "directive": null,
      "start": 1535,
      "end": 1616
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
            "name": "uint16Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1630,
            "end": 1641
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1648,
              "end": 1659
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1660,
                "end": 1661
              }
            ],
            "start": 1644,
            "end": 1662
          },
          "definite": false,
          "start": 1630,
          "end": 1662
        }
      ],
      "declare": false,
      "start": 1624,
      "end": 1663
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1664,
          "end": 1667
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1670,
              "end": 1681
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1682,
              "end": 1696
            },
            "optional": false,
            "computed": false,
            "start": 1670,
            "end": 1696
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1670,
          "end": 1698
        },
        "start": 1664,
        "end": 1698
      },
      "directive": null,
      "start": 1664,
      "end": 1699
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1706,
          "end": 1709
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1712,
              "end": 1723
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1724,
              "end": 1738
            },
            "optional": false,
            "computed": false,
            "start": 1712,
            "end": 1738
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1739,
              "end": 1746
            }
          ],
          "optional": false,
          "start": 1712,
          "end": 1747
        },
        "start": 1706,
        "end": 1747
      },
      "directive": null,
      "start": 1706,
      "end": 1748
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1755,
          "end": 1758
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1761,
              "end": 1772
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1773,
              "end": 1787
            },
            "optional": false,
            "computed": false,
            "start": 1761,
            "end": 1787
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1788,
              "end": 1795
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
                    "start": 1799,
                    "end": 1804
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 1806,
                    "end": 1816
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1799,
                  "end": 1816
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
                    "start": 1818,
                    "end": 1826
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 1828,
                    "end": 1833
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1818,
                  "end": 1833
                }
              ],
              "start": 1797,
              "end": 1835
            }
          ],
          "optional": false,
          "start": 1761,
          "end": 1836
        },
        "start": 1755,
        "end": 1836
      },
      "directive": null,
      "start": 1755,
      "end": 1837
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
            "name": "int32Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1851,
            "end": 1861
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1868,
              "end": 1878
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1879,
                "end": 1880
              }
            ],
            "start": 1864,
            "end": 1881
          },
          "definite": false,
          "start": 1851,
          "end": 1881
        }
      ],
      "declare": false,
      "start": 1845,
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
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1883,
          "end": 1886
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1889,
              "end": 1899
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1900,
              "end": 1914
            },
            "optional": false,
            "computed": false,
            "start": 1889,
            "end": 1914
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1889,
          "end": 1916
        },
        "start": 1883,
        "end": 1916
      },
      "directive": null,
      "start": 1883,
      "end": 1917
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1924,
          "end": 1927
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1930,
              "end": 1940
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1941,
              "end": 1955
            },
            "optional": false,
            "computed": false,
            "start": 1930,
            "end": 1955
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1956,
              "end": 1963
            }
          ],
          "optional": false,
          "start": 1930,
          "end": 1964
        },
        "start": 1924,
        "end": 1964
      },
      "directive": null,
      "start": 1924,
      "end": 1965
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1972,
          "end": 1975
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1978,
              "end": 1988
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1989,
              "end": 2003
            },
            "optional": false,
            "computed": false,
            "start": 1978,
            "end": 2003
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2004,
              "end": 2011
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
                    "start": 2015,
                    "end": 2020
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 2022,
                    "end": 2032
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2015,
                  "end": 2032
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
                    "start": 2034,
                    "end": 2042
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 2044,
                    "end": 2049
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2034,
                  "end": 2049
                }
              ],
              "start": 2013,
              "end": 2051
            }
          ],
          "optional": false,
          "start": 1978,
          "end": 2052
        },
        "start": 1972,
        "end": 2052
      },
      "directive": null,
      "start": 1972,
      "end": 2053
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
            "name": "uint32Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 2067,
            "end": 2078
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2085,
              "end": 2096
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 2097,
                "end": 2098
              }
            ],
            "start": 2081,
            "end": 2099
          },
          "definite": false,
          "start": 2067,
          "end": 2099
        }
      ],
      "declare": false,
      "start": 2061,
      "end": 2100
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2101,
          "end": 2104
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2107,
              "end": 2118
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2119,
              "end": 2133
            },
            "optional": false,
            "computed": false,
            "start": 2107,
            "end": 2133
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 2107,
          "end": 2135
        },
        "start": 2101,
        "end": 2135
      },
      "directive": null,
      "start": 2101,
      "end": 2136
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2143,
          "end": 2146
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2149,
              "end": 2160
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2161,
              "end": 2175
            },
            "optional": false,
            "computed": false,
            "start": 2149,
            "end": 2175
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2176,
              "end": 2183
            }
          ],
          "optional": false,
          "start": 2149,
          "end": 2184
        },
        "start": 2143,
        "end": 2184
      },
      "directive": null,
      "start": 2143,
      "end": 2185
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2192,
          "end": 2195
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2198,
              "end": 2209
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2210,
              "end": 2224
            },
            "optional": false,
            "computed": false,
            "start": 2198,
            "end": 2224
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2225,
              "end": 2232
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
                    "start": 2236,
                    "end": 2241
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 2243,
                    "end": 2253
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2236,
                  "end": 2253
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
                    "start": 2255,
                    "end": 2263
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 2265,
                    "end": 2270
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2255,
                  "end": 2270
                }
              ],
              "start": 2234,
              "end": 2272
            }
          ],
          "optional": false,
          "start": 2198,
          "end": 2273
        },
        "start": 2192,
        "end": 2273
      },
      "directive": null,
      "start": 2192,
      "end": 2274
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
            "name": "float32Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 2288,
            "end": 2300
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2307,
              "end": 2319
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 2320,
                "end": 2321
              }
            ],
            "start": 2303,
            "end": 2322
          },
          "definite": false,
          "start": 2288,
          "end": 2322
        }
      ],
      "declare": false,
      "start": 2282,
      "end": 2323
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2324,
          "end": 2327
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2330,
              "end": 2342
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2343,
              "end": 2357
            },
            "optional": false,
            "computed": false,
            "start": 2330,
            "end": 2357
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 2330,
          "end": 2359
        },
        "start": 2324,
        "end": 2359
      },
      "directive": null,
      "start": 2324,
      "end": 2360
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2367,
          "end": 2370
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2373,
              "end": 2385
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2386,
              "end": 2400
            },
            "optional": false,
            "computed": false,
            "start": 2373,
            "end": 2400
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2401,
              "end": 2408
            }
          ],
          "optional": false,
          "start": 2373,
          "end": 2409
        },
        "start": 2367,
        "end": 2409
      },
      "directive": null,
      "start": 2367,
      "end": 2410
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2417,
          "end": 2420
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2423,
              "end": 2435
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2436,
              "end": 2450
            },
            "optional": false,
            "computed": false,
            "start": 2423,
            "end": 2450
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2451,
              "end": 2458
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
                    "start": 2462,
                    "end": 2467
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 2469,
                    "end": 2479
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2462,
                  "end": 2479
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
                    "start": 2481,
                    "end": 2489
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 2491,
                    "end": 2496
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2481,
                  "end": 2496
                }
              ],
              "start": 2460,
              "end": 2498
            }
          ],
          "optional": false,
          "start": 2423,
          "end": 2499
        },
        "start": 2417,
        "end": 2499
      },
      "directive": null,
      "start": 2417,
      "end": 2500
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
            "name": "float64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 2514,
            "end": 2526
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2533,
              "end": 2545
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 2546,
                "end": 2547
              }
            ],
            "start": 2529,
            "end": 2548
          },
          "definite": false,
          "start": 2514,
          "end": 2548
        }
      ],
      "declare": false,
      "start": 2508,
      "end": 2549
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2550,
          "end": 2553
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2556,
              "end": 2568
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2569,
              "end": 2583
            },
            "optional": false,
            "computed": false,
            "start": 2556,
            "end": 2583
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 2556,
          "end": 2585
        },
        "start": 2550,
        "end": 2585
      },
      "directive": null,
      "start": 2550,
      "end": 2586
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2593,
          "end": 2596
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2599,
              "end": 2611
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2612,
              "end": 2626
            },
            "optional": false,
            "computed": false,
            "start": 2599,
            "end": 2626
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2627,
              "end": 2634
            }
          ],
          "optional": false,
          "start": 2599,
          "end": 2635
        },
        "start": 2593,
        "end": 2635
      },
      "directive": null,
      "start": 2593,
      "end": 2636
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2643,
          "end": 2646
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2649,
              "end": 2661
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2662,
              "end": 2676
            },
            "optional": false,
            "computed": false,
            "start": 2649,
            "end": 2676
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2677,
              "end": 2684
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
                    "start": 2688,
                    "end": 2693
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 2695,
                    "end": 2705
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2688,
                  "end": 2705
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
                    "start": 2707,
                    "end": 2715
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 2717,
                    "end": 2722
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2707,
                  "end": 2722
                }
              ],
              "start": 2686,
              "end": 2724
            }
          ],
          "optional": false,
          "start": 2649,
          "end": 2725
        },
        "start": 2643,
        "end": 2725
      },
      "directive": null,
      "start": 2643,
      "end": 2726
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2732
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 4,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 17,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 23,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 29,
    "end": 30
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 34,
    "end": 35
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 40,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 46,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 50,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 74,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 80,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 84,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 99,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 115,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 121,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 125,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
    "end": 140
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 140,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 151,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 158,
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
    "value": "currency",
    "start": 170,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 180,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 197,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "dates",
    "start": 203,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 210,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 219,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 229,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 233,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 241,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 245,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "str",
    "start": 254,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "dates",
    "start": 260,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 266,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 290,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "dates",
    "start": 296,
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
    "value": "toLocaleString",
    "start": 302,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317
  },
  {
    "type": "String",
    "value": "'fr'",
    "start": 317,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 330,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "dates",
    "start": 336,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 342,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 356,
    "end": 357
  },
  {
    "type": "String",
    "value": "'fr'",
    "start": 357,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "timeZone",
    "start": 365,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 373,
    "end": 374
  },
  {
    "type": "String",
    "value": "'UTC'",
    "start": 375,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 392,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "mixed",
    "start": 398,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 406,
    "end": 407
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 408,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 410,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 414,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 420,
    "end": 421
  },
  {
    "type": "Numeric",
    "value": "59782",
    "start": 422,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 429,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 433,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 442,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "mixed",
    "start": 448,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 454,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "str",
    "start": 478,
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
    "value": "mixed",
    "start": 484,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 490,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505
  },
  {
    "type": "String",
    "value": "'fr'",
    "start": 505,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 518,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "mixed",
    "start": 524,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 530,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 544,
    "end": 545
  },
  {
    "type": "String",
    "value": "'de'",
    "start": 545,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 553,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 558,
    "end": 559
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 560,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 572,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 580,
    "end": 581
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 582,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 598,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "mixed",
    "start": 605,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 611,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 614,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 628,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 637,
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
    "value": ")",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 644,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 658,
    "end": 659
  },
  {
    "type": "String",
    "value": "'de'",
    "start": 659,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 667,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 675,
    "end": 676
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 677,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 684,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 689,
    "end": 690
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 691,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "timeZone",
    "start": 703,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 711,
    "end": 712
  },
  {
    "type": "String",
    "value": "'UTC'",
    "start": 713,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 730,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "int8Array",
    "start": 736,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 746,
    "end": 747
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 748,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "Int8Array",
    "start": 752,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 761,
    "end": 762
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 766,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "int8Array",
    "start": 772,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 782,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "str",
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
    "type": "Identifier",
    "value": "int8Array",
    "start": 812,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 822,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 836,
    "end": 837
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 837,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 853,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "int8Array",
    "start": 859,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 869,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 883,
    "end": 884
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 884,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 895,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 900,
    "end": 901
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 902,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 914,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 922,
    "end": 923
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 924,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "const",
    "start": 941,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "uint8Array",
    "start": 947,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 958,
    "end": 959
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 960,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "Uint8Array",
    "start": 964,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 974,
    "end": 975
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 979,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "uint8Array",
    "start": 985,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 996,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1020,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "uint8Array",
    "start": 1026,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1037,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 1052,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1068,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "uint8Array",
    "start": 1074,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1085,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 1100,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 1111,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 1118,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 1130,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 1140,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1157,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "uint8ClampedArray",
    "start": 1163,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1183,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "Uint8ClampedArray",
    "start": 1187,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1209,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "uint8ClampedArray",
    "start": 1215,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1233,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1257,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "uint8ClampedArray",
    "start": 1263,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1281,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 1296,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1312,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "uint8ClampedArray",
    "start": 1318,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1336,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 1351,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 1362,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 1369,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 1381,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 1391,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1408,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "int16Array",
    "start": 1414,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1427,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "Int16Array",
    "start": 1431,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1446,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "int16Array",
    "start": 1452,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1463,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1487,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "int16Array",
    "start": 1493,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1504,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 1519,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1535,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "int16Array",
    "start": 1541,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1552,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 1567,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 1578,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 1585,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 1597,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 1607,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1624,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "uint16Array",
    "start": 1630,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1644,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "Uint16Array",
    "start": 1648,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1664,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Identifier",
    "value": "uint16Array",
    "start": 1670,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1682,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1706,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "uint16Array",
    "start": 1712,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1724,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 1739,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1755,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Identifier",
    "value": "uint16Array",
    "start": 1761,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1773,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 1788,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 1799,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 1806,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 1818,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 1828,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1845,
    "end": 1850
  },
  {
    "type": "Identifier",
    "value": "int32Array",
    "start": 1851,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1864,
    "end": 1867
  },
  {
    "type": "Identifier",
    "value": "Int32Array",
    "start": 1868,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1879,
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
    "value": "str",
    "start": 1883,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Identifier",
    "value": "int32Array",
    "start": 1889,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1900,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1924,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Identifier",
    "value": "int32Array",
    "start": 1930,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1941,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 1956,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1972,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Identifier",
    "value": "int32Array",
    "start": 1978,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1989,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 2004,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 2015,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 2022,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 2034,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 2044,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2061,
    "end": 2066
  },
  {
    "type": "Identifier",
    "value": "uint32Array",
    "start": 2067,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2081,
    "end": 2084
  },
  {
    "type": "Identifier",
    "value": "Uint32Array",
    "start": 2085,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2101,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Identifier",
    "value": "uint32Array",
    "start": 2107,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2119,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2143,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Identifier",
    "value": "uint32Array",
    "start": 2149,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2161,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 2176,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2192,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Identifier",
    "value": "uint32Array",
    "start": 2198,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2210,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 2225,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 2236,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 2243,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 2255,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 2265,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2282,
    "end": 2287
  },
  {
    "type": "Identifier",
    "value": "float32Array",
    "start": 2288,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2303,
    "end": 2306
  },
  {
    "type": "Identifier",
    "value": "Float32Array",
    "start": 2307,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2324,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Identifier",
    "value": "float32Array",
    "start": 2330,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2343,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2367,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Identifier",
    "value": "float32Array",
    "start": 2373,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2386,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 2401,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2417,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Identifier",
    "value": "float32Array",
    "start": 2423,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2436,
    "end": 2450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 2451,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2458,
    "end": 2459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 2462,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 2469,
    "end": 2479
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 2481,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 2491,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2508,
    "end": 2513
  },
  {
    "type": "Identifier",
    "value": "float64Array",
    "start": 2514,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2529,
    "end": 2532
  },
  {
    "type": "Identifier",
    "value": "Float64Array",
    "start": 2533,
    "end": 2545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2547,
    "end": 2548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2550,
    "end": 2553
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Identifier",
    "value": "float64Array",
    "start": 2556,
    "end": 2568
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2569,
    "end": 2583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2593,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2597,
    "end": 2598
  },
  {
    "type": "Identifier",
    "value": "float64Array",
    "start": 2599,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2612,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 2627,
    "end": 2634
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2634,
    "end": 2635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2635,
    "end": 2636
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2643,
    "end": 2646
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Identifier",
    "value": "float64Array",
    "start": 2649,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2662,
    "end": 2676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2676,
    "end": 2677
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 2677,
    "end": 2684
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2686,
    "end": 2687
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 2688,
    "end": 2693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 2695,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 2707,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 2717,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2725,
    "end": 2726
  }
]
```
