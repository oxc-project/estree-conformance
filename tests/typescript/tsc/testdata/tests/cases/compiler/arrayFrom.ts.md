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
        "start": 105,
        "end": 106
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
              "start": 111,
              "end": 112
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 114,
                "end": 120
              },
              "start": 112,
              "end": 120
            },
            "accessibility": null,
            "static": false,
            "start": 111,
            "end": 121
          }
        ],
        "start": 107,
        "end": 123
      },
      "declare": false,
      "start": 95,
      "end": 123
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 136
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 142
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 144,
                "end": 150
              },
              "start": 142,
              "end": 150
            },
            "accessibility": null,
            "static": false,
            "start": 141,
            "end": 151
          }
        ],
        "start": 137,
        "end": 153
      },
      "declare": false,
      "start": 125,
      "end": 153
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
            "name": "inputA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 169,
                    "end": 170
                  },
                  "typeArguments": null,
                  "start": 169,
                  "end": 170
                },
                "start": 169,
                "end": 172
              },
              "start": 167,
              "end": 172
            },
            "start": 161,
            "end": 172
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 175,
            "end": 177
          },
          "definite": false,
          "start": 161,
          "end": 177
        }
      ],
      "declare": false,
      "start": 155,
      "end": 178
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
            "name": "inputB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 193,
                    "end": 194
                  },
                  "typeArguments": null,
                  "start": 193,
                  "end": 194
                },
                "start": 193,
                "end": 196
              },
              "start": 191,
              "end": 196
            },
            "start": 185,
            "end": 196
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 199,
            "end": 201
          },
          "definite": false,
          "start": 185,
          "end": 201
        }
      ],
      "declare": false,
      "start": 179,
      "end": 202
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
            "name": "inputALike",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArrayLike",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 221,
                  "end": 230
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 231,
                        "end": 232
                      },
                      "typeArguments": null,
                      "start": 231,
                      "end": 232
                    }
                  ],
                  "start": 230,
                  "end": 233
                },
                "start": 221,
                "end": 233
              },
              "start": 219,
              "end": 233
            },
            "start": 209,
            "end": 233
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
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 238,
                  "end": 244
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 246,
                  "end": 247
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 238,
                "end": 247
              }
            ],
            "start": 236,
            "end": 249
          },
          "definite": false,
          "start": 209,
          "end": 249
        }
      ],
      "declare": false,
      "start": 203,
      "end": 250
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
            "name": "inputARand",
            "optional": false,
            "typeAnnotation": null,
            "start": 257,
            "end": 267
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getEither",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 279
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "inputA",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 286
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "inputALike",
                "optional": false,
                "typeAnnotation": null,
                "start": 288,
                "end": 298
              }
            ],
            "optional": false,
            "start": 270,
            "end": 299
          },
          "definite": false,
          "start": 257,
          "end": 299
        }
      ],
      "declare": false,
      "start": 251,
      "end": 300
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
            "name": "inputASet",
            "optional": false,
            "typeAnnotation": null,
            "start": 307,
            "end": 316
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null,
              "start": 323,
              "end": 326
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 327,
                    "end": 328
                  },
                  "typeArguments": null,
                  "start": 327,
                  "end": 328
                }
              ],
              "start": 326,
              "end": 329
            },
            "arguments": [],
            "start": 319,
            "end": 331
          },
          "definite": false,
          "start": 307,
          "end": 331
        }
      ],
      "declare": false,
      "start": 301,
      "end": 332
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
            "name": "result1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 349,
                    "end": 350
                  },
                  "typeArguments": null,
                  "start": 349,
                  "end": 350
                },
                "start": 349,
                "end": 352
              },
              "start": 347,
              "end": 352
            },
            "start": 340,
            "end": 352
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 355,
                "end": 360
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 361,
                "end": 365
              },
              "optional": false,
              "computed": false,
              "start": 355,
              "end": 365
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "inputA",
                "optional": false,
                "typeAnnotation": null,
                "start": 366,
                "end": 372
              }
            ],
            "optional": false,
            "start": 355,
            "end": 373
          },
          "definite": false,
          "start": 340,
          "end": 373
        }
      ],
      "declare": false,
      "start": 334,
      "end": 374
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
            "name": "result2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 390,
                    "end": 391
                  },
                  "typeArguments": null,
                  "start": 390,
                  "end": 391
                },
                "start": 390,
                "end": 393
              },
              "start": 388,
              "end": 393
            },
            "start": 381,
            "end": 393
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 396,
                "end": 401
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 402,
                "end": 406
              },
              "optional": false,
              "computed": false,
              "start": 396,
              "end": 406
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "inputA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 407,
                    "end": 413
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 414,
                    "end": 420
                  },
                  "optional": false,
                  "computed": false,
                  "start": 407,
                  "end": 420
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 407,
                "end": 422
              }
            ],
            "optional": false,
            "start": 396,
            "end": 423
          },
          "definite": false,
          "start": 381,
          "end": 423
        }
      ],
      "declare": false,
      "start": 375,
      "end": 424
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
            "name": "result3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 440,
                    "end": 441
                  },
                  "typeArguments": null,
                  "start": 440,
                  "end": 441
                },
                "start": 440,
                "end": 443
              },
              "start": 438,
              "end": 443
            },
            "start": 431,
            "end": 443
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 446,
                "end": 451
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 452,
                "end": 456
              },
              "optional": false,
              "computed": false,
              "start": 446,
              "end": 456
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "inputA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 457,
                    "end": 463
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 464,
                    "end": 470
                  },
                  "optional": false,
                  "computed": false,
                  "start": 457,
                  "end": 470
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 457,
                "end": 472
              }
            ],
            "optional": false,
            "start": 446,
            "end": 473
          },
          "definite": false,
          "start": 431,
          "end": 473
        }
      ],
      "declare": false,
      "start": 425,
      "end": 474
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
            "name": "result4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 506,
                    "end": 507
                  },
                  "typeArguments": null,
                  "start": 506,
                  "end": 507
                },
                "start": 506,
                "end": 509
              },
              "start": 504,
              "end": 509
            },
            "start": 497,
            "end": 509
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 512,
                "end": 517
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 518,
                "end": 522
              },
              "optional": false,
              "computed": false,
              "start": 512,
              "end": 522
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "inputB",
                "optional": false,
                "typeAnnotation": null,
                "start": 523,
                "end": 529
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 534,
                          "end": 535
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 534,
                          "end": 535
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 534,
                        "end": 535
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 532,
                    "end": 537
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 540,
                      "end": 541
                    },
                    "typeArguments": null,
                    "start": 540,
                    "end": 541
                  },
                  "start": 538,
                  "end": 541
                },
                "body": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 548,
                        "end": 549
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 551,
                        "end": 552
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 548,
                      "end": 552
                    }
                  ],
                  "start": 546,
                  "end": 554
                },
                "id": null,
                "generator": false,
                "start": 531,
                "end": 555
              }
            ],
            "optional": false,
            "start": 512,
            "end": 556
          },
          "definite": false,
          "start": 497,
          "end": 556
        }
      ],
      "declare": false,
      "start": 491,
      "end": 557
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
            "name": "result5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 573,
                    "end": 574
                  },
                  "typeArguments": null,
                  "start": 573,
                  "end": 574
                },
                "start": 573,
                "end": 576
              },
              "start": 571,
              "end": 576
            },
            "start": 564,
            "end": 576
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 579,
                "end": 584
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 585,
                "end": 589
              },
              "optional": false,
              "computed": false,
              "start": 579,
              "end": 589
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "inputALike",
                "optional": false,
                "typeAnnotation": null,
                "start": 590,
                "end": 600
              }
            ],
            "optional": false,
            "start": 579,
            "end": 601
          },
          "definite": false,
          "start": 564,
          "end": 601
        }
      ],
      "declare": false,
      "start": 558,
      "end": 602
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
            "name": "result6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 618,
                    "end": 619
                  },
                  "typeArguments": null,
                  "start": 618,
                  "end": 619
                },
                "start": 618,
                "end": 621
              },
              "start": 616,
              "end": 621
            },
            "start": 609,
            "end": 621
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 624,
                "end": 629
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 630,
                "end": 634
              },
              "optional": false,
              "computed": false,
              "start": 624,
              "end": 634
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "inputALike",
                "optional": false,
                "typeAnnotation": null,
                "start": 635,
                "end": 645
              }
            ],
            "optional": false,
            "start": 624,
            "end": 646
          },
          "definite": false,
          "start": 609,
          "end": 646
        }
      ],
      "declare": false,
      "start": 603,
      "end": 647
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
            "name": "result7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 679,
                    "end": 680
                  },
                  "typeArguments": null,
                  "start": 679,
                  "end": 680
                },
                "start": 679,
                "end": 682
              },
              "start": 677,
              "end": 682
            },
            "start": 670,
            "end": 682
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 685,
                "end": 690
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 691,
                "end": 695
              },
              "optional": false,
              "computed": false,
              "start": 685,
              "end": 695
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "inputALike",
                "optional": false,
                "typeAnnotation": null,
                "start": 696,
                "end": 706
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 711,
                          "end": 712
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 711,
                          "end": 712
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 711,
                        "end": 712
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 709,
                    "end": 714
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 717,
                      "end": 718
                    },
                    "typeArguments": null,
                    "start": 717,
                    "end": 718
                  },
                  "start": 715,
                  "end": 718
                },
                "body": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 725,
                        "end": 726
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 728,
                        "end": 729
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 725,
                      "end": 729
                    }
                  ],
                  "start": 723,
                  "end": 731
                },
                "id": null,
                "generator": false,
                "start": 708,
                "end": 732
              }
            ],
            "optional": false,
            "start": 685,
            "end": 733
          },
          "definite": false,
          "start": 670,
          "end": 733
        }
      ],
      "declare": false,
      "start": 664,
      "end": 734
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
            "name": "result8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 750,
                    "end": 751
                  },
                  "typeArguments": null,
                  "start": 750,
                  "end": 751
                },
                "start": 750,
                "end": 753
              },
              "start": 748,
              "end": 753
            },
            "start": 741,
            "end": 753
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 756,
                "end": 761
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 762,
                "end": 766
              },
              "optional": false,
              "computed": false,
              "start": 756,
              "end": 766
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "inputARand",
                "optional": false,
                "typeAnnotation": null,
                "start": 767,
                "end": 777
              }
            ],
            "optional": false,
            "start": 756,
            "end": 778
          },
          "definite": false,
          "start": 741,
          "end": 778
        }
      ],
      "declare": false,
      "start": 735,
      "end": 779
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
            "name": "result9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 795,
                    "end": 796
                  },
                  "typeArguments": null,
                  "start": 795,
                  "end": 796
                },
                "start": 795,
                "end": 798
              },
              "start": 793,
              "end": 798
            },
            "start": 786,
            "end": 798
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 801,
                "end": 806
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 807,
                "end": 811
              },
              "optional": false,
              "computed": false,
              "start": 801,
              "end": 811
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "inputARand",
                "optional": false,
                "typeAnnotation": null,
                "start": 812,
                "end": 822
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 827,
                          "end": 828
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 827,
                          "end": 828
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 827,
                        "end": 828
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 825,
                    "end": 830
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 833,
                      "end": 834
                    },
                    "typeArguments": null,
                    "start": 833,
                    "end": 834
                  },
                  "start": 831,
                  "end": 834
                },
                "body": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 841,
                        "end": 842
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 844,
                        "end": 845
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 841,
                      "end": 845
                    }
                  ],
                  "start": 839,
                  "end": 847
                },
                "id": null,
                "generator": false,
                "start": 824,
                "end": 848
              }
            ],
            "optional": false,
            "start": 801,
            "end": 849
          },
          "definite": false,
          "start": 786,
          "end": 849
        }
      ],
      "declare": false,
      "start": 780,
      "end": 850
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
            "name": "result10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 867,
                    "end": 868
                  },
                  "typeArguments": null,
                  "start": 867,
                  "end": 868
                },
                "start": 867,
                "end": 870
              },
              "start": 865,
              "end": 870
            },
            "start": 857,
            "end": 870
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 873,
                "end": 878
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 879,
                "end": 883
              },
              "optional": false,
              "computed": false,
              "start": 873,
              "end": 883
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 888,
                  "end": 891
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 892,
                        "end": 893
                      },
                      "typeArguments": null,
                      "start": 892,
                      "end": 893
                    }
                  ],
                  "start": 891,
                  "end": 894
                },
                "arguments": [],
                "start": 884,
                "end": 896
              }
            ],
            "optional": false,
            "start": 873,
            "end": 897
          },
          "definite": false,
          "start": 857,
          "end": 897
        }
      ],
      "declare": false,
      "start": 851,
      "end": 898
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
            "name": "result11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 915,
                    "end": 916
                  },
                  "typeArguments": null,
                  "start": 915,
                  "end": 916
                },
                "start": 915,
                "end": 918
              },
              "start": 913,
              "end": 918
            },
            "start": 905,
            "end": 918
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 921,
                "end": 926
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 927,
                "end": 931
              },
              "optional": false,
              "computed": false,
              "start": 921,
              "end": 931
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "inputASet",
                "optional": false,
                "typeAnnotation": null,
                "start": 932,
                "end": 941
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 946,
                          "end": 947
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 946,
                          "end": 947
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 946,
                        "end": 947
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 944,
                    "end": 949
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 952,
                      "end": 953
                    },
                    "typeArguments": null,
                    "start": 952,
                    "end": 953
                  },
                  "start": 950,
                  "end": 953
                },
                "body": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 960,
                        "end": 961
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 963,
                        "end": 964
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 960,
                      "end": 964
                    }
                  ],
                  "start": 958,
                  "end": 966
                },
                "id": null,
                "generator": false,
                "start": 943,
                "end": 967
              }
            ],
            "optional": false,
            "start": 921,
            "end": 968
          },
          "definite": false,
          "start": 905,
          "end": 968
        }
      ],
      "declare": false,
      "start": 899,
      "end": 969
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getEither",
        "optional": false,
        "typeAnnotation": null,
        "start": 1173,
        "end": 1182
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
              "start": 1183,
              "end": 1184
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1183,
            "end": 1184
          }
        ],
        "start": 1182,
        "end": 1185
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "in1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Iterable",
                "optional": false,
                "typeAnnotation": null,
                "start": 1192,
                "end": 1200
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
                      "start": 1201,
                      "end": 1202
                    },
                    "typeArguments": null,
                    "start": 1201,
                    "end": 1202
                  }
                ],
                "start": 1200,
                "end": 1203
              },
              "start": 1192,
              "end": 1203
            },
            "start": 1190,
            "end": 1203
          },
          "start": 1187,
          "end": 1203
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "in2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayLike",
                "optional": false,
                "typeAnnotation": null,
                "start": 1210,
                "end": 1219
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
                      "start": 1220,
                      "end": 1221
                    },
                    "typeArguments": null,
                    "start": 1220,
                    "end": 1221
                  }
                ],
                "start": 1219,
                "end": 1222
              },
              "start": 1210,
              "end": 1222
            },
            "start": 1208,
            "end": 1222
          },
          "start": 1205,
          "end": 1222
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1235,
                      "end": 1239
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "random",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1240,
                      "end": 1246
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1235,
                    "end": 1246
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1235,
                  "end": 1248
                },
                "operator": ">",
                "right": {
                  "type": "Literal",
                  "value": 0.5,
                  "raw": "0.5",
                  "start": 1251,
                  "end": 1254
                },
                "start": 1235,
                "end": 1254
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "in1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1257,
                "end": 1260
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "in2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1263,
                "end": 1266
              },
              "start": 1235,
              "end": 1266
            },
            "start": 1228,
            "end": 1267
          }
        ],
        "start": 1224,
        "end": 1269
      },
      "expression": false,
      "start": 1164,
      "end": 1269
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 95,
  "end": 1269
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 95,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 114,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 125,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 144,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 155,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "inputA",
    "start": 161,
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
    "value": "A",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 179,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "inputB",
    "start": 185,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "const",
    "start": 203,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "inputALike",
    "start": 209,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "ArrayLike",
    "start": 221,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 238,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 251,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "inputARand",
    "start": 257,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "getEither",
    "start": 270,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "inputA",
    "start": 280,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "inputALike",
    "start": 288,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 301,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "inputASet",
    "start": 307,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 319,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "Set",
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
    "value": "A",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 334,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "result1",
    "start": 340,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 355,
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
    "value": "from",
    "start": 361,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "inputA",
    "start": 366,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 375,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "result2",
    "start": 381,
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
    "value": "A",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 396,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 402,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "inputA",
    "start": 407,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 414,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 423,
    "end": 424
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 425,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "result3",
    "start": 431,
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
    "value": "B",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 446,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 452,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "inputA",
    "start": 457,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 464,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ")",
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
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 491,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "result4",
    "start": 497,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 512,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 518,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "inputB",
    "start": 523,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 542,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 556,
    "end": 557
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 558,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "result5",
    "start": 564,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 579,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 585,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "inputALike",
    "start": 590,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 603,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "result6",
    "start": 609,
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
    "value": "B",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 624,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 630,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "inputALike",
    "start": 635,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 664,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "result7",
    "start": 670,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 685,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 691,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "inputALike",
    "start": 696,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 719,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 725,
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
    "value": "a",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 733,
    "end": 734
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 735,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "result8",
    "start": 741,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 756,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 762,
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
    "value": "inputARand",
    "start": 767,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 778,
    "end": 779
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 780,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "result9",
    "start": 786,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 801,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 807,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "inputARand",
    "start": 812,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 835,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 851,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "result10",
    "start": 857,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 873,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 879,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 883,
    "end": 884
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 884,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 888,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 897,
    "end": 898
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 899,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "result11",
    "start": 905,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 921,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 927,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 931,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "inputASet",
    "start": 932,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 954,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "a",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 966,
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
    "value": "function",
    "start": 1164,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "getEither",
    "start": 1173,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "in1",
    "start": 1187,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 1192,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "in2",
    "start": 1205,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "ArrayLike",
    "start": 1210,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1228,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1235,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 1240,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 1251,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "in1",
    "start": 1257,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "in2",
    "start": 1263,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1268,
    "end": 1269
  }
]
```
