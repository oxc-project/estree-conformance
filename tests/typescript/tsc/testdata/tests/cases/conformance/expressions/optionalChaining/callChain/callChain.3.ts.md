__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "absorb",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 23
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 24,
              "end": 25
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 24,
            "end": 25
          }
        ],
        "start": 23,
        "end": 26
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 31
          },
          "typeArguments": null,
          "start": 30,
          "end": 31
        },
        "start": 28,
        "end": 31
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 32
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSMethodSignature",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 52,
                          "end": 53
                        },
                        "computed": false,
                        "optional": true,
                        "kind": "method",
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
                                "start": 55,
                                "end": 56
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 55,
                              "end": 56
                            }
                          ],
                          "start": 54,
                          "end": 57
                        },
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "obj",
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
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 64,
                                      "end": 65
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
                                          "start": 67,
                                          "end": 68
                                        },
                                        "typeArguments": null,
                                        "start": 67,
                                        "end": 68
                                      },
                                      "start": 65,
                                      "end": 68
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 64,
                                    "end": 68
                                  }
                                ],
                                "start": 63,
                                "end": 69
                              },
                              "start": 61,
                              "end": 69
                            },
                            "start": 58,
                            "end": 69
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 72,
                              "end": 73
                            },
                            "typeArguments": null,
                            "start": 72,
                            "end": 73
                          },
                          "start": 70,
                          "end": 73
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 52,
                        "end": 73
                      }
                    ],
                    "start": 50,
                    "end": 75
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 78,
                    "end": 87
                  }
                ],
                "start": 50,
                "end": 87
              },
              "start": 48,
              "end": 87
            },
            "start": 47,
            "end": 87
          },
          "init": null,
          "definite": false,
          "start": 47,
          "end": 87
        }
      ],
      "declare": true,
      "start": 33,
      "end": 88
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
            "name": "n1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 99,
                "end": 105
              },
              "start": 97,
              "end": 105
            },
            "start": 95,
            "end": 105
          },
          "init": {
            "type": "ChainExpression",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 108,
                  "end": 109
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 111,
                  "end": 112
                },
                "optional": true,
                "computed": false,
                "start": 108,
                "end": 112
              },
              "typeArguments": null,
              "arguments": [
                {
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
                        "start": 116,
                        "end": 117
                      },
                      "value": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 119,
                        "end": 121
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 116,
                      "end": 121
                    }
                  ],
                  "start": 115,
                  "end": 123
                }
              ],
              "optional": true,
              "start": 108,
              "end": 124
            },
            "start": 108,
            "end": 124
          },
          "definite": false,
          "start": 95,
          "end": 124
        }
      ],
      "declare": false,
      "start": 89,
      "end": 125
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
            "name": "n2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 202,
                "end": 208
              },
              "start": 200,
              "end": 208
            },
            "start": 198,
            "end": 208
          },
          "init": {
            "type": "ChainExpression",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 211,
                  "end": 212
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 214,
                  "end": 215
                },
                "optional": true,
                "computed": false,
                "start": 211,
                "end": 215
              },
              "typeArguments": null,
              "arguments": [
                {
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
                        "start": 219,
                        "end": 220
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "absorb",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 222,
                          "end": 228
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 222,
                        "end": 230
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 219,
                      "end": 230
                    }
                  ],
                  "start": 218,
                  "end": 231
                }
              ],
              "optional": true,
              "start": 211,
              "end": 232
            },
            "start": 211,
            "end": 232
          },
          "definite": false,
          "start": 198,
          "end": 232
        }
      ],
      "declare": false,
      "start": 192,
      "end": 233
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
            "name": "n3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 256,
                    "end": 262
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 265,
                    "end": 274
                  }
                ],
                "start": 256,
                "end": 274
              },
              "start": 254,
              "end": 274
            },
            "start": 252,
            "end": 274
          },
          "init": {
            "type": "ChainExpression",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 278
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 280,
                  "end": 281
                },
                "optional": true,
                "computed": false,
                "start": 277,
                "end": 281
              },
              "typeArguments": null,
              "arguments": [
                {
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
                        "start": 285,
                        "end": 286
                      },
                      "value": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 288,
                        "end": 290
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 285,
                      "end": 290
                    }
                  ],
                  "start": 284,
                  "end": 291
                }
              ],
              "optional": true,
              "start": 277,
              "end": 292
            },
            "start": 277,
            "end": 292
          },
          "definite": false,
          "start": 252,
          "end": 292
        }
      ],
      "declare": false,
      "start": 246,
      "end": 293
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
            "name": "n4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 320,
                    "end": 326
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 329,
                    "end": 338
                  }
                ],
                "start": 320,
                "end": 338
              },
              "start": 318,
              "end": 338
            },
            "start": 316,
            "end": 338
          },
          "init": {
            "type": "ChainExpression",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 342
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 344,
                  "end": 345
                },
                "optional": true,
                "computed": false,
                "start": 341,
                "end": 345
              },
              "typeArguments": null,
              "arguments": [
                {
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
                        "start": 349,
                        "end": 350
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "absorb",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 352,
                          "end": 358
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 352,
                        "end": 360
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 349,
                      "end": 360
                    }
                  ],
                  "start": 348,
                  "end": 361
                }
              ],
              "optional": true,
              "start": 341,
              "end": 362
            },
            "start": 341,
            "end": 362
          },
          "definite": false,
          "start": 316,
          "end": 362
        }
      ],
      "declare": false,
      "start": 310,
      "end": 363
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
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 432,
            "end": 434
          },
          "init": {
            "type": "ChainExpression",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 437,
                  "end": 438
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 440,
                  "end": 441
                },
                "optional": true,
                "computed": false,
                "start": 437,
                "end": 441
              },
              "typeArguments": null,
              "arguments": [
                {
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
                        "start": 445,
                        "end": 446
                      },
                      "value": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 448,
                        "end": 450
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 445,
                      "end": 450
                    }
                  ],
                  "start": 444,
                  "end": 451
                }
              ],
              "optional": true,
              "start": 437,
              "end": 452
            },
            "start": 437,
            "end": 452
          },
          "definite": false,
          "start": 432,
          "end": 452
        }
      ],
      "declare": false,
      "start": 428,
      "end": 453
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": null,
          "start": 454,
          "end": 456
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "TSNonNullExpression",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 459,
                  "end": 460
                },
                "start": 459,
                "end": 461
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 462,
                "end": 463
              },
              "optional": false,
              "computed": false,
              "start": 459,
              "end": 463
            },
            "start": 459,
            "end": 464
          },
          "typeArguments": null,
          "arguments": [
            {
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
                    "start": 466,
                    "end": 467
                  },
                  "value": {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 469,
                    "end": 471
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 466,
                  "end": 471
                }
              ],
              "start": 465,
              "end": 472
            }
          ],
          "optional": false,
          "start": 459,
          "end": 473
        },
        "start": 454,
        "end": 473
      },
      "directive": null,
      "start": 454,
      "end": 474
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 474
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
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "absorb",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 33,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 41,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 58,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 78,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 89,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "n1",
    "start": 95,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 99,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 109,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 112,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 119,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 192,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "n2",
    "start": 198,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 202,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 212,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 215,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "absorb",
    "start": 222,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 246,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "n3",
    "start": 252,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 256,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 265,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 278,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 281,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 286,
    "end": 287
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 288,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 310,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "n4",
    "start": 316,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 320,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 329,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 342,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 345,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "absorb",
    "start": 352,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 428,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 432,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 438,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 441,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 446,
    "end": 447
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 448,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 454,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 467,
    "end": 468
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 469,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474
  }
]
```
