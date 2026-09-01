__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 8,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "SymbolConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 46
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": true,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obs",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 62,
                    "end": 65
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 67,
                      "end": 73
                    },
                    "start": 65,
                    "end": 73
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 53,
                  "end": 73
                }
              ],
              "start": 47,
              "end": 77
            },
            "declare": false,
            "start": 19,
            "end": 77
          }
        ],
        "start": 15,
        "end": 79
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 0,
      "end": 79
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
            "name": "observable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 106,
                    "end": 112
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obs",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 113,
                    "end": 116
                  },
                  "start": 106,
                  "end": 116
                },
                "typeArguments": null,
                "start": 99,
                "end": 116
              },
              "start": 97,
              "end": 116
            },
            "start": 87,
            "end": 116
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 125
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "obs",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 129
            },
            "optional": false,
            "computed": false,
            "start": 119,
            "end": 129
          },
          "definite": false,
          "start": 87,
          "end": 129
        }
      ],
      "declare": false,
      "start": 81,
      "end": 129
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyObservable",
          "optional": false,
          "typeAnnotation": null,
          "start": 144,
          "end": 156
        },
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
                "start": 157,
                "end": 158
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 157,
              "end": 158
            }
          ],
          "start": 156,
          "end": 159
        },
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
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 166,
                "end": 177
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
                    "type": "TSParameterProperty",
                    "accessibility": "private",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_val",
                      "optional": false,
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
                            "start": 192,
                            "end": 193
                          },
                          "typeArguments": null,
                          "start": 192,
                          "end": 193
                        },
                        "start": 190,
                        "end": 193
                      },
                      "start": 186,
                      "end": 193
                    },
                    "readonly": false,
                    "static": false,
                    "start": 178,
                    "end": 193
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 195,
                  "end": 197
                },
                "expression": false,
                "start": 177,
                "end": 197
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 166,
              "end": 197
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "subscribe",
                "optional": false,
                "typeAnnotation": null,
                "start": 203,
                "end": 212
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
                    "name": "next",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "val",
                            "optional": false,
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
                                  "start": 225,
                                  "end": 226
                                },
                                "typeArguments": null,
                                "start": 225,
                                "end": 226
                              },
                              "start": 223,
                              "end": 226
                            },
                            "start": 220,
                            "end": 226
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 231,
                            "end": 235
                          },
                          "start": 228,
                          "end": 235
                        },
                        "start": 219,
                        "end": 235
                      },
                      "start": 217,
                      "end": 235
                    },
                    "start": 213,
                    "end": 235
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "next",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 247,
                          "end": 251
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 252,
                              "end": 256
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_val",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 257,
                              "end": 261
                            },
                            "optional": false,
                            "computed": false,
                            "start": 252,
                            "end": 261
                          }
                        ],
                        "optional": false,
                        "start": 247,
                        "end": 262
                      },
                      "directive": null,
                      "start": 247,
                      "end": 262
                    }
                  ],
                  "start": 237,
                  "end": 268
                },
                "expression": false,
                "start": 212,
                "end": 268
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 203,
              "end": 268
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "observable",
                "optional": false,
                "typeAnnotation": null,
                "start": 275,
                "end": 285
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
                        "type": "ThisExpression",
                        "start": 306,
                        "end": 310
                      },
                      "start": 299,
                      "end": 310
                    }
                  ],
                  "start": 289,
                  "end": 316
                },
                "expression": false,
                "start": 286,
                "end": 316
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 274,
              "end": 316
            }
          ],
          "start": 160,
          "end": 318
        },
        "abstract": false,
        "declare": false,
        "start": 138,
        "end": 318
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 131,
      "end": 318
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InteropObservable",
        "optional": false,
        "typeAnnotation": null,
        "start": 325,
        "end": 342
      },
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
              "start": 343,
              "end": 344
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 343,
            "end": 344
          }
        ],
        "start": 342,
        "end": 345
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 355,
                "end": 361
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "obs",
                "optional": false,
                "typeAnnotation": null,
                "start": 362,
                "end": 365
              },
              "optional": false,
              "computed": false,
              "start": 355,
              "end": 365
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSMethodSignature",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "subscribe",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 376,
                          "end": 385
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "next",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "val",
                                    "optional": false,
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
                                          "start": 398,
                                          "end": 399
                                        },
                                        "typeArguments": null,
                                        "start": 398,
                                        "end": 399
                                      },
                                      "start": 396,
                                      "end": 399
                                    },
                                    "start": 393,
                                    "end": 399
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "start": 404,
                                    "end": 408
                                  },
                                  "start": 401,
                                  "end": 408
                                },
                                "start": 392,
                                "end": 408
                              },
                              "start": 390,
                              "end": 408
                            },
                            "start": 386,
                            "end": 408
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 411,
                            "end": 415
                          },
                          "start": 409,
                          "end": 415
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 376,
                        "end": 415
                      }
                    ],
                    "start": 374,
                    "end": 417
                  },
                  "start": 371,
                  "end": 417
                },
                "start": 368,
                "end": 417
              },
              "start": 366,
              "end": 417
            },
            "accessibility": null,
            "static": false,
            "start": 354,
            "end": 417
          }
        ],
        "start": 348,
        "end": 419
      },
      "declare": false,
      "start": 320,
      "end": 419
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "from",
        "optional": false,
        "typeAnnotation": null,
        "start": 430,
        "end": 434
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
              "start": 435,
              "end": 436
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 435,
            "end": 436
          }
        ],
        "start": 434,
        "end": 437
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InteropObservable",
                "optional": false,
                "typeAnnotation": null,
                "start": 443,
                "end": 460
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 461,
                      "end": 462
                    },
                    "typeArguments": null,
                    "start": 461,
                    "end": 462
                  }
                ],
                "start": 460,
                "end": 463
              },
              "start": 443,
              "end": 463
            },
            "start": 441,
            "end": 463
          },
          "start": 438,
          "end": 463
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 478,
                  "end": 481
                },
                "property": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 482,
                    "end": 488
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obs",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 489,
                    "end": 492
                  },
                  "optional": false,
                  "computed": false,
                  "start": 482,
                  "end": 492
                },
                "optional": false,
                "computed": true,
                "start": 478,
                "end": 493
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 478,
              "end": 495
            },
            "start": 471,
            "end": 495
          }
        ],
        "start": 465,
        "end": 497
      },
      "expression": false,
      "start": 421,
      "end": 497
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "from",
          "optional": false,
          "typeAnnotation": null,
          "start": 499,
          "end": 503
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyObservable",
              "optional": false,
              "typeAnnotation": null,
              "start": 508,
              "end": 520
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 521,
                "end": 523
              }
            ],
            "start": 504,
            "end": 524
          }
        ],
        "optional": false,
        "start": 499,
        "end": 525
      },
      "directive": null,
      "start": 499,
      "end": 525
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 525
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
    "type": "Identifier",
    "value": "global",
    "start": 8,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 19,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "SymbolConstructor",
    "start": 29,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 53,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "obs",
    "start": 62,
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
    "value": "symbol",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 81,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "observable",
    "start": 87,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 99,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 106,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "obs",
    "start": 113,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "obs",
    "start": 126,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 131,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 138,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "MyObservable",
    "start": 144,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 166,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 178,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "_val",
    "start": 186,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "subscribe",
    "start": 203,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 213,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 220,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 228,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 231,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "next",
    "start": 247,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 252,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "_val",
    "start": 257,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "observable",
    "start": 275,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 289,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 299,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 306,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 320,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "InteropObservable",
    "start": 325,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 355,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "obs",
    "start": 362,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 371,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "subscribe",
    "start": 376,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 386,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 393,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 401,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 404,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 411,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 421,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 430,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "obs",
    "start": 438,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "InteropObservable",
    "start": 443,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 465,
    "end": 466
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 471,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "obs",
    "start": 478,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 482,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "obs",
    "start": 489,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 499,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 503,
    "end": 504
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 504,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "MyObservable",
    "start": 508,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 521,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 524,
    "end": 525
  }
]
```
