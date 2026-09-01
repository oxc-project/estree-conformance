__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 253,
        "end": 254
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
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 261,
              "end": 265
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 267,
                    "end": 273
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 276,
                      "end": 282
                    },
                    "start": 276,
                    "end": 284
                  }
                ],
                "start": 267,
                "end": 284
              },
              "start": 265,
              "end": 284
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 261,
            "end": 285
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getData",
              "optional": false,
              "typeAnnotation": null,
              "start": 290,
              "end": 297
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 314,
                          "end": 318
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 321,
                            "end": 325
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 326,
                            "end": 330
                          },
                          "optional": false,
                          "computed": false,
                          "start": 321,
                          "end": 330
                        },
                        "definite": false,
                        "start": 314,
                        "end": 330
                      }
                    ],
                    "declare": false,
                    "start": 310,
                    "end": 331
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 354,
                            "end": 358
                          },
                          "prefix": true,
                          "start": 347,
                          "end": 358
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 363,
                          "end": 371
                        },
                        "start": 347,
                        "end": 371
                      },
                      "consequent": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 374,
                        "end": 378
                      },
                      "alternate": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 381,
                            "end": 385
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "join",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 386,
                            "end": 390
                          },
                          "optional": false,
                          "computed": false,
                          "start": 381,
                          "end": 390
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": " ",
                            "raw": "\" \"",
                            "start": 391,
                            "end": 394
                          }
                        ],
                        "optional": false,
                        "start": 381,
                        "end": 395
                      },
                      "start": 347,
                      "end": 395
                    },
                    "start": 340,
                    "end": 396
                  }
                ],
                "start": 300,
                "end": 402
              },
              "expression": false,
              "start": 297,
              "end": 402
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 290,
            "end": 402
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getData1",
              "optional": false,
              "typeAnnotation": null,
              "start": 408,
              "end": 416
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 443,
                              "end": 447
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 448,
                              "end": 452
                            },
                            "optional": false,
                            "computed": false,
                            "start": 443,
                            "end": 452
                          },
                          "prefix": true,
                          "start": 436,
                          "end": 452
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 457,
                          "end": 465
                        },
                        "start": 436,
                        "end": 465
                      },
                      "consequent": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 468,
                          "end": 472
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 473,
                          "end": 477
                        },
                        "optional": false,
                        "computed": false,
                        "start": 468,
                        "end": 477
                      },
                      "alternate": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 480,
                              "end": 484
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 485,
                              "end": 489
                            },
                            "optional": false,
                            "computed": false,
                            "start": 480,
                            "end": 489
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "join",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 490,
                            "end": 494
                          },
                          "optional": false,
                          "computed": false,
                          "start": 480,
                          "end": 494
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": " ",
                            "raw": "\" \"",
                            "start": 495,
                            "end": 498
                          }
                        ],
                        "optional": false,
                        "start": 480,
                        "end": 499
                      },
                      "start": 436,
                      "end": 499
                    },
                    "start": 429,
                    "end": 500
                  }
                ],
                "start": 419,
                "end": 506
              },
              "expression": false,
              "start": 416,
              "end": 506
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 408,
            "end": 506
          }
        ],
        "start": 255,
        "end": 508
      },
      "abstract": false,
      "declare": false,
      "start": 247,
      "end": 508
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
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
                      "name": "prop1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 523,
                      "end": 528
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 530,
                            "end": 536
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 537,
                            "end": 543
                          }
                        ],
                        "start": 530,
                        "end": 543
                      },
                      "start": 528,
                      "end": 543
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 523,
                    "end": 544
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prop2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 549,
                      "end": 554
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSBooleanKeyword",
                            "start": 556,
                            "end": 563
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 564,
                            "end": 570
                          }
                        ],
                        "start": 556,
                        "end": 570
                      },
                      "start": 554,
                      "end": 570
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 549,
                    "end": 571
                  }
                ],
                "start": 517,
                "end": 573
              },
              "start": 515,
              "end": 573
            },
            "start": 514,
            "end": 573
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 586,
                  "end": 591
                },
                "value": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 593,
                  "end": 601
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 586,
                "end": 601
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 612,
                  "end": 617
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 619,
                  "end": 623
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 612,
                "end": 623
              }
            ],
            "start": 576,
            "end": 629
          },
          "definite": false,
          "start": 514,
          "end": 629
        }
      ],
      "declare": false,
      "start": 510,
      "end": 629
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 642,
                "end": 643
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop1",
                "optional": false,
                "typeAnnotation": null,
                "start": 644,
                "end": 649
              },
              "optional": false,
              "computed": false,
              "start": 642,
              "end": 649
            },
            "prefix": true,
            "start": 635,
            "end": 649
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 654,
            "end": 662
          },
          "start": 635,
          "end": 662
        },
        "operator": "&&",
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 666,
                "end": 667
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop1",
                "optional": false,
                "typeAnnotation": null,
                "start": 668,
                "end": 673
              },
              "optional": false,
              "computed": false,
              "start": 666,
              "end": 673
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLowerCase",
              "optional": false,
              "typeAnnotation": null,
              "start": 674,
              "end": 685
            },
            "optional": false,
            "computed": false,
            "start": 666,
            "end": 685
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 666,
          "end": 687
        },
        "start": 635,
        "end": 687
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 689,
        "end": 691
      },
      "alternate": null,
      "start": 631,
      "end": 691
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop1",
            "optional": false,
            "typeAnnotation": null,
            "start": 696,
            "end": 701
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 704,
              "end": 705
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 706,
              "end": 711
            },
            "optional": false,
            "computed": false,
            "start": 704,
            "end": 711
          },
          "definite": false,
          "start": 696,
          "end": 711
        }
      ],
      "declare": false,
      "start": 692,
      "end": 712
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 724,
              "end": 729
            },
            "prefix": true,
            "start": 717,
            "end": 729
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 734,
            "end": 742
          },
          "start": 717,
          "end": 742
        },
        "operator": "&&",
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 746,
              "end": 751
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleLowerCase",
              "optional": false,
              "typeAnnotation": null,
              "start": 752,
              "end": 769
            },
            "optional": false,
            "computed": false,
            "start": 746,
            "end": 769
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 746,
          "end": 771
        },
        "start": 717,
        "end": 771
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 773,
        "end": 776
      },
      "alternate": null,
      "start": 713,
      "end": 776
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 247,
  "end": 776
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 247,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 261,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 267,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 276,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "getData",
    "start": 290,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 310,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 314,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 321,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 326,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 340,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 347,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 354,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 359,
    "end": 362
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 363,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 374,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 381,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "join",
    "start": 386,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 390,
    "end": 391
  },
  {
    "type": "String",
    "value": "\" \"",
    "start": 391,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "getData1",
    "start": 408,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 416,
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
    "value": "{",
    "start": 419,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 429,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 436,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 443,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 448,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 453,
    "end": 456
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 457,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 466,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 468,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 473,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 478,
    "end": 479
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 480,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 485,
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
    "value": "join",
    "start": 490,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 494,
    "end": 495
  },
  {
    "type": "String",
    "value": "\" \"",
    "start": 495,
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
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "var",
    "start": 510,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 523,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 530,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 537,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 549,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 556,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 564,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 586,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 591,
    "end": 592
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 593,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 612,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 617,
    "end": 618
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 619,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 631,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 634,
    "end": 635
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 635,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "o",
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
    "value": "prop1",
    "start": 644,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 650,
    "end": 653
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 654,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 663,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 668,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "toLowerCase",
    "start": 674,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 690,
    "end": 691
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 692,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 696,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 706,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 711,
    "end": 712
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 713,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 717,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 724,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 730,
    "end": 733
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 734,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 743,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 746,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "toLocaleLowerCase",
    "start": 752,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 770,
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
    "value": "{",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 775,
    "end": 776
  }
]
```
