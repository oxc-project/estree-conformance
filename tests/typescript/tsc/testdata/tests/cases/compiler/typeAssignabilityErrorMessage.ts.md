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
        "name": "ThroughStream",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 68
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 76
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 78,
                "end": 84
              },
              "start": 76,
              "end": 84
            },
            "accessibility": null,
            "static": false,
            "start": 75,
            "end": 85
          }
        ],
        "start": 69,
        "end": 87
      },
      "declare": false,
      "start": 45,
      "end": 87
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReadStream",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 108
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 116
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 118,
                "end": 124
              },
              "start": 116,
              "end": 124
            },
            "accessibility": null,
            "static": false,
            "start": 115,
            "end": 125
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 131
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 133,
                "end": 139
              },
              "start": 131,
              "end": 139
            },
            "accessibility": null,
            "static": false,
            "start": 130,
            "end": 140
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 146
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 148,
                "end": 155
              },
              "start": 146,
              "end": 155
            },
            "accessibility": null,
            "static": false,
            "start": 145,
            "end": 156
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 162
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 164,
                  "end": 170
                },
                "typeArguments": null,
                "start": 164,
                "end": 170
              },
              "start": 162,
              "end": 170
            },
            "accessibility": null,
            "static": false,
            "start": 161,
            "end": 171
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 177
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 179,
                "end": 185
              },
              "start": 177,
              "end": 185
            },
            "accessibility": null,
            "static": false,
            "start": 176,
            "end": 186
          }
        ],
        "start": 109,
        "end": 188
      },
      "declare": false,
      "start": 88,
      "end": 188
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 201
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReadStream",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 215
          },
          "typeArguments": null,
          "start": 205,
          "end": 215
        },
        "start": 203,
        "end": 215
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 229,
                  "end": 238
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 242,
                  "end": 245
                },
                "start": 229,
                "end": 245
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ThroughStream",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 249,
                  "end": 262
                },
                "typeArguments": null,
                "start": 249,
                "end": 262
              },
              "start": 229,
              "end": 262
            },
            "start": 222,
            "end": 263
          }
        ],
        "start": 216,
        "end": 265
      },
      "expression": false,
      "start": 189,
      "end": 265
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 275,
        "end": 278
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReadStream",
            "optional": false,
            "typeAnnotation": null,
            "start": 282,
            "end": 292
          },
          "typeArguments": null,
          "start": 282,
          "end": 292
        },
        "start": 280,
        "end": 292
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 306,
                  "end": 315
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 319,
                  "end": 322
                },
                "start": 306,
                "end": 322
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ThroughStream",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 339
                },
                "typeArguments": null,
                "start": 326,
                "end": 339
              },
              "start": 306,
              "end": 339
            },
            "start": 299,
            "end": 340
          }
        ],
        "start": 293,
        "end": 342
      },
      "expression": false,
      "start": 266,
      "end": 342
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wrap",
        "optional": false,
        "typeAnnotation": null,
        "start": 384,
        "end": 388
      },
      "typeParameters": null,
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
              "name": "someProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 397,
              "end": 405
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 407,
                  "end": 410
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 411,
                      "end": 417
                    }
                  ],
                  "start": 410,
                  "end": 418
                },
                "start": 407,
                "end": 418
              },
              "start": 405,
              "end": 418
            },
            "accessibility": null,
            "static": false,
            "start": 397,
            "end": 419
          }
        ],
        "start": 391,
        "end": 421
      },
      "declare": false,
      "start": 379,
      "end": 421
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OtherWrap",
        "optional": false,
        "typeAnnotation": null,
        "start": 427,
        "end": 436
      },
      "typeParameters": null,
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
              "name": "someProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 445,
              "end": 453
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 455,
                  "end": 458
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 459,
                      "end": 465
                    }
                  ],
                  "start": 458,
                  "end": 466
                },
                "start": 455,
                "end": 466
              },
              "start": 453,
              "end": 466
            },
            "accessibility": null,
            "static": false,
            "start": 445,
            "end": 467
          }
        ],
        "start": 439,
        "end": 469
      },
      "declare": false,
      "start": 422,
      "end": 469
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 475,
        "end": 478
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
              "start": 479,
              "end": 480
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 479,
            "end": 480
          }
        ],
        "start": 478,
        "end": 481
      },
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 490,
              "end": 493
            },
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
                      "name": "what",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 497,
                      "end": 501
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
                          "start": 503,
                          "end": 504
                        },
                        "typeArguments": null,
                        "start": 503,
                        "end": 504
                      },
                      "start": 501,
                      "end": 504
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 497,
                    "end": 504
                  }
                ],
                "start": 495,
                "end": 506
              },
              "start": 493,
              "end": 506
            },
            "accessibility": null,
            "static": false,
            "start": 490,
            "end": 507
          }
        ],
        "start": 484,
        "end": 509
      },
      "declare": false,
      "start": 470,
      "end": 509
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 515,
        "end": 518
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
              "start": 519,
              "end": 520
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 519,
            "end": 520
          }
        ],
        "start": 518,
        "end": 521
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 530,
                  "end": 533
                },
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
                          "name": "what",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 537,
                          "end": 541
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
                              "start": 543,
                              "end": 544
                            },
                            "typeArguments": null,
                            "start": 543,
                            "end": 544
                          },
                          "start": 541,
                          "end": 544
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 537,
                        "end": 544
                      }
                    ],
                    "start": 535,
                    "end": 546
                  },
                  "start": 533,
                  "end": 546
                },
                "accessibility": null,
                "static": false,
                "start": 530,
                "end": 547
              }
            ],
            "start": 524,
            "end": 549
          },
          {
            "type": "TSBooleanKeyword",
            "start": 552,
            "end": 559
          }
        ],
        "start": 524,
        "end": 559
      },
      "declare": false,
      "start": 510,
      "end": 560
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun",
        "optional": false,
        "typeAnnotation": null,
        "start": 571,
        "end": 574
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Wrap",
                "optional": false,
                "typeAnnotation": null,
                "start": 582,
                "end": 586
              },
              "typeArguments": null,
              "start": 582,
              "end": 586
            },
            "start": 580,
            "end": 586
          },
          "start": 575,
          "end": 586
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 589,
          "end": 593
        },
        "start": 587,
        "end": 593
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 594,
        "end": 596
      },
      "expression": false,
      "start": 562,
      "end": 596
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
            "name": "fooStr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 618,
                  "end": 621
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 622,
                      "end": 628
                    }
                  ],
                  "start": 621,
                  "end": 629
                },
                "start": 618,
                "end": 629
              },
              "start": 616,
              "end": 629
            },
            "start": 610,
            "end": 629
          },
          "init": null,
          "definite": false,
          "start": 610,
          "end": 629
        }
      ],
      "declare": true,
      "start": 598,
      "end": 630
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
            "name": "otherWrap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OtherWrap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 654,
                  "end": 663
                },
                "typeArguments": null,
                "start": 654,
                "end": 663
              },
              "start": 652,
              "end": 663
            },
            "start": 643,
            "end": 663
          },
          "init": null,
          "definite": false,
          "start": 643,
          "end": 663
        }
      ],
      "declare": true,
      "start": 631,
      "end": 664
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 673,
                  "end": 676
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 677,
                      "end": 683
                    }
                  ],
                  "start": 676,
                  "end": 684
                },
                "start": 673,
                "end": 684
              },
              "start": 671,
              "end": 684
            },
            "start": 670,
            "end": 684
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooStr",
            "optional": false,
            "typeAnnotation": null,
            "start": 687,
            "end": 693
          },
          "definite": false,
          "start": 670,
          "end": 693
        }
      ],
      "declare": false,
      "start": 666,
      "end": 694
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fun",
          "optional": false,
          "typeAnnotation": null,
          "start": 696,
          "end": 699
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "otherWrap",
            "optional": false,
            "typeAnnotation": null,
            "start": 700,
            "end": 709
          }
        ],
        "optional": false,
        "start": 696,
        "end": 710
      },
      "directive": null,
      "start": 696,
      "end": 711
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 45,
  "end": 711
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
    "value": "ThroughStream",
    "start": 55,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 88,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "ReadStream",
    "start": 98,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 118,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 145,
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
    "value": "boolean",
    "start": 148,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "BigInt",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 189,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 198,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "ReadStream",
    "start": 205,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 222,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 229,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 239,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 242,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 246,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "ThroughStream",
    "start": 249,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 266,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 275,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "ReadStream",
    "start": 282,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 299,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 306,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 316,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 319,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 323,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "ThroughStream",
    "start": 326,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 379,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "Wrap",
    "start": 384,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "someProp",
    "start": 397,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 407,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 411,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 422,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "OtherWrap",
    "start": 427,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "someProp",
    "start": 445,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 455,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 459,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 470,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 475,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 490,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "what",
    "start": 497,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 510,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 515,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 530,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "what",
    "start": 537,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 552,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 562,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "fun",
    "start": 571,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 575,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "Wrap",
    "start": 582,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 587,
    "end": 588
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 589,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 598,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 606,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "fooStr",
    "start": 610,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 618,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 621,
    "end": 622
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
    "type": "Punctuator",
    "value": ";",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 631,
    "end": 638
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 639,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "otherWrap",
    "start": 643,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "OtherWrap",
    "start": 654,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 663,
    "end": 664
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 666,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 673,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 677,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "fooStr",
    "start": 687,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "fun",
    "start": 696,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "otherWrap",
    "start": 700,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 710,
    "end": 711
  }
]
```
