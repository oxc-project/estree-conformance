__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 56
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 57,
        "end": 59
      },
      "declare": false,
      "start": 45,
      "end": 59
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 71
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 72,
        "end": 74
      },
      "declare": false,
      "start": 60,
      "end": 74
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
            "name": "opts",
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
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "objectRef",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 101,
                          "end": 110
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUndefinedKeyword",
                            "start": 113,
                            "end": 122
                          },
                          "start": 111,
                          "end": 122
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 101,
                        "end": 123
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getObjectRef",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 124,
                          "end": 136
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
                                "type": "TSAnyKeyword",
                                "start": 144,
                                "end": 147
                              },
                              "start": 141,
                              "end": 147
                            },
                            "start": 138,
                            "end": 147
                          },
                          "start": 136,
                          "end": 147
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 124,
                        "end": 147
                      }
                    ],
                    "start": 99,
                    "end": 149
                  },
                  {
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
                          "name": "objectRef",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 157,
                          "end": 166
                        },
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
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 168,
                                  "end": 169
                                },
                                "typeArguments": null,
                                "start": 168,
                                "end": 169
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 172,
                                  "end": 173
                                },
                                "typeArguments": null,
                                "start": 172,
                                "end": 173
                              }
                            ],
                            "start": 168,
                            "end": 173
                          },
                          "start": 166,
                          "end": 173
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 157,
                        "end": 174
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getObjectRef",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 175,
                          "end": 187
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUndefinedKeyword",
                            "start": 190,
                            "end": 199
                          },
                          "start": 188,
                          "end": 199
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 175,
                        "end": 199
                      }
                    ],
                    "start": 155,
                    "end": 201
                  }
                ],
                "start": 97,
                "end": 201
              },
              "start": 92,
              "end": 201
            },
            "start": 88,
            "end": 201
          },
          "init": null,
          "definite": false,
          "start": 88,
          "end": 201
        }
      ],
      "declare": true,
      "start": 76,
      "end": 202
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "opts",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 208
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "objectRef",
            "optional": false,
            "typeAnnotation": null,
            "start": 209,
            "end": 218
          },
          "optional": false,
          "computed": false,
          "start": 204,
          "end": 218
        },
        "operator": "||",
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "opts",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 226
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getObjectRef",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 239
            },
            "optional": false,
            "computed": false,
            "start": 222,
            "end": 239
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 222,
          "end": 241
        },
        "start": 204,
        "end": 241
      },
      "directive": null,
      "start": 204,
      "end": 242
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 295,
        "end": 296
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
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 306
            },
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
            "accessibility": null,
            "static": false,
            "start": 303,
            "end": 315
          }
        ],
        "start": 297,
        "end": 317
      },
      "declare": false,
      "start": 285,
      "end": 317
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 329,
        "end": 330
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
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 340
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 342,
                "end": 348
              },
              "start": 340,
              "end": 348
            },
            "accessibility": null,
            "static": false,
            "start": 337,
            "end": 349
          }
        ],
        "start": 331,
        "end": 351
      },
      "declare": false,
      "start": 319,
      "end": 351
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 363,
        "end": 365
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
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 372,
              "end": 378
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 380,
                "end": 387
              },
              "start": 378,
              "end": 387
            },
            "accessibility": null,
            "static": false,
            "start": 372,
            "end": 388
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "error",
              "optional": false,
              "typeAnnotation": null,
              "start": 393,
              "end": 398
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 400,
                "end": 409
              },
              "start": 398,
              "end": 409
            },
            "accessibility": null,
            "static": false,
            "start": 393,
            "end": 410
          }
        ],
        "start": 366,
        "end": 412
      },
      "declare": false,
      "start": 353,
      "end": 412
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 424,
        "end": 426
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
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "error",
              "optional": false,
              "typeAnnotation": null,
              "start": 433,
              "end": 438
            },
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
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 440,
                      "end": 441
                    },
                    "typeArguments": null,
                    "start": 440,
                    "end": 441
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 444,
                      "end": 445
                    },
                    "typeArguments": null,
                    "start": 444,
                    "end": 445
                  }
                ],
                "start": 440,
                "end": 445
              },
              "start": 438,
              "end": 445
            },
            "accessibility": null,
            "static": false,
            "start": 433,
            "end": 446
          }
        ],
        "start": 427,
        "end": 448
      },
      "declare": false,
      "start": 414,
      "end": 448
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
            "name": "testMethod",
            "optional": false,
            "typeAnnotation": null,
            "start": 456,
            "end": 466
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
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
                          "name": "A2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 473,
                          "end": 475
                        },
                        "typeArguments": null,
                        "start": 473,
                        "end": 475
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 478,
                          "end": 480
                        },
                        "typeArguments": null,
                        "start": 478,
                        "end": 480
                      }
                    ],
                    "start": 473,
                    "end": 480
                  },
                  "start": 471,
                  "end": 480
                },
                "start": 470,
                "end": 480
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 495,
                      "end": 496
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 497,
                      "end": 502
                    },
                    "optional": false,
                    "computed": false,
                    "start": 495,
                    "end": 502
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 514,
                          "end": 515
                        },
                        "directive": null,
                        "start": 514,
                        "end": 516
                      }
                    ],
                    "start": 504,
                    "end": 543
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 559,
                          "end": 560
                        },
                        "directive": null,
                        "start": 559,
                        "end": 561
                      }
                    ],
                    "start": 549,
                    "end": 588
                  },
                  "start": 491,
                  "end": 588
                }
              ],
              "start": 485,
              "end": 590
            },
            "id": null,
            "generator": false,
            "start": 469,
            "end": 590
          },
          "definite": false,
          "start": 456,
          "end": 590
        }
      ],
      "declare": false,
      "start": 450,
      "end": 590
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 45,
  "end": 591
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 45,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 60,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 76,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 84,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "opts",
    "start": 88,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "objectRef",
    "start": 101,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 113,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "getObjectRef",
    "start": 124,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 141,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 144,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "objectRef",
    "start": 157,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "getObjectRef",
    "start": 175,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 190,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "opts",
    "start": 204,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "objectRef",
    "start": 209,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 219,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "opts",
    "start": 222,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "getObjectRef",
    "start": 227,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "interface",
    "start": 285,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 303,
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
    "value": ";",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 316,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 319,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 337,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 342,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 353,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 363,
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
    "value": "result",
    "start": 372,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 380,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 393,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 400,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 414,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 424,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 433,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 447,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 450,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "testMethod",
    "start": 456,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 473,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 478,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 482,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 485,
    "end": 486
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 491,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 497,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 542,
    "end": 543
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 544,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 589,
    "end": 590
  }
]
```
