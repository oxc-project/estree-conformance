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
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 27,
                "end": 30
              },
              "start": 25,
              "end": 30
            },
            "start": 22,
            "end": 30
          },
          "init": null,
          "definite": false,
          "start": 22,
          "end": 30
        }
      ],
      "declare": true,
      "start": 0,
      "end": 31
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 141,
                      "end": 142
                    },
                    "right": {
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
                            "start": 146,
                            "end": 149
                          },
                          "start": 145,
                          "end": 149
                        }
                      ],
                      "id": null,
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 156,
                        "end": 159
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 145,
                      "end": 159
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 141,
                    "end": 159
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 160
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 166
              },
              "definite": false,
              "start": 140,
              "end": 166
            }
          ],
          "declare": false,
          "start": 134,
          "end": 167
        }
      ],
      "start": 132,
      "end": 169
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 179,
                      "end": 180
                    },
                    "right": {
                      "type": "ClassExpression",
                      "decorators": [],
                      "id": null,
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [
                          {
                            "type": "PropertyDefinition",
                            "decorators": [
                              {
                                "type": "Decorator",
                                "expression": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dec",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 192,
                                  "end": 195
                                },
                                "start": 191,
                                "end": 195
                              }
                            ],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 196,
                              "end": 197
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 199,
                                "end": 202
                              },
                              "start": 197,
                              "end": 202
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
                            "start": 191,
                            "end": 203
                          }
                        ],
                        "start": 189,
                        "end": 205
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 183,
                      "end": 205
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 179,
                    "end": 205
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 178,
                "end": 206
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 209,
                "end": 212
              },
              "definite": false,
              "start": 178,
              "end": 212
            }
          ],
          "declare": false,
          "start": 172,
          "end": 213
        }
      ],
      "start": 170,
      "end": 215
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
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
                      "start": 326,
                      "end": 327
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 326,
                        "end": 327
                      },
                      "right": {
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
                              "start": 331,
                              "end": 334
                            },
                            "start": 330,
                            "end": 334
                          }
                        ],
                        "id": null,
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 341,
                          "end": 344
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 330,
                        "end": 344
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 326,
                      "end": 344
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 326,
                    "end": 344
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 324,
                "end": 346
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 349,
                "end": 352
              },
              "definite": false,
              "start": 324,
              "end": 352
            }
          ],
          "declare": false,
          "start": 318,
          "end": 353
        }
      ],
      "start": 316,
      "end": 355
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
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
                      "start": 366,
                      "end": 367
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 366,
                        "end": 367
                      },
                      "right": {
                        "type": "ClassExpression",
                        "decorators": [],
                        "id": null,
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [
                            {
                              "type": "PropertyDefinition",
                              "decorators": [
                                {
                                  "type": "Decorator",
                                  "expression": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "dec",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 379,
                                    "end": 382
                                  },
                                  "start": 378,
                                  "end": 382
                                }
                              ],
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 383,
                                "end": 384
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 386,
                                  "end": 389
                                },
                                "start": 384,
                                "end": 389
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
                              "start": 378,
                              "end": 390
                            }
                          ],
                          "start": 376,
                          "end": 392
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 370,
                        "end": 392
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 366,
                      "end": 392
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 366,
                    "end": 392
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 364,
                "end": 394
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 397,
                "end": 400
              },
              "definite": false,
              "start": 364,
              "end": 400
            }
          ],
          "declare": false,
          "start": 358,
          "end": 401
        }
      ],
      "start": 356,
      "end": 403
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 415,
                      "end": 416
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 418,
                        "end": 419
                      },
                      "right": {
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
                              "start": 423,
                              "end": 426
                            },
                            "start": 422,
                            "end": 426
                          }
                        ],
                        "id": null,
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 433,
                          "end": 436
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 422,
                        "end": 436
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 418,
                      "end": 436
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 415,
                    "end": 436
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 413,
                "end": 438
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 441,
                "end": 444
              },
              "definite": false,
              "start": 413,
              "end": 444
            }
          ],
          "declare": false,
          "start": 407,
          "end": 445
        }
      ],
      "start": 405,
      "end": 447
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
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
                      "start": 458,
                      "end": 459
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 461,
                        "end": 462
                      },
                      "right": {
                        "type": "ClassExpression",
                        "decorators": [],
                        "id": null,
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [
                            {
                              "type": "PropertyDefinition",
                              "decorators": [
                                {
                                  "type": "Decorator",
                                  "expression": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "dec",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 474,
                                    "end": 477
                                  },
                                  "start": 473,
                                  "end": 477
                                }
                              ],
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 478,
                                "end": 479
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 481,
                                  "end": 484
                                },
                                "start": 479,
                                "end": 484
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
                              "start": 473,
                              "end": 485
                            }
                          ],
                          "start": 471,
                          "end": 487
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 465,
                        "end": 487
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 461,
                      "end": 487
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 458,
                    "end": 487
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 456,
                "end": 489
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 492,
                "end": 495
              },
              "definite": false,
              "start": 456,
              "end": 495
            }
          ],
          "declare": false,
          "start": 450,
          "end": 496
        }
      ],
      "start": 448,
      "end": 498
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 499
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
    "value": "let",
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
    "value": ",",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 22,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 27,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 134,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "@",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 146,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 150,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 172,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 183,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 192,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 199,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 209,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 316,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 318,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 331,
    "end": 334
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 335,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 349,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 358,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 368,
    "end": 369
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 370,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 379,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 386,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
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
    "value": "obj",
    "start": 397,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 407,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 423,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 427,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 441,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "const",
    "start": 450,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 463,
    "end": 464
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 465,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 474,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 481,
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
    "value": "}",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 492,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 497,
    "end": 498
  }
]
```
