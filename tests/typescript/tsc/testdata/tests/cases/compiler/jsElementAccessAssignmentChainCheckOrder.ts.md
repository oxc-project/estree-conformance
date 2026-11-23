__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 171,
          "end": 172
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "updateElements",
                "optional": false,
                "typeAnnotation": null,
                "start": 249,
                "end": 263
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iScale",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 264,
                    "end": 270
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "vScale",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 272,
                    "end": 278
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reset",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 280,
                    "end": 285
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
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
                            "name": "iAxis",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 299,
                            "end": 304
                          },
                          "init": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "iScale",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 307,
                              "end": 313
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "axis",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 314,
                              "end": 318
                            },
                            "optional": false,
                            "computed": false,
                            "start": 307,
                            "end": 318
                          },
                          "definite": false,
                          "start": 299,
                          "end": 318
                        }
                      ],
                      "declare": false,
                      "start": 293,
                      "end": 319
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
                            "name": "vAxis",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 330,
                            "end": 335
                          },
                          "init": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "vScale",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 338,
                              "end": 344
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "axis",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 345,
                              "end": 349
                            },
                            "optional": false,
                            "computed": false,
                            "start": 338,
                            "end": 349
                          },
                          "definite": false,
                          "start": 330,
                          "end": 349
                        }
                      ],
                      "declare": false,
                      "start": 324,
                      "end": 350
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
                            "name": "properties",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 361,
                            "end": 371
                          },
                          "init": {
                            "type": "ObjectExpression",
                            "properties": [],
                            "start": 374,
                            "end": 376
                          },
                          "definite": false,
                          "start": 361,
                          "end": 376
                        }
                      ],
                      "declare": false,
                      "start": 355,
                      "end": 377
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
                            "name": "iPixel",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 388,
                            "end": 394
                          },
                          "init": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "properties",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 397,
                                "end": 407
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "iAxis",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 408,
                                "end": 413
                              },
                              "optional": false,
                              "computed": true,
                              "start": 397,
                              "end": 414
                            },
                            "right": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "reset",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 417,
                                "end": 422
                              },
                              "consequent": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "iScale",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 425,
                                    "end": 431
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "getPixelForDecimal",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 432,
                                    "end": 450
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 425,
                                  "end": 450
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": 0.5,
                                    "raw": "0.5",
                                    "start": 451,
                                    "end": 454
                                  }
                                ],
                                "optional": false,
                                "start": 425,
                                "end": 455
                              },
                              "alternate": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "iScale",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 458,
                                    "end": 464
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "getPixelForValue",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 465,
                                    "end": 481
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 458,
                                  "end": 481
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 482,
                                    "end": 483
                                  }
                                ],
                                "optional": false,
                                "start": 458,
                                "end": 484
                              },
                              "start": 417,
                              "end": 484
                            },
                            "start": 397,
                            "end": 484
                          },
                          "definite": false,
                          "start": 388,
                          "end": 484
                        }
                      ],
                      "declare": false,
                      "start": 382,
                      "end": 485
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
                            "name": "vPixel",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 496,
                            "end": 502
                          },
                          "init": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "properties",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 505,
                                "end": 515
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "vAxis",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 516,
                                "end": 521
                              },
                              "optional": false,
                              "computed": true,
                              "start": 505,
                              "end": 522
                            },
                            "right": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "reset",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 525,
                                "end": 530
                              },
                              "consequent": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "vScale",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 533,
                                    "end": 539
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "getBasePixel",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 540,
                                    "end": 552
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 533,
                                  "end": 552
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 533,
                                "end": 554
                              },
                              "alternate": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "vScale",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 557,
                                    "end": 563
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "getPixelForValue",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 564,
                                    "end": 580
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 557,
                                  "end": 580
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2",
                                    "start": 581,
                                    "end": 582
                                  }
                                ],
                                "optional": false,
                                "start": 557,
                                "end": 583
                              },
                              "start": 525,
                              "end": 583
                            },
                            "start": 505,
                            "end": 583
                          },
                          "definite": false,
                          "start": 496,
                          "end": 583
                        }
                      ],
                      "declare": false,
                      "start": 490,
                      "end": 584
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
                            "name": "properties",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 589,
                            "end": 599
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "skip",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 600,
                            "end": 604
                          },
                          "optional": false,
                          "computed": false,
                          "start": 589,
                          "end": 604
                        },
                        "right": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "isNaN",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 607,
                              "end": 612
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "iPixel",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 613,
                                "end": 619
                              }
                            ],
                            "optional": false,
                            "start": 607,
                            "end": 620
                          },
                          "operator": "||",
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "isNaN",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 624,
                              "end": 629
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "vPixel",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 630,
                                "end": 636
                              }
                            ],
                            "optional": false,
                            "start": 624,
                            "end": 637
                          },
                          "start": 607,
                          "end": 637
                        },
                        "start": 589,
                        "end": 637
                      },
                      "directive": null,
                      "start": 589,
                      "end": 638
                    }
                  ],
                  "start": 287,
                  "end": 642
                },
                "expression": false,
                "start": 263,
                "end": 642
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 249,
              "end": 642
            }
          ],
          "start": 173,
          "end": 644
        },
        "abstract": false,
        "declare": false,
        "start": 165,
        "end": 644
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 158,
      "end": 644
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 644
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 158,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 165,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "updateElements",
    "start": 249,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "iScale",
    "start": 264,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "vScale",
    "start": 272,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "reset",
    "start": 280,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 293,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "iAxis",
    "start": 299,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "iScale",
    "start": 307,
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
    "value": "axis",
    "start": 314,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 324,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "vAxis",
    "start": 330,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "vScale",
    "start": 338,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "axis",
    "start": 345,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 355,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "properties",
    "start": 361,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 382,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "iPixel",
    "start": 388,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "properties",
    "start": 397,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "iAxis",
    "start": 408,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "reset",
    "start": 417,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "iScale",
    "start": 425,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "getPixelForDecimal",
    "start": 432,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 450,
    "end": 451
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 451,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "iScale",
    "start": 458,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "getPixelForValue",
    "start": 465,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 481,
    "end": 482
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "const",
    "start": 490,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "vPixel",
    "start": 496,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "properties",
    "start": 505,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "vAxis",
    "start": 516,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "reset",
    "start": 525,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "vScale",
    "start": 533,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "getBasePixel",
    "start": 540,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "vScale",
    "start": 557,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "getPixelForValue",
    "start": 564,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 580,
    "end": 581
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "properties",
    "start": 589,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "skip",
    "start": 600,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "isNaN",
    "start": 607,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "iPixel",
    "start": 613,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 621,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "isNaN",
    "start": 624,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "vPixel",
    "start": 630,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 643,
    "end": 644
  }
]
```
