__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 10,
            "end": 13
          },
          "definite": false,
          "start": 6,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 27
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
              "start": 28,
              "end": 29
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
                    "start": 40,
                    "end": 41
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 43,
                      "end": 49
                    },
                    "start": 41,
                    "end": 49
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 40,
                  "end": 50
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
                    "start": 51,
                    "end": 52
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 54,
                      "end": 60
                    },
                    "start": 52,
                    "end": 60
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 51,
                  "end": 60
                }
              ],
              "start": 38,
              "end": 62
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 28,
            "end": 62
          }
        ],
        "start": 27,
        "end": 63
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 69,
                "end": 70
              },
              "typeArguments": null,
              "start": 69,
              "end": 70
            },
            "start": 67,
            "end": 70
          },
          "start": 64,
          "end": 70
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 87,
                        "end": 89
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 84,
                      "end": 89
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 91
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 94,
                  "end": 97
                },
                "definite": false,
                "start": 82,
                "end": 97
              }
            ],
            "declare": false,
            "start": 78,
            "end": 98
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
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
                        "start": 109,
                        "end": 110
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 112,
                        "end": 114
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 109,
                      "end": 114
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 119,
                        "end": 121
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 116,
                      "end": 121
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 107,
                  "end": 123
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 126,
                  "end": 129
                },
                "definite": false,
                "start": 107,
                "end": 129
              }
            ],
            "declare": false,
            "start": 103,
            "end": 130
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
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
                        "start": 141,
                        "end": 142
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 144,
                        "end": 146
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 141,
                      "end": 146
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 148,
                        "end": 149
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 151,
                        "end": 153
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 148,
                      "end": 153
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 158,
                        "end": 160
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 155,
                      "end": 160
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 139,
                  "end": 162
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 165,
                  "end": 168
                },
                "definite": false,
                "start": 139,
                "end": 168
              }
            ],
            "declare": false,
            "start": 135,
            "end": 169
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 180,
                        "end": 183
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 185,
                        "end": 187
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 180,
                      "end": 187
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 192,
                        "end": 194
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 189,
                      "end": 194
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 196
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 202
                },
                "definite": false,
                "start": 178,
                "end": 202
              }
            ],
            "declare": false,
            "start": 174,
            "end": 203
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 215,
                        "end": 218
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 221,
                        "end": 223
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 214,
                      "end": 223
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 228,
                        "end": 230
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 225,
                      "end": 230
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 212,
                  "end": 232
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 238
                },
                "definite": false,
                "start": 212,
                "end": 238
              }
            ],
            "declare": false,
            "start": 208,
            "end": 239
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
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
                        "start": 251,
                        "end": 252
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 255,
                        "end": 257
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 250,
                      "end": 257
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 262,
                        "end": 264
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 259,
                      "end": 264
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 248,
                  "end": 266
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 269,
                  "end": 272
                },
                "definite": false,
                "start": 248,
                "end": 272
              }
            ],
            "declare": false,
            "start": 244,
            "end": 273
          }
        ],
        "start": 72,
        "end": 275
      },
      "expression": false,
      "start": 16,
      "end": 275
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
            "name": "sa",
            "optional": false,
            "typeAnnotation": null,
            "start": 283,
            "end": 285
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 294
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 288,
            "end": 296
          },
          "definite": false,
          "start": 283,
          "end": 296
        }
      ],
      "declare": false,
      "start": 277,
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
            "name": "sb",
            "optional": false,
            "typeAnnotation": null,
            "start": 304,
            "end": 306
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 309,
              "end": 315
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 309,
            "end": 317
          },
          "definite": false,
          "start": 304,
          "end": 317
        }
      ],
      "declare": false,
      "start": 298,
      "end": 318
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 329,
        "end": 331
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
              "start": 332,
              "end": 333
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": true,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sa",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 345,
                    "end": 347
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 350,
                      "end": 356
                    },
                    "start": 348,
                    "end": 356
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 344,
                  "end": 357
                },
                {
                  "type": "TSPropertySignature",
                  "computed": true,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 359,
                    "end": 361
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 364,
                      "end": 370
                    },
                    "start": 362,
                    "end": 370
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 358,
                  "end": 370
                }
              ],
              "start": 342,
              "end": 372
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 332,
            "end": 372
          }
        ],
        "start": 331,
        "end": 373
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
          "start": 374,
          "end": 380
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sa",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 395,
                        "end": 397
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 400,
                        "end": 402
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 394,
                      "end": 402
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sb",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 405,
                        "end": 407
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 410,
                        "end": 412
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 404,
                      "end": 412
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 417,
                        "end": 419
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 414,
                      "end": 419
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 421
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 424,
                  "end": 427
                },
                "definite": false,
                "start": 392,
                "end": 427
              }
            ],
            "declare": false,
            "start": 388,
            "end": 428
          }
        ],
        "start": 382,
        "end": 430
      },
      "expression": false,
      "start": 320,
      "end": 430
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 441,
        "end": 443
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
              "start": 444,
              "end": 445
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 444,
            "end": 445
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null,
              "start": 447,
              "end": 449
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 464,
                  "end": 465
                },
                "typeArguments": null,
                "start": 464,
                "end": 465
              },
              "start": 458,
              "end": 465
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 447,
            "end": 465
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K2",
              "optional": false,
              "typeAnnotation": null,
              "start": 467,
              "end": 469
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 484,
                  "end": 485
                },
                "typeArguments": null,
                "start": 484,
                "end": 485
              },
              "start": 478,
              "end": 485
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 467,
            "end": 485
          }
        ],
        "start": 443,
        "end": 486
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 492,
                "end": 493
              },
              "typeArguments": null,
              "start": 492,
              "end": 493
            },
            "start": 490,
            "end": 493
          },
          "start": 487,
          "end": 493
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K1",
                "optional": false,
                "typeAnnotation": null,
                "start": 499,
                "end": 501
              },
              "typeArguments": null,
              "start": 499,
              "end": 501
            },
            "start": 497,
            "end": 501
          },
          "start": 495,
          "end": 501
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K2",
                "optional": false,
                "typeAnnotation": null,
                "start": 507,
                "end": 509
              },
              "typeArguments": null,
              "start": 507,
              "end": 509
            },
            "start": 505,
            "end": 509
          },
          "start": 503,
          "end": 509
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 524,
                        "end": 526
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 529,
                        "end": 531
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 523,
                      "end": 531
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 534,
                        "end": 536
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 539,
                        "end": 541
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 533,
                      "end": 541
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 546,
                        "end": 548
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 543,
                      "end": 548
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 521,
                  "end": 550
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 553,
                  "end": 556
                },
                "definite": false,
                "start": 521,
                "end": 556
              }
            ],
            "declare": false,
            "start": 517,
            "end": 557
          }
        ],
        "start": 511,
        "end": 559
      },
      "expression": false,
      "start": 432,
      "end": 559
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 566,
        "end": 570
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 575,
              "end": 576
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 578,
                "end": 584
              },
              "start": 576,
              "end": 584
            },
            "accessibility": null,
            "static": false,
            "start": 575,
            "end": 585
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
              "start": 586,
              "end": 587
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 589,
                "end": 595
              },
              "start": 587,
              "end": 595
            },
            "accessibility": null,
            "static": false,
            "start": 586,
            "end": 596
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 597,
              "end": 598
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 600,
                "end": 607
              },
              "start": 598,
              "end": 607
            },
            "accessibility": null,
            "static": false,
            "start": 597,
            "end": 607
          }
        ],
        "start": 573,
        "end": 609
      },
      "declare": false,
      "start": 561,
      "end": 610
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 621,
        "end": 623
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
              "name": "K1",
              "optional": false,
              "typeAnnotation": null,
              "start": 624,
              "end": 626
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Item",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 641,
                  "end": 645
                },
                "typeArguments": null,
                "start": 641,
                "end": 645
              },
              "start": 635,
              "end": 645
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 624,
            "end": 645
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K2",
              "optional": false,
              "typeAnnotation": null,
              "start": 647,
              "end": 649
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Item",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 664,
                  "end": 668
                },
                "typeArguments": null,
                "start": 664,
                "end": 668
              },
              "start": 658,
              "end": 668
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 647,
            "end": 668
          }
        ],
        "start": 623,
        "end": 669
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 675,
                "end": 679
              },
              "typeArguments": null,
              "start": 675,
              "end": 679
            },
            "start": 673,
            "end": 679
          },
          "start": 670,
          "end": 679
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K1",
                "optional": false,
                "typeAnnotation": null,
                "start": 685,
                "end": 687
              },
              "typeArguments": null,
              "start": 685,
              "end": 687
            },
            "start": 683,
            "end": 687
          },
          "start": 681,
          "end": 687
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K2",
                "optional": false,
                "typeAnnotation": null,
                "start": 693,
                "end": 695
              },
              "typeArguments": null,
              "start": 693,
              "end": 695
            },
            "start": 691,
            "end": 695
          },
          "start": 689,
          "end": 695
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 710,
                        "end": 712
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 715,
                        "end": 717
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 709,
                      "end": 717
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 720,
                        "end": 722
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 725,
                        "end": 727
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 719,
                      "end": 727
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 732,
                        "end": 734
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 729,
                      "end": 734
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 707,
                  "end": 736
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 739,
                  "end": 742
                },
                "definite": false,
                "start": 707,
                "end": 742
              }
            ],
            "declare": false,
            "start": 703,
            "end": 743
          }
        ],
        "start": 697,
        "end": 745
      },
      "expression": false,
      "start": 612,
      "end": 745
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 745
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 16,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 25,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 30,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 64,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "let",
    "start": 78,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 84,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "r0",
    "start": 87,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 94,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 103,
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
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 112,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 116,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 119,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 126,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 135,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "a2",
    "start": 144,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 151,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 155,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 158,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 165,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 174,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 180,
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
    "value": "a3",
    "start": 185,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 189,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 192,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "obj",
    "start": 199,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 208,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 214,
    "end": 215
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 215,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 218,
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
    "value": "a4",
    "start": 221,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 225,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 228,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 235,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 244,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 255,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 259,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 262,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 269,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 277,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "sa",
    "start": 283,
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
    "value": "Symbol",
    "start": 288,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 298,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "sb",
    "start": 304,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 309,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 320,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 329,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 332,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 334,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "sa",
    "start": 345,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 350,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "sb",
    "start": 359,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "number",
    "start": 364,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 374,
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
    "value": ")",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 388,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "sa",
    "start": 395,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 397,
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
    "value": "a1",
    "start": 400,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "sb",
    "start": 405,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 410,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 414,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 417,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 424,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 429,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 432,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 441,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 447,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 450,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 458,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 467,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 470,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 478,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 487,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 495,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 499,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 503,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 507,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 511,
    "end": 512
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 517,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "type": "Identifier",
    "value": "k1",
    "start": 524,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 529,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 534,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 539,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 543,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 546,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 553,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 561,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 566,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 573,
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
    "value": ":",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 578,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Identifier",
    "value": "number",
    "start": 589,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 600,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 609,
    "end": 610
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 612,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 621,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 624,
    "end": 626
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 627,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 635,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 641,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 647,
    "end": 649
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 650,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 658,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 664,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 668,
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
    "value": "obj",
    "start": 670,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 675,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 681,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 685,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 689,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 693,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 697,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 703,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 710,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 715,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 720,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 725,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 729,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 732,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 739,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 744,
    "end": 745
  }
]
```
