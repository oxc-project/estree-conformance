__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnimalType",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 72
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "cat",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 80
            },
            "initializer": {
              "type": "Literal",
              "value": "cat",
              "raw": "\"cat\"",
              "start": 83,
              "end": 88
            },
            "computed": false,
            "start": 77,
            "end": 88
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "dog",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 95
            },
            "initializer": {
              "type": "Literal",
              "value": "dog",
              "raw": "\"dog\"",
              "start": 98,
              "end": 103
            },
            "computed": false,
            "start": 92,
            "end": 103
          }
        ],
        "start": 73,
        "end": 106
      },
      "const": false,
      "declare": false,
      "start": 57,
      "end": 106
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 119
      },
      "typeParameters": null,
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 134,
                  "end": 138
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": false,
                        "start": 140,
                        "end": 143
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 157,
                        "end": 159
                      }
                    ],
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AnimalType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 143,
                            "end": 153
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "cat",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 154,
                            "end": 157
                          },
                          "start": 143,
                          "end": 157
                        },
                        "typeArguments": null,
                        "start": 143,
                        "end": 157
                      }
                    ],
                    "start": 140,
                    "end": 159
                  },
                  "start": 138,
                  "end": 159
                },
                "accessibility": null,
                "static": false,
                "start": 134,
                "end": 160
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "meow",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 171
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 173,
                    "end": 179
                  },
                  "start": 171,
                  "end": 179
                },
                "accessibility": null,
                "static": false,
                "start": 167,
                "end": 180
              }
            ],
            "start": 126,
            "end": 186
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 203
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": false,
                        "start": 205,
                        "end": 208
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 222,
                        "end": 224
                      }
                    ],
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AnimalType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 208,
                            "end": 218
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dog",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 219,
                            "end": 222
                          },
                          "start": 208,
                          "end": 222
                        },
                        "typeArguments": null,
                        "start": 208,
                        "end": 222
                      }
                    ],
                    "start": 205,
                    "end": 224
                  },
                  "start": 203,
                  "end": 224
                },
                "accessibility": null,
                "static": false,
                "start": 199,
                "end": 225
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bark",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 232,
                  "end": 236
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 238,
                    "end": 244
                  },
                  "start": 236,
                  "end": 244
                },
                "accessibility": null,
                "static": false,
                "start": 232,
                "end": 245
              }
            ],
            "start": 191,
            "end": 251
          }
        ],
        "start": 124,
        "end": 251
      },
      "declare": false,
      "start": 108,
      "end": 252
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "check",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 268
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 272,
              "end": 277
            },
            "start": 270,
            "end": 277
          },
          "start": 269,
          "end": 277
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 293,
                "end": 298
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Error!",
                  "raw": "\"Error!\"",
                  "start": 299,
                  "end": 307
                }
              ],
              "start": 289,
              "end": 308
            },
            "start": 283,
            "end": 309
          }
        ],
        "start": 279,
        "end": 311
      },
      "expression": false,
      "start": 254,
      "end": 311
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "action1",
        "optional": false,
        "typeAnnotation": null,
        "start": 322,
        "end": 329
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "animal",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Animal",
                "optional": false,
                "typeAnnotation": null,
                "start": 338,
                "end": 344
              },
              "typeArguments": null,
              "start": 338,
              "end": 344
            },
            "start": 336,
            "end": 344
          },
          "start": 330,
          "end": 344
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "animal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 354,
                  "end": 360
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 361,
                  "end": 365
                },
                "optional": false,
                "computed": false,
                "start": 354,
                "end": 365
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnimalType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 370,
                  "end": 380
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cat",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 381,
                  "end": 384
                },
                "optional": false,
                "computed": false,
                "start": 370,
                "end": 384
              },
              "start": 354,
              "end": 384
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
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 392,
                        "end": 399
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 400,
                        "end": 403
                      },
                      "optional": false,
                      "computed": false,
                      "start": 392,
                      "end": 403
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "animal",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 404,
                          "end": 410
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "meow",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 411,
                          "end": 415
                        },
                        "optional": false,
                        "computed": false,
                        "start": 404,
                        "end": 415
                      }
                    ],
                    "optional": false,
                    "start": 392,
                    "end": 416
                  },
                  "directive": null,
                  "start": 392,
                  "end": 417
                }
              ],
              "start": 386,
              "end": 421
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "animal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 431,
                    "end": 437
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 438,
                    "end": 442
                  },
                  "optional": false,
                  "computed": false,
                  "start": 431,
                  "end": 442
                },
                "operator": "===",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AnimalType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 447,
                    "end": 457
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dog",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 458,
                    "end": 461
                  },
                  "optional": false,
                  "computed": false,
                  "start": 447,
                  "end": 461
                },
                "start": 431,
                "end": 461
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
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 469,
                          "end": 476
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 477,
                          "end": 480
                        },
                        "optional": false,
                        "computed": false,
                        "start": 469,
                        "end": 480
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "animal",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 481,
                            "end": 487
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bark",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 488,
                            "end": 492
                          },
                          "optional": false,
                          "computed": false,
                          "start": 481,
                          "end": 492
                        }
                      ],
                      "optional": false,
                      "start": 469,
                      "end": 493
                    },
                    "directive": null,
                    "start": 469,
                    "end": 494
                  }
                ],
                "start": 463,
                "end": 498
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "check",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 510,
                        "end": 515
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "animal",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 516,
                          "end": 522
                        }
                      ],
                      "optional": false,
                      "start": 510,
                      "end": 523
                    },
                    "directive": null,
                    "start": 510,
                    "end": 524
                  }
                ],
                "start": 504,
                "end": 528
              },
              "start": 427,
              "end": 528
            },
            "start": 350,
            "end": 528
          }
        ],
        "start": 346,
        "end": 530
      },
      "expression": false,
      "start": 313,
      "end": 530
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "action2",
        "optional": false,
        "typeAnnotation": null,
        "start": 541,
        "end": 548
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "animal",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Animal",
                "optional": false,
                "typeAnnotation": null,
                "start": 557,
                "end": 563
              },
              "typeArguments": null,
              "start": 557,
              "end": 563
            },
            "start": 555,
            "end": 563
          },
          "start": 549,
          "end": 563
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "animal",
                "optional": false,
                "typeAnnotation": null,
                "start": 577,
                "end": 583
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 584,
                "end": 588
              },
              "optional": false,
              "computed": false,
              "start": 577,
              "end": 588
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 601,
                      "end": 604
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 618,
                      "end": 620
                    }
                  ],
                  "expressions": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AnimalType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 604,
                        "end": 614
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cat",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 615,
                        "end": 618
                      },
                      "optional": false,
                      "computed": false,
                      "start": 604,
                      "end": 618
                    }
                  ],
                  "start": 601,
                  "end": 620
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 628,
                          "end": 635
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 636,
                          "end": 639
                        },
                        "optional": false,
                        "computed": false,
                        "start": 628,
                        "end": 639
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "animal",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 640,
                            "end": 646
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "meow",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 647,
                            "end": 651
                          },
                          "optional": false,
                          "computed": false,
                          "start": 640,
                          "end": 651
                        }
                      ],
                      "optional": false,
                      "start": 628,
                      "end": 652
                    },
                    "directive": null,
                    "start": 628,
                    "end": 653
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 660,
                    "end": 666
                  }
                ],
                "start": 596,
                "end": 666
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 676,
                      "end": 679
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 693,
                      "end": 695
                    }
                  ],
                  "expressions": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AnimalType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 679,
                        "end": 689
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dog",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 690,
                        "end": 693
                      },
                      "optional": false,
                      "computed": false,
                      "start": 679,
                      "end": 693
                    }
                  ],
                  "start": 676,
                  "end": 695
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 703,
                          "end": 710
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 711,
                          "end": 714
                        },
                        "optional": false,
                        "computed": false,
                        "start": 703,
                        "end": 714
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "animal",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 715,
                            "end": 721
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bark",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 722,
                            "end": 726
                          },
                          "optional": false,
                          "computed": false,
                          "start": 715,
                          "end": 726
                        }
                      ],
                      "optional": false,
                      "start": 703,
                      "end": 727
                    },
                    "directive": null,
                    "start": 703,
                    "end": 728
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 735,
                    "end": 741
                  }
                ],
                "start": 671,
                "end": 741
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "check",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 761,
                        "end": 766
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "animal",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 767,
                          "end": 773
                        }
                      ],
                      "optional": false,
                      "start": 761,
                      "end": 774
                    },
                    "directive": null,
                    "start": 761,
                    "end": 775
                  }
                ],
                "start": 746,
                "end": 775
              }
            ],
            "start": 569,
            "end": 779
          }
        ],
        "start": 565,
        "end": 781
      },
      "expression": false,
      "start": 532,
      "end": 781
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "action3",
        "optional": false,
        "typeAnnotation": null,
        "start": 792,
        "end": 799
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "animal",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Animal",
                "optional": false,
                "typeAnnotation": null,
                "start": 808,
                "end": 814
              },
              "typeArguments": null,
              "start": 808,
              "end": 814
            },
            "start": 806,
            "end": 814
          },
          "start": 800,
          "end": 814
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "animal",
                "optional": false,
                "typeAnnotation": null,
                "start": 828,
                "end": 834
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 835,
                "end": 839
              },
              "optional": false,
              "computed": false,
              "start": 828,
              "end": 839
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AnimalType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 852,
                    "end": 862
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 863,
                    "end": 866
                  },
                  "optional": false,
                  "computed": false,
                  "start": 852,
                  "end": 866
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 874,
                          "end": 881
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 882,
                          "end": 885
                        },
                        "optional": false,
                        "computed": false,
                        "start": 874,
                        "end": 885
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "animal",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 886,
                            "end": 892
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "meow",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 893,
                            "end": 897
                          },
                          "optional": false,
                          "computed": false,
                          "start": 886,
                          "end": 897
                        }
                      ],
                      "optional": false,
                      "start": 874,
                      "end": 898
                    },
                    "directive": null,
                    "start": 874,
                    "end": 899
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 906,
                    "end": 912
                  }
                ],
                "start": 847,
                "end": 912
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AnimalType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 922,
                    "end": 932
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dog",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 933,
                    "end": 936
                  },
                  "optional": false,
                  "computed": false,
                  "start": 922,
                  "end": 936
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 944,
                          "end": 951
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 952,
                          "end": 955
                        },
                        "optional": false,
                        "computed": false,
                        "start": 944,
                        "end": 955
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "animal",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 956,
                            "end": 962
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bark",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 963,
                            "end": 967
                          },
                          "optional": false,
                          "computed": false,
                          "start": 956,
                          "end": 967
                        }
                      ],
                      "optional": false,
                      "start": 944,
                      "end": 968
                    },
                    "directive": null,
                    "start": 944,
                    "end": 969
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 976,
                    "end": 982
                  }
                ],
                "start": 917,
                "end": 982
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "check",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1002,
                        "end": 1007
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "animal",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1008,
                          "end": 1014
                        }
                      ],
                      "optional": false,
                      "start": 1002,
                      "end": 1015
                    },
                    "directive": null,
                    "start": 1002,
                    "end": 1016
                  }
                ],
                "start": 987,
                "end": 1016
              }
            ],
            "start": 820,
            "end": 1020
          }
        ],
        "start": 816,
        "end": 1022
      },
      "expression": false,
      "start": 783,
      "end": 1022
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 1022
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 57,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "AnimalType",
    "start": 62,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "cat",
    "start": 77,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 81,
    "end": 82
  },
  {
    "type": "String",
    "value": "\"cat\"",
    "start": 83,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "dog",
    "start": 92,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 96,
    "end": 97
  },
  {
    "type": "String",
    "value": "\"dog\"",
    "start": 98,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 108,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 134,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 140,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "AnimalType",
    "start": 143,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "cat",
    "start": 154,
    "end": 157
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 157,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "meow",
    "start": 167,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 173,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 199,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 203,
    "end": 204
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 205,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "AnimalType",
    "start": 208,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "dog",
    "start": 219,
    "end": 222
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 222,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "bark",
    "start": 232,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 238,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 254,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "check",
    "start": 263,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 272,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 279,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 283,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 289,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 293,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 298,
    "end": 299
  },
  {
    "type": "String",
    "value": "\"Error!\"",
    "start": 299,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 313,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "action1",
    "start": 322,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "animal",
    "start": 330,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 338,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 346,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 350,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "animal",
    "start": 354,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 361,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 366,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "AnimalType",
    "start": 370,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "cat",
    "start": 381,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 392,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 400,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "animal",
    "start": 404,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "meow",
    "start": 411,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 422,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 427,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "animal",
    "start": 431,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 438,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 443,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "AnimalType",
    "start": 447,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "dog",
    "start": 458,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 469,
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
    "value": "log",
    "start": 477,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "animal",
    "start": 481,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "bark",
    "start": 488,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 497,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 499,
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
    "value": "check",
    "start": 510,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "animal",
    "start": 516,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 529,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 532,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "action2",
    "start": 541,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "animal",
    "start": 549,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 557,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 565,
    "end": 566
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 569,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "animal",
    "start": 577,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 584,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 590,
    "end": 591
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 596,
    "end": 600
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 601,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "AnimalType",
    "start": 604,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "cat",
    "start": 615,
    "end": 618
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 618,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 628,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 636,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "animal",
    "start": 640,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "meow",
    "start": 647,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 652,
    "end": 653
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 660,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 665,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 671,
    "end": 675
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 676,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "AnimalType",
    "start": 679,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "dog",
    "start": 690,
    "end": 693
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 693,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 703,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 711,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "animal",
    "start": 715,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "bark",
    "start": 722,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 727,
    "end": 728
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 735,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 740,
    "end": 741
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 746,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "check",
    "start": 761,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "animal",
    "start": 767,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 780,
    "end": 781
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 783,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "action3",
    "start": 792,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "animal",
    "start": 800,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "Animal",
    "start": 808,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 816,
    "end": 817
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 820,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "animal",
    "start": 828,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 835,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 841,
    "end": 842
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 847,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "AnimalType",
    "start": 852,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "cat",
    "start": 863,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 874,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 882,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "animal",
    "start": 886,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "meow",
    "start": 893,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 898,
    "end": 899
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 906,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 911,
    "end": 912
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 917,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "AnimalType",
    "start": 922,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "dog",
    "start": 933,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 944,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 951,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 952,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "animal",
    "start": 956,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "bark",
    "start": 963,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 968,
    "end": 969
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 976,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 981,
    "end": 982
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 987,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "check",
    "start": 1002,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "animal",
    "start": 1008,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1021,
    "end": 1022
  }
]
```
