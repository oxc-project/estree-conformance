__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "simple_primitive",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 32
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 43,
                      "end": 49
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 52,
                      "end": 59
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 62,
                      "end": 66
                    }
                  ],
                  "start": 43,
                  "end": 66
                },
                "start": 41,
                "end": 66
              },
              "start": 38,
              "end": 66
            },
            "right": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 69,
              "end": 70
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 70
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 79,
                "end": 85
              },
              "start": 77,
              "end": 85
            },
            "start": 76,
            "end": 85
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 89,
          "end": 91
        },
        "expression": false,
        "start": 7,
        "end": 91
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 91
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "simple_primitive_with_explicit_undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 109,
          "end": 149
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 160,
                      "end": 166
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 169,
                      "end": 176
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 179,
                      "end": 183
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 186,
                      "end": 195
                    }
                  ],
                  "start": 160,
                  "end": 195
                },
                "start": 158,
                "end": 195
              },
              "start": 155,
              "end": 195
            },
            "right": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 198,
              "end": 199
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 199
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 208,
                "end": 214
              },
              "start": 206,
              "end": 214
            },
            "start": 205,
            "end": 214
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 218,
          "end": 220
        },
        "expression": false,
        "start": 100,
        "end": 220
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 93,
      "end": 220
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "simple_nonPrimitive",
          "optional": false,
          "typeAnnotation": null,
          "start": 238,
          "end": 257
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 268,
                      "end": 274
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RegExp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 277,
                        "end": 283
                      },
                      "typeArguments": null,
                      "start": 277,
                      "end": 283
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 286,
                      "end": 290
                    }
                  ],
                  "start": 268,
                  "end": 290
                },
                "start": 266,
                "end": 290
              },
              "start": 263,
              "end": 290
            },
            "right": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 293,
              "end": 294
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 263,
            "end": 294
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 303,
                "end": 309
              },
              "start": 301,
              "end": 309
            },
            "start": 300,
            "end": 309
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 313,
          "end": 315
        },
        "expression": false,
        "start": 229,
        "end": 315
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 222,
      "end": 315
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "simple_nonPrimitive_with_explicit_undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 333,
          "end": 376
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 387,
                      "end": 393
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RegExp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 396,
                        "end": 402
                      },
                      "typeArguments": null,
                      "start": 396,
                      "end": 402
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 405,
                      "end": 409
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 412,
                      "end": 421
                    }
                  ],
                  "start": 387,
                  "end": 421
                },
                "start": 385,
                "end": 421
              },
              "start": 382,
              "end": 421
            },
            "right": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 424,
              "end": 425
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 382,
            "end": 425
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 434,
                "end": 440
              },
              "start": 432,
              "end": 440
            },
            "start": 431,
            "end": 440
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 444,
          "end": 446
        },
        "expression": false,
        "start": 324,
        "end": 446
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 317,
      "end": 446
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "curry",
          "optional": false,
          "typeAnnotation": null,
          "start": 464,
          "end": 469
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 480,
                      "end": 486
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RegExp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 489,
                        "end": 495
                      },
                      "typeArguments": null,
                      "start": 489,
                      "end": 495
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 498,
                      "end": 502
                    }
                  ],
                  "start": 480,
                  "end": 502
                },
                "start": 478,
                "end": 502
              },
              "start": 475,
              "end": 502
            },
            "right": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 505,
              "end": 506
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 475,
            "end": 506
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 515,
                "end": 521
              },
              "start": 513,
              "end": 521
            },
            "start": 512,
            "end": 521
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 539,
                      "end": 542
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 545,
                      "end": 548
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 539,
                    "end": 548
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 553,
                        "end": 559
                      },
                      "start": 551,
                      "end": 559
                    },
                    "start": 550,
                    "end": 559
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "buzz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 565,
                        "end": 569
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 572,
                        "end": 575
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 565,
                      "end": 575
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 580,
                          "end": 586
                        },
                        "start": 578,
                        "end": 586
                      },
                      "start": 577,
                      "end": 586
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 591,
                    "end": 593
                  },
                  "id": null,
                  "generator": false,
                  "start": 564,
                  "end": 593
                },
                "id": null,
                "generator": false,
                "start": 538,
                "end": 593
              },
              "start": 531,
              "end": 593
            }
          ],
          "start": 525,
          "end": 595
        },
        "expression": false,
        "start": 455,
        "end": 595
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 448,
      "end": 595
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "curry_with_explicit_undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 613,
          "end": 642
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 653,
                      "end": 659
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RegExp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 662,
                        "end": 668
                      },
                      "typeArguments": null,
                      "start": 662,
                      "end": 668
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 671,
                      "end": 675
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 678,
                      "end": 687
                    }
                  ],
                  "start": 653,
                  "end": 687
                },
                "start": 651,
                "end": 687
              },
              "start": 648,
              "end": 687
            },
            "right": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 690,
              "end": 691
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 648,
            "end": 691
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 700,
                "end": 706
              },
              "start": 698,
              "end": 706
            },
            "start": 697,
            "end": 706
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 724,
                      "end": 727
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 730,
                      "end": 733
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 724,
                    "end": 733
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 738,
                        "end": 744
                      },
                      "start": 736,
                      "end": 744
                    },
                    "start": 735,
                    "end": 744
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "buzz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 750,
                        "end": 754
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 757,
                        "end": 760
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 750,
                      "end": 760
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 765,
                          "end": 771
                        },
                        "start": 763,
                        "end": 771
                      },
                      "start": 762,
                      "end": 771
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 776,
                    "end": 778
                  },
                  "id": null,
                  "generator": false,
                  "start": 749,
                  "end": 778
                },
                "id": null,
                "generator": false,
                "start": 723,
                "end": 778
              },
              "start": 716,
              "end": 778
            }
          ],
          "start": 710,
          "end": 780
        },
        "expression": false,
        "start": 604,
        "end": 780
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 597,
      "end": 780
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 780
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "simple_primitive",
    "start": 16,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 38,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 52,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 60,
    "end": 61
  },
  {
    "type": "Null",
    "value": "null",
    "start": 62,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 93,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 100,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "simple_primitive_with_explicit_undefined",
    "start": 109,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 155,
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
    "value": "number",
    "start": 160,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 169,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 177,
    "end": 178
  },
  {
    "type": "Null",
    "value": "null",
    "start": 179,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 186,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 208,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 222,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 229,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "simple_nonPrimitive",
    "start": 238,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 263,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 268,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 277,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 284,
    "end": 285
  },
  {
    "type": "Null",
    "value": "null",
    "start": 286,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 291,
    "end": 292
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 303,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 317,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 324,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "simple_nonPrimitive_with_explicit_undefined",
    "start": 333,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 382,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 387,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 396,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 403,
    "end": 404
  },
  {
    "type": "Null",
    "value": "null",
    "start": 405,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 412,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 422,
    "end": 423
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 434,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 448,
    "end": 454
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 455,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "curry",
    "start": 464,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 475,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 480,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 489,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 496,
    "end": 497
  },
  {
    "type": "Null",
    "value": "null",
    "start": 498,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 503,
    "end": 504
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 515,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 531,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "bar",
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
    "value": "foo",
    "start": 545,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 553,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 561,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "buzz",
    "start": 565,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 572,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 580,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 588,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 594,
    "end": 595
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 597,
    "end": 603
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 604,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "curry_with_explicit_undefined",
    "start": 613,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 648,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 653,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 662,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 669,
    "end": 670
  },
  {
    "type": "Null",
    "value": "null",
    "start": 671,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 678,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 688,
    "end": 689
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 690,
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
    "value": "_",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 700,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 710,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 716,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 724,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 730,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 738,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 746,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "buzz",
    "start": 750,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 757,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "_",
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
    "value": "string",
    "start": 765,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 773,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 779,
    "end": 780
  }
]
```
