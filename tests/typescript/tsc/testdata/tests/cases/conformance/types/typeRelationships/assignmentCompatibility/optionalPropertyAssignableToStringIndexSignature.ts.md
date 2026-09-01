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
            "name": "optionalProperties",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 34,
                      "end": 36
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 39,
                        "end": 45
                      },
                      "start": 37,
                      "end": 45
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 34,
                    "end": 45
                  }
                ],
                "start": 32,
                "end": 47
              },
              "start": 30,
              "end": 47
            },
            "start": 12,
            "end": 47
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 47
        }
      ],
      "declare": true,
      "start": 0,
      "end": 48
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefinedProperties",
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
                      "name": "k1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 84,
                      "end": 86
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 88,
                            "end": 94
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 97,
                            "end": 106
                          }
                        ],
                        "start": 88,
                        "end": 106
                      },
                      "start": 86,
                      "end": 106
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 84,
                    "end": 106
                  }
                ],
                "start": 82,
                "end": 108
              },
              "start": 80,
              "end": 108
            },
            "start": 61,
            "end": 108
          },
          "init": null,
          "definite": false,
          "start": 61,
          "end": 108
        }
      ],
      "declare": true,
      "start": 49,
      "end": 109
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringDictionary",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 149,
                            "end": 155
                          },
                          "start": 147,
                          "end": 155
                        },
                        "start": 144,
                        "end": 155
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 158,
                        "end": 164
                      },
                      "start": 156,
                      "end": 164
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 143,
                    "end": 164
                  }
                ],
                "start": 141,
                "end": 166
              },
              "start": 139,
              "end": 166
            },
            "start": 123,
            "end": 166
          },
          "init": null,
          "definite": false,
          "start": 123,
          "end": 166
        }
      ],
      "declare": true,
      "start": 111,
      "end": 167
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringDictionary",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 184
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "optionalProperties",
          "optional": false,
          "typeAnnotation": null,
          "start": 187,
          "end": 205
        },
        "start": 168,
        "end": 205
      },
      "directive": null,
      "start": 168,
      "end": 206
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringDictionary",
          "optional": false,
          "typeAnnotation": null,
          "start": 214,
          "end": 230
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefinedProperties",
          "optional": false,
          "typeAnnotation": null,
          "start": 233,
          "end": 252
        },
        "start": 214,
        "end": 252
      },
      "directive": null,
      "start": 214,
      "end": 253
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "probablyArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 299,
                            "end": 305
                          },
                          "start": 297,
                          "end": 305
                        },
                        "start": 294,
                        "end": 305
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 308,
                        "end": 314
                      },
                      "start": 306,
                      "end": 314
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 293,
                    "end": 314
                  }
                ],
                "start": 291,
                "end": 316
              },
              "start": 289,
              "end": 316
            },
            "start": 276,
            "end": 316
          },
          "init": null,
          "definite": false,
          "start": 276,
          "end": 316
        }
      ],
      "declare": true,
      "start": 264,
      "end": 317
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberLiteralKeys",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 351,
                      "end": 352
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 355,
                        "end": 361
                      },
                      "start": 353,
                      "end": 361
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 351,
                    "end": 361
                  }
                ],
                "start": 349,
                "end": 363
              },
              "start": 347,
              "end": 363
            },
            "start": 330,
            "end": 363
          },
          "init": null,
          "definite": false,
          "start": 330,
          "end": 363
        }
      ],
      "declare": true,
      "start": 318,
      "end": 364
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "probablyArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 365,
          "end": 378
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "numberLiteralKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 381,
          "end": 398
        },
        "start": 365,
        "end": 398
      },
      "directive": null,
      "start": 365,
      "end": 399
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "optionalUndefined",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 444,
                      "end": 446
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUndefinedKeyword",
                        "start": 449,
                        "end": 458
                      },
                      "start": 447,
                      "end": 458
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 444,
                    "end": 458
                  }
                ],
                "start": 442,
                "end": 460
              },
              "start": 440,
              "end": 460
            },
            "start": 423,
            "end": 460
          },
          "init": null,
          "definite": false,
          "start": 423,
          "end": 460
        }
      ],
      "declare": true,
      "start": 411,
      "end": 461
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dict",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 480,
                            "end": 486
                          },
                          "start": 478,
                          "end": 486
                        },
                        "start": 475,
                        "end": 486
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 489,
                        "end": 495
                      },
                      "start": 487,
                      "end": 495
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 474,
                    "end": 495
                  }
                ],
                "start": 472,
                "end": 497
              },
              "start": 470,
              "end": 497
            },
            "start": 466,
            "end": 497
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "optionalUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 500,
            "end": 517
          },
          "definite": false,
          "start": 466,
          "end": 517
        }
      ],
      "declare": false,
      "start": 462,
      "end": 518
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 538,
        "end": 539
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 540,
              "end": 541
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 540,
            "end": 541
          }
        ],
        "start": 539,
        "end": 542
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "optional",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "k1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 564,
                            "end": 566
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 569,
                                "end": 570
                              },
                              "typeArguments": null,
                              "start": 569,
                              "end": 570
                            },
                            "start": 567,
                            "end": 570
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 564,
                          "end": 570
                        }
                      ],
                      "start": 562,
                      "end": 572
                    },
                    "start": 560,
                    "end": 572
                  },
                  "start": 552,
                  "end": 572
                },
                "init": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 575,
                    "end": 584
                  },
                  "start": 575,
                  "end": 585
                },
                "definite": false,
                "start": 552,
                "end": 585
              }
            ],
            "declare": false,
            "start": 548,
            "end": 586
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dict",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 606,
                                  "end": 612
                                },
                                "start": 604,
                                "end": 612
                              },
                              "start": 601,
                              "end": 612
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 615,
                                    "end": 616
                                  },
                                  "typeArguments": null,
                                  "start": 615,
                                  "end": 616
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 619,
                                  "end": 625
                                }
                              ],
                              "start": 615,
                              "end": 625
                            },
                            "start": 613,
                            "end": 625
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 600,
                          "end": 625
                        }
                      ],
                      "start": 598,
                      "end": 627
                    },
                    "start": 596,
                    "end": 627
                  },
                  "start": 592,
                  "end": 627
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optional",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 630,
                  "end": 638
                },
                "definite": false,
                "start": 592,
                "end": 638
              }
            ],
            "declare": false,
            "start": 588,
            "end": 639
          }
        ],
        "start": 545,
        "end": 647
      },
      "expression": false,
      "start": 529,
      "end": 647
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 647
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
    "value": "optionalProperties",
    "start": 12,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 34,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 49,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 57,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "undefinedProperties",
    "start": 61,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 84,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 97,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 111,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 119,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "stringDictionary",
    "start": 123,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 144,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 149,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "stringDictionary",
    "start": 168,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "optionalProperties",
    "start": 187,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "stringDictionary",
    "start": 214,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "undefinedProperties",
    "start": 233,
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
    "value": "declare",
    "start": 264,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 272,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "probablyArray",
    "start": 276,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 294,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 299,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 308,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 318,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 326,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "numberLiteralKeys",
    "start": 330,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 349,
    "end": 350
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 355,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "probablyArray",
    "start": 365,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "numberLiteralKeys",
    "start": 381,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 411,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 419,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "optionalUndefined",
    "start": 423,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 444,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 449,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 462,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "dict",
    "start": 466,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "key",
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
    "value": "string",
    "start": 480,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 489,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "optionalUndefined",
    "start": 500,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 529,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 545,
    "end": 546
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 548,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 552,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 564,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 575,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 585,
    "end": 586
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 588,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "dict",
    "start": 592,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 601,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 606,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 619,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 630,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 646,
    "end": 647
  }
]
```
