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
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 22
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "'x'",
                  "start": 24,
                  "end": 27
                },
                "start": 24,
                "end": 27
              },
              "start": 22,
              "end": 27
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 28
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 38
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 40,
                "end": 46
              },
              "start": 38,
              "end": 46
            },
            "accessibility": null,
            "static": false,
            "start": 33,
            "end": 47
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 58
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 62,
                "end": 66
              },
              "start": 60,
              "end": 66
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 52,
            "end": 67
          }
        ],
        "start": 12,
        "end": 69
      },
      "declare": false,
      "start": 0,
      "end": 69
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 82
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 93
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "y",
                  "raw": "'y'",
                  "start": 95,
                  "end": 98
                },
                "start": 95,
                "end": 98
              },
              "start": 93,
              "end": 98
            },
            "accessibility": null,
            "static": false,
            "start": 89,
            "end": 99
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 109
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "none",
                      "raw": "'none'",
                      "start": 111,
                      "end": 117
                    },
                    "start": 111,
                    "end": 117
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "done",
                      "raw": "'done'",
                      "start": 120,
                      "end": 126
                    },
                    "start": 120,
                    "end": 126
                  }
                ],
                "start": 111,
                "end": 126
              },
              "start": 109,
              "end": 126
            },
            "accessibility": null,
            "static": false,
            "start": 104,
            "end": 127
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 138
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 142,
                "end": 146
              },
              "start": 140,
              "end": 146
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 132,
            "end": 147
          }
        ],
        "start": 83,
        "end": 149
      },
      "declare": false,
      "start": 71,
      "end": 149
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 160,
        "end": 163
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
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
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 169,
                    "end": 170
                  },
                  "typeArguments": null,
                  "start": 169,
                  "end": 170
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 173,
                    "end": 174
                  },
                  "typeArguments": null,
                  "start": 173,
                  "end": 174
                }
              ],
              "start": 169,
              "end": 174
            },
            "start": 167,
            "end": 174
          },
          "start": 164,
          "end": 174
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 176,
        "end": 179
      },
      "expression": false,
      "start": 151,
      "end": 179
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 181,
          "end": 184
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 195
                },
                "value": {
                  "type": "Literal",
                  "value": "y",
                  "raw": "'y'",
                  "start": 197,
                  "end": 200
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 191,
                "end": 200
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 211
                },
                "value": {
                  "type": "Literal",
                  "value": "done",
                  "raw": "'done'",
                  "start": 213,
                  "end": 219
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 206,
                "end": 219
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 225,
                  "end": 231
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "ThisExpression",
                          "start": 244,
                          "end": 248
                        },
                        "directive": null,
                        "start": 244,
                        "end": 249
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 258,
                            "end": 262
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 263,
                            "end": 267
                          },
                          "optional": false,
                          "computed": false,
                          "start": 258,
                          "end": 267
                        },
                        "directive": null,
                        "start": 258,
                        "end": 268
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 277,
                            "end": 281
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 282,
                            "end": 287
                          },
                          "optional": false,
                          "computed": false,
                          "start": 277,
                          "end": 287
                        },
                        "directive": null,
                        "start": 277,
                        "end": 288
                      }
                    ],
                    "start": 234,
                    "end": 294
                  },
                  "expression": false,
                  "start": 231,
                  "end": 294
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 225,
                "end": 294
              }
            ],
            "start": 185,
            "end": 296
          }
        ],
        "optional": false,
        "start": 181,
        "end": 297
      },
      "directive": null,
      "start": 181,
      "end": 298
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X2",
        "optional": false,
        "typeAnnotation": null,
        "start": 310,
        "end": 312
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
              "name": "type1",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 324
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "'x'",
                  "start": 326,
                  "end": 329
                },
                "start": 326,
                "end": 329
              },
              "start": 324,
              "end": 329
            },
            "accessibility": null,
            "static": false,
            "start": 319,
            "end": 330
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 340
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 342,
                "end": 348
              },
              "start": 340,
              "end": 348
            },
            "accessibility": null,
            "static": false,
            "start": 335,
            "end": 349
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 360
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 364,
                "end": 368
              },
              "start": 362,
              "end": 368
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 354,
            "end": 369
          }
        ],
        "start": 313,
        "end": 371
      },
      "declare": false,
      "start": 300,
      "end": 371
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y2",
        "optional": false,
        "typeAnnotation": null,
        "start": 383,
        "end": 385
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
              "name": "type2",
              "optional": false,
              "typeAnnotation": null,
              "start": 392,
              "end": 397
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "y",
                  "raw": "'y'",
                  "start": 399,
                  "end": 402
                },
                "start": 399,
                "end": 402
              },
              "start": 397,
              "end": 402
            },
            "accessibility": null,
            "static": false,
            "start": 392,
            "end": 403
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 408,
              "end": 413
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "none",
                      "raw": "'none'",
                      "start": 415,
                      "end": 421
                    },
                    "start": 415,
                    "end": 421
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "done",
                      "raw": "'done'",
                      "start": 424,
                      "end": 430
                    },
                    "start": 424,
                    "end": 430
                  }
                ],
                "start": 415,
                "end": 430
              },
              "start": 413,
              "end": 430
            },
            "accessibility": null,
            "static": false,
            "start": 408,
            "end": 431
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 436,
              "end": 442
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 446,
                "end": 450
              },
              "start": 444,
              "end": 450
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 436,
            "end": 451
          }
        ],
        "start": 386,
        "end": 453
      },
      "declare": false,
      "start": 373,
      "end": 453
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 464,
        "end": 468
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
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
                    "name": "X2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 474,
                    "end": 476
                  },
                  "typeArguments": null,
                  "start": 474,
                  "end": 476
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 479,
                    "end": 481
                  },
                  "typeArguments": null,
                  "start": 479,
                  "end": 481
                }
              ],
              "start": 474,
              "end": 481
            },
            "start": 472,
            "end": 481
          },
          "start": 469,
          "end": 481
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 483,
        "end": 486
      },
      "expression": false,
      "start": 455,
      "end": 486
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 488,
          "end": 492
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
                  "name": "type2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 499,
                  "end": 504
                },
                "value": {
                  "type": "Literal",
                  "value": "y",
                  "raw": "'y'",
                  "start": 506,
                  "end": 509
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 499,
                "end": 509
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 515,
                  "end": 520
                },
                "value": {
                  "type": "Literal",
                  "value": "done",
                  "raw": "'done'",
                  "start": 522,
                  "end": 528
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 515,
                "end": 528
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 534,
                  "end": 540
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "ThisExpression",
                          "start": 553,
                          "end": 557
                        },
                        "directive": null,
                        "start": 553,
                        "end": 558
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 567,
                            "end": 571
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 572,
                            "end": 577
                          },
                          "optional": false,
                          "computed": false,
                          "start": 567,
                          "end": 577
                        },
                        "directive": null,
                        "start": 567,
                        "end": 578
                      }
                    ],
                    "start": 543,
                    "end": 584
                  },
                  "expression": false,
                  "start": 540,
                  "end": 584
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 534,
                "end": 584
              }
            ],
            "start": 493,
            "end": 586
          }
        ],
        "optional": false,
        "start": 488,
        "end": 587
      },
      "directive": null,
      "start": 488,
      "end": 588
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X3",
        "optional": false,
        "typeAnnotation": null,
        "start": 600,
        "end": 602
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 609,
              "end": 613
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "'x'",
                  "start": 615,
                  "end": 618
                },
                "start": 615,
                "end": 618
              },
              "start": 613,
              "end": 618
            },
            "accessibility": null,
            "static": false,
            "start": 609,
            "end": 619
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 624,
              "end": 629
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 631,
                      "end": 632
                    },
                    "start": 631,
                    "end": 632
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 635,
                      "end": 636
                    },
                    "start": 635,
                    "end": 636
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 639,
                      "end": 640
                    },
                    "start": 639,
                    "end": 640
                  }
                ],
                "start": 631,
                "end": 640
              },
              "start": 629,
              "end": 640
            },
            "accessibility": null,
            "static": false,
            "start": 624,
            "end": 641
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "xtra",
              "optional": false,
              "typeAnnotation": null,
              "start": 646,
              "end": 650
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 652,
                "end": 658
              },
              "start": 650,
              "end": 658
            },
            "accessibility": null,
            "static": false,
            "start": 646,
            "end": 659
          }
        ],
        "start": 603,
        "end": 661
      },
      "declare": false,
      "start": 590,
      "end": 661
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y3",
        "optional": false,
        "typeAnnotation": null,
        "start": 673,
        "end": 675
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 682,
              "end": 686
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "y",
                  "raw": "'y'",
                  "start": 688,
                  "end": 691
                },
                "start": 688,
                "end": 691
              },
              "start": 686,
              "end": 691
            },
            "accessibility": null,
            "static": false,
            "start": 682,
            "end": 692
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 697,
              "end": 702
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 11,
                      "raw": "11",
                      "start": 704,
                      "end": 706
                    },
                    "start": 704,
                    "end": 706
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 709,
                      "end": 711
                    },
                    "start": 709,
                    "end": 711
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 13,
                      "raw": "13",
                      "start": 714,
                      "end": 716
                    },
                    "start": 714,
                    "end": 716
                  }
                ],
                "start": 704,
                "end": 716
              },
              "start": 702,
              "end": 716
            },
            "accessibility": null,
            "static": false,
            "start": 697,
            "end": 717
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ytra",
              "optional": false,
              "typeAnnotation": null,
              "start": 722,
              "end": 726
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 728,
                "end": 734
              },
              "start": 726,
              "end": 734
            },
            "accessibility": null,
            "static": false,
            "start": 722,
            "end": 735
          }
        ],
        "start": 676,
        "end": 737
      },
      "declare": false,
      "start": 663,
      "end": 737
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
            "name": "xy",
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
                      "name": "X3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 747,
                      "end": 749
                    },
                    "typeArguments": null,
                    "start": 747,
                    "end": 749
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Y3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 752,
                      "end": 754
                    },
                    "typeArguments": null,
                    "start": 752,
                    "end": 754
                  }
                ],
                "start": 747,
                "end": 754
              },
              "start": 745,
              "end": 754
            },
            "start": 743,
            "end": 754
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 763,
                  "end": 767
                },
                "value": {
                  "type": "Literal",
                  "value": "y",
                  "raw": "'y'",
                  "start": 769,
                  "end": 772
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 763,
                "end": 772
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 778,
                  "end": 783
                },
                "value": {
                  "type": "Literal",
                  "value": 11,
                  "raw": "11",
                  "start": 785,
                  "end": 787
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 778,
                "end": 787
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ytra",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 793,
                  "end": 797
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 799,
                  "end": 801
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 793,
                "end": 801
              }
            ],
            "start": 757,
            "end": 803
          },
          "definite": false,
          "start": 743,
          "end": 803
        }
      ],
      "declare": false,
      "start": 739,
      "end": 804
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "xy",
        "optional": false,
        "typeAnnotation": null,
        "start": 806,
        "end": 808
      },
      "directive": null,
      "start": 806,
      "end": 809
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LikeA",
        "optional": false,
        "typeAnnotation": null,
        "start": 822,
        "end": 827
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 834,
              "end": 835
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "'x'",
                  "start": 837,
                  "end": 840
                },
                "start": 837,
                "end": 840
              },
              "start": 835,
              "end": 840
            },
            "accessibility": null,
            "static": false,
            "start": 834,
            "end": 841
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 846,
              "end": 847
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "y",
                  "raw": "'y'",
                  "start": 849,
                  "end": 852
                },
                "start": 849,
                "end": 852
              },
              "start": 847,
              "end": 852
            },
            "accessibility": null,
            "static": false,
            "start": 846,
            "end": 853
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 858,
              "end": 863
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 865,
                "end": 871
              },
              "start": 863,
              "end": 871
            },
            "accessibility": null,
            "static": false,
            "start": 858,
            "end": 872
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 877,
              "end": 883
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 887,
                "end": 891
              },
              "start": 885,
              "end": 891
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 877,
            "end": 892
          }
        ],
        "start": 828,
        "end": 894
      },
      "declare": false,
      "start": 812,
      "end": 894
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LikeB",
        "optional": false,
        "typeAnnotation": null,
        "start": 906,
        "end": 911
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 918,
              "end": 919
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "xx",
                  "raw": "'xx'",
                  "start": 921,
                  "end": 925
                },
                "start": 921,
                "end": 925
              },
              "start": 919,
              "end": 925
            },
            "accessibility": null,
            "static": false,
            "start": 918,
            "end": 926
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 931,
              "end": 932
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "yy",
                  "raw": "'yy'",
                  "start": 934,
                  "end": 938
                },
                "start": 934,
                "end": 938
              },
              "start": 932,
              "end": 938
            },
            "accessibility": null,
            "static": false,
            "start": 931,
            "end": 939
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 944,
              "end": 949
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 951,
                "end": 957
              },
              "start": 949,
              "end": 957
            },
            "accessibility": null,
            "static": false,
            "start": 944,
            "end": 958
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 963,
              "end": 969
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 973,
                "end": 977
              },
              "start": 971,
              "end": 977
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 963,
            "end": 978
          }
        ],
        "start": 912,
        "end": 980
      },
      "declare": false,
      "start": 896,
      "end": 980
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
            "name": "xyz",
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
                      "name": "LikeA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 991,
                      "end": 996
                    },
                    "typeArguments": null,
                    "start": 991,
                    "end": 996
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LikeB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 999,
                      "end": 1004
                    },
                    "typeArguments": null,
                    "start": 999,
                    "end": 1004
                  }
                ],
                "start": 991,
                "end": 1004
              },
              "start": 989,
              "end": 1004
            },
            "start": 986,
            "end": 1004
          },
          "init": {
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
                  "start": 1013,
                  "end": 1014
                },
                "value": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "'x'",
                  "start": 1016,
                  "end": 1019
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1013,
                "end": 1019
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1025,
                  "end": 1026
                },
                "value": {
                  "type": "Literal",
                  "value": "y",
                  "raw": "'y'",
                  "start": 1028,
                  "end": 1031
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1025,
                "end": 1031
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1037,
                  "end": 1042
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 1044,
                  "end": 1049
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1037,
                "end": 1049
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1055,
                  "end": 1061
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "ThisExpression",
                          "start": 1074,
                          "end": 1078
                        },
                        "directive": null,
                        "start": 1074,
                        "end": 1079
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1088,
                            "end": 1092
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1093,
                            "end": 1094
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1088,
                          "end": 1094
                        },
                        "directive": null,
                        "start": 1088,
                        "end": 1095
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1104,
                            "end": 1108
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1109,
                            "end": 1110
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1104,
                          "end": 1110
                        },
                        "directive": null,
                        "start": 1104,
                        "end": 1111
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1120,
                            "end": 1124
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1125,
                            "end": 1130
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1120,
                          "end": 1130
                        },
                        "directive": null,
                        "start": 1120,
                        "end": 1131
                      }
                    ],
                    "start": 1064,
                    "end": 1137
                  },
                  "expression": false,
                  "start": 1061,
                  "end": 1137
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1055,
                "end": 1137
              }
            ],
            "start": 1007,
            "end": 1139
          },
          "definite": false,
          "start": 986,
          "end": 1139
        }
      ],
      "declare": false,
      "start": 982,
      "end": 1140
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "xyz",
        "optional": false,
        "typeAnnotation": null,
        "start": 1142,
        "end": 1145
      },
      "directive": null,
      "start": 1142,
      "end": 1146
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 1180,
        "end": 1190
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1195,
              "end": 1199
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "'object'",
                  "start": 1202,
                  "end": 1210
                },
                "start": 1202,
                "end": 1210
              },
              "start": 1200,
              "end": 1210
            },
            "accessibility": null,
            "static": false,
            "start": 1195,
            "end": 1211
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "items",
              "optional": false,
              "typeAnnotation": null,
              "start": 1214,
              "end": 1219
            },
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
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1231,
                            "end": 1237
                          },
                          "start": 1229,
                          "end": 1237
                        },
                        "start": 1228,
                        "end": 1237
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TestGeneric",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1240,
                          "end": 1251
                        },
                        "typeArguments": null,
                        "start": 1240,
                        "end": 1251
                      },
                      "start": 1238,
                      "end": 1251
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 1227,
                    "end": 1252
                  }
                ],
                "start": 1221,
                "end": 1256
              },
              "start": 1219,
              "end": 1256
            },
            "accessibility": null,
            "static": false,
            "start": 1214,
            "end": 1257
          }
        ],
        "start": 1191,
        "end": 1259
      },
      "declare": false,
      "start": 1170,
      "end": 1259
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestString",
        "optional": false,
        "typeAnnotation": null,
        "start": 1271,
        "end": 1281
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1286,
              "end": 1290
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 1292,
                  "end": 1300
                },
                "start": 1292,
                "end": 1300
              },
              "start": 1290,
              "end": 1300
            },
            "accessibility": null,
            "static": false,
            "start": 1286,
            "end": 1301
          }
        ],
        "start": 1282,
        "end": 1303
      },
      "declare": false,
      "start": 1261,
      "end": 1303
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestGeneric",
        "optional": false,
        "typeAnnotation": null,
        "start": 1310,
        "end": 1321
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1325,
                  "end": 1335
                },
                "typeArguments": null,
                "start": 1325,
                "end": 1335
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1338,
                  "end": 1348
                },
                "typeArguments": null,
                "start": 1338,
                "end": 1348
              }
            ],
            "start": 1325,
            "end": 1348
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSIndexSignature",
                "parameters": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1358,
                        "end": 1364
                      },
                      "start": 1356,
                      "end": 1364
                    },
                    "start": 1355,
                    "end": 1364
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1367,
                    "end": 1370
                  },
                  "start": 1365,
                  "end": 1370
                },
                "readonly": false,
                "static": false,
                "accessibility": null,
                "start": 1354,
                "end": 1371
              }
            ],
            "start": 1352,
            "end": 1373
          }
        ],
        "start": 1324,
        "end": 1373
      },
      "declare": false,
      "start": 1305,
      "end": 1374
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
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestGeneric",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1388,
                  "end": 1399
                },
                "typeArguments": null,
                "start": 1388,
                "end": 1399
              },
              "start": 1386,
              "end": 1399
            },
            "start": 1382,
            "end": 1399
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "items",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1406,
                  "end": 1411
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "hello",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1419,
                        "end": 1424
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1428,
                              "end": 1432
                            },
                            "value": {
                              "type": "Literal",
                              "value": "string",
                              "raw": "'string'",
                              "start": 1434,
                              "end": 1442
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1428,
                            "end": 1442
                          }
                        ],
                        "start": 1426,
                        "end": 1444
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1419,
                      "end": 1444
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "world",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1450,
                        "end": 1455
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "items",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1465,
                              "end": 1470
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "nested",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1482,
                                    "end": 1488
                                  },
                                  "value": {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "type",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1492,
                                          "end": 1496
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "string",
                                          "raw": "'string'",
                                          "start": 1498,
                                          "end": 1506
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1492,
                                        "end": 1506
                                      }
                                    ],
                                    "start": 1490,
                                    "end": 1508
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1482,
                                  "end": 1508
                                }
                              ],
                              "start": 1472,
                              "end": 1516
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1465,
                            "end": 1516
                          }
                        ],
                        "start": 1457,
                        "end": 1522
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1450,
                      "end": 1522
                    }
                  ],
                  "start": 1413,
                  "end": 1526
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1406,
                "end": 1526
              }
            ],
            "start": 1402,
            "end": 1528
          },
          "definite": false,
          "start": 1382,
          "end": 1528
        }
      ],
      "declare": false,
      "start": 1376,
      "end": 1529
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1529
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 18,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 24,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 33,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 52,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 62,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 71,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 89,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 95,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 104,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110
  },
  {
    "type": "String",
    "value": "'none'",
    "start": 111,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 118,
    "end": 119
  },
  {
    "type": "String",
    "value": "'done'",
    "start": 120,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 132,
    "end": 138
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
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 142,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 151,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 160,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 164,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 181,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 191,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 197,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 206,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "String",
    "value": "'done'",
    "start": 213,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 225,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 244,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 258,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 263,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 277,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 282,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 300,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "X2",
    "start": 310,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "type1",
    "start": 319,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 326,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 335,
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
    "value": "string",
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
    "type": "Identifier",
    "value": "method",
    "start": 354,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ":",
    "start": 362,
    "end": 363
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 364,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 370,
    "end": 371
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 373,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "Y2",
    "start": 383,
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
    "value": "type2",
    "start": 392,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 397,
    "end": 398
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 399,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 408,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414
  },
  {
    "type": "String",
    "value": "'none'",
    "start": 415,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 422,
    "end": 423
  },
  {
    "type": "String",
    "value": "'done'",
    "start": 424,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 436,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 446,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 452,
    "end": 453
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 455,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 464,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 469,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "X2",
    "start": 474,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "Y2",
    "start": 479,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 488,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "type2",
    "start": 499,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 506,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 515,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 520,
    "end": 521
  },
  {
    "type": "String",
    "value": "'done'",
    "start": 522,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 534,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 543,
    "end": 544
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 553,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 567,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 572,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 585,
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
    "value": ";",
    "start": 587,
    "end": 588
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 590,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "X3",
    "start": 600,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 609,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 613,
    "end": 614
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 615,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 624,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 629,
    "end": 630
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 633,
    "end": 634
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 637,
    "end": 638
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "xtra",
    "start": 646,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 652,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 660,
    "end": 661
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 663,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "Y3",
    "start": 673,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 682,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 686,
    "end": 687
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 688,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 697,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 702,
    "end": 703
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 704,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 707,
    "end": 708
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 709,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 712,
    "end": 713
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 714,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "ytra",
    "start": 722,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 728,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 736,
    "end": 737
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 739,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "xy",
    "start": 743,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "X3",
    "start": 747,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "Y3",
    "start": 752,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 763,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 767,
    "end": 768
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 769,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 778,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 783,
    "end": 784
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 785,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "ytra",
    "start": 793,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 797,
    "end": 798
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 799,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "xy",
    "start": 806,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 808,
    "end": 809
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 812,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "LikeA",
    "start": 822,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 835,
    "end": 836
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 837,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 847,
    "end": 848
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 849,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 858,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 865,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 877,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 885,
    "end": 886
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 887,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 893,
    "end": 894
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 896,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "LikeB",
    "start": 906,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 919,
    "end": 920
  },
  {
    "type": "String",
    "value": "'xx'",
    "start": 921,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 932,
    "end": 933
  },
  {
    "type": "String",
    "value": "'yy'",
    "start": 934,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 944,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 951,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 963,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 971,
    "end": 972
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 973,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 979,
    "end": 980
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 982,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 986,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "LikeA",
    "start": 991,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "LikeB",
    "start": 999,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 1016,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 1028,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1037,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1044,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1055,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1074,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1088,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1104,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1120,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1125,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 1142,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1170,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "TestObject",
    "start": 1180,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1195,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 1202,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 1214,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1231,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "TestGeneric",
    "start": 1240,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1261,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "TestString",
    "start": 1271,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1286,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 1292,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1305,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "TestGeneric",
    "start": 1310,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "TestString",
    "start": 1325,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "TestObject",
    "start": 1338,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1358,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1367,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1376,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1382,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "TestGeneric",
    "start": 1388,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 1406,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "hello",
    "start": 1419,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1428,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 1434,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "world",
    "start": 1450,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 1465,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 1482,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1492,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 1498,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1528,
    "end": 1529
  }
]
```
