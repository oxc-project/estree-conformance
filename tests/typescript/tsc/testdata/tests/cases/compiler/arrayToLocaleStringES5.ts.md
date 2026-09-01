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
          "start": 128,
          "end": 131
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
              "start": 134,
              "end": 137
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 152
            },
            "optional": false,
            "computed": false,
            "start": 134,
            "end": 152
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 153,
              "end": 160
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
                    "start": 164,
                    "end": 169
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 171,
                    "end": 181
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 164,
                  "end": 181
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
                    "start": 183,
                    "end": 191
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 193,
                    "end": 198
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 183,
                  "end": 198
                }
              ],
              "start": 162,
              "end": 200
            }
          ],
          "optional": false,
          "start": 134,
          "end": 201
        },
        "start": 128,
        "end": 201
      },
      "directive": null,
      "start": 128,
      "end": 202
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
                      "start": 245,
                      "end": 249
                    },
                    "typeArguments": null,
                    "start": 245,
                    "end": 249
                  },
                  "start": 245,
                  "end": 251
                },
                "start": 236,
                "end": 251
              },
              "start": 234,
              "end": 251
            },
            "start": 229,
            "end": 251
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
                  "start": 259,
                  "end": 263
                },
                "typeArguments": null,
                "arguments": [],
                "start": 255,
                "end": 265
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 271,
                  "end": 275
                },
                "typeArguments": null,
                "arguments": [],
                "start": 267,
                "end": 277
              }
            ],
            "start": 254,
            "end": 278
          },
          "definite": false,
          "start": 229,
          "end": 278
        }
      ],
      "declare": false,
      "start": 223,
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
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 280,
          "end": 283
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
              "start": 286,
              "end": 291
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 292,
              "end": 306
            },
            "optional": false,
            "computed": false,
            "start": 286,
            "end": 306
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 286,
          "end": 308
        },
        "start": 280,
        "end": 308
      },
      "directive": null,
      "start": 280,
      "end": 309
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
          "start": 316,
          "end": 319
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
              "start": 322,
              "end": 327
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 342
            },
            "optional": false,
            "computed": false,
            "start": 322,
            "end": 342
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "fr",
              "raw": "'fr'",
              "start": 343,
              "end": 347
            }
          ],
          "optional": false,
          "start": 322,
          "end": 348
        },
        "start": 316,
        "end": 348
      },
      "directive": null,
      "start": 316,
      "end": 349
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
          "start": 369,
          "end": 372
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
              "start": 375,
              "end": 380
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 381,
              "end": 395
            },
            "optional": false,
            "computed": false,
            "start": 375,
            "end": 395
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "fr",
              "raw": "'fr'",
              "start": 396,
              "end": 400
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
                    "start": 404,
                    "end": 412
                  },
                  "value": {
                    "type": "Literal",
                    "value": "UTC",
                    "raw": "'UTC'",
                    "start": 414,
                    "end": 419
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 404,
                  "end": 419
                }
              ],
              "start": 402,
              "end": 421
            }
          ],
          "optional": false,
          "start": 375,
          "end": 422
        },
        "start": 369,
        "end": 422
      },
      "directive": null,
      "start": 369,
      "end": 423
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
            "start": 450,
            "end": 459
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 466,
              "end": 475
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 476,
                "end": 477
              }
            ],
            "start": 462,
            "end": 478
          },
          "definite": false,
          "start": 450,
          "end": 478
        }
      ],
      "declare": false,
      "start": 444,
      "end": 479
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
          "start": 480,
          "end": 483
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
              "start": 486,
              "end": 495
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 496,
              "end": 510
            },
            "optional": false,
            "computed": false,
            "start": 486,
            "end": 510
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 486,
          "end": 512
        },
        "start": 480,
        "end": 512
      },
      "directive": null,
      "start": 480,
      "end": 513
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
          "start": 520,
          "end": 523
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
              "start": 526,
              "end": 535
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 536,
              "end": 550
            },
            "optional": false,
            "computed": false,
            "start": 526,
            "end": 550
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 551,
              "end": 558
            }
          ],
          "optional": false,
          "start": 526,
          "end": 559
        },
        "start": 520,
        "end": 559
      },
      "directive": null,
      "start": 520,
      "end": 560
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
          "start": 580,
          "end": 583
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
              "start": 586,
              "end": 595
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 596,
              "end": 610
            },
            "optional": false,
            "computed": false,
            "start": 586,
            "end": 610
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 611,
              "end": 618
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
                    "start": 622,
                    "end": 627
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 629,
                    "end": 639
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 622,
                  "end": 639
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
                    "start": 641,
                    "end": 649
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 651,
                    "end": 656
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 641,
                  "end": 656
                }
              ],
              "start": 620,
              "end": 658
            }
          ],
          "optional": false,
          "start": 586,
          "end": 659
        },
        "start": 580,
        "end": 659
      },
      "directive": null,
      "start": 580,
      "end": 660
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
            "start": 687,
            "end": 697
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 704,
              "end": 714
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 715,
                "end": 716
              }
            ],
            "start": 700,
            "end": 717
          },
          "definite": false,
          "start": 687,
          "end": 717
        }
      ],
      "declare": false,
      "start": 681,
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
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 719,
          "end": 722
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
              "start": 725,
              "end": 735
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 736,
              "end": 750
            },
            "optional": false,
            "computed": false,
            "start": 725,
            "end": 750
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 725,
          "end": 752
        },
        "start": 719,
        "end": 752
      },
      "directive": null,
      "start": 719,
      "end": 753
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
          "start": 760,
          "end": 763
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
              "start": 766,
              "end": 776
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 777,
              "end": 791
            },
            "optional": false,
            "computed": false,
            "start": 766,
            "end": 791
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 792,
              "end": 799
            }
          ],
          "optional": false,
          "start": 766,
          "end": 800
        },
        "start": 760,
        "end": 800
      },
      "directive": null,
      "start": 760,
      "end": 801
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
          "start": 821,
          "end": 824
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
              "start": 827,
              "end": 837
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 838,
              "end": 852
            },
            "optional": false,
            "computed": false,
            "start": 827,
            "end": 852
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 853,
              "end": 860
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
                    "start": 864,
                    "end": 869
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 871,
                    "end": 881
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 864,
                  "end": 881
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
                    "start": 883,
                    "end": 891
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 893,
                    "end": 898
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 883,
                  "end": 898
                }
              ],
              "start": 862,
              "end": 900
            }
          ],
          "optional": false,
          "start": 827,
          "end": 901
        },
        "start": 821,
        "end": 901
      },
      "directive": null,
      "start": 821,
      "end": 902
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
            "start": 929,
            "end": 946
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 953,
              "end": 970
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 971,
                "end": 972
              }
            ],
            "start": 949,
            "end": 973
          },
          "definite": false,
          "start": 929,
          "end": 973
        }
      ],
      "declare": false,
      "start": 923,
      "end": 974
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
          "start": 975,
          "end": 978
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
              "start": 981,
              "end": 998
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 999,
              "end": 1013
            },
            "optional": false,
            "computed": false,
            "start": 981,
            "end": 1013
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 981,
          "end": 1015
        },
        "start": 975,
        "end": 1015
      },
      "directive": null,
      "start": 975,
      "end": 1016
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
          "start": 1023,
          "end": 1026
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
              "start": 1029,
              "end": 1046
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1047,
              "end": 1061
            },
            "optional": false,
            "computed": false,
            "start": 1029,
            "end": 1061
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1062,
              "end": 1069
            }
          ],
          "optional": false,
          "start": 1029,
          "end": 1070
        },
        "start": 1023,
        "end": 1070
      },
      "directive": null,
      "start": 1023,
      "end": 1071
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
          "start": 1091,
          "end": 1094
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
              "start": 1097,
              "end": 1114
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1115,
              "end": 1129
            },
            "optional": false,
            "computed": false,
            "start": 1097,
            "end": 1129
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1130,
              "end": 1137
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
                    "start": 1141,
                    "end": 1146
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 1148,
                    "end": 1158
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1141,
                  "end": 1158
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
                    "start": 1160,
                    "end": 1168
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 1170,
                    "end": 1175
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1160,
                  "end": 1175
                }
              ],
              "start": 1139,
              "end": 1177
            }
          ],
          "optional": false,
          "start": 1097,
          "end": 1178
        },
        "start": 1091,
        "end": 1178
      },
      "directive": null,
      "start": 1091,
      "end": 1179
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
            "start": 1206,
            "end": 1216
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1223,
              "end": 1233
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1234,
                "end": 1235
              }
            ],
            "start": 1219,
            "end": 1236
          },
          "definite": false,
          "start": 1206,
          "end": 1236
        }
      ],
      "declare": false,
      "start": 1200,
      "end": 1237
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
          "start": 1238,
          "end": 1241
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
              "start": 1244,
              "end": 1254
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1255,
              "end": 1269
            },
            "optional": false,
            "computed": false,
            "start": 1244,
            "end": 1269
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1244,
          "end": 1271
        },
        "start": 1238,
        "end": 1271
      },
      "directive": null,
      "start": 1238,
      "end": 1272
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
          "start": 1279,
          "end": 1282
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
              "start": 1285,
              "end": 1295
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1296,
              "end": 1310
            },
            "optional": false,
            "computed": false,
            "start": 1285,
            "end": 1310
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1311,
              "end": 1318
            }
          ],
          "optional": false,
          "start": 1285,
          "end": 1319
        },
        "start": 1279,
        "end": 1319
      },
      "directive": null,
      "start": 1279,
      "end": 1320
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
          "start": 1340,
          "end": 1343
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
              "start": 1346,
              "end": 1356
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1357,
              "end": 1371
            },
            "optional": false,
            "computed": false,
            "start": 1346,
            "end": 1371
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1372,
              "end": 1379
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
                    "start": 1383,
                    "end": 1388
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 1390,
                    "end": 1400
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1383,
                  "end": 1400
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
                    "start": 1402,
                    "end": 1410
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 1412,
                    "end": 1417
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1402,
                  "end": 1417
                }
              ],
              "start": 1381,
              "end": 1419
            }
          ],
          "optional": false,
          "start": 1346,
          "end": 1420
        },
        "start": 1340,
        "end": 1420
      },
      "directive": null,
      "start": 1340,
      "end": 1421
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
            "start": 1448,
            "end": 1459
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1466,
              "end": 1477
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1478,
                "end": 1479
              }
            ],
            "start": 1462,
            "end": 1480
          },
          "definite": false,
          "start": 1448,
          "end": 1480
        }
      ],
      "declare": false,
      "start": 1442,
      "end": 1481
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
          "start": 1482,
          "end": 1485
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
              "start": 1488,
              "end": 1499
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1500,
              "end": 1514
            },
            "optional": false,
            "computed": false,
            "start": 1488,
            "end": 1514
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1488,
          "end": 1516
        },
        "start": 1482,
        "end": 1516
      },
      "directive": null,
      "start": 1482,
      "end": 1517
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
          "start": 1524,
          "end": 1527
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
              "start": 1530,
              "end": 1541
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1542,
              "end": 1556
            },
            "optional": false,
            "computed": false,
            "start": 1530,
            "end": 1556
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1557,
              "end": 1564
            }
          ],
          "optional": false,
          "start": 1530,
          "end": 1565
        },
        "start": 1524,
        "end": 1565
      },
      "directive": null,
      "start": 1524,
      "end": 1566
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
          "start": 1586,
          "end": 1589
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
              "start": 1592,
              "end": 1603
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1604,
              "end": 1618
            },
            "optional": false,
            "computed": false,
            "start": 1592,
            "end": 1618
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1619,
              "end": 1626
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
                    "start": 1630,
                    "end": 1635
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 1637,
                    "end": 1647
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1630,
                  "end": 1647
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
                    "start": 1649,
                    "end": 1657
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 1659,
                    "end": 1664
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1649,
                  "end": 1664
                }
              ],
              "start": 1628,
              "end": 1666
            }
          ],
          "optional": false,
          "start": 1592,
          "end": 1667
        },
        "start": 1586,
        "end": 1667
      },
      "directive": null,
      "start": 1586,
      "end": 1668
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
            "start": 1695,
            "end": 1705
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1712,
              "end": 1722
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1723,
                "end": 1724
              }
            ],
            "start": 1708,
            "end": 1725
          },
          "definite": false,
          "start": 1695,
          "end": 1725
        }
      ],
      "declare": false,
      "start": 1689,
      "end": 1726
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
          "start": 1727,
          "end": 1730
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
              "start": 1733,
              "end": 1743
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1744,
              "end": 1758
            },
            "optional": false,
            "computed": false,
            "start": 1733,
            "end": 1758
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1733,
          "end": 1760
        },
        "start": 1727,
        "end": 1760
      },
      "directive": null,
      "start": 1727,
      "end": 1761
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
          "start": 1768,
          "end": 1771
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
              "start": 1774,
              "end": 1784
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1785,
              "end": 1799
            },
            "optional": false,
            "computed": false,
            "start": 1774,
            "end": 1799
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1800,
              "end": 1807
            }
          ],
          "optional": false,
          "start": 1774,
          "end": 1808
        },
        "start": 1768,
        "end": 1808
      },
      "directive": null,
      "start": 1768,
      "end": 1809
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
          "start": 1829,
          "end": 1832
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
              "start": 1835,
              "end": 1845
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1846,
              "end": 1860
            },
            "optional": false,
            "computed": false,
            "start": 1835,
            "end": 1860
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1861,
              "end": 1868
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
                    "start": 1872,
                    "end": 1877
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 1879,
                    "end": 1889
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1872,
                  "end": 1889
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
                    "start": 1891,
                    "end": 1899
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 1901,
                    "end": 1906
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1891,
                  "end": 1906
                }
              ],
              "start": 1870,
              "end": 1908
            }
          ],
          "optional": false,
          "start": 1835,
          "end": 1909
        },
        "start": 1829,
        "end": 1909
      },
      "directive": null,
      "start": 1829,
      "end": 1910
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
            "start": 1937,
            "end": 1948
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1955,
              "end": 1966
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1967,
                "end": 1968
              }
            ],
            "start": 1951,
            "end": 1969
          },
          "definite": false,
          "start": 1937,
          "end": 1969
        }
      ],
      "declare": false,
      "start": 1931,
      "end": 1970
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
          "start": 1971,
          "end": 1974
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
              "start": 1977,
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
            "start": 1977,
            "end": 2003
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1977,
          "end": 2005
        },
        "start": 1971,
        "end": 2005
      },
      "directive": null,
      "start": 1971,
      "end": 2006
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
          "start": 2013,
          "end": 2016
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
              "start": 2019,
              "end": 2030
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2031,
              "end": 2045
            },
            "optional": false,
            "computed": false,
            "start": 2019,
            "end": 2045
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2046,
              "end": 2053
            }
          ],
          "optional": false,
          "start": 2019,
          "end": 2054
        },
        "start": 2013,
        "end": 2054
      },
      "directive": null,
      "start": 2013,
      "end": 2055
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
          "start": 2075,
          "end": 2078
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
              "start": 2081,
              "end": 2092
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2093,
              "end": 2107
            },
            "optional": false,
            "computed": false,
            "start": 2081,
            "end": 2107
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2108,
              "end": 2115
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
                    "start": 2119,
                    "end": 2124
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 2126,
                    "end": 2136
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2119,
                  "end": 2136
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
                    "start": 2138,
                    "end": 2146
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 2148,
                    "end": 2153
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2138,
                  "end": 2153
                }
              ],
              "start": 2117,
              "end": 2155
            }
          ],
          "optional": false,
          "start": 2081,
          "end": 2156
        },
        "start": 2075,
        "end": 2156
      },
      "directive": null,
      "start": 2075,
      "end": 2157
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
            "start": 2184,
            "end": 2196
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2203,
              "end": 2215
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 2216,
                "end": 2217
              }
            ],
            "start": 2199,
            "end": 2218
          },
          "definite": false,
          "start": 2184,
          "end": 2218
        }
      ],
      "declare": false,
      "start": 2178,
      "end": 2219
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
          "start": 2220,
          "end": 2223
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
              "start": 2226,
              "end": 2238
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2239,
              "end": 2253
            },
            "optional": false,
            "computed": false,
            "start": 2226,
            "end": 2253
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 2226,
          "end": 2255
        },
        "start": 2220,
        "end": 2255
      },
      "directive": null,
      "start": 2220,
      "end": 2256
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
          "start": 2263,
          "end": 2266
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
              "start": 2269,
              "end": 2281
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2282,
              "end": 2296
            },
            "optional": false,
            "computed": false,
            "start": 2269,
            "end": 2296
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2297,
              "end": 2304
            }
          ],
          "optional": false,
          "start": 2269,
          "end": 2305
        },
        "start": 2263,
        "end": 2305
      },
      "directive": null,
      "start": 2263,
      "end": 2306
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
          "start": 2326,
          "end": 2329
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
              "start": 2332,
              "end": 2344
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2345,
              "end": 2359
            },
            "optional": false,
            "computed": false,
            "start": 2332,
            "end": 2359
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2360,
              "end": 2367
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
                    "start": 2371,
                    "end": 2376
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 2378,
                    "end": 2388
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2371,
                  "end": 2388
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
                    "start": 2390,
                    "end": 2398
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 2400,
                    "end": 2405
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2390,
                  "end": 2405
                }
              ],
              "start": 2369,
              "end": 2407
            }
          ],
          "optional": false,
          "start": 2332,
          "end": 2408
        },
        "start": 2326,
        "end": 2408
      },
      "directive": null,
      "start": 2326,
      "end": 2409
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
            "start": 2436,
            "end": 2448
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2455,
              "end": 2467
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 2468,
                "end": 2469
              }
            ],
            "start": 2451,
            "end": 2470
          },
          "definite": false,
          "start": 2436,
          "end": 2470
        }
      ],
      "declare": false,
      "start": 2430,
      "end": 2471
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
          "start": 2472,
          "end": 2475
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
              "start": 2478,
              "end": 2490
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2491,
              "end": 2505
            },
            "optional": false,
            "computed": false,
            "start": 2478,
            "end": 2505
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 2478,
          "end": 2507
        },
        "start": 2472,
        "end": 2507
      },
      "directive": null,
      "start": 2472,
      "end": 2508
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
          "start": 2515,
          "end": 2518
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
              "start": 2521,
              "end": 2533
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2534,
              "end": 2548
            },
            "optional": false,
            "computed": false,
            "start": 2521,
            "end": 2548
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2549,
              "end": 2556
            }
          ],
          "optional": false,
          "start": 2521,
          "end": 2557
        },
        "start": 2515,
        "end": 2557
      },
      "directive": null,
      "start": 2515,
      "end": 2558
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
          "start": 2578,
          "end": 2581
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
              "start": 2584,
              "end": 2596
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2597,
              "end": 2611
            },
            "optional": false,
            "computed": false,
            "start": 2584,
            "end": 2611
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2612,
              "end": 2619
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
                    "start": 2623,
                    "end": 2628
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 2630,
                    "end": 2640
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2623,
                  "end": 2640
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
                    "start": 2642,
                    "end": 2650
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 2652,
                    "end": 2657
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2642,
                  "end": 2657
                }
              ],
              "start": 2621,
              "end": 2659
            }
          ],
          "optional": false,
          "start": 2584,
          "end": 2660
        },
        "start": 2578,
        "end": 2660
      },
      "directive": null,
      "start": 2578,
      "end": 2661
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2680
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
    "start": 128,
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
    "value": "arr",
    "start": 134,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 138,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 153,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 164,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 171,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 183,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 193,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 223,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "dates",
    "start": 229,
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
    "value": "readonly",
    "start": 236,
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
    "value": "[",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 254,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 255,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 259,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 265,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 267,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 271,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "str",
    "start": 280,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "dates",
    "start": 286,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 292,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 316,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "dates",
    "start": 322,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 328,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 342,
    "end": 343
  },
  {
    "type": "String",
    "value": "'fr'",
    "start": 343,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 369,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "dates",
    "start": 375,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 381,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 395,
    "end": 396
  },
  {
    "type": "String",
    "value": "'fr'",
    "start": 396,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "timeZone",
    "start": 404,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 412,
    "end": 413
  },
  {
    "type": "String",
    "value": "'UTC'",
    "start": 414,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 422,
    "end": 423
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 444,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "int8Array",
    "start": 450,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 462,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "Int8Array",
    "start": 466,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 475,
    "end": 476
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 480,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "int8Array",
    "start": 486,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 496,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 520,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "int8Array",
    "start": 526,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 536,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 550,
    "end": 551
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 551,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 580,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "int8Array",
    "start": 586,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 596,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 610,
    "end": 611
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 611,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 622,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 627,
    "end": 628
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 629,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 641,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 649,
    "end": 650
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 651,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 659,
    "end": 660
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 681,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "uint8Array",
    "start": 687,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 698,
    "end": 699
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 700,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "Uint8Array",
    "start": 704,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 714,
    "end": 715
  },
  {
    "type": "Numeric",
    "value": "3",
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
    "value": "str",
    "start": 719,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "uint8Array",
    "start": 725,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 736,
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
    "value": ")",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 760,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "uint8Array",
    "start": 766,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 777,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 791,
    "end": 792
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 792,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 821,
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
    "value": "uint8Array",
    "start": 827,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 838,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 852,
    "end": 853
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 853,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 864,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 869,
    "end": 870
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 871,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 883,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 891,
    "end": 892
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 893,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 901,
    "end": 902
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 923,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "uint8ClampedArray",
    "start": 929,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 947,
    "end": 948
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 949,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "Uint8ClampedArray",
    "start": 953,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 970,
    "end": 971
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 975,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "uint8ClampedArray",
    "start": 981,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 999,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1023,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "uint8ClampedArray",
    "start": 1029,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1047,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 1062,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1091,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "uint8ClampedArray",
    "start": 1097,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1115,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 1130,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 1141,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 1148,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 1160,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 1170,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1176,
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
    "type": "Keyword",
    "value": "const",
    "start": 1200,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "int16Array",
    "start": 1206,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1219,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "Int16Array",
    "start": 1223,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1238,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "int16Array",
    "start": 1244,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1255,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1279,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "int16Array",
    "start": 1285,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1296,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 1311,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1340,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "int16Array",
    "start": 1346,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1357,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 1372,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 1383,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 1390,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 1402,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 1412,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1442,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "uint16Array",
    "start": 1448,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1462,
    "end": 1465
  },
  {
    "type": "Identifier",
    "value": "Uint16Array",
    "start": 1466,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1478,
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
    "value": ";",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1482,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "uint16Array",
    "start": 1488,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1500,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1524,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "uint16Array",
    "start": 1530,
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
    "value": "toLocaleString",
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
    "type": "String",
    "value": "'en-US'",
    "start": 1557,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1586,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Identifier",
    "value": "uint16Array",
    "start": 1592,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1604,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 1619,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 1630,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 1637,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 1649,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 1659,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1689,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "int32Array",
    "start": 1695,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1708,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "Int32Array",
    "start": 1712,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1727,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Identifier",
    "value": "int32Array",
    "start": 1733,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1744,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1768,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "int32Array",
    "start": 1774,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1785,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 1800,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1829,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "int32Array",
    "start": 1835,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1846,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 1861,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 1872,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 1879,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 1891,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 1901,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1931,
    "end": 1936
  },
  {
    "type": "Identifier",
    "value": "uint32Array",
    "start": 1937,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1951,
    "end": 1954
  },
  {
    "type": "Identifier",
    "value": "Uint32Array",
    "start": 1955,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1971,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "uint32Array",
    "start": 1977,
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
    "type": "Punctuator",
    "value": ")",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2013,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Identifier",
    "value": "uint32Array",
    "start": 2019,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2031,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 2046,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2075,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Identifier",
    "value": "uint32Array",
    "start": 2081,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2093,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 2108,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 2119,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 2126,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 2138,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 2148,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2178,
    "end": 2183
  },
  {
    "type": "Identifier",
    "value": "float32Array",
    "start": 2184,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2199,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "Float32Array",
    "start": 2203,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2220,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Identifier",
    "value": "float32Array",
    "start": 2226,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2239,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2263,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Identifier",
    "value": "float32Array",
    "start": 2269,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2282,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 2297,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2326,
    "end": 2329
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Identifier",
    "value": "float32Array",
    "start": 2332,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2345,
    "end": 2359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 2360,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 2371,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 2378,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 2390,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 2400,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2430,
    "end": 2435
  },
  {
    "type": "Identifier",
    "value": "float64Array",
    "start": 2436,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2451,
    "end": 2454
  },
  {
    "type": "Identifier",
    "value": "Float64Array",
    "start": 2455,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2472,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2476,
    "end": 2477
  },
  {
    "type": "Identifier",
    "value": "float64Array",
    "start": 2478,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2491,
    "end": 2505
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2505,
    "end": 2506
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2507,
    "end": 2508
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2515,
    "end": 2518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2519,
    "end": 2520
  },
  {
    "type": "Identifier",
    "value": "float64Array",
    "start": 2521,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2534,
    "end": 2548
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 2549,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2578,
    "end": 2581
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2582,
    "end": 2583
  },
  {
    "type": "Identifier",
    "value": "float64Array",
    "start": 2584,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2597,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 2612,
    "end": 2619
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2619,
    "end": 2620
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2621,
    "end": 2622
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 2623,
    "end": 2628
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2628,
    "end": 2629
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 2630,
    "end": 2640
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 2642,
    "end": 2650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 2652,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2658,
    "end": 2659
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2660,
    "end": 2661
  }
]
```
