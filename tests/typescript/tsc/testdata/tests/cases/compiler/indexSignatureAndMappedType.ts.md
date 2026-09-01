__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 131,
        "end": 133
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
              "start": 134,
              "end": 135
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 134,
            "end": 135
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 138
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 147,
              "end": 153
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 137,
            "end": 153
          }
        ],
        "start": 133,
        "end": 154
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                          "start": 166,
                          "end": 172
                        },
                        "start": 164,
                        "end": 172
                      },
                      "start": 161,
                      "end": 172
                    }
                  ],
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
                        "start": 175,
                        "end": 176
                      },
                      "typeArguments": null,
                      "start": 175,
                      "end": 176
                    },
                    "start": 173,
                    "end": 176
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 160,
                  "end": 176
                }
              ],
              "start": 158,
              "end": 178
            },
            "start": 156,
            "end": 178
          },
          "start": 155,
          "end": 178
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 183,
                "end": 189
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 190,
                      "end": 191
                    },
                    "typeArguments": null,
                    "start": 190,
                    "end": 191
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 193,
                      "end": 194
                    },
                    "typeArguments": null,
                    "start": 193,
                    "end": 194
                  }
                ],
                "start": 189,
                "end": 195
              },
              "start": 183,
              "end": 195
            },
            "start": 181,
            "end": 195
          },
          "start": 180,
          "end": 195
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 203,
                "end": 204
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 207,
                "end": 208
              },
              "start": 203,
              "end": 208
            },
            "directive": null,
            "start": 203,
            "end": 209
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 214,
                "end": 215
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 219
              },
              "start": 214,
              "end": 219
            },
            "directive": null,
            "start": 214,
            "end": 220
          }
        ],
        "start": 197,
        "end": 232
      },
      "expression": false,
      "start": 122,
      "end": 232
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 243,
        "end": 245
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
              "start": 246,
              "end": 247
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 246,
            "end": 247
          }
        ],
        "start": 245,
        "end": 248
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                          "start": 260,
                          "end": 266
                        },
                        "start": 258,
                        "end": 266
                      },
                      "start": 255,
                      "end": 266
                    }
                  ],
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
                        "start": 269,
                        "end": 270
                      },
                      "typeArguments": null,
                      "start": 269,
                      "end": 270
                    },
                    "start": 267,
                    "end": 270
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 254,
                  "end": 270
                }
              ],
              "start": 252,
              "end": 272
            },
            "start": 250,
            "end": 272
          },
          "start": 249,
          "end": 272
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 277,
                "end": 283
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 284,
                    "end": 290
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 292,
                      "end": 293
                    },
                    "typeArguments": null,
                    "start": 292,
                    "end": 293
                  }
                ],
                "start": 283,
                "end": 294
              },
              "start": 277,
              "end": 294
            },
            "start": 275,
            "end": 294
          },
          "start": 274,
          "end": 294
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 302,
                "end": 303
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 307
              },
              "start": 302,
              "end": 307
            },
            "directive": null,
            "start": 302,
            "end": 308
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 314
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 317,
                "end": 318
              },
              "start": 313,
              "end": 318
            },
            "directive": null,
            "start": 313,
            "end": 319
          }
        ],
        "start": 296,
        "end": 321
      },
      "expression": false,
      "start": 234,
      "end": 321
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 332,
        "end": 334
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
              "start": 335,
              "end": 336
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 335,
            "end": 336
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 339
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 338,
            "end": 339
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 341,
              "end": 342
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 351,
              "end": 357
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 341,
            "end": 357
          }
        ],
        "start": 334,
        "end": 358
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                          "start": 370,
                          "end": 376
                        },
                        "start": 368,
                        "end": 376
                      },
                      "start": 365,
                      "end": 376
                    }
                  ],
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
                        "start": 379,
                        "end": 380
                      },
                      "typeArguments": null,
                      "start": 379,
                      "end": 380
                    },
                    "start": 377,
                    "end": 380
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 364,
                  "end": 380
                }
              ],
              "start": 362,
              "end": 382
            },
            "start": 360,
            "end": 382
          },
          "start": 359,
          "end": 382
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 387,
                "end": 393
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 394,
                      "end": 395
                    },
                    "typeArguments": null,
                    "start": 394,
                    "end": 395
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 397,
                      "end": 398
                    },
                    "typeArguments": null,
                    "start": 397,
                    "end": 398
                  }
                ],
                "start": 393,
                "end": 399
              },
              "start": 387,
              "end": 399
            },
            "start": 385,
            "end": 399
          },
          "start": 384,
          "end": 399
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 407,
                "end": 408
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 411,
                "end": 412
              },
              "start": 407,
              "end": 412
            },
            "directive": null,
            "start": 407,
            "end": 413
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 428,
                "end": 429
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 432,
                "end": 433
              },
              "start": 428,
              "end": 433
            },
            "directive": null,
            "start": 428,
            "end": 434
          }
        ],
        "start": 401,
        "end": 446
      },
      "expression": false,
      "start": 323,
      "end": 446
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dictionary",
        "optional": false,
        "typeAnnotation": null,
        "start": 475,
        "end": 485
      },
      "typeParameters": null,
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
                    "start": 500,
                    "end": 506
                  },
                  "start": 498,
                  "end": 506
                },
                "start": 495,
                "end": 506
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 509,
                "end": 515
              },
              "start": 507,
              "end": 515
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 494,
            "end": 516
          }
        ],
        "start": 488,
        "end": 518
      },
      "declare": false,
      "start": 470,
      "end": 519
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IBaseEntity",
        "optional": false,
        "typeAnnotation": null,
        "start": 531,
        "end": 542
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 549,
              "end": 553
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 555,
                "end": 561
              },
              "start": 553,
              "end": 561
            },
            "accessibility": null,
            "static": false,
            "start": 549,
            "end": 562
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "properties",
              "optional": false,
              "typeAnnotation": null,
              "start": 567,
              "end": 577
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Dictionary",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 579,
                  "end": 589
                },
                "typeArguments": null,
                "start": 579,
                "end": 589
              },
              "start": 577,
              "end": 589
            },
            "accessibility": null,
            "static": false,
            "start": 567,
            "end": 590
          }
        ],
        "start": 543,
        "end": 592
      },
      "declare": false,
      "start": 521,
      "end": 592
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IEntity",
        "optional": false,
        "typeAnnotation": null,
        "start": 604,
        "end": 611
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
              "start": 612,
              "end": 613
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 622,
              "end": 628
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 612,
            "end": 628
          }
        ],
        "start": 611,
        "end": 629
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IBaseEntity",
            "optional": false,
            "typeAnnotation": null,
            "start": 638,
            "end": 649
          },
          "typeArguments": null,
          "start": 638,
          "end": 649
        }
      ],
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
              "name": "properties",
              "optional": false,
              "typeAnnotation": null,
              "start": 656,
              "end": 666
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 668,
                  "end": 674
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
                        "start": 675,
                        "end": 676
                      },
                      "typeArguments": null,
                      "start": 675,
                      "end": 676
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 678,
                      "end": 684
                    }
                  ],
                  "start": 674,
                  "end": 685
                },
                "start": 668,
                "end": 685
              },
              "start": 666,
              "end": 685
            },
            "accessibility": null,
            "static": false,
            "start": 656,
            "end": 686
          }
        ],
        "start": 650,
        "end": 688
      },
      "declare": false,
      "start": 594,
      "end": 688
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 122,
  "end": 688
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 122,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 131,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 139,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 147,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 161,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 166,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 183,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 234,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 243,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 255,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 260,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 277,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 284,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 323,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 332,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 341,
    "end": 342
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 343,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 351,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 365,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 370,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 387,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "{",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 470,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "Dictionary",
    "start": 475,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 495,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 500,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 509,
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
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 521,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "IBaseEntity",
    "start": 531,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 549,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 555,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "properties",
    "start": 567,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "Dictionary",
    "start": 579,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 591,
    "end": 592
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 594,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "IEntity",
    "start": 604,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 612,
    "end": 613
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 614,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 622,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 630,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "IBaseEntity",
    "start": 638,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "properties",
    "start": 656,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 668,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 678,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 687,
    "end": 688
  }
]
```
