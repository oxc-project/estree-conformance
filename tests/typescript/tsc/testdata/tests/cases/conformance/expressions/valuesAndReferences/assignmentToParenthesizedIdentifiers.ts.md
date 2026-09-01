__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 7,
                "end": 13
              },
              "start": 5,
              "end": 13
            },
            "start": 4,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 15,
          "end": 16
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 19,
          "end": 20
        },
        "start": 15,
        "end": 20
      },
      "directive": null,
      "start": 15,
      "end": 21
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 29,
          "end": 30
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 34,
          "end": 35
        },
        "start": 28,
        "end": 35
      },
      "directive": null,
      "start": 28,
      "end": 36
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 43,
          "end": 44
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 47,
          "end": 49
        },
        "start": 43,
        "end": 49
      },
      "directive": null,
      "start": 43,
      "end": 50
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 62
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 66,
          "end": 68
        },
        "start": 60,
        "end": 68
      },
      "directive": null,
      "start": 60,
      "end": 69
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 91
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
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
                        "type": "TSNumberKeyword",
                        "start": 112,
                        "end": 118
                      },
                      "start": 110,
                      "end": 118
                    },
                    "start": 109,
                    "end": 118
                  },
                  "init": null,
                  "definite": false,
                  "start": 109,
                  "end": 118
                }
              ],
              "declare": false,
              "start": 105,
              "end": 119
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 98,
            "end": 119
          }
        ],
        "start": 92,
        "end": 121
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 80,
      "end": 121
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
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 123
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 125
          },
          "optional": false,
          "computed": false,
          "start": 122,
          "end": 125
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 128,
          "end": 129
        },
        "start": 122,
        "end": 129
      },
      "directive": null,
      "start": 122,
      "end": 130
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
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 139
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 141,
            "end": 142
          },
          "optional": false,
          "computed": false,
          "start": 137,
          "end": 142
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 145,
          "end": 146
        },
        "start": 137,
        "end": 146
      },
      "directive": null,
      "start": 137,
      "end": 147
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
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 156
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 158
          },
          "optional": false,
          "computed": false,
          "start": 155,
          "end": 158
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 162,
          "end": 163
        },
        "start": 154,
        "end": 163
      },
      "directive": null,
      "start": 154,
      "end": 164
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
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 171,
            "end": 172
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 173,
            "end": 174
          },
          "optional": false,
          "computed": false,
          "start": 171,
          "end": 174
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 177,
          "end": 179
        },
        "start": 171,
        "end": 179
      },
      "directive": null,
      "start": 171,
      "end": 180
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
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 192
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 195
          },
          "optional": false,
          "computed": false,
          "start": 190,
          "end": 195
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 198,
          "end": 200
        },
        "start": 190,
        "end": 200
      },
      "directive": null,
      "start": 190,
      "end": 201
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
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 212,
            "end": 213
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 214,
            "end": 215
          },
          "optional": false,
          "computed": false,
          "start": 212,
          "end": 215
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 219,
          "end": 221
        },
        "start": 211,
        "end": 221
      },
      "directive": null,
      "start": 211,
      "end": 222
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 233,
          "end": 234
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 240
              },
              "value": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 242,
                "end": 243
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 239,
              "end": 243
            }
          ],
          "start": 237,
          "end": 245
        },
        "start": 233,
        "end": 245
      },
      "directive": null,
      "start": 233,
      "end": 246
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 257,
          "end": 258
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 264,
                "end": 265
              },
              "value": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 267,
                "end": 268
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 264,
              "end": 268
            }
          ],
          "start": 262,
          "end": 270
        },
        "start": 256,
        "end": 270
      },
      "directive": null,
      "start": 256,
      "end": 271
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 292,
        "end": 294
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "M3",
                "optional": false,
                "typeAnnotation": null,
                "start": 318,
                "end": 320
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 345,
                                "end": 351
                              },
                              "start": 343,
                              "end": 351
                            },
                            "start": 342,
                            "end": 351
                          },
                          "init": null,
                          "definite": false,
                          "start": 342,
                          "end": 351
                        }
                      ],
                      "declare": false,
                      "start": 338,
                      "end": 352
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 331,
                    "end": 352
                  }
                ],
                "start": 321,
                "end": 358
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 308,
              "end": 358
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 301,
            "end": 358
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "M3",
                "optional": false,
                "typeAnnotation": null,
                "start": 364,
                "end": 366
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 371,
                      "end": 372
                    },
                    "value": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 374,
                      "end": 375
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 371,
                    "end": 375
                  }
                ],
                "start": 369,
                "end": 377
              },
              "start": 364,
              "end": 377
            },
            "directive": null,
            "start": 364,
            "end": 378
          }
        ],
        "start": 295,
        "end": 389
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 282,
      "end": 389
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
            "name": "M2",
            "optional": false,
            "typeAnnotation": null,
            "start": 390,
            "end": 392
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "M3",
            "optional": false,
            "typeAnnotation": null,
            "start": 393,
            "end": 395
          },
          "optional": false,
          "computed": false,
          "start": 390,
          "end": 395
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 400,
                "end": 401
              },
              "value": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 403,
                "end": 404
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 400,
              "end": 404
            }
          ],
          "start": 398,
          "end": 406
        },
        "start": 390,
        "end": 406
      },
      "directive": null,
      "start": 390,
      "end": 407
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
            "name": "M2",
            "optional": false,
            "typeAnnotation": null,
            "start": 415,
            "end": 417
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "M3",
            "optional": false,
            "typeAnnotation": null,
            "start": 419,
            "end": 421
          },
          "optional": false,
          "computed": false,
          "start": 414,
          "end": 421
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 426,
                "end": 427
              },
              "value": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 429,
                "end": 430
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 426,
              "end": 430
            }
          ],
          "start": 424,
          "end": 432
        },
        "start": 414,
        "end": 432
      },
      "directive": null,
      "start": 414,
      "end": 433
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
            "name": "M2",
            "optional": false,
            "typeAnnotation": null,
            "start": 441,
            "end": 443
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "M3",
            "optional": false,
            "typeAnnotation": null,
            "start": 444,
            "end": 446
          },
          "optional": false,
          "computed": false,
          "start": 441,
          "end": 446
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 452,
                "end": 453
              },
              "value": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 455,
                "end": 456
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 452,
              "end": 456
            }
          ],
          "start": 450,
          "end": 458
        },
        "start": 440,
        "end": 458
      },
      "directive": null,
      "start": 440,
      "end": 459
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
            "name": "M2",
            "optional": false,
            "typeAnnotation": null,
            "start": 467,
            "end": 469
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "M3",
            "optional": false,
            "typeAnnotation": null,
            "start": 470,
            "end": 472
          },
          "optional": false,
          "computed": false,
          "start": 467,
          "end": 472
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 477,
                "end": 478
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 480,
                "end": 482
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 477,
              "end": 482
            }
          ],
          "start": 475,
          "end": 484
        },
        "start": 467,
        "end": 484
      },
      "directive": null,
      "start": 467,
      "end": 485
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
            "name": "M2",
            "optional": false,
            "typeAnnotation": null,
            "start": 496,
            "end": 498
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "M3",
            "optional": false,
            "typeAnnotation": null,
            "start": 500,
            "end": 502
          },
          "optional": false,
          "computed": false,
          "start": 495,
          "end": 502
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 507,
                "end": 508
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 510,
                "end": 512
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 507,
              "end": 512
            }
          ],
          "start": 505,
          "end": 514
        },
        "start": 495,
        "end": 514
      },
      "directive": null,
      "start": 495,
      "end": 515
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
            "name": "M2",
            "optional": false,
            "typeAnnotation": null,
            "start": 526,
            "end": 528
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "M3",
            "optional": false,
            "typeAnnotation": null,
            "start": 529,
            "end": 531
          },
          "optional": false,
          "computed": false,
          "start": 526,
          "end": 531
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 537,
                "end": 538
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 540,
                "end": 542
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 537,
              "end": 542
            }
          ],
          "start": 535,
          "end": 544
        },
        "start": 525,
        "end": 544
      },
      "directive": null,
      "start": 525,
      "end": 545
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 566,
        "end": 568
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 571,
        "end": 574
      },
      "expression": false,
      "start": 557,
      "end": 574
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 575,
          "end": 577
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 586,
            "end": 587
          },
          "id": null,
          "generator": false,
          "start": 580,
          "end": 587
        },
        "start": 575,
        "end": 587
      },
      "directive": null,
      "start": 575,
      "end": 588
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 645,
          "end": 647
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 657,
            "end": 658
          },
          "id": null,
          "generator": false,
          "start": 651,
          "end": 658
        },
        "start": 644,
        "end": 658
      },
      "directive": null,
      "start": 644,
      "end": 659
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 689,
        "end": 692
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 696,
              "end": 702
            },
            "start": 694,
            "end": 702
          },
          "start": 693,
          "end": 702
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 709,
                    "end": 710
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 712,
                      "end": 718
                    },
                    "start": 710,
                    "end": 718
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 709,
                  "end": 718
                }
              ],
              "start": 707,
              "end": 720
            },
            "start": 705,
            "end": 720
          },
          "start": 704,
          "end": 720
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 728,
                "end": 729
              },
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 732,
                "end": 733
              },
              "start": 728,
              "end": 733
            },
            "directive": null,
            "start": 728,
            "end": 734
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 740,
                "end": 741
              },
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 745,
                "end": 746
              },
              "start": 739,
              "end": 746
            },
            "directive": null,
            "start": 739,
            "end": 747
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 758,
                "end": 759
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 762,
                "end": 764
              },
              "start": 758,
              "end": 764
            },
            "directive": null,
            "start": 758,
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 780,
                "end": 781
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 785,
                "end": 787
              },
              "start": 779,
              "end": 787
            },
            "directive": null,
            "start": 779,
            "end": 788
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 804,
                  "end": 805
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 807,
                  "end": 808
                },
                "optional": false,
                "computed": false,
                "start": 803,
                "end": 808
              },
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 811,
                "end": 812
              },
              "start": 803,
              "end": 812
            },
            "directive": null,
            "start": 803,
            "end": 813
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 825,
                  "end": 826
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 827,
                  "end": 828
                },
                "optional": false,
                "computed": false,
                "start": 825,
                "end": 828
              },
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 832,
                "end": 833
              },
              "start": 824,
              "end": 833
            },
            "directive": null,
            "start": 824,
            "end": 834
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 846,
                  "end": 847
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 849,
                  "end": 850
                },
                "optional": false,
                "computed": false,
                "start": 845,
                "end": 850
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 853,
                "end": 855
              },
              "start": 845,
              "end": 855
            },
            "directive": null,
            "start": 845,
            "end": 856
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 871,
                  "end": 872
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 873,
                  "end": 874
                },
                "optional": false,
                "computed": false,
                "start": 871,
                "end": 874
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 878,
                "end": 880
              },
              "start": 870,
              "end": 880
            },
            "directive": null,
            "start": 870,
            "end": 881
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 896,
                  "end": 897
                },
                "property": {
                  "type": "Literal",
                  "value": "t",
                  "raw": "'t'",
                  "start": 898,
                  "end": 901
                },
                "optional": false,
                "computed": true,
                "start": 896,
                "end": 902
              },
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 905,
                "end": 906
              },
              "start": 896,
              "end": 906
            },
            "directive": null,
            "start": 896,
            "end": 907
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 919,
                  "end": 920
                },
                "property": {
                  "type": "Literal",
                  "value": "t",
                  "raw": "'t'",
                  "start": 922,
                  "end": 925
                },
                "optional": false,
                "computed": true,
                "start": 918,
                "end": 926
              },
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 929,
                "end": 930
              },
              "start": 918,
              "end": 930
            },
            "directive": null,
            "start": 918,
            "end": 931
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 943,
                  "end": 944
                },
                "property": {
                  "type": "Literal",
                  "value": "t",
                  "raw": "'t'",
                  "start": 945,
                  "end": 948
                },
                "optional": false,
                "computed": true,
                "start": 943,
                "end": 949
              },
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 953,
                "end": 954
              },
              "start": 942,
              "end": 954
            },
            "directive": null,
            "start": 942,
            "end": 955
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 966,
                  "end": 967
                },
                "property": {
                  "type": "Literal",
                  "value": "t",
                  "raw": "'t'",
                  "start": 968,
                  "end": 971
                },
                "optional": false,
                "computed": true,
                "start": 966,
                "end": 972
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 975,
                "end": 977
              },
              "start": 966,
              "end": 977
            },
            "directive": null,
            "start": 966,
            "end": 978
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 993,
                  "end": 994
                },
                "property": {
                  "type": "Literal",
                  "value": "t",
                  "raw": "'t'",
                  "start": 996,
                  "end": 999
                },
                "optional": false,
                "computed": true,
                "start": 992,
                "end": 1000
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1003,
                "end": 1005
              },
              "start": 992,
              "end": 1005
            },
            "directive": null,
            "start": 992,
            "end": 1006
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1021,
                  "end": 1022
                },
                "property": {
                  "type": "Literal",
                  "value": "t",
                  "raw": "'t'",
                  "start": 1023,
                  "end": 1026
                },
                "optional": false,
                "computed": true,
                "start": 1021,
                "end": 1027
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1031,
                "end": 1033
              },
              "start": 1020,
              "end": 1033
            },
            "directive": null,
            "start": 1020,
            "end": 1034
          }
        ],
        "start": 722,
        "end": 1045
      },
      "expression": false,
      "start": 680,
      "end": 1045
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 1052,
        "end": 1053
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1060,
              "end": 1061
            },
            "initializer": null,
            "computed": false,
            "start": 1060,
            "end": 1061
          }
        ],
        "start": 1054,
        "end": 1063
      },
      "const": false,
      "declare": false,
      "start": 1047,
      "end": 1063
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null,
          "start": 1064,
          "end": 1065
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 1068,
          "end": 1077
        },
        "start": 1064,
        "end": 1077
      },
      "directive": null,
      "start": 1064,
      "end": 1078
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null,
          "start": 1089,
          "end": 1090
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 1094,
          "end": 1103
        },
        "start": 1088,
        "end": 1103
      },
      "directive": null,
      "start": 1088,
      "end": 1104
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 1121,
        "end": 1122
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1123,
        "end": 1127
      },
      "abstract": false,
      "declare": false,
      "start": 1115,
      "end": 1127
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 1129,
          "end": 1130
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 1133,
          "end": 1142
        },
        "start": 1129,
        "end": 1142
      },
      "directive": null,
      "start": 1129,
      "end": 1143
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 1154,
          "end": 1155
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 1159,
          "end": 1168
        },
        "start": 1153,
        "end": 1168
      },
      "directive": null,
      "start": 1153,
      "end": 1169
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1178
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 32,
    "end": 33
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 45,
    "end": 46
  },
  {
    "type": "String",
    "value": "''",
    "start": 47,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 64,
    "end": 65
  },
  {
    "type": "String",
    "value": "''",
    "start": 66,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 80,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 98,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 105,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 112,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 126,
    "end": 127
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "M",
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
    "value": ".",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 143,
    "end": 144
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 157,
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
    "value": "=",
    "start": 160,
    "end": 161
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 162,
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
    "value": "M",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 175,
    "end": 176
  },
  {
    "type": "String",
    "value": "''",
    "start": 177,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197
  },
  {
    "type": "String",
    "value": "''",
    "start": 198,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 217,
    "end": 218
  },
  {
    "type": "String",
    "value": "''",
    "start": 219,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Numeric",
    "value": "3",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 265,
    "end": 266
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 282,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 292,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 301,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 308,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 318,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 331,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 338,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 342,
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
    "value": "number",
    "start": 345,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 364,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 372,
    "end": 373
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 390,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 393,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 415,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 419,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 427,
    "end": 428
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 441,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 444,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 453,
    "end": 454
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 467,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 470,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 478,
    "end": 479
  },
  {
    "type": "String",
    "value": "''",
    "start": 480,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 496,
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
    "value": ".",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 500,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 508,
    "end": 509
  },
  {
    "type": "String",
    "value": "''",
    "start": 510,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 526,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 529,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 538,
    "end": 539
  },
  {
    "type": "String",
    "value": "''",
    "start": 540,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 544,
    "end": 545
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 557,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 566,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 575,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 583,
    "end": 585
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 645,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 654,
    "end": 656
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 658,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 680,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 689,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 696,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 712,
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
    "value": "{",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 730,
    "end": 731
  },
  {
    "type": "Numeric",
    "value": "3",
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
    "type": "Punctuator",
    "value": "(",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 743,
    "end": 744
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 760,
    "end": 761
  },
  {
    "type": "String",
    "value": "''",
    "start": 762,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 783,
    "end": 784
  },
  {
    "type": "String",
    "value": "''",
    "start": 785,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 809,
    "end": 810
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 830,
    "end": 831
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 851,
    "end": 852
  },
  {
    "type": "String",
    "value": "''",
    "start": 853,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 876,
    "end": 877
  },
  {
    "type": "String",
    "value": "''",
    "start": 878,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 897,
    "end": 898
  },
  {
    "type": "String",
    "value": "'t'",
    "start": 898,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 903,
    "end": 904
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 921,
    "end": 922
  },
  {
    "type": "String",
    "value": "'t'",
    "start": 922,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 927,
    "end": 928
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 944,
    "end": 945
  },
  {
    "type": "String",
    "value": "'t'",
    "start": 945,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 951,
    "end": 952
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 967,
    "end": 968
  },
  {
    "type": "String",
    "value": "'t'",
    "start": 968,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 973,
    "end": 974
  },
  {
    "type": "String",
    "value": "''",
    "start": 975,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 995,
    "end": 996
  },
  {
    "type": "String",
    "value": "'t'",
    "start": 996,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "String",
    "value": "''",
    "start": 1003,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "String",
    "value": "'t'",
    "start": 1023,
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
    "value": ")",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "String",
    "value": "''",
    "start": 1031,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1047,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1064,
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
    "value": "undefined",
    "start": 1068,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1094,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1115,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1133,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1159,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1168,
    "end": 1169
  }
]
```
