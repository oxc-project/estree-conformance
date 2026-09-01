__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fs",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 9
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "fs",
          "raw": "'fs'",
          "start": 20,
          "end": 24
        },
        "start": 12,
        "end": 25
      },
      "importKind": "value",
      "start": 0,
      "end": 26
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "readdir",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 43
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 50,
              "end": 56
            },
            "start": 48,
            "end": 56
          },
          "start": 44,
          "end": 56
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "accept",
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
                  "name": "stat",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 73,
                          "end": 75
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Stats",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 76,
                          "end": 81
                        },
                        "start": 73,
                        "end": 81
                      },
                      "typeArguments": null,
                      "start": 73,
                      "end": 81
                    },
                    "start": 71,
                    "end": 81
                  },
                  "start": 67,
                  "end": 81
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 89,
                      "end": 95
                    },
                    "start": 87,
                    "end": 95
                  },
                  "start": 83,
                  "end": 95
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 100,
                  "end": 107
                },
                "start": 97,
                "end": 107
              },
              "start": 66,
              "end": 107
            },
            "start": 64,
            "end": 107
          },
          "start": 58,
          "end": 107
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
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
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 127,
                        "end": 132
                      },
                      "typeArguments": null,
                      "start": 127,
                      "end": 132
                    },
                    "start": 125,
                    "end": 132
                  },
                  "start": 120,
                  "end": 132
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "results",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
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
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 145,
                              "end": 149
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 151,
                                "end": 157
                              },
                              "start": 149,
                              "end": 157
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 145,
                            "end": 158
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "stat",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 159,
                              "end": 163
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "fs",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 165,
                                    "end": 167
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Stats",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 168,
                                    "end": 173
                                  },
                                  "start": 165,
                                  "end": 173
                                },
                                "typeArguments": null,
                                "start": 165,
                                "end": 173
                              },
                              "start": 163,
                              "end": 173
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 159,
                            "end": 174
                          }
                        ],
                        "start": 143,
                        "end": 176
                      },
                      "start": 143,
                      "end": 178
                    },
                    "start": 141,
                    "end": 178
                  },
                  "start": 134,
                  "end": 178
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 183,
                  "end": 187
                },
                "start": 180,
                "end": 187
              },
              "start": 119,
              "end": 187
            },
            "start": 117,
            "end": 187
          },
          "start": 109,
          "end": 187
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 190,
        "end": 192
      },
      "expression": false,
      "start": 27,
      "end": 192
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "join",
        "optional": false,
        "typeAnnotation": null,
        "start": 203,
        "end": 207
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "paths",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 216
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 218,
                "end": 224
              },
              "start": 218,
              "end": 226
            },
            "start": 216,
            "end": 226
          },
          "value": null,
          "start": 208,
          "end": 226
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 228,
        "end": 230
      },
      "expression": false,
      "start": 194,
      "end": 230
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "instrumentFile",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 255
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "covFileDir",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 268,
              "end": 274
            },
            "start": 266,
            "end": 274
          },
          "start": 256,
          "end": 274
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "covFileName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 289,
              "end": 295
            },
            "start": 287,
            "end": 295
          },
          "start": 276,
          "end": 295
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "originalFilePath",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 315,
              "end": 321
            },
            "start": 313,
            "end": 321
          },
          "start": 297,
          "end": 321
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 329,
                  "end": 331
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "readFile",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 332,
                  "end": 340
                },
                "optional": false,
                "computed": false,
                "start": 329,
                "end": 340
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "originalFilePath",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 357
                },
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
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
                            "name": "readdir",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 382,
                            "end": 389
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "covFileDir",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 390,
                              "end": 400
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 408,
                                "end": 419
                              },
                              "id": null,
                              "generator": false,
                              "start": 402,
                              "end": 419
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "error",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Error",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 430,
                                        "end": 435
                                      },
                                      "typeArguments": null,
                                      "start": 430,
                                      "end": 435
                                    },
                                    "start": 428,
                                    "end": 435
                                  },
                                  "start": 423,
                                  "end": 435
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "files",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSArrayType",
                                      "elementType": {
                                        "type": "TSTypeLiteral",
                                        "members": [],
                                        "start": 444,
                                        "end": 446
                                      },
                                      "start": 444,
                                      "end": 448
                                    },
                                    "start": 442,
                                    "end": 448
                                  },
                                  "start": 437,
                                  "end": 448
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
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "files",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 471,
                                          "end": 476
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "forEach",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 477,
                                          "end": 484
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 471,
                                        "end": 484
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "ArrowFunctionExpression",
                                          "expression": false,
                                          "async": false,
                                          "typeParameters": null,
                                          "params": [
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "file",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 486,
                                              "end": 490
                                            }
                                          ],
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
                                                      "name": "fullPath",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 521,
                                                      "end": 529
                                                    },
                                                    "init": {
                                                      "type": "CallExpression",
                                                      "callee": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "join",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 532,
                                                        "end": 536
                                                      },
                                                      "typeArguments": null,
                                                      "arguments": [
                                                        {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "IDoNotExist",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 537,
                                                          "end": 548
                                                        }
                                                      ],
                                                      "optional": false,
                                                      "start": 532,
                                                      "end": 549
                                                    },
                                                    "definite": false,
                                                    "start": 521,
                                                    "end": 549
                                                  }
                                                ],
                                                "declare": false,
                                                "start": 517,
                                                "end": 550
                                              }
                                            ],
                                            "start": 495,
                                            "end": 568
                                          },
                                          "id": null,
                                          "generator": false,
                                          "start": 485,
                                          "end": 568
                                        }
                                      ],
                                      "optional": false,
                                      "start": 471,
                                      "end": 570
                                    },
                                    "directive": null,
                                    "start": 471,
                                    "end": 571
                                  }
                                ],
                                "start": 453,
                                "end": 585
                              },
                              "id": null,
                              "generator": false,
                              "start": 422,
                              "end": 585
                            }
                          ],
                          "optional": false,
                          "start": 382,
                          "end": 587
                        },
                        "directive": null,
                        "start": 382,
                        "end": 588
                      }
                    ],
                    "start": 365,
                    "end": 594
                  },
                  "id": null,
                  "generator": false,
                  "start": 359,
                  "end": 594
                }
              ],
              "optional": false,
              "start": 329,
              "end": 596
            },
            "directive": null,
            "start": 329,
            "end": 597
          }
        ],
        "start": 323,
        "end": 599
      },
      "expression": false,
      "start": 232,
      "end": 599
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 599
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 7,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 12,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "String",
    "value": "'fs'",
    "start": 20,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 27,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "readdir",
    "start": 36,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 44,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 50,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "accept",
    "start": 58,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "stat",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 73,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "Stats",
    "start": 76,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 83,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 97,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 100,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 109,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 120,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 127,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 134,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 145,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 151,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "stat",
    "start": 159,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 165,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "Stats",
    "start": 168,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 180,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 183,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 194,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "join",
    "start": 203,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 208,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "paths",
    "start": 211,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 218,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "{",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 232,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "instrumentFile",
    "start": 241,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "covFileDir",
    "start": 256,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 268,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "covFileName",
    "start": 276,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 289,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "originalFilePath",
    "start": 297,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 315,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 329,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "readFile",
    "start": 332,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "originalFilePath",
    "start": 341,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 362,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "readdir",
    "start": 382,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "covFileDir",
    "start": 390,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 405,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 423,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 430,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "files",
    "start": 437,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 450,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "files",
    "start": 471,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 477,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 486,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 492,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 495,
    "end": 496
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 517,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "fullPath",
    "start": 521,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "join",
    "start": 532,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "IDoNotExist",
    "start": 537,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 569,
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
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "}",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 598,
    "end": 599
  }
]
```
