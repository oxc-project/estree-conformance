__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MorphTuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 19,
            "end": 25
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "|>",
              "raw": "\"|>\"",
              "start": 27,
              "end": 31
            },
            "start": 27,
            "end": 31
          },
          {
            "type": "TSAnyKeyword",
            "start": 33,
            "end": 36
          }
        ],
        "start": 18,
        "end": 37
      },
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "validateMorph",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 57
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 61
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MorphTuple",
                "optional": false,
                "typeAnnotation": null,
                "start": 70,
                "end": 80
              },
              "typeArguments": null,
              "start": 70,
              "end": 80
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 58,
            "end": 80
          }
        ],
        "start": 57,
        "end": 81
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 87
            },
            "typeArguments": null,
            "start": 84,
            "end": 87
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 88,
              "end": 89
            },
            "start": 88,
            "end": 89
          },
          "start": 84,
          "end": 90
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "|>",
            "raw": "\"|>\"",
            "start": 99,
            "end": 103
          },
          "start": 99,
          "end": 103
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "validateDefinition",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 129
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "def",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 130,
                        "end": 133
                      },
                      "typeArguments": null,
                      "start": 130,
                      "end": 133
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 134,
                        "end": 135
                      },
                      "start": 134,
                      "end": 135
                    },
                    "start": 130,
                    "end": 136
                  }
                ],
                "start": 129,
                "end": 137
              },
              "start": 111,
              "end": 137
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "|>",
                "raw": "\"|>\"",
                "start": 139,
                "end": 143
              },
              "start": 139,
              "end": 143
            },
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "In",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "def",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 150,
                          "end": 153
                        },
                        "typeArguments": null,
                        "start": 150,
                        "end": 153
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 154,
                          "end": 155
                        },
                        "start": 154,
                        "end": 155
                      },
                      "start": 150,
                      "end": 156
                    },
                    "start": 148,
                    "end": 156
                  },
                  "start": 146,
                  "end": 156
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 161,
                  "end": 168
                },
                "start": 158,
                "end": 168
              },
              "start": 145,
              "end": 168
            }
          ],
          "start": 110,
          "end": 169
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 179
          },
          "typeArguments": null,
          "start": 176,
          "end": 179
        },
        "start": 84,
        "end": 179
      },
      "declare": false,
      "start": 39,
      "end": 179
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "validateDefinition",
        "optional": false,
        "typeAnnotation": null,
        "start": 186,
        "end": 204
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 208
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 205,
            "end": 208
          }
        ],
        "start": 204,
        "end": 209
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null,
            "start": 212,
            "end": 215
          },
          "typeArguments": null,
          "start": 212,
          "end": 215
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MorphTuple",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 234
          },
          "typeArguments": null,
          "start": 224,
          "end": 234
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "validateMorph",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 254
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "def",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 255,
                  "end": 258
                },
                "typeArguments": null,
                "start": 255,
                "end": 258
              }
            ],
            "start": 254,
            "end": 259
          },
          "start": 241,
          "end": 259
        },
        "falseType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 280
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "def",
                "optional": false,
                "typeAnnotation": null,
                "start": 290,
                "end": 293
              },
              "typeArguments": null,
              "start": 290,
              "end": 293
            },
            "start": 284,
            "end": 293
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "validateDefinition",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 314
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "def",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 315,
                      "end": 318
                    },
                    "typeArguments": null,
                    "start": 315,
                    "end": 318
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 319,
                      "end": 320
                    },
                    "typeArguments": null,
                    "start": 319,
                    "end": 320
                  },
                  "start": 315,
                  "end": 321
                }
              ],
              "start": 314,
              "end": 322
            },
            "start": 296,
            "end": 322
          },
          "optional": false,
          "readonly": null,
          "start": 266,
          "end": 330
        },
        "start": 212,
        "end": 330
      },
      "declare": false,
      "start": 181,
      "end": 330
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null,
        "start": 349,
        "end": 353
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
              "name": "def",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 357
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 354,
            "end": 357
          }
        ],
        "start": 353,
        "end": 358
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "def",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "validateDefinition",
                "optional": false,
                "typeAnnotation": null,
                "start": 364,
                "end": 382
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "def",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 383,
                      "end": 386
                    },
                    "typeArguments": null,
                    "start": 383,
                    "end": 386
                  }
                ],
                "start": 382,
                "end": 387
              },
              "start": 364,
              "end": 387
            },
            "start": 362,
            "end": 387
          },
          "start": 359,
          "end": 387
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null,
            "start": 390,
            "end": 393
          },
          "typeArguments": null,
          "start": 390,
          "end": 393
        },
        "start": 388,
        "end": 393
      },
      "body": null,
      "expression": false,
      "start": 332,
      "end": 393
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
            "name": "shallow",
            "optional": false,
            "typeAnnotation": null,
            "start": 401,
            "end": 408
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 411,
              "end": 415
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "ark",
                    "raw": "\"ark\"",
                    "start": 417,
                    "end": 422
                  },
                  {
                    "type": "Literal",
                    "value": "|>",
                    "raw": "\"|>\"",
                    "start": 424,
                    "end": 428
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 431,
                        "end": 432
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 437,
                        "end": 438
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 439,
                        "end": 445
                      },
                      "optional": false,
                      "computed": false,
                      "start": 437,
                      "end": 445
                    },
                    "id": null,
                    "generator": false,
                    "start": 430,
                    "end": 445
                  }
                ],
                "start": 416,
                "end": 446
              }
            ],
            "optional": false,
            "start": 411,
            "end": 447
          },
          "definite": false,
          "start": 401,
          "end": 447
        }
      ],
      "declare": false,
      "start": 395,
      "end": 447
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
            "name": "objectLiteral",
            "optional": false,
            "typeAnnotation": null,
            "start": 454,
            "end": 467
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 470,
              "end": 474
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 477,
                      "end": 478
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "ark",
                          "raw": "\"ark\"",
                          "start": 481,
                          "end": 486
                        },
                        {
                          "type": "Literal",
                          "value": "|>",
                          "raw": "\"|>\"",
                          "start": 488,
                          "end": 492
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 495,
                              "end": 496
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 501,
                              "end": 502
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 503,
                              "end": 509
                            },
                            "optional": false,
                            "computed": false,
                            "start": 501,
                            "end": 509
                          },
                          "id": null,
                          "generator": false,
                          "start": 494,
                          "end": 509
                        }
                      ],
                      "start": 480,
                      "end": 510
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 477,
                    "end": 510
                  }
                ],
                "start": 475,
                "end": 512
              }
            ],
            "optional": false,
            "start": 470,
            "end": 513
          },
          "definite": false,
          "start": 454,
          "end": 513
        }
      ],
      "declare": false,
      "start": 448,
      "end": 513
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
            "name": "nestedTuple",
            "optional": false,
            "typeAnnotation": null,
            "start": 520,
            "end": 531
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 534,
              "end": 538
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "ark",
                        "raw": "\"ark\"",
                        "start": 541,
                        "end": 546
                      },
                      {
                        "type": "Literal",
                        "value": "|>",
                        "raw": "\"|>\"",
                        "start": 548,
                        "end": 552
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 555,
                            "end": 556
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 561,
                            "end": 562
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 563,
                            "end": 569
                          },
                          "optional": false,
                          "computed": false,
                          "start": 561,
                          "end": 569
                        },
                        "id": null,
                        "generator": false,
                        "start": 554,
                        "end": 569
                      }
                    ],
                    "start": 540,
                    "end": 570
                  }
                ],
                "start": 539,
                "end": 571
              }
            ],
            "optional": false,
            "start": 534,
            "end": 572
          },
          "definite": false,
          "start": 520,
          "end": 572
        }
      ],
      "declare": false,
      "start": 514,
      "end": 572
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 572
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "MorphTuple",
    "start": 5,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 25,
    "end": 26
  },
  {
    "type": "String",
    "value": "\"|>\"",
    "start": 27,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 33,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 39,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "validateMorph",
    "start": 44,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 58,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 62,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "MorphTuple",
    "start": 70,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 84,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 87,
    "end": 88
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 91,
    "end": 98
  },
  {
    "type": "String",
    "value": "\"|>\"",
    "start": 99,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "validateDefinition",
    "start": 111,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 130,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 133,
    "end": 134
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 137,
    "end": 138
  },
  {
    "type": "String",
    "value": "\"|>\"",
    "start": 139,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "In",
    "start": 146,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 150,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 153,
    "end": 154
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 158,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 161,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 176,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 181,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "validateDefinition",
    "start": 186,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 205,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 212,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 216,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "MorphTuple",
    "start": 224,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "validateMorph",
    "start": 241,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 255,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 279,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 281,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 284,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 290,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "validateDefinition",
    "start": 296,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 315,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 332,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 340,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 349,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 354,
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
    "value": "def",
    "start": 359,
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
    "value": "validateDefinition",
    "start": 364,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "def",
    "start": 383,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 387,
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
    "value": "def",
    "start": 390,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 395,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "shallow",
    "start": 401,
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
    "value": "type",
    "start": 411,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 416,
    "end": 417
  },
  {
    "type": "String",
    "value": "\"ark\"",
    "start": 417,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 422,
    "end": 423
  },
  {
    "type": "String",
    "value": "\"|>\"",
    "start": 424,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 428,
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
    "value": "x",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 434,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 439,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 448,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "objectLiteral",
    "start": 454,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "(",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 480,
    "end": 481
  },
  {
    "type": "String",
    "value": "\"ark\"",
    "start": 481,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 486,
    "end": 487
  },
  {
    "type": "String",
    "value": "\"|>\"",
    "start": 488,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 492,
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
    "value": "x",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 498,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 503,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 512,
    "end": 513
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 514,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "nestedTuple",
    "start": 520,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 534,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 540,
    "end": 541
  },
  {
    "type": "String",
    "value": "\"ark\"",
    "start": 541,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 546,
    "end": 547
  },
  {
    "type": "String",
    "value": "\"|>\"",
    "start": 548,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 558,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 563,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 571,
    "end": 572
  }
]
```
