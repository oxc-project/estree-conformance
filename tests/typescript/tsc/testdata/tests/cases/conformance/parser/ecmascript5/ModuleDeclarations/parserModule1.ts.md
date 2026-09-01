__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CompilerDiagnostics",
          "optional": false,
          "typeAnnotation": null,
          "start": 21,
          "end": 40
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
                      "name": "debug",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 62,
                      "end": 67
                    },
                    "init": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 70,
                      "end": 75
                    },
                    "definite": false,
                    "start": 62,
                    "end": 75
                  }
                ],
                "declare": false,
                "start": 58,
                "end": 76
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 51,
              "end": 76
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IDiagnosticWriter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 102,
                  "end": 119
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Alert",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 134,
                        "end": 139
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "output",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 148,
                              "end": 154
                            },
                            "start": 146,
                            "end": 154
                          },
                          "start": 140,
                          "end": 154
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 157,
                          "end": 161
                        },
                        "start": 155,
                        "end": 161
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 134,
                      "end": 162
                    }
                  ],
                  "start": 120,
                  "end": 172
                },
                "declare": false,
                "start": 92,
                "end": 172
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 85,
              "end": 172
            },
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
                      "name": "diagnosticWriter",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IDiagnosticWriter",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 211,
                            "end": 228
                          },
                          "typeArguments": null,
                          "start": 211,
                          "end": 228
                        },
                        "start": 209,
                        "end": 228
                      },
                      "start": 193,
                      "end": 228
                    },
                    "init": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 231,
                      "end": 235
                    },
                    "definite": false,
                    "start": 193,
                    "end": 235
                  }
                ],
                "declare": false,
                "start": 189,
                "end": 236
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 182,
              "end": 236
            },
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
                      "name": "analysisPass",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 271,
                          "end": 277
                        },
                        "start": 269,
                        "end": 277
                      },
                      "start": 257,
                      "end": 277
                    },
                    "init": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 280,
                      "end": 281
                    },
                    "definite": false,
                    "start": 257,
                    "end": 281
                  }
                ],
                "declare": false,
                "start": 253,
                "end": 282
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 246,
              "end": 282
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Alert",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 308,
                  "end": 313
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "output",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 322,
                        "end": 328
                      },
                      "start": 320,
                      "end": 328
                    },
                    "start": 314,
                    "end": 328
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "diagnosticWriter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 348,
                        "end": 364
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "diagnosticWriter",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 384,
                                  "end": 400
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Alert",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 401,
                                  "end": 406
                                },
                                "optional": false,
                                "computed": false,
                                "start": 384,
                                "end": 406
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "output",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 407,
                                  "end": 413
                                }
                              ],
                              "optional": false,
                              "start": 384,
                              "end": 414
                            },
                            "directive": null,
                            "start": 384,
                            "end": 415
                          }
                        ],
                        "start": 366,
                        "end": 429
                      },
                      "alternate": null,
                      "start": 344,
                      "end": 429
                    }
                  ],
                  "start": 330,
                  "end": 439
                },
                "expression": false,
                "start": 299,
                "end": 439
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 292,
              "end": 439
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "debugPrint",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 465,
                  "end": 475
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 479,
                        "end": 485
                      },
                      "start": 477,
                      "end": 485
                    },
                    "start": 476,
                    "end": 485
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "debug",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 505,
                        "end": 510
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Alert",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 530,
                                "end": 535
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 536,
                                  "end": 537
                                }
                              ],
                              "optional": false,
                              "start": 530,
                              "end": 538
                            },
                            "directive": null,
                            "start": 530,
                            "end": 539
                          }
                        ],
                        "start": 512,
                        "end": 553
                      },
                      "alternate": null,
                      "start": 501,
                      "end": 553
                    }
                  ],
                  "start": 487,
                  "end": 563
                },
                "expression": false,
                "start": 456,
                "end": 563
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 449,
              "end": 563
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "assert",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 589,
                  "end": 595
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "condition",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 607,
                        "end": 614
                      },
                      "start": 605,
                      "end": 614
                    },
                    "start": 596,
                    "end": 614
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 619,
                        "end": 625
                      },
                      "start": 617,
                      "end": 625
                    },
                    "start": 616,
                    "end": 625
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "debug",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 645,
                        "end": 650
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "UnaryExpression",
                              "operator": "!",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "condition",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 675,
                                "end": 684
                              },
                              "prefix": true,
                              "start": 674,
                              "end": 684
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Alert",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 708,
                                      "end": 713
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "s",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 714,
                                        "end": 715
                                      }
                                    ],
                                    "optional": false,
                                    "start": 708,
                                    "end": 716
                                  },
                                  "directive": null,
                                  "start": 708,
                                  "end": 717
                                }
                              ],
                              "start": 686,
                              "end": 735
                            },
                            "alternate": null,
                            "start": 670,
                            "end": 735
                          }
                        ],
                        "start": 652,
                        "end": 749
                      },
                      "alternate": null,
                      "start": 641,
                      "end": 749
                    }
                  ],
                  "start": 627,
                  "end": 759
                },
                "expression": false,
                "start": 580,
                "end": 759
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 573,
              "end": 759
            }
          ],
          "start": 41,
          "end": 766
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 11,
        "end": 766
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4,
      "end": 766
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 4,
  "end": 766
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 4,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 11,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "CompilerDiagnostics",
    "start": 21,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 51,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 58,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "debug",
    "start": 62,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 68,
    "end": 69
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 70,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 85,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 92,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "IDiagnosticWriter",
    "start": 102,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "Alert",
    "start": 134,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 140,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 148,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 182,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 189,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "diagnosticWriter",
    "start": 193,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "IDiagnosticWriter",
    "start": 211,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 229,
    "end": 230
  },
  {
    "type": "Null",
    "value": "null",
    "start": 231,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 246,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 253,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "analysisPass",
    "start": 257,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 271,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 278,
    "end": 279
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 292,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 299,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "Alert",
    "start": 308,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 314,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 322,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 344,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "diagnosticWriter",
    "start": 348,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "diagnosticWriter",
    "start": 384,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "Alert",
    "start": 401,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 407,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 438,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 449,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 456,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "debugPrint",
    "start": 465,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 479,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 487,
    "end": 488
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 501,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "debug",
    "start": 505,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "Alert",
    "start": 530,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 562,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 573,
    "end": 579
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 580,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 589,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 596,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 607,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 619,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 627,
    "end": 628
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 641,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "debug",
    "start": 645,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 652,
    "end": 653
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 670,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 675,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "Alert",
    "start": 708,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 765,
    "end": 766
  }
]
```
