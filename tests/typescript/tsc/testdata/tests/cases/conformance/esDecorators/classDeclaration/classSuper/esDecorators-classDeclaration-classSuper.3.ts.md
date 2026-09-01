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
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 20
        }
      ],
      "declare": true,
      "start": 0,
      "end": 21
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 41
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 56
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 58,
                "end": 64
              },
              "start": 56,
              "end": 64
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 48,
            "end": 65
          }
        ],
        "start": 42,
        "end": 67
      },
      "abstract": false,
      "declare": true,
      "start": 23,
      "end": 67
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
            "start": 75,
            "end": 76
          },
          "init": {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 79,
            "end": 82
          },
          "definite": false,
          "start": 75,
          "end": 82
        }
      ],
      "declare": false,
      "start": 69,
      "end": 83
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 89
          },
          "start": 85,
          "end": 89
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 97
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 110
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 134,
                    "end": 139
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 141
                  },
                  "optional": false,
                  "computed": false,
                  "start": 134,
                  "end": 141
                },
                "directive": null,
                "start": 134,
                "end": 142
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 151,
                      "end": 156
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 157,
                      "end": 158
                    },
                    "optional": false,
                    "computed": false,
                    "start": 151,
                    "end": 158
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 161,
                    "end": 162
                  },
                  "start": 151,
                  "end": 162
                },
                "directive": null,
                "start": 151,
                "end": 163
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "+=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 172,
                      "end": 177
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 178,
                      "end": 179
                    },
                    "optional": false,
                    "computed": false,
                    "start": 172,
                    "end": 179
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 183,
                    "end": 184
                  },
                  "start": 172,
                  "end": 184
                },
                "directive": null,
                "start": 172,
                "end": 185
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 194,
                      "end": 199
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 200,
                      "end": 201
                    },
                    "optional": false,
                    "computed": false,
                    "start": 194,
                    "end": 201
                  },
                  "start": 194,
                  "end": 203
                },
                "directive": null,
                "start": 194,
                "end": 204
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "operator": "--",
                  "prefix": false,
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 213,
                      "end": 218
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 219,
                      "end": 220
                    },
                    "optional": false,
                    "computed": false,
                    "start": 213,
                    "end": 220
                  },
                  "start": 213,
                  "end": 222
                },
                "directive": null,
                "start": 213,
                "end": 223
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 234,
                      "end": 239
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 240,
                      "end": 241
                    },
                    "optional": false,
                    "computed": false,
                    "start": 234,
                    "end": 241
                  },
                  "start": 232,
                  "end": 241
                },
                "directive": null,
                "start": 232,
                "end": 242
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "operator": "--",
                  "prefix": true,
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 253,
                      "end": 258
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 259,
                      "end": 260
                    },
                    "optional": false,
                    "computed": false,
                    "start": 253,
                    "end": 260
                  },
                  "start": 251,
                  "end": 260
                },
                "directive": null,
                "start": 251,
                "end": 261
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "ObjectPattern",
                    "decorators": [],
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
                          "start": 273,
                          "end": 274
                        },
                        "value": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 276,
                            "end": 281
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 282,
                            "end": 283
                          },
                          "optional": false,
                          "computed": false,
                          "start": 276,
                          "end": 283
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 273,
                        "end": 283
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 271,
                    "end": 285
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
                          "start": 290,
                          "end": 291
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 293,
                          "end": 294
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 290,
                        "end": 294
                      }
                    ],
                    "start": 288,
                    "end": 296
                  },
                  "start": 271,
                  "end": 296
                },
                "directive": null,
                "start": 270,
                "end": 298
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 308,
                          "end": 313
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 314,
                          "end": 315
                        },
                        "optional": false,
                        "computed": false,
                        "start": 308,
                        "end": 315
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 307,
                    "end": 316
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 320,
                        "end": 321
                      }
                    ],
                    "start": 319,
                    "end": 322
                  },
                  "start": 307,
                  "end": 322
                },
                "directive": null,
                "start": 307,
                "end": 323
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 333,
                    "end": 338
                  },
                  "property": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 339,
                    "end": 342
                  },
                  "optional": false,
                  "computed": true,
                  "start": 333,
                  "end": 343
                },
                "directive": null,
                "start": 333,
                "end": 344
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 353,
                      "end": 358
                    },
                    "property": {
                      "type": "Literal",
                      "value": "x",
                      "raw": "\"x\"",
                      "start": 359,
                      "end": 362
                    },
                    "optional": false,
                    "computed": true,
                    "start": 353,
                    "end": 363
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 366,
                    "end": 367
                  },
                  "start": 353,
                  "end": 367
                },
                "directive": null,
                "start": 353,
                "end": 368
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "+=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 377,
                      "end": 382
                    },
                    "property": {
                      "type": "Literal",
                      "value": "x",
                      "raw": "\"x\"",
                      "start": 383,
                      "end": 386
                    },
                    "optional": false,
                    "computed": true,
                    "start": 377,
                    "end": 387
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 391,
                    "end": 392
                  },
                  "start": 377,
                  "end": 392
                },
                "directive": null,
                "start": 377,
                "end": 393
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 402,
                      "end": 407
                    },
                    "property": {
                      "type": "Literal",
                      "value": "x",
                      "raw": "\"x\"",
                      "start": 408,
                      "end": 411
                    },
                    "optional": false,
                    "computed": true,
                    "start": 402,
                    "end": 412
                  },
                  "start": 402,
                  "end": 414
                },
                "directive": null,
                "start": 402,
                "end": 415
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "operator": "--",
                  "prefix": false,
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 424,
                      "end": 429
                    },
                    "property": {
                      "type": "Literal",
                      "value": "x",
                      "raw": "\"x\"",
                      "start": 430,
                      "end": 433
                    },
                    "optional": false,
                    "computed": true,
                    "start": 424,
                    "end": 434
                  },
                  "start": 424,
                  "end": 436
                },
                "directive": null,
                "start": 424,
                "end": 437
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 448,
                      "end": 453
                    },
                    "property": {
                      "type": "Literal",
                      "value": "x",
                      "raw": "\"x\"",
                      "start": 454,
                      "end": 457
                    },
                    "optional": false,
                    "computed": true,
                    "start": 448,
                    "end": 458
                  },
                  "start": 446,
                  "end": 458
                },
                "directive": null,
                "start": 446,
                "end": 459
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "operator": "--",
                  "prefix": true,
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 470,
                      "end": 475
                    },
                    "property": {
                      "type": "Literal",
                      "value": "x",
                      "raw": "\"x\"",
                      "start": 476,
                      "end": 479
                    },
                    "optional": false,
                    "computed": true,
                    "start": 470,
                    "end": 480
                  },
                  "start": 468,
                  "end": 480
                },
                "directive": null,
                "start": 468,
                "end": 481
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "ObjectPattern",
                    "decorators": [],
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
                          "start": 493,
                          "end": 494
                        },
                        "value": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 496,
                            "end": 501
                          },
                          "property": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 502,
                            "end": 505
                          },
                          "optional": false,
                          "computed": true,
                          "start": 496,
                          "end": 506
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 493,
                        "end": 506
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 491,
                    "end": 508
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
                          "start": 513,
                          "end": 514
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 516,
                          "end": 517
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 513,
                        "end": 517
                      }
                    ],
                    "start": 511,
                    "end": 519
                  },
                  "start": 491,
                  "end": 519
                },
                "directive": null,
                "start": 490,
                "end": 521
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 531,
                          "end": 536
                        },
                        "property": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "\"x\"",
                          "start": 537,
                          "end": 540
                        },
                        "optional": false,
                        "computed": true,
                        "start": 531,
                        "end": 541
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 530,
                    "end": 542
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 546,
                        "end": 547
                      }
                    ],
                    "start": 545,
                    "end": 548
                  },
                  "start": 530,
                  "end": 548
                },
                "directive": null,
                "start": 530,
                "end": 549
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 559,
                    "end": 564
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 565,
                    "end": 566
                  },
                  "optional": false,
                  "computed": true,
                  "start": 559,
                  "end": 567
                },
                "directive": null,
                "start": 559,
                "end": 568
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 577,
                      "end": 582
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 583,
                      "end": 584
                    },
                    "optional": false,
                    "computed": true,
                    "start": 577,
                    "end": 585
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 588,
                    "end": 589
                  },
                  "start": 577,
                  "end": 589
                },
                "directive": null,
                "start": 577,
                "end": 590
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "+=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 599,
                      "end": 604
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 605,
                      "end": 606
                    },
                    "optional": false,
                    "computed": true,
                    "start": 599,
                    "end": 607
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 611,
                    "end": 612
                  },
                  "start": 599,
                  "end": 612
                },
                "directive": null,
                "start": 599,
                "end": 613
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 622,
                      "end": 627
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 628,
                      "end": 629
                    },
                    "optional": false,
                    "computed": true,
                    "start": 622,
                    "end": 630
                  },
                  "start": 622,
                  "end": 632
                },
                "directive": null,
                "start": 622,
                "end": 633
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "operator": "--",
                  "prefix": false,
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 642,
                      "end": 647
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 648,
                      "end": 649
                    },
                    "optional": false,
                    "computed": true,
                    "start": 642,
                    "end": 650
                  },
                  "start": 642,
                  "end": 652
                },
                "directive": null,
                "start": 642,
                "end": 653
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 664,
                      "end": 669
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 670,
                      "end": 671
                    },
                    "optional": false,
                    "computed": true,
                    "start": 664,
                    "end": 672
                  },
                  "start": 662,
                  "end": 672
                },
                "directive": null,
                "start": 662,
                "end": 673
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "operator": "--",
                  "prefix": true,
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 684,
                      "end": 689
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 690,
                      "end": 691
                    },
                    "optional": false,
                    "computed": true,
                    "start": 684,
                    "end": 692
                  },
                  "start": 682,
                  "end": 692
                },
                "directive": null,
                "start": 682,
                "end": 693
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "ObjectPattern",
                    "decorators": [],
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
                          "start": 705,
                          "end": 706
                        },
                        "value": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 708,
                            "end": 713
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 714,
                            "end": 715
                          },
                          "optional": false,
                          "computed": true,
                          "start": 708,
                          "end": 716
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 705,
                        "end": 716
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 703,
                    "end": 718
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
                          "start": 723,
                          "end": 724
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 726,
                          "end": 727
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 723,
                        "end": 727
                      }
                    ],
                    "start": 721,
                    "end": 729
                  },
                  "start": 703,
                  "end": 729
                },
                "directive": null,
                "start": 702,
                "end": 731
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 741,
                          "end": 746
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 747,
                          "end": 748
                        },
                        "optional": false,
                        "computed": true,
                        "start": 741,
                        "end": 749
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 740,
                    "end": 750
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 754,
                        "end": 755
                      }
                    ],
                    "start": 753,
                    "end": 756
                  },
                  "start": 740,
                  "end": 756
                },
                "directive": null,
                "start": 740,
                "end": 757
              }
            ],
            "start": 117,
            "end": 763
          }
        ],
        "start": 111,
        "end": 765
      },
      "abstract": false,
      "declare": false,
      "start": 85,
      "end": 765
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 765
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 23,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 31,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 48,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 58,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 69,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 77,
    "end": 78
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 79,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 86,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 90,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 98,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 106,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 117,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 134,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 151,
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
    "value": "x",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 159,
    "end": 160
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 172,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 180,
    "end": 182
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 194,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 201,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 213,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 220,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 232,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 234,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 251,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 253,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 276,
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
    "value": "x",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 307,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 308,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 319,
    "end": 320
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "super",
    "start": 333,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 338,
    "end": 339
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 339,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 353,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 358,
    "end": 359
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 359,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 364,
    "end": 365
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 377,
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
    "value": "\"x\"",
    "start": 383,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 388,
    "end": 390
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Keyword",
    "value": "super",
    "start": 402,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 407,
    "end": 408
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 408,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 412,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 424,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 429,
    "end": 430
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 430,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 434,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 446,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 448,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 453,
    "end": 454
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 454,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "--",
    "start": 468,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 470,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 475,
    "end": 476
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 476,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 496,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 501,
    "end": 502
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 502,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 514,
    "end": 515
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 530,
    "end": 531
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 531,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 536,
    "end": 537
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 537,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 545,
    "end": 546
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 559,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 567,
    "end": 568
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 577,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 586,
    "end": 587
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 589,
    "end": 590
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 599,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 608,
    "end": 610
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 612,
    "end": 613
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 622,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 630,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 632,
    "end": 633
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 642,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 650,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 662,
    "end": 664
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 664,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 682,
    "end": 684
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 684,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 706,
    "end": 707
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 708,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 714,
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
    "value": "}",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 724,
    "end": 725
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 740,
    "end": 741
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 741,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 753,
    "end": 754
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 764,
    "end": 765
  }
]
```
