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
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 32
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
              "type": "Literal",
              "value": "i am a very certain type",
              "raw": "'i am a very certain type'",
              "start": 35,
              "end": 61
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 63,
                  "end": 64
                },
                "typeArguments": null,
                "start": 63,
                "end": 64
              },
              "start": 61,
              "end": 64
            },
            "accessibility": null,
            "static": false,
            "start": 35,
            "end": 64
          }
        ],
        "start": 33,
        "end": 66
      },
      "declare": false,
      "start": 21,
      "end": 66
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
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
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 75
                },
                "typeArguments": null,
                "start": 74,
                "end": 75
              },
              "start": 72,
              "end": 75
            },
            "start": 71,
            "end": 75
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null,
                "start": 79,
                "end": 80
              },
              "typeArguments": null,
              "start": 79,
              "end": 80
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 90
            },
            "start": 78,
            "end": 90
          },
          "definite": false,
          "start": 71,
          "end": 90
        }
      ],
      "declare": false,
      "start": 67,
      "end": 91
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "destructure",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 112
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 114
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 113,
            "end": 114
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 117
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 116,
            "end": 117
          }
        ],
        "start": 112,
        "end": 118
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "something",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 136
                  },
                  "typeArguments": null,
                  "start": 135,
                  "end": 136
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 139,
                    "end": 140
                  },
                  "typeArguments": null,
                  "start": 139,
                  "end": 140
                }
              ],
              "start": 135,
              "end": 140
            },
            "start": 133,
            "end": 140
          },
          "start": 124,
          "end": 140
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "haveValue",
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 165,
                        "end": 166
                      },
                      "typeArguments": null,
                      "start": 165,
                      "end": 166
                    },
                    "start": 163,
                    "end": 166
                  },
                  "start": 158,
                  "end": 166
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 171,
                    "end": 172
                  },
                  "typeArguments": null,
                  "start": 171,
                  "end": 172
                },
                "start": 168,
                "end": 172
              },
              "start": 157,
              "end": 172
            },
            "start": 155,
            "end": 172
          },
          "start": 146,
          "end": 172
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "haveY",
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 193,
                        "end": 194
                      },
                      "typeArguments": null,
                      "start": 193,
                      "end": 194
                    },
                    "start": 191,
                    "end": 194
                  },
                  "start": 186,
                  "end": 194
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 199,
                    "end": 200
                  },
                  "typeArguments": null,
                  "start": 199,
                  "end": 200
                },
                "start": 196,
                "end": 200
              },
              "start": 185,
              "end": 200
            },
            "start": 183,
            "end": 200
          },
          "start": 178,
          "end": 200
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 205
          },
          "typeArguments": null,
          "start": 204,
          "end": 205
        },
        "start": 202,
        "end": 205
      },
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "something",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 219,
                  "end": 228
                },
                "operator": "===",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 233,
                  "end": 234
                },
                "start": 219,
                "end": 234
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "haveY",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 237,
                  "end": 242
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 243,
                    "end": 244
                  }
                ],
                "optional": false,
                "start": 237,
                "end": 245
              },
              "alternate": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "haveValue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 248,
                  "end": 257
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 259,
                        "end": 260
                      },
                      "typeArguments": null,
                      "start": 259,
                      "end": 260
                    },
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 261,
                      "end": 270
                    },
                    "start": 258,
                    "end": 270
                  }
                ],
                "optional": false,
                "start": 248,
                "end": 271
              },
              "start": 219,
              "end": 271
            },
            "start": 212,
            "end": 272
          }
        ],
        "start": 206,
        "end": 274
      },
      "expression": false,
      "start": 92,
      "end": 274
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 280,
            "end": 285
          },
          "init": {
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
                    "start": 288,
                    "end": 292
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 293,
                    "end": 299
                  },
                  "optional": false,
                  "computed": false,
                  "start": 288,
                  "end": 299
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 288,
                "end": 301
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 0.5,
                "raw": "0.5",
                "start": 304,
                "end": 307
              },
              "start": 288,
              "end": 307
            },
            "consequent": {
              "type": "Literal",
              "value": "hey!",
              "raw": "'hey!'",
              "start": 310,
              "end": 316
            },
            "alternate": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 320,
                  "end": 321
                },
                "typeArguments": null,
                "start": 320,
                "end": 321
              },
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 322,
                "end": 331
              },
              "start": 319,
              "end": 331
            },
            "start": 288,
            "end": 331
          },
          "definite": false,
          "start": 280,
          "end": 331
        }
      ],
      "declare": false,
      "start": 276,
      "end": 332
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 338,
            "end": 344
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "destructure",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 358
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 359,
                "end": 364
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "text",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 366,
                    "end": 370
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 374,
                  "end": 382
                },
                "id": null,
                "generator": false,
                "start": 366,
                "end": 382
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 384,
                    "end": 385
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "other one",
                  "raw": "'other one'",
                  "start": 389,
                  "end": 400
                },
                "id": null,
                "generator": false,
                "start": 384,
                "end": 400
              }
            ],
            "optional": false,
            "start": 347,
            "end": 401
          },
          "definite": false,
          "start": 338,
          "end": 401
        }
      ],
      "declare": false,
      "start": 334,
      "end": 402
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isVoid",
        "optional": false,
        "typeAnnotation": null,
        "start": 456,
        "end": 462
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 463,
              "end": 464
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 463,
            "end": 464
          }
        ],
        "start": 462,
        "end": 465
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSVoidKeyword",
                  "start": 473,
                  "end": 477
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 480,
                    "end": 481
                  },
                  "typeArguments": null,
                  "start": 480,
                  "end": 481
                }
              ],
              "start": 473,
              "end": 481
            },
            "start": 471,
            "end": 481
          },
          "start": 466,
          "end": 481
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 484,
            "end": 489
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 493,
              "end": 497
            },
            "start": 493,
            "end": 497
          },
          "start": 484,
          "end": 497
        },
        "start": 482,
        "end": 497
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 511,
              "end": 520
            },
            "start": 504,
            "end": 521
          }
        ],
        "start": 498,
        "end": 523
      },
      "expression": false,
      "start": 447,
      "end": 523
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNonVoid",
        "optional": false,
        "typeAnnotation": null,
        "start": 534,
        "end": 543
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 544,
              "end": 545
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 544,
            "end": 545
          }
        ],
        "start": 543,
        "end": 546
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSVoidKeyword",
                  "start": 554,
                  "end": 558
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 561,
                    "end": 562
                  },
                  "typeArguments": null,
                  "start": 561,
                  "end": 562
                }
              ],
              "start": 554,
              "end": 562
            },
            "start": 552,
            "end": 562
          },
          "start": 547,
          "end": 562
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 566,
            "end": 571
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 575,
                "end": 576
              },
              "typeArguments": null,
              "start": 575,
              "end": 576
            },
            "start": 575,
            "end": 576
          },
          "start": 566,
          "end": 576
        },
        "start": 564,
        "end": 576
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 590,
              "end": 599
            },
            "start": 583,
            "end": 600
          }
        ],
        "start": 577,
        "end": 602
      },
      "expression": false,
      "start": 525,
      "end": 602
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 613,
        "end": 617
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 618,
              "end": 619
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 618,
            "end": 619
          }
        ],
        "start": 617,
        "end": 620
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSVoidKeyword",
                  "start": 628,
                  "end": 632
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 633,
                    "end": 634
                  },
                  "typeArguments": null,
                  "start": 633,
                  "end": 634
                }
              ],
              "start": 628,
              "end": 634
            },
            "start": 626,
            "end": 634
          },
          "start": 621,
          "end": 634
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 637,
          "end": 641
        },
        "start": 635,
        "end": 641
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isVoid",
                "optional": false,
                "typeAnnotation": null,
                "start": 652,
                "end": 658
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 659,
                  "end": 664
                }
              ],
              "optional": false,
              "start": 652,
              "end": 665
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 677,
                    "end": 682
                  },
                  "directive": null,
                  "start": 677,
                  "end": 683
                }
              ],
              "start": 667,
              "end": 706
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 722,
                    "end": 727
                  },
                  "directive": null,
                  "start": 722,
                  "end": 728
                }
              ],
              "start": 712,
              "end": 748
            },
            "start": 648,
            "end": 748
          }
        ],
        "start": 642,
        "end": 750
      },
      "expression": false,
      "start": 604,
      "end": 750
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz1",
        "optional": false,
        "typeAnnotation": null,
        "start": 761,
        "end": 765
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 766,
              "end": 767
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 766,
            "end": 767
          }
        ],
        "start": 765,
        "end": 768
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSVoidKeyword",
                  "start": 776,
                  "end": 780
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 781,
                    "end": 782
                  },
                  "typeArguments": null,
                  "start": 781,
                  "end": 782
                }
              ],
              "start": 776,
              "end": 782
            },
            "start": 774,
            "end": 782
          },
          "start": 769,
          "end": 782
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 785,
          "end": 789
        },
        "start": 783,
        "end": 789
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isNonVoid",
                "optional": false,
                "typeAnnotation": null,
                "start": 802,
                "end": 811
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 812,
                  "end": 817
                }
              ],
              "optional": false,
              "start": 802,
              "end": 818
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 832,
                    "end": 837
                  },
                  "directive": null,
                  "start": 832,
                  "end": 838
                }
              ],
              "start": 820,
              "end": 860
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 878,
                    "end": 883
                  },
                  "directive": null,
                  "start": 878,
                  "end": 884
                }
              ],
              "start": 866,
              "end": 909
            },
            "start": 798,
            "end": 909
          }
        ],
        "start": 790,
        "end": 911
      },
      "expression": false,
      "start": 752,
      "end": 911
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Maybe",
        "optional": false,
        "typeAnnotation": null,
        "start": 939,
        "end": 944
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
              "start": 945,
              "end": 946
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 945,
            "end": 946
          }
        ],
        "start": 944,
        "end": 947
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 950,
              "end": 951
            },
            "typeArguments": null,
            "start": 950,
            "end": 951
          },
          {
            "type": "TSVoidKeyword",
            "start": 954,
            "end": 958
          }
        ],
        "start": 950,
        "end": 958
      },
      "declare": false,
      "start": 934,
      "end": 959
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "get",
        "optional": false,
        "typeAnnotation": null,
        "start": 970,
        "end": 973
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
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 974,
              "end": 975
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 974,
            "end": 975
          }
        ],
        "start": 973,
        "end": 976
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 980,
                    "end": 981
                  },
                  "typeArguments": null,
                  "start": 980,
                  "end": 981
                },
                {
                  "type": "TSVoidKeyword",
                  "start": 984,
                  "end": 988
                }
              ],
              "start": 980,
              "end": 988
            },
            "start": 978,
            "end": 988
          },
          "start": 977,
          "end": 988
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 991,
            "end": 992
          },
          "typeArguments": null,
          "start": 991,
          "end": 992
        },
        "start": 989,
        "end": 992
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1005,
              "end": 1009
            },
            "start": 998,
            "end": 1010
          }
        ],
        "start": 993,
        "end": 1031
      },
      "expression": false,
      "start": 961,
      "end": 1031
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Maybe",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1042,
                  "end": 1047
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1048,
                      "end": 1054
                    }
                  ],
                  "start": 1047,
                  "end": 1055
                },
                "start": 1042,
                "end": 1055
              },
              "start": 1040,
              "end": 1055
            },
            "start": 1037,
            "end": 1055
          },
          "init": null,
          "definite": false,
          "start": 1037,
          "end": 1055
        }
      ],
      "declare": false,
      "start": 1033,
      "end": 1056
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 1057,
              "end": 1060
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1061,
                "end": 1064
              }
            ],
            "optional": false,
            "start": 1057,
            "end": 1065
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toUpperCase",
            "optional": false,
            "typeAnnotation": null,
            "start": 1066,
            "end": 1077
          },
          "optional": false,
          "computed": false,
          "start": 1057,
          "end": 1077
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1057,
        "end": 1079
      },
      "directive": null,
      "start": 1057,
      "end": 1080
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Man",
        "optional": false,
        "typeAnnotation": null,
        "start": 1119,
        "end": 1122
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
              "name": "walks",
              "optional": false,
              "typeAnnotation": null,
              "start": 1129,
              "end": 1134
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1136,
                "end": 1143
              },
              "start": 1134,
              "end": 1143
            },
            "accessibility": null,
            "static": false,
            "start": 1129,
            "end": 1144
          }
        ],
        "start": 1123,
        "end": 1146
      },
      "declare": false,
      "start": 1109,
      "end": 1146
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bear",
        "optional": false,
        "typeAnnotation": null,
        "start": 1158,
        "end": 1162
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
              "name": "roars",
              "optional": false,
              "typeAnnotation": null,
              "start": 1169,
              "end": 1174
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1176,
                "end": 1183
              },
              "start": 1174,
              "end": 1183
            },
            "accessibility": null,
            "static": false,
            "start": 1169,
            "end": 1184
          }
        ],
        "start": 1163,
        "end": 1186
      },
      "declare": false,
      "start": 1148,
      "end": 1186
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Pig",
        "optional": false,
        "typeAnnotation": null,
        "start": 1198,
        "end": 1201
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
              "name": "oinks",
              "optional": false,
              "typeAnnotation": null,
              "start": 1208,
              "end": 1213
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1215,
                "end": 1222
              },
              "start": 1213,
              "end": 1222
            },
            "accessibility": null,
            "static": false,
            "start": 1208,
            "end": 1223
          }
        ],
        "start": 1202,
        "end": 1225
      },
      "declare": false,
      "start": 1188,
      "end": 1225
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "pigify",
        "optional": false,
        "typeAnnotation": null,
        "start": 1244,
        "end": 1250
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
              "start": 1251,
              "end": 1252
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1251,
            "end": 1252
          }
        ],
        "start": 1250,
        "end": 1253
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1257,
                    "end": 1258
                  },
                  "typeArguments": null,
                  "start": 1257,
                  "end": 1258
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bear",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1261,
                    "end": 1265
                  },
                  "typeArguments": null,
                  "start": 1261,
                  "end": 1265
                }
              ],
              "start": 1257,
              "end": 1265
            },
            "start": 1255,
            "end": 1265
          },
          "start": 1254,
          "end": 1265
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1268,
                "end": 1269
              },
              "typeArguments": null,
              "start": 1268,
              "end": 1269
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pig",
                "optional": false,
                "typeAnnotation": null,
                "start": 1272,
                "end": 1275
              },
              "typeArguments": null,
              "start": 1272,
              "end": 1275
            }
          ],
          "start": 1268,
          "end": 1275
        },
        "start": 1266,
        "end": 1275
      },
      "body": null,
      "expression": false,
      "start": 1227,
      "end": 1276
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "mbp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Man",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1294,
                      "end": 1297
                    },
                    "typeArguments": null,
                    "start": 1294,
                    "end": 1297
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bear",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1300,
                      "end": 1304
                    },
                    "typeArguments": null,
                    "start": 1300,
                    "end": 1304
                  }
                ],
                "start": 1294,
                "end": 1304
              },
              "start": 1292,
              "end": 1304
            },
            "start": 1289,
            "end": 1304
          },
          "init": null,
          "definite": false,
          "start": 1289,
          "end": 1304
        }
      ],
      "declare": true,
      "start": 1277,
      "end": 1305
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "pigify",
            "optional": false,
            "typeAnnotation": null,
            "start": 1307,
            "end": 1313
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "mbp",
              "optional": false,
              "typeAnnotation": null,
              "start": 1314,
              "end": 1317
            }
          ],
          "optional": false,
          "start": 1307,
          "end": 1318
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "oinks",
          "optional": false,
          "typeAnnotation": null,
          "start": 1319,
          "end": 1324
        },
        "optional": false,
        "computed": false,
        "start": 1307,
        "end": 1324
      },
      "directive": null,
      "start": 1307,
      "end": 1325
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "pigify",
            "optional": false,
            "typeAnnotation": null,
            "start": 1355,
            "end": 1361
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "mbp",
              "optional": false,
              "typeAnnotation": null,
              "start": 1362,
              "end": 1365
            }
          ],
          "optional": false,
          "start": 1355,
          "end": 1366
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "walks",
          "optional": false,
          "typeAnnotation": null,
          "start": 1367,
          "end": 1372
        },
        "optional": false,
        "computed": false,
        "start": 1355,
        "end": 1372
      },
      "directive": null,
      "start": 1355,
      "end": 1373
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ITest",
        "optional": false,
        "typeAnnotation": null,
        "start": 1437,
        "end": 1442
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
              "start": 1447,
              "end": 1451
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "test",
                  "raw": "'test'",
                  "start": 1453,
                  "end": 1459
                },
                "start": 1453,
                "end": 1459
              },
              "start": 1451,
              "end": 1459
            },
            "accessibility": null,
            "static": false,
            "start": 1447,
            "end": 1459
          }
        ],
        "start": 1443,
        "end": 1461
      },
      "declare": false,
      "start": 1427,
      "end": 1461
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
            "name": "createTestAsync",
            "optional": false,
            "typeAnnotation": null,
            "start": 1469,
            "end": 1484
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1491,
                  "end": 1498
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ITest",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1499,
                        "end": 1504
                      },
                      "typeArguments": null,
                      "start": 1499,
                      "end": 1504
                    }
                  ],
                  "start": 1498,
                  "end": 1505
                },
                "start": 1491,
                "end": 1505
              },
              "start": 1489,
              "end": 1505
            },
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1509,
                      "end": 1516
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1517,
                      "end": 1524
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1509,
                    "end": 1524
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1509,
                  "end": 1526
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "then",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1527,
                  "end": 1531
                },
                "optional": false,
                "computed": false,
                "start": 1509,
                "end": 1531
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1541,
                          "end": 1545
                        },
                        "value": {
                          "type": "Literal",
                          "value": "test",
                          "raw": "'test'",
                          "start": 1547,
                          "end": 1553
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1541,
                        "end": 1553
                      }
                    ],
                    "start": 1539,
                    "end": 1555
                  },
                  "id": null,
                  "generator": false,
                  "start": 1532,
                  "end": 1556
                }
              ],
              "optional": false,
              "start": 1509,
              "end": 1557
            },
            "id": null,
            "generator": false,
            "start": 1487,
            "end": 1557
          },
          "definite": false,
          "start": 1469,
          "end": 1557
        }
      ],
      "declare": false,
      "start": 1463,
      "end": 1557
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
            "name": "createTest",
            "optional": false,
            "typeAnnotation": null,
            "start": 1565,
            "end": 1575
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ITest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1582,
                  "end": 1587
                },
                "typeArguments": null,
                "start": 1582,
                "end": 1587
              },
              "start": 1580,
              "end": 1587
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1604,
                          "end": 1608
                        },
                        "value": {
                          "type": "Literal",
                          "value": "test",
                          "raw": "'test'",
                          "start": 1610,
                          "end": 1616
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1604,
                        "end": 1616
                      }
                    ],
                    "start": 1602,
                    "end": 1618
                  },
                  "start": 1595,
                  "end": 1618
                }
              ],
              "start": 1591,
              "end": 1620
            },
            "id": null,
            "generator": false,
            "start": 1578,
            "end": 1620
          },
          "definite": false,
          "start": 1565,
          "end": 1620
        }
      ],
      "declare": false,
      "start": 1559,
      "end": 1620
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1639,
        "end": 1641
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
              "start": 1642,
              "end": 1643
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1642,
            "end": 1643
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1645,
              "end": 1646
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1645,
            "end": 1646
          }
        ],
        "start": 1641,
        "end": 1647
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1651,
                    "end": 1652
                  },
                  "typeArguments": null,
                  "start": 1651,
                  "end": 1652
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1655,
                    "end": 1656
                  },
                  "typeArguments": null,
                  "start": 1655,
                  "end": 1656
                }
              ],
              "start": 1651,
              "end": 1656
            },
            "start": 1649,
            "end": 1656
          },
          "start": 1648,
          "end": 1656
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1659,
                "end": 1660
              },
              "typeArguments": null,
              "start": 1659,
              "end": 1660
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1663,
                "end": 1664
              },
              "typeArguments": null,
              "start": 1663,
              "end": 1664
            }
          ],
          "start": 1659,
          "end": 1664
        },
        "start": 1657,
        "end": 1664
      },
      "body": null,
      "expression": false,
      "start": 1622,
      "end": 1665
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1683,
        "end": 1685
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
              "start": 1686,
              "end": 1687
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1686,
            "end": 1687
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1689,
              "end": 1690
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1689,
            "end": 1690
          }
        ],
        "start": 1685,
        "end": 1691
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1695,
                "end": 1696
              },
              "typeArguments": null,
              "start": 1695,
              "end": 1696
            },
            "start": 1693,
            "end": 1696
          },
          "start": 1692,
          "end": 1696
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
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1701,
                "end": 1702
              },
              "typeArguments": null,
              "start": 1701,
              "end": 1702
            },
            "start": 1699,
            "end": 1702
          },
          "start": 1698,
          "end": 1702
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1705,
                "end": 1706
              },
              "typeArguments": null,
              "start": 1705,
              "end": 1706
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1709,
                "end": 1710
              },
              "typeArguments": null,
              "start": 1709,
              "end": 1710
            }
          ],
          "start": 1705,
          "end": 1710
        },
        "start": 1703,
        "end": 1710
      },
      "body": null,
      "expression": false,
      "start": 1666,
      "end": 1711
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1721,
                "end": 1727
              },
              "start": 1719,
              "end": 1727
            },
            "start": 1717,
            "end": 1727
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1730,
              "end": 1732
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 1733,
                "end": 1736
              }
            ],
            "optional": false,
            "start": 1730,
            "end": 1737
          },
          "definite": false,
          "start": 1717,
          "end": 1737
        }
      ],
      "declare": false,
      "start": 1713,
      "end": 1738
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1747,
                "end": 1753
              },
              "start": 1745,
              "end": 1753
            },
            "start": 1743,
            "end": 1753
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1756,
              "end": 1758
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 1759,
                "end": 1762
              },
              {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 1764,
                "end": 1767
              }
            ],
            "optional": false,
            "start": 1756,
            "end": 1768
          },
          "definite": false,
          "start": 1743,
          "end": 1768
        }
      ],
      "declare": false,
      "start": 1739,
      "end": 1769
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
            "name": "func",
            "optional": false,
            "typeAnnotation": null,
            "start": 1799,
            "end": 1803
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "start": 1807,
                    "end": 1808
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1807,
                  "end": 1808
                }
              ],
              "start": 1806,
              "end": 1809
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1815,
              "end": 1817
            },
            "id": null,
            "generator": false,
            "start": 1806,
            "end": 1817
          },
          "definite": false,
          "start": 1799,
          "end": 1817
        }
      ],
      "declare": false,
      "start": 1793,
      "end": 1818
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
            "name": "assign",
            "optional": false,
            "typeAnnotation": null,
            "start": 1825,
            "end": 1831
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 1835,
                    "end": 1836
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1835,
                  "end": 1836
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1838,
                    "end": 1839
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1838,
                  "end": 1839
                }
              ],
              "start": 1834,
              "end": 1840
            },
            "params": [
              {
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1844,
                      "end": 1845
                    },
                    "typeArguments": null,
                    "start": 1844,
                    "end": 1845
                  },
                  "start": 1842,
                  "end": 1845
                },
                "start": 1841,
                "end": 1845
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
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
                      "start": 1850,
                      "end": 1851
                    },
                    "typeArguments": null,
                    "start": 1850,
                    "end": 1851
                  },
                  "start": 1848,
                  "end": 1851
                },
                "start": 1847,
                "end": 1851
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1856,
                  "end": 1862
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "assign",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1863,
                  "end": 1869
                },
                "optional": false,
                "computed": false,
                "start": 1856,
                "end": 1869
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1870,
                  "end": 1871
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1873,
                  "end": 1874
                }
              ],
              "optional": false,
              "start": 1856,
              "end": 1875
            },
            "id": null,
            "generator": false,
            "start": 1834,
            "end": 1875
          },
          "definite": false,
          "start": 1825,
          "end": 1875
        }
      ],
      "declare": false,
      "start": 1819,
      "end": 1876
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
            "name": "res",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1895,
                        "end": 1899
                      },
                      "start": 1892,
                      "end": 1899
                    },
                    "start": 1889,
                    "end": 1899
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
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1905,
                          "end": 1909
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1911,
                            "end": 1914
                          },
                          "start": 1909,
                          "end": 1914
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1905,
                        "end": 1914
                      }
                    ],
                    "start": 1903,
                    "end": 1916
                  }
                ],
                "start": 1888,
                "end": 1916
              },
              "start": 1886,
              "end": 1916
            },
            "start": 1883,
            "end": 1916
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "assign",
              "optional": false,
              "typeAnnotation": null,
              "start": 1919,
              "end": 1925
            },
            "typeArguments": null,
            "arguments": [
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
                  "start": 1932,
                  "end": 1934
                },
                "id": null,
                "generator": false,
                "start": 1926,
                "end": 1934
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1938,
                      "end": 1942
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "func",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1938,
                      "end": 1942
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1938,
                    "end": 1942
                  }
                ],
                "start": 1936,
                "end": 1944
              }
            ],
            "optional": false,
            "start": 1919,
            "end": 1945
          },
          "definite": false,
          "start": 1883,
          "end": 1945
        }
      ],
      "declare": false,
      "start": 1877,
      "end": 1946
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 1946
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 21,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "String",
    "value": "'i am a very certain type'",
    "start": 35,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 67,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 81,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 92,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "destructure",
    "start": 101,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 124,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "haveValue",
    "start": 146,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 158,
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
    "value": "a",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 168,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "haveY",
    "start": 178,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 186,
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
    "value": "Y",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 196,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 212,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 219,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 229,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "haveY",
    "start": 237,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "haveValue",
    "start": 248,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 261,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 276,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 280,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 288,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 293,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 302,
    "end": 303
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 304,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 308,
    "end": 309
  },
  {
    "type": "String",
    "value": "'hey!'",
    "start": 310,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 322,
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
    "value": "var",
    "start": 334,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 338,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "destructure",
    "start": 347,
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
    "value": "value",
    "start": 359,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 366,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 371,
    "end": 373
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 374,
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
    "value": "=>",
    "start": 386,
    "end": 388
  },
  {
    "type": "String",
    "value": "'other one'",
    "start": 389,
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
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 447,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "isVoid",
    "start": 456,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 466,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 471,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 473,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 480,
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
    "value": ":",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 484,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 490,
    "end": 492
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 493,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 498,
    "end": 499
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 504,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 511,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 522,
    "end": 523
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 525,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "isNonVoid",
    "start": 534,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 547,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 552,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 554,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 566,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 572,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 577,
    "end": 578
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 583,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 590,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 601,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 604,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 613,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 621,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 626,
    "end": 627
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 628,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 635,
    "end": 636
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 637,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 642,
    "end": 643
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 648,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "isVoid",
    "start": 652,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 659,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 677,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 705,
    "end": 706
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 707,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 722,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 749,
    "end": 750
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 752,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "baz1",
    "start": 761,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 769,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 774,
    "end": 775
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 776,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 783,
    "end": 784
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 785,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 790,
    "end": 791
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 798,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "isNonVoid",
    "start": 802,
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
    "value": "value",
    "start": 812,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 832,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 859,
    "end": 860
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 861,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 878,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 934,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "Maybe",
    "start": 939,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 952,
    "end": 953
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 954,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 958,
    "end": 959
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 961,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 970,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 982,
    "end": 983
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 984,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 988,
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
    "value": "U",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 993,
    "end": 994
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 998,
    "end": 1004
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1005,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1033,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1037,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "Maybe",
    "start": 1042,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1048,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1057,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1061,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 1066,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1109,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "Man",
    "start": 1119,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "walks",
    "start": 1129,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1136,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1148,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "Bear",
    "start": 1158,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "roars",
    "start": 1169,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1176,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1188,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "Pig",
    "start": 1198,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "oinks",
    "start": 1208,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1215,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1227,
    "end": 1234
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1235,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "pigify",
    "start": 1244,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "Bear",
    "start": 1261,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "Pig",
    "start": 1272,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1277,
    "end": 1284
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1285,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "mbp",
    "start": 1289,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "Man",
    "start": 1294,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "Bear",
    "start": 1300,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "pigify",
    "start": 1307,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "mbp",
    "start": 1314,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "oinks",
    "start": 1319,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "pigify",
    "start": 1355,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "mbp",
    "start": 1362,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "walks",
    "start": 1367,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1427,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "ITest",
    "start": 1437,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1447,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "String",
    "value": "'test'",
    "start": 1453,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1463,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "createTestAsync",
    "start": 1469,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1491,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "ITest",
    "start": 1499,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1506,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1509,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 1517,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1527,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1535,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1541,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "String",
    "value": "'test'",
    "start": 1547,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1559,
    "end": 1564
  },
  {
    "type": "Identifier",
    "value": "createTest",
    "start": 1565,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "ITest",
    "start": 1582,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1588,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1595,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1604,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "String",
    "value": "'test'",
    "start": 1610,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1622,
    "end": 1629
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1630,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1639,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1666,
    "end": 1673
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1674,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1683,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1713,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1717,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1721,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1730,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1733,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1739,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1743,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1747,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1756,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1759,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 1764,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1793,
    "end": 1798
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 1799,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1812,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1819,
    "end": 1824
  },
  {
    "type": "Identifier",
    "value": "assign",
    "start": 1825,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1853,
    "end": 1855
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1856,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Identifier",
    "value": "assign",
    "start": 1863,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1877,
    "end": 1882
  },
  {
    "type": "Identifier",
    "value": "res",
    "start": 1883,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1892,
    "end": 1894
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1895,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 1905,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1911,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Identifier",
    "value": "assign",
    "start": 1919,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1929,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 1938,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1945,
    "end": 1946
  }
]
```
