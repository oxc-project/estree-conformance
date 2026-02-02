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
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 55
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 66,
          "end": 73
        },
        "start": 58,
        "end": 74
      },
      "importKind": "value",
      "start": 43,
      "end": 74
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverloadComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 110
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
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 112
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 111,
            "end": 112
          }
        ],
        "start": 110,
        "end": 113
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 120
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 128
            },
            "start": 117,
            "end": 128
          },
          "typeArguments": null,
          "start": 117,
          "end": 128
        },
        "start": 115,
        "end": 128
      },
      "body": null,
      "expression": false,
      "start": 76,
      "end": 129
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverloadComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 164
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
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 166
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 165,
            "end": 166
          }
        ],
        "start": 164,
        "end": 167
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "attr",
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 175,
                    "end": 176
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 178,
                        "end": 179
                      },
                      "typeArguments": null,
                      "start": 178,
                      "end": 179
                    },
                    "start": 176,
                    "end": 179
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 175,
                  "end": 180
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 181,
                    "end": 182
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 185,
                      "end": 191
                    },
                    "start": 183,
                    "end": 191
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 181,
                  "end": 192
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": "ignore-prop",
                    "raw": "\"ignore-prop\"",
                    "start": 193,
                    "end": 206
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 208,
                      "end": 215
                    },
                    "start": 206,
                    "end": 215
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 193,
                  "end": 215
                }
              ],
              "start": 174,
              "end": 216
            },
            "start": 172,
            "end": 216
          },
          "start": 168,
          "end": 216
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 219,
              "end": 222
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 230
            },
            "start": 219,
            "end": 230
          },
          "typeArguments": null,
          "start": 219,
          "end": 230
        },
        "start": 217,
        "end": 230
      },
      "body": null,
      "expression": false,
      "start": 130,
      "end": 231
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverloadComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 249,
        "end": 266
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
              "start": 267,
              "end": 268
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 267,
            "end": 268
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 271
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 270,
            "end": 271
          }
        ],
        "start": 266,
        "end": 272
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "attr",
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 280,
                    "end": 281
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 283,
                        "end": 284
                      },
                      "typeArguments": null,
                      "start": 283,
                      "end": 284
                    },
                    "start": 281,
                    "end": 284
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 280,
                  "end": 285
                },
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
                    "start": 286,
                    "end": 287
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
                        "start": 289,
                        "end": 290
                      },
                      "typeArguments": null,
                      "start": 289,
                      "end": 290
                    },
                    "start": 287,
                    "end": 290
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 286,
                  "end": 290
                }
              ],
              "start": 279,
              "end": 291
            },
            "start": 277,
            "end": 291
          },
          "start": 273,
          "end": 291
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 294,
              "end": 297
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 305
            },
            "start": 294,
            "end": 305
          },
          "typeArguments": null,
          "start": 294,
          "end": 305
        },
        "start": 292,
        "end": 305
      },
      "body": null,
      "expression": false,
      "start": 232,
      "end": 306
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 323,
        "end": 326
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
              "start": 327,
              "end": 328
            },
            "constraint": {
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 338,
                    "end": 339
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 341,
                      "end": 347
                    },
                    "start": 339,
                    "end": 347
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 338,
                  "end": 347
                }
              ],
              "start": 337,
              "end": 348
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 327,
            "end": 348
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 350,
              "end": 351
            },
            "constraint": {
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 361,
                    "end": 362
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 364,
                      "end": 371
                    },
                    "start": 362,
                    "end": 371
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 361,
                  "end": 372
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 373,
                    "end": 374
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 375,
                      "end": 381
                    },
                    "start": 374,
                    "end": 381
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 373,
                  "end": 381
                }
              ],
              "start": 360,
              "end": 382
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 350,
            "end": 382
          }
        ],
        "start": 326,
        "end": 383
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg1",
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
                "start": 390,
                "end": 391
              },
              "typeArguments": null,
              "start": 390,
              "end": 391
            },
            "start": 388,
            "end": 391
          },
          "start": 384,
          "end": 391
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 399,
                "end": 400
              },
              "typeArguments": null,
              "start": 399,
              "end": 400
            },
            "start": 397,
            "end": 400
          },
          "start": 393,
          "end": 400
        }
      ],
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
                  "name": "a0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 412,
                  "end": 414
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "OverloadComponent",
                      "start": 418,
                      "end": 435
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 440,
                          "end": 444
                        },
                        "start": 436,
                        "end": 445
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "a",
                          "start": 446,
                          "end": 447
                        },
                        "value": {
                          "type": "Literal",
                          "value": "hello",
                          "raw": "\"hello\"",
                          "start": 448,
                          "end": 455
                        },
                        "start": 446,
                        "end": 455
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ignore-prop",
                          "start": 456,
                          "end": 467
                        },
                        "value": null,
                        "start": 456,
                        "end": 467
                      }
                    ],
                    "selfClosing": true,
                    "start": 417,
                    "end": 470
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 417,
                  "end": 470
                },
                "definite": false,
                "start": 412,
                "end": 470
              }
            ],
            "declare": false,
            "start": 408,
            "end": 471
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
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 480,
                  "end": 482
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "OverloadComponent",
                      "start": 486,
                      "end": 503
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 508,
                          "end": 512
                        },
                        "start": 504,
                        "end": 513
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ignore-pro",
                          "start": 514,
                          "end": 524
                        },
                        "value": {
                          "type": "Literal",
                          "value": "hello world",
                          "raw": "\"hello world\"",
                          "start": 525,
                          "end": 538
                        },
                        "start": 514,
                        "end": 538
                      }
                    ],
                    "selfClosing": true,
                    "start": 485,
                    "end": 541
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 485,
                  "end": 541
                },
                "definite": false,
                "start": 480,
                "end": 541
              }
            ],
            "declare": false,
            "start": 476,
            "end": 542
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
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 551,
                  "end": 553
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "OverloadComponent",
                      "start": 557,
                      "end": 574
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 579,
                          "end": 583
                        },
                        "start": 575,
                        "end": 584
                      }
                    ],
                    "selfClosing": true,
                    "start": 556,
                    "end": 587
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 556,
                  "end": 587
                },
                "definite": false,
                "start": 551,
                "end": 587
              }
            ],
            "declare": false,
            "start": 547,
            "end": 588
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
                  "name": "a3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 597,
                  "end": 599
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "OverloadComponent",
                      "start": 603,
                      "end": 620
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 625,
                          "end": 629
                        },
                        "start": 621,
                        "end": 630
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ignore-prop",
                          "start": 631,
                          "end": 642
                        },
                        "value": null,
                        "start": 631,
                        "end": 642
                      }
                    ],
                    "selfClosing": true,
                    "start": 602,
                    "end": 645
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 602,
                  "end": 645
                },
                "definite": false,
                "start": 597,
                "end": 645
              }
            ],
            "declare": false,
            "start": 593,
            "end": 646
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
                  "name": "a4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 655,
                  "end": 657
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "OverloadComponent",
                      "start": 661,
                      "end": 678
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": true,
                    "start": 660,
                    "end": 681
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 660,
                  "end": 681
                },
                "definite": false,
                "start": 655,
                "end": 681
              }
            ],
            "declare": false,
            "start": 651,
            "end": 682
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
                  "name": "a5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 691,
                  "end": 693
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "OverloadComponent",
                      "start": 697,
                      "end": 714
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 719,
                          "end": 723
                        },
                        "start": 715,
                        "end": 724
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ignore-prop",
                          "start": 725,
                          "end": 736
                        },
                        "value": {
                          "type": "Literal",
                          "value": "hello",
                          "raw": "\"hello\"",
                          "start": 737,
                          "end": 744
                        },
                        "start": 725,
                        "end": 744
                      },
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 749,
                          "end": 753
                        },
                        "start": 745,
                        "end": 754
                      }
                    ],
                    "selfClosing": true,
                    "start": 696,
                    "end": 757
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 696,
                  "end": 757
                },
                "definite": false,
                "start": 691,
                "end": 757
              }
            ],
            "declare": false,
            "start": 687,
            "end": 758
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
                  "name": "a6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 767,
                  "end": 769
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "OverloadComponent",
                      "start": 773,
                      "end": 790
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 795,
                          "end": 799
                        },
                        "start": 791,
                        "end": 800
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ignore-prop",
                          "start": 801,
                          "end": 812
                        },
                        "value": null,
                        "start": 801,
                        "end": 812
                      },
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 817,
                          "end": 821
                        },
                        "start": 813,
                        "end": 822
                      }
                    ],
                    "selfClosing": true,
                    "start": 772,
                    "end": 825
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 772,
                  "end": 825
                },
                "definite": false,
                "start": 767,
                "end": 825
              }
            ],
            "declare": false,
            "start": 763,
            "end": 826
          }
        ],
        "start": 402,
        "end": 828
      },
      "expression": false,
      "start": 314,
      "end": 828
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Link",
        "optional": false,
        "typeAnnotation": null,
        "start": 847,
        "end": 851
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
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 852,
              "end": 853
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 852,
            "end": 853
          }
        ],
        "start": 851,
        "end": 854
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
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
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 859,
                    "end": 863
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 871,
                                "end": 872
                              },
                              "typeArguments": null,
                              "start": 871,
                              "end": 872
                            },
                            "start": 869,
                            "end": 872
                          },
                          "start": 866,
                          "end": 872
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 875,
                          "end": 879
                        },
                        "start": 873,
                        "end": 879
                      },
                      "start": 865,
                      "end": 879
                    },
                    "start": 863,
                    "end": 879
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 859,
                  "end": 879
                }
              ],
              "start": 858,
              "end": 880
            },
            "start": 856,
            "end": 880
          },
          "start": 855,
          "end": 880
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 883,
              "end": 886
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 887,
              "end": 894
            },
            "start": 883,
            "end": 894
          },
          "typeArguments": null,
          "start": 883,
          "end": 894
        },
        "start": 881,
        "end": 894
      },
      "body": null,
      "expression": false,
      "start": 830,
      "end": 895
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Link",
        "optional": false,
        "typeAnnotation": null,
        "start": 913,
        "end": 917
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
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 918,
              "end": 919
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 918,
            "end": 919
          }
        ],
        "start": 917,
        "end": 920
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
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
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 925,
                    "end": 929
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 937,
                                "end": 938
                              },
                              "typeArguments": null,
                              "start": 937,
                              "end": 938
                            },
                            "start": 936,
                            "end": 938
                          },
                          "start": 932,
                          "end": 938
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 946,
                              "end": 952
                            },
                            "start": 944,
                            "end": 952
                          },
                          "start": 940,
                          "end": 952
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 955,
                          "end": 959
                        },
                        "start": 953,
                        "end": 959
                      },
                      "start": 931,
                      "end": 959
                    },
                    "start": 929,
                    "end": 959
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 925,
                  "end": 959
                }
              ],
              "start": 924,
              "end": 960
            },
            "start": 922,
            "end": 960
          },
          "start": 921,
          "end": 960
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 963,
              "end": 966
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 967,
              "end": 974
            },
            "start": 963,
            "end": 974
          },
          "typeArguments": null,
          "start": 963,
          "end": 974
        },
        "start": 961,
        "end": 974
      },
      "body": null,
      "expression": false,
      "start": 896,
      "end": 975
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createLink",
        "optional": false,
        "typeAnnotation": null,
        "start": 985,
        "end": 995
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1006,
                      "end": 1012
                    },
                    "start": 1004,
                    "end": 1012
                  },
                  "start": 1003,
                  "end": 1012
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1015,
                  "end": 1019
                },
                "start": 1013,
                "end": 1019
              },
              "start": 1002,
              "end": 1019
            },
            "start": 1000,
            "end": 1019
          },
          "start": 996,
          "end": 1019
        }
      ],
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1031,
                  "end": 1032
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "Link",
                      "start": 1036,
                      "end": 1040
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "func",
                          "start": 1041,
                          "end": 1045
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "func",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1047,
                            "end": 1051
                          },
                          "start": 1046,
                          "end": 1052
                        },
                        "start": 1041,
                        "end": 1052
                      }
                    ],
                    "selfClosing": true,
                    "start": 1035,
                    "end": 1055
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 1035,
                  "end": 1055
                },
                "definite": false,
                "start": 1031,
                "end": 1055
              }
            ],
            "declare": false,
            "start": 1027,
            "end": 1055
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
                  "name": "o1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1064,
                  "end": 1066
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "Link",
                      "start": 1070,
                      "end": 1074
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "func",
                          "start": 1075,
                          "end": 1079
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "ArrowFunctionExpression",
                            "expression": false,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1084,
                                    "end": 1090
                                  },
                                  "start": 1083,
                                  "end": 1090
                                },
                                "start": 1082,
                                "end": 1090
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1094,
                                    "end": 1100
                                  },
                                  "start": 1093,
                                  "end": 1100
                                },
                                "start": 1092,
                                "end": 1100
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 1103,
                              "end": 1105
                            },
                            "id": null,
                            "generator": false,
                            "start": 1081,
                            "end": 1105
                          },
                          "start": 1080,
                          "end": 1106
                        },
                        "start": 1075,
                        "end": 1106
                      }
                    ],
                    "selfClosing": true,
                    "start": 1069,
                    "end": 1109
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 1069,
                  "end": 1109
                },
                "definite": false,
                "start": 1064,
                "end": 1109
              }
            ],
            "declare": false,
            "start": 1060,
            "end": 1110
          }
        ],
        "start": 1021,
        "end": 1112
      },
      "expression": false,
      "start": 976,
      "end": 1112
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 1112
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 43,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 66,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "function",
    "start": 84,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "OverloadComponent",
    "start": 93,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 121,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 130,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 138,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "OverloadComponent",
    "start": 147,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "attr",
    "start": 168,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 185,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 191,
    "end": 192
  },
  {
    "type": "String",
    "value": "\"ignore-prop\"",
    "start": 193,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 208,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 219,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 223,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 232,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 240,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "OverloadComponent",
    "start": 249,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "attr",
    "start": 273,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "b",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 286,
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
    "value": "T",
    "start": 289,
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
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 294,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 298,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 314,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 323,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 329,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 341,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 352,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "boolean",
    "start": 364,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 375,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 384,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 393,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 408,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 412,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 417,
    "end": 418
  },
  {
    "type": "JSXIdentifier",
    "value": "OverloadComponent",
    "start": 418,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 437,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 440,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 444,
    "end": 445
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 447,
    "end": 448
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 448,
    "end": 455
  },
  {
    "type": "JSXIdentifier",
    "value": "ignore-prop",
    "start": 456,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 476,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 480,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 485,
    "end": 486
  },
  {
    "type": "JSXIdentifier",
    "value": "OverloadComponent",
    "start": 486,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 505,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 508,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 512,
    "end": 513
  },
  {
    "type": "JSXIdentifier",
    "value": "ignore-pro",
    "start": 514,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 524,
    "end": 525
  },
  {
    "type": "JSXText",
    "value": "\"hello world\"",
    "start": 525,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 541,
    "end": 542
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 547,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 551,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 556,
    "end": 557
  },
  {
    "type": "JSXIdentifier",
    "value": "OverloadComponent",
    "start": 557,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 576,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 579,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "let",
    "start": 593,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 597,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 602,
    "end": 603
  },
  {
    "type": "JSXIdentifier",
    "value": "OverloadComponent",
    "start": 603,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 622,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 625,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 629,
    "end": 630
  },
  {
    "type": "JSXIdentifier",
    "value": "ignore-prop",
    "start": 631,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 645,
    "end": 646
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 651,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 655,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 660,
    "end": 661
  },
  {
    "type": "JSXIdentifier",
    "value": "OverloadComponent",
    "start": 661,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 681,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 687,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 691,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 696,
    "end": 697
  },
  {
    "type": "JSXIdentifier",
    "value": "OverloadComponent",
    "start": 697,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 716,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 719,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 723,
    "end": 724
  },
  {
    "type": "JSXIdentifier",
    "value": "ignore-prop",
    "start": 725,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 736,
    "end": 737
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 737,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 746,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 749,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 757,
    "end": 758
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 763,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 767,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 772,
    "end": 773
  },
  {
    "type": "JSXIdentifier",
    "value": "OverloadComponent",
    "start": 773,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 792,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 795,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 799,
    "end": 800
  },
  {
    "type": "JSXIdentifier",
    "value": "ignore-prop",
    "start": 801,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 814,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 817,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 830,
    "end": 837
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 838,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "Link",
    "start": 847,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 859,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 866,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 873,
    "end": 875
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 875,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 883,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 887,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 896,
    "end": 903
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 904,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "Link",
    "start": 913,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 925,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 931,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 932,
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
    "value": "U",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 940,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 946,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 953,
    "end": 955
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 955,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 963,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 967,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 974,
    "end": 975
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 976,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "createLink",
    "start": 985,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 996,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1006,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1013,
    "end": 1015
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1015,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1027,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "JSXIdentifier",
    "value": "Link",
    "start": 1036,
    "end": 1040
  },
  {
    "type": "JSXIdentifier",
    "value": "func",
    "start": 1041,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 1047,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1060,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 1064,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "JSXIdentifier",
    "value": "Link",
    "start": 1070,
    "end": 1074
  },
  {
    "type": "JSXIdentifier",
    "value": "func",
    "start": 1075,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1084,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1094,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1101,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1111,
    "end": 1112
  }
]
```
