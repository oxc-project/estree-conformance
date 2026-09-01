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
      "type": "ExpressionStatement",
      "expression": {
        "type": "ClassExpression",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 90
            },
            "start": 86,
            "end": 90
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 97,
          "end": 99
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null,
          "start": 108,
          "end": 112
        },
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 127
              },
              "typeAnnotation": null,
              "value": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 130,
                  "end": 135
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 137
                },
                "optional": false,
                "computed": false,
                "start": 130,
                "end": 137
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 119,
              "end": 138
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 150,
                "end": 151
              },
              "typeAnnotation": null,
              "value": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 154,
                    "end": 159
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 160,
                    "end": 161
                  },
                  "optional": false,
                  "computed": false,
                  "start": 154,
                  "end": 161
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 164,
                  "end": 165
                },
                "start": 154,
                "end": 165
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 143,
              "end": 166
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 178,
                "end": 179
              },
              "typeAnnotation": null,
              "value": {
                "type": "AssignmentExpression",
                "operator": "+=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 182,
                    "end": 187
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 188,
                    "end": 189
                  },
                  "optional": false,
                  "computed": false,
                  "start": 182,
                  "end": 189
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 193,
                  "end": 194
                },
                "start": 182,
                "end": 194
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 171,
              "end": 195
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 207,
                "end": 208
              },
              "typeAnnotation": null,
              "value": {
                "type": "UpdateExpression",
                "operator": "++",
                "prefix": false,
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 211,
                    "end": 216
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 217,
                    "end": 218
                  },
                  "optional": false,
                  "computed": false,
                  "start": 211,
                  "end": 218
                },
                "start": 211,
                "end": 220
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 200,
              "end": 221
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 233,
                "end": 234
              },
              "typeAnnotation": null,
              "value": {
                "type": "UpdateExpression",
                "operator": "--",
                "prefix": false,
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 237,
                    "end": 242
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 243,
                    "end": 244
                  },
                  "optional": false,
                  "computed": false,
                  "start": 237,
                  "end": 244
                },
                "start": 237,
                "end": 246
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 226,
              "end": 247
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 259,
                "end": 260
              },
              "typeAnnotation": null,
              "value": {
                "type": "UpdateExpression",
                "operator": "++",
                "prefix": true,
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 265,
                    "end": 270
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 271,
                    "end": 272
                  },
                  "optional": false,
                  "computed": false,
                  "start": 265,
                  "end": 272
                },
                "start": 263,
                "end": 272
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 252,
              "end": 273
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 285,
                "end": 286
              },
              "typeAnnotation": null,
              "value": {
                "type": "UpdateExpression",
                "operator": "--",
                "prefix": true,
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 291,
                    "end": 296
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 297,
                    "end": 298
                  },
                  "optional": false,
                  "computed": false,
                  "start": 291,
                  "end": 298
                },
                "start": 289,
                "end": 298
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 278,
              "end": 299
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "h",
                "optional": false,
                "typeAnnotation": null,
                "start": 311,
                "end": 312
              },
              "typeAnnotation": null,
              "value": {
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
                        "start": 318,
                        "end": 319
                      },
                      "value": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 321,
                          "end": 326
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 327,
                          "end": 328
                        },
                        "optional": false,
                        "computed": false,
                        "start": 321,
                        "end": 328
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 318,
                      "end": 328
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 330
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
                        "start": 335,
                        "end": 336
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 338,
                        "end": 339
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 335,
                      "end": 339
                    }
                  ],
                  "start": 333,
                  "end": 341
                },
                "start": 316,
                "end": 341
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 304,
              "end": 343
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 355,
                "end": 356
              },
              "typeAnnotation": null,
              "value": {
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
                        "start": 360,
                        "end": 365
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 366,
                        "end": 367
                      },
                      "optional": false,
                      "computed": false,
                      "start": 360,
                      "end": 367
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 359,
                  "end": 368
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 372,
                      "end": 373
                    }
                  ],
                  "start": 371,
                  "end": 374
                },
                "start": 359,
                "end": 374
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 348,
              "end": 375
            }
          ],
          "start": 113,
          "end": 377
        },
        "abstract": false,
        "declare": false,
        "start": 86,
        "end": 377
      },
      "directive": null,
      "start": 85,
      "end": 379
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ClassExpression",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 383,
              "end": 386
            },
            "start": 382,
            "end": 386
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C2",
          "optional": false,
          "typeAnnotation": null,
          "start": 393,
          "end": 395
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null,
          "start": 404,
          "end": 408
        },
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 422,
                "end": 423
              },
              "typeAnnotation": null,
              "value": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 426,
                  "end": 431
                },
                "property": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "\"x\"",
                  "start": 432,
                  "end": 435
                },
                "optional": false,
                "computed": true,
                "start": 426,
                "end": 436
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 415,
              "end": 437
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 450
              },
              "typeAnnotation": null,
              "value": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 453,
                    "end": 458
                  },
                  "property": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 459,
                    "end": 462
                  },
                  "optional": false,
                  "computed": true,
                  "start": 453,
                  "end": 463
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 466,
                  "end": 467
                },
                "start": 453,
                "end": 467
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 442,
              "end": 468
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 480,
                "end": 481
              },
              "typeAnnotation": null,
              "value": {
                "type": "AssignmentExpression",
                "operator": "+=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 484,
                    "end": 489
                  },
                  "property": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 490,
                    "end": 493
                  },
                  "optional": false,
                  "computed": true,
                  "start": 484,
                  "end": 494
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 498,
                  "end": 499
                },
                "start": 484,
                "end": 499
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 473,
              "end": 500
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 512,
                "end": 513
              },
              "typeAnnotation": null,
              "value": {
                "type": "UpdateExpression",
                "operator": "++",
                "prefix": false,
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 516,
                    "end": 521
                  },
                  "property": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 522,
                    "end": 525
                  },
                  "optional": false,
                  "computed": true,
                  "start": 516,
                  "end": 526
                },
                "start": 516,
                "end": 528
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 505,
              "end": 529
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 542
              },
              "typeAnnotation": null,
              "value": {
                "type": "UpdateExpression",
                "operator": "--",
                "prefix": false,
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 545,
                    "end": 550
                  },
                  "property": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 551,
                    "end": 554
                  },
                  "optional": false,
                  "computed": true,
                  "start": 545,
                  "end": 555
                },
                "start": 545,
                "end": 557
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 534,
              "end": 558
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 570,
                "end": 571
              },
              "typeAnnotation": null,
              "value": {
                "type": "UpdateExpression",
                "operator": "++",
                "prefix": true,
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 576,
                    "end": 581
                  },
                  "property": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 582,
                    "end": 585
                  },
                  "optional": false,
                  "computed": true,
                  "start": 576,
                  "end": 586
                },
                "start": 574,
                "end": 586
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 563,
              "end": 587
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 599,
                "end": 600
              },
              "typeAnnotation": null,
              "value": {
                "type": "UpdateExpression",
                "operator": "--",
                "prefix": true,
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 605,
                    "end": 610
                  },
                  "property": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 611,
                    "end": 614
                  },
                  "optional": false,
                  "computed": true,
                  "start": 605,
                  "end": 615
                },
                "start": 603,
                "end": 615
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 592,
              "end": 616
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "h",
                "optional": false,
                "typeAnnotation": null,
                "start": 628,
                "end": 629
              },
              "typeAnnotation": null,
              "value": {
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
                        "start": 635,
                        "end": 636
                      },
                      "value": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 638,
                          "end": 643
                        },
                        "property": {
                          "type": "Literal",
                          "value": "x",
                          "raw": "\"x\"",
                          "start": 644,
                          "end": 647
                        },
                        "optional": false,
                        "computed": true,
                        "start": 638,
                        "end": 648
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 635,
                      "end": 648
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 633,
                  "end": 650
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
                        "start": 655,
                        "end": 656
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 658,
                        "end": 659
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 655,
                      "end": 659
                    }
                  ],
                  "start": 653,
                  "end": 661
                },
                "start": 633,
                "end": 661
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 621,
              "end": 663
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 675,
                "end": 676
              },
              "typeAnnotation": null,
              "value": {
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
                        "start": 680,
                        "end": 685
                      },
                      "property": {
                        "type": "Literal",
                        "value": "x",
                        "raw": "\"x\"",
                        "start": 686,
                        "end": 689
                      },
                      "optional": false,
                      "computed": true,
                      "start": 680,
                      "end": 690
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 679,
                  "end": 691
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 695,
                      "end": 696
                    }
                  ],
                  "start": 694,
                  "end": 697
                },
                "start": 679,
                "end": 697
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 668,
              "end": 698
            }
          ],
          "start": 409,
          "end": 700
        },
        "abstract": false,
        "declare": false,
        "start": 382,
        "end": 700
      },
      "directive": null,
      "start": 381,
      "end": 702
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ClassExpression",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 706,
              "end": 709
            },
            "start": 705,
            "end": 709
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C3",
          "optional": false,
          "typeAnnotation": null,
          "start": 716,
          "end": 718
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null,
          "start": 727,
          "end": 731
        },
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 745,
                "end": 746
              },
              "typeAnnotation": null,
              "value": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 749,
                  "end": 754
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 755,
                  "end": 756
                },
                "optional": false,
                "computed": true,
                "start": 749,
                "end": 757
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 738,
              "end": 758
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 770,
                "end": 771
              },
              "typeAnnotation": null,
              "value": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 774,
                    "end": 779
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 780,
                    "end": 781
                  },
                  "optional": false,
                  "computed": true,
                  "start": 774,
                  "end": 782
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 785,
                  "end": 786
                },
                "start": 774,
                "end": 786
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 763,
              "end": 787
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 799,
                "end": 800
              },
              "typeAnnotation": null,
              "value": {
                "type": "AssignmentExpression",
                "operator": "+=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 803,
                    "end": 808
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 809,
                    "end": 810
                  },
                  "optional": false,
                  "computed": true,
                  "start": 803,
                  "end": 811
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 815,
                  "end": 816
                },
                "start": 803,
                "end": 816
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 792,
              "end": 817
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 829,
                "end": 830
              },
              "typeAnnotation": null,
              "value": {
                "type": "UpdateExpression",
                "operator": "++",
                "prefix": false,
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 833,
                    "end": 838
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 839,
                    "end": 840
                  },
                  "optional": false,
                  "computed": true,
                  "start": 833,
                  "end": 841
                },
                "start": 833,
                "end": 843
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 822,
              "end": 844
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 856,
                "end": 857
              },
              "typeAnnotation": null,
              "value": {
                "type": "UpdateExpression",
                "operator": "--",
                "prefix": false,
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 860,
                    "end": 865
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 866,
                    "end": 867
                  },
                  "optional": false,
                  "computed": true,
                  "start": 860,
                  "end": 868
                },
                "start": 860,
                "end": 870
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 849,
              "end": 871
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 883,
                "end": 884
              },
              "typeAnnotation": null,
              "value": {
                "type": "UpdateExpression",
                "operator": "++",
                "prefix": true,
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 889,
                    "end": 894
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 895,
                    "end": 896
                  },
                  "optional": false,
                  "computed": true,
                  "start": 889,
                  "end": 897
                },
                "start": 887,
                "end": 897
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 876,
              "end": 898
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 910,
                "end": 911
              },
              "typeAnnotation": null,
              "value": {
                "type": "UpdateExpression",
                "operator": "--",
                "prefix": true,
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 916,
                    "end": 921
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 922,
                    "end": 923
                  },
                  "optional": false,
                  "computed": true,
                  "start": 916,
                  "end": 924
                },
                "start": 914,
                "end": 924
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 903,
              "end": 925
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "h",
                "optional": false,
                "typeAnnotation": null,
                "start": 937,
                "end": 938
              },
              "typeAnnotation": null,
              "value": {
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
                        "start": 944,
                        "end": 945
                      },
                      "value": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 947,
                          "end": 952
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 953,
                          "end": 954
                        },
                        "optional": false,
                        "computed": true,
                        "start": 947,
                        "end": 955
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 944,
                      "end": 955
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 942,
                  "end": 957
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
                        "start": 962,
                        "end": 963
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 965,
                        "end": 966
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 962,
                      "end": 966
                    }
                  ],
                  "start": 960,
                  "end": 968
                },
                "start": 942,
                "end": 968
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 930,
              "end": 970
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 982,
                "end": 983
              },
              "typeAnnotation": null,
              "value": {
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
                        "start": 987,
                        "end": 992
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 993,
                        "end": 994
                      },
                      "optional": false,
                      "computed": true,
                      "start": 987,
                      "end": 995
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 986,
                  "end": 996
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1000,
                      "end": 1001
                    }
                  ],
                  "start": 999,
                  "end": 1002
                },
                "start": 986,
                "end": 1002
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 975,
              "end": 1003
            }
          ],
          "start": 732,
          "end": 1005
        },
        "abstract": false,
        "declare": false,
        "start": 705,
        "end": 1005
      },
      "directive": null,
      "start": 704,
      "end": 1007
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1007
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
    "value": "(",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 87,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 91,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 97,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 100,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 108,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 119,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 126,
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
    "value": "super",
    "start": 130,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 143,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 154,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 171,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 182,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 190,
    "end": 192
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 193,
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
    "value": "static",
    "start": 200,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 211,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 218,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 226,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "e",
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
    "type": "Keyword",
    "value": "super",
    "start": 237,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 244,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 252,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 263,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 265,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 278,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 289,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 291,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 304,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 321,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 348,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 360,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 371,
    "end": 372
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": ")",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 383,
    "end": 386
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 387,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 393,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 396,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 404,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 415,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 424,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 426,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 431,
    "end": 432
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 432,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 442,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 451,
    "end": 452
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 453,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 458,
    "end": 459
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 459,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 464,
    "end": 465
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 467,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 473,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 482,
    "end": 483
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 484,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 489,
    "end": 490
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 490,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 495,
    "end": 497
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Keyword",
    "value": "static",
    "start": 505,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 514,
    "end": 515
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 516,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 521,
    "end": 522
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 522,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 526,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 528,
    "end": 529
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 534,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "e",
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
    "type": "Keyword",
    "value": "super",
    "start": 545,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 550,
    "end": 551
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 551,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 555,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 563,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 574,
    "end": 576
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 576,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 581,
    "end": 582
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 582,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 586,
    "end": 587
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 592,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 603,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 605,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 610,
    "end": 611
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 611,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 621,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 636,
    "end": 637
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 638,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 643,
    "end": 644
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 644,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 656,
    "end": 657
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 662,
    "end": 663
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 668,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 679,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 680,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 685,
    "end": 686
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 686,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 694,
    "end": 695
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 706,
    "end": 709
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 710,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 716,
    "end": 718
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 719,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 727,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 732,
    "end": 733
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 738,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 747,
    "end": 748
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 749,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 757,
    "end": 758
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 763,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 772,
    "end": 773
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 774,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": "]",
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
    "type": "Numeric",
    "value": "1",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 786,
    "end": 787
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 792,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 801,
    "end": 802
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 803,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 812,
    "end": 814
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 816,
    "end": 817
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 822,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 831,
    "end": 832
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 833,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 841,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 843,
    "end": 844
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 849,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 858,
    "end": 859
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 860,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 868,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 870,
    "end": 871
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 876,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 887,
    "end": 889
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 889,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 897,
    "end": 898
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 903,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 914,
    "end": 916
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 916,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 924,
    "end": 925
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 930,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 945,
    "end": 946
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 947,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 963,
    "end": 964
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 969,
    "end": 970
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 975,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 986,
    "end": 987
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 987,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1006,
    "end": 1007
  }
]
```
