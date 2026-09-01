__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "direct",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 79
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 81
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 90,
              "end": 96
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 80,
            "end": 96
          }
        ],
        "start": 79,
        "end": 97
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
                    "start": 101,
                    "end": 102
                  },
                  "typeArguments": null,
                  "start": 101,
                  "end": 102
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 105,
                      "end": 106
                    },
                    "typeArguments": null,
                    "start": 105,
                    "end": 106
                  },
                  "start": 105,
                  "end": 108
                }
              ],
              "start": 101,
              "end": 108
            },
            "start": 99,
            "end": 108
          },
          "start": 98,
          "end": 108
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 117
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
                  "start": 118,
                  "end": 119
                },
                "typeArguments": null,
                "start": 118,
                "end": 119
              },
              {
                "type": "TSStringKeyword",
                "start": 121,
                "end": 127
              }
            ],
            "start": 117,
            "end": 128
          },
          "start": 111,
          "end": 128
        },
        "start": 109,
        "end": 128
      },
      "body": null,
      "expression": false,
      "start": 56,
      "end": 128
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nested",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 152
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 154
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 163,
              "end": 169
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 153,
            "end": 169
          }
        ],
        "start": 152,
        "end": 170
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
                    "name": "fields",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 176,
                    "end": 182
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 184,
                        "end": 185
                      },
                      "typeArguments": null,
                      "start": 184,
                      "end": 185
                    },
                    "start": 182,
                    "end": 185
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 176,
                  "end": 185
                }
              ],
              "start": 174,
              "end": 187
            },
            "start": 172,
            "end": 187
          },
          "start": 171,
          "end": 187
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 196
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
                  "start": 197,
                  "end": 198
                },
                "typeArguments": null,
                "start": 197,
                "end": 198
              },
              {
                "type": "TSStringKeyword",
                "start": 200,
                "end": 206
              }
            ],
            "start": 196,
            "end": 207
          },
          "start": 190,
          "end": 207
        },
        "start": 188,
        "end": 207
      },
      "body": null,
      "expression": false,
      "start": 129,
      "end": 207
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nestedUnion",
        "optional": false,
        "typeAnnotation": null,
        "start": 225,
        "end": 236
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 237,
              "end": 238
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 247,
              "end": 253
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 237,
            "end": 253
          }
        ],
        "start": 236,
        "end": 254
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
                    "name": "fields",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 260,
                    "end": 266
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
                            "start": 268,
                            "end": 269
                          },
                          "typeArguments": null,
                          "start": 268,
                          "end": 269
                        },
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 272,
                              "end": 273
                            },
                            "typeArguments": null,
                            "start": 272,
                            "end": 273
                          },
                          "start": 272,
                          "end": 275
                        }
                      ],
                      "start": 268,
                      "end": 275
                    },
                    "start": 266,
                    "end": 275
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 260,
                  "end": 275
                }
              ],
              "start": 258,
              "end": 277
            },
            "start": 256,
            "end": 277
          },
          "start": 255,
          "end": 277
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null,
            "start": 280,
            "end": 286
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
                  "start": 287,
                  "end": 288
                },
                "typeArguments": null,
                "start": 287,
                "end": 288
              },
              {
                "type": "TSStringKeyword",
                "start": 290,
                "end": 296
              }
            ],
            "start": 286,
            "end": 297
          },
          "start": 280,
          "end": 297
        },
        "start": 278,
        "end": 297
      },
      "body": null,
      "expression": false,
      "start": 208,
      "end": 297
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
            "name": "directUnionSingle",
            "optional": false,
            "typeAnnotation": null,
            "start": 305,
            "end": 322
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "direct",
              "optional": false,
              "typeAnnotation": null,
              "start": 325,
              "end": 331
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "z",
                "raw": "\"z\"",
                "start": 332,
                "end": 335
              }
            ],
            "optional": false,
            "start": 325,
            "end": 336
          },
          "definite": false,
          "start": 305,
          "end": 336
        }
      ],
      "declare": false,
      "start": 299,
      "end": 336
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
            "name": "directUnionArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 343,
            "end": 359
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "direct",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 368
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "z",
                    "raw": "\"z\"",
                    "start": 370,
                    "end": 373
                  },
                  {
                    "type": "Literal",
                    "value": "y",
                    "raw": "\"y\"",
                    "start": 375,
                    "end": 378
                  }
                ],
                "start": 369,
                "end": 379
              }
            ],
            "optional": false,
            "start": 362,
            "end": 380
          },
          "definite": false,
          "start": 343,
          "end": 380
        }
      ],
      "declare": false,
      "start": 337,
      "end": 380
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
            "name": "nestedSingle",
            "optional": false,
            "typeAnnotation": null,
            "start": 387,
            "end": 399
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 408
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
                      "name": "fields",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 410,
                      "end": 416
                    },
                    "value": {
                      "type": "Literal",
                      "value": "z",
                      "raw": "\"z\"",
                      "start": 418,
                      "end": 421
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 410,
                    "end": 421
                  }
                ],
                "start": 409,
                "end": 422
              }
            ],
            "optional": false,
            "start": 402,
            "end": 423
          },
          "definite": false,
          "start": 387,
          "end": 423
        }
      ],
      "declare": false,
      "start": 381,
      "end": 423
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
            "name": "nestedUnionSingle",
            "optional": false,
            "typeAnnotation": null,
            "start": 430,
            "end": 447
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "nestedUnion",
              "optional": false,
              "typeAnnotation": null,
              "start": 450,
              "end": 461
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
                      "name": "fields",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 463,
                      "end": 469
                    },
                    "value": {
                      "type": "Literal",
                      "value": "z",
                      "raw": "\"z\"",
                      "start": 471,
                      "end": 474
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 463,
                    "end": 474
                  }
                ],
                "start": 462,
                "end": 475
              }
            ],
            "optional": false,
            "start": 450,
            "end": 476
          },
          "definite": false,
          "start": 430,
          "end": 476
        }
      ],
      "declare": false,
      "start": 424,
      "end": 476
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
            "name": "nestedUnionArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 483,
            "end": 499
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "nestedUnion",
              "optional": false,
              "typeAnnotation": null,
              "start": 502,
              "end": 513
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
                      "name": "fields",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 515,
                      "end": 521
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "z",
                          "raw": "\"z\"",
                          "start": 524,
                          "end": 527
                        },
                        {
                          "type": "Literal",
                          "value": "y",
                          "raw": "\"y\"",
                          "start": 529,
                          "end": 532
                        }
                      ],
                      "start": 523,
                      "end": 533
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 515,
                    "end": 533
                  }
                ],
                "start": 514,
                "end": 534
              }
            ],
            "optional": false,
            "start": 502,
            "end": 535
          },
          "definite": false,
          "start": 483,
          "end": 535
        }
      ],
      "declare": false,
      "start": 477,
      "end": 535
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "hasZField",
        "optional": false,
        "typeAnnotation": null,
        "start": 554,
        "end": 563
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 571,
                    "end": 572
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 574,
                      "end": 580
                    },
                    "start": 572,
                    "end": 580
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 571,
                  "end": 580
                }
              ],
              "start": 569,
              "end": 582
            },
            "start": 567,
            "end": 582
          },
          "start": 564,
          "end": 582
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 585,
          "end": 589
        },
        "start": 583,
        "end": 589
      },
      "body": null,
      "expression": false,
      "start": 537,
      "end": 589
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "hasZField",
          "optional": false,
          "typeAnnotation": null,
          "start": 591,
          "end": 600
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "directUnionSingle",
            "optional": false,
            "typeAnnotation": null,
            "start": 601,
            "end": 618
          }
        ],
        "optional": false,
        "start": 591,
        "end": 619
      },
      "directive": null,
      "start": 591,
      "end": 619
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "hasZField",
          "optional": false,
          "typeAnnotation": null,
          "start": 626,
          "end": 635
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "directUnionArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 636,
            "end": 652
          }
        ],
        "optional": false,
        "start": 626,
        "end": 653
      },
      "directive": null,
      "start": 626,
      "end": 653
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "hasZField",
          "optional": false,
          "typeAnnotation": null,
          "start": 660,
          "end": 669
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "nestedSingle",
            "optional": false,
            "typeAnnotation": null,
            "start": 670,
            "end": 682
          }
        ],
        "optional": false,
        "start": 660,
        "end": 683
      },
      "directive": null,
      "start": 660,
      "end": 683
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "hasZField",
          "optional": false,
          "typeAnnotation": null,
          "start": 690,
          "end": 699
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "nestedUnionSingle",
            "optional": false,
            "typeAnnotation": null,
            "start": 700,
            "end": 717
          }
        ],
        "optional": false,
        "start": 690,
        "end": 718
      },
      "directive": null,
      "start": 690,
      "end": 718
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "hasZField",
          "optional": false,
          "typeAnnotation": null,
          "start": 725,
          "end": 734
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "nestedUnionArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 735,
            "end": 751
          }
        ],
        "optional": false,
        "start": 725,
        "end": 752
      },
      "directive": null,
      "start": 725,
      "end": 752
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 758
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 56,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 64,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "direct",
    "start": 73,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 82,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 103,
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
    "value": "[",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 111,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 121,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 129,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 137,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 146,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 155,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 163,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 171,
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
    "value": "fields",
    "start": 176,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "Record",
    "start": 190,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 200,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 208,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 216,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "nestedUnion",
    "start": 225,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 239,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 247,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "fields",
    "start": 260,
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
    "value": "A",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
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
    "value": ":",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 280,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 290,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 299,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "directUnionSingle",
    "start": 305,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "direct",
    "start": 325,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332
  },
  {
    "type": "String",
    "value": "\"z\"",
    "start": 332,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 337,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "directUnionArray",
    "start": 343,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "direct",
    "start": 362,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 369,
    "end": 370
  },
  {
    "type": "String",
    "value": "\"z\"",
    "start": 370,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 373,
    "end": 374
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 375,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 381,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "nestedSingle",
    "start": 387,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 402,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "fields",
    "start": 410,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417
  },
  {
    "type": "String",
    "value": "\"z\"",
    "start": 418,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "const",
    "start": 424,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "nestedUnionSingle",
    "start": 430,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "nestedUnion",
    "start": 450,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "fields",
    "start": 463,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 469,
    "end": 470
  },
  {
    "type": "String",
    "value": "\"z\"",
    "start": 471,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 477,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "nestedUnionArray",
    "start": 483,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "nestedUnion",
    "start": 502,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "fields",
    "start": 515,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 523,
    "end": 524
  },
  {
    "type": "String",
    "value": "\"z\"",
    "start": 524,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 527,
    "end": 528
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 529,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 537,
    "end": 544
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 545,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "hasZField",
    "start": 554,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 564,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 574,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 583,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 585,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "hasZField",
    "start": 591,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "directUnionSingle",
    "start": 601,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "hasZField",
    "start": 626,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "directUnionArray",
    "start": 636,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "hasZField",
    "start": 660,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "nestedSingle",
    "start": 670,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "hasZField",
    "start": 690,
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
    "value": "nestedUnionSingle",
    "start": 700,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "hasZField",
    "start": 725,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "nestedUnionArray",
    "start": 735,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 751,
    "end": 752
  }
]
```
