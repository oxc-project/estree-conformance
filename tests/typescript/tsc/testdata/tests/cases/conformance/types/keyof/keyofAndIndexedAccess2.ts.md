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
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 19,
                    "end": 20
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 22,
                      "end": 28
                    },
                    "start": 20,
                    "end": 28
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 19,
                  "end": 29
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
                    "start": 30,
                    "end": 31
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
                            "value": 0,
                            "raw": "0",
                            "start": 33,
                            "end": 34
                          },
                          "start": 33,
                          "end": 34
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 37,
                            "end": 38
                          },
                          "start": 37,
                          "end": 38
                        }
                      ],
                      "start": 33,
                      "end": 38
                    },
                    "start": 31,
                    "end": 38
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 30,
                  "end": 39
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
                  "end": 49
                }
              ],
              "start": 17,
              "end": 51
            },
            "start": 15,
            "end": 51
          },
          "start": 12,
          "end": 51
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k0",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 57,
                "end": 60
              },
              "start": 57,
              "end": 60
            },
            "start": 55,
            "end": 60
          },
          "start": 53,
          "end": 60
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 66,
                    "end": 69
                  },
                  "start": 66,
                  "end": 69
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 72,
                    "end": 75
                  },
                  "start": 72,
                  "end": 75
                }
              ],
              "start": 66,
              "end": 75
            },
            "start": 64,
            "end": 75
          },
          "start": 62,
          "end": 75
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 81,
                    "end": 84
                  },
                  "start": 81,
                  "end": 84
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 87,
                    "end": 90
                  },
                  "start": 87,
                  "end": 90
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "c",
                    "raw": "'c'",
                    "start": 93,
                    "end": 96
                  },
                  "start": 93,
                  "end": 96
                }
              ],
              "start": 81,
              "end": 96
            },
            "start": 79,
            "end": 96
          },
          "start": 77,
          "end": 96
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 107
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 108,
                  "end": 110
                },
                "optional": false,
                "computed": true,
                "start": 104,
                "end": 111
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 114,
                "end": 115
              },
              "start": 104,
              "end": 115
            },
            "directive": null,
            "start": 104,
            "end": 116
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 124
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 125,
                  "end": 127
                },
                "optional": false,
                "computed": true,
                "start": 121,
                "end": 128
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 131,
                "end": 132
              },
              "start": 121,
              "end": 132
            },
            "directive": null,
            "start": 121,
            "end": 133
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 141
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 144
                },
                "optional": false,
                "computed": true,
                "start": 138,
                "end": 145
              },
              "right": {
                "type": "Literal",
                "value": "x",
                "raw": "'x'",
                "start": 148,
                "end": 151
              },
              "start": 138,
              "end": 151
            },
            "directive": null,
            "start": 138,
            "end": 152
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 170
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 171,
                  "end": 173
                },
                "optional": false,
                "computed": true,
                "start": 167,
                "end": 174
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 177,
                "end": 178
              },
              "start": 167,
              "end": 178
            },
            "directive": null,
            "start": 167,
            "end": 179
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 184,
                  "end": 187
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 188,
                  "end": 190
                },
                "optional": false,
                "computed": true,
                "start": 184,
                "end": 191
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 194,
                "end": 195
              },
              "start": 184,
              "end": 195
            },
            "directive": null,
            "start": 184,
            "end": 196
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 213,
                  "end": 216
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 217,
                  "end": 219
                },
                "optional": false,
                "computed": true,
                "start": 213,
                "end": 220
              },
              "right": {
                "type": "Literal",
                "value": "x",
                "raw": "'x'",
                "start": 223,
                "end": 226
              },
              "start": 213,
              "end": 226
            },
            "directive": null,
            "start": 213,
            "end": 227
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 242,
                  "end": 245
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 248
                },
                "optional": false,
                "computed": true,
                "start": 242,
                "end": 249
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 252,
                "end": 253
              },
              "start": 242,
              "end": 253
            },
            "directive": null,
            "start": 242,
            "end": 254
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 271,
                  "end": 274
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 275,
                  "end": 277
                },
                "optional": false,
                "computed": true,
                "start": 271,
                "end": 278
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 281,
                "end": 282
              },
              "start": 271,
              "end": 282
            },
            "directive": null,
            "start": 271,
            "end": 283
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 300,
                  "end": 303
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 306
                },
                "optional": false,
                "computed": true,
                "start": 300,
                "end": 307
              },
              "right": {
                "type": "Literal",
                "value": "x",
                "raw": "'x'",
                "start": 310,
                "end": 313
              },
              "start": 300,
              "end": 313
            },
            "directive": null,
            "start": 300,
            "end": 314
          }
        ],
        "start": 98,
        "end": 326
      },
      "expression": false,
      "start": 0,
      "end": 326
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 337,
        "end": 339
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
              "start": 340,
              "end": 341
            },
            "constraint": {
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
                          "start": 358,
                          "end": 364
                        },
                        "start": 356,
                        "end": 364
                      },
                      "start": 353,
                      "end": 364
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 367,
                      "end": 373
                    },
                    "start": 365,
                    "end": 373
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 352,
                  "end": 373
                }
              ],
              "start": 350,
              "end": 375
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 340,
            "end": 375
          }
        ],
        "start": 339,
        "end": 376
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 382,
                    "end": 383
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 385,
                      "end": 391
                    },
                    "start": 383,
                    "end": 391
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 382,
                  "end": 392
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
                    "start": 393,
                    "end": 394
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 396,
                      "end": 402
                    },
                    "start": 394,
                    "end": 402
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 393,
                  "end": 402
                }
              ],
              "start": 380,
              "end": 404
            },
            "start": 378,
            "end": 404
          },
          "start": 377,
          "end": 404
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
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
                          "start": 417,
                          "end": 423
                        },
                        "start": 415,
                        "end": 423
                      },
                      "start": 412,
                      "end": 423
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 426,
                      "end": 432
                    },
                    "start": 424,
                    "end": 432
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 411,
                  "end": 432
                }
              ],
              "start": 409,
              "end": 434
            },
            "start": 407,
            "end": 434
          },
          "start": 406,
          "end": 434
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
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
                "start": 439,
                "end": 440
              },
              "typeArguments": null,
              "start": 439,
              "end": 440
            },
            "start": 437,
            "end": 440
          },
          "start": 436,
          "end": 440
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
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
                  "start": 451,
                  "end": 452
                },
                "typeArguments": null,
                "start": 451,
                "end": 452
              },
              "start": 445,
              "end": 452
            },
            "start": 443,
            "end": 452
          },
          "start": 442,
          "end": 452
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 460,
                "end": 461
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 465
              },
              "start": 460,
              "end": 465
            },
            "directive": null,
            "start": 460,
            "end": 466
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 545,
                "end": 546
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 549,
                "end": 550
              },
              "start": 545,
              "end": 550
            },
            "directive": null,
            "start": 545,
            "end": 551
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 630,
                "end": 631
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 634,
                "end": 635
              },
              "start": 630,
              "end": 635
            },
            "directive": null,
            "start": 630,
            "end": 636
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 641,
                "end": 642
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 645,
                "end": 646
              },
              "start": 641,
              "end": 646
            },
            "directive": null,
            "start": 641,
            "end": 647
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 652,
                "end": 653
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 656,
                "end": 657
              },
              "start": 652,
              "end": 657
            },
            "directive": null,
            "start": 652,
            "end": 658
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 738,
                "end": 739
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 742,
                "end": 743
              },
              "start": 738,
              "end": 743
            },
            "directive": null,
            "start": 738,
            "end": 744
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 824,
                "end": 825
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 826,
                "end": 827
              },
              "optional": false,
              "computed": false,
              "start": 824,
              "end": 827
            },
            "directive": null,
            "start": 824,
            "end": 828
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 833,
                "end": 834
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 835,
                "end": 836
              },
              "optional": false,
              "computed": false,
              "start": 833,
              "end": 836
            },
            "directive": null,
            "start": 833,
            "end": 837
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 842,
                "end": 843
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 844,
                "end": 845
              },
              "optional": false,
              "computed": false,
              "start": 842,
              "end": 845
            },
            "directive": null,
            "start": 842,
            "end": 846
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 851,
                "end": 852
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 853,
                "end": 854
              },
              "optional": false,
              "computed": true,
              "start": 851,
              "end": 855
            },
            "directive": null,
            "start": 851,
            "end": 856
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 861,
                  "end": 862
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 863,
                  "end": 864
                },
                "optional": false,
                "computed": false,
                "start": 861,
                "end": 864
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 867,
                "end": 868
              },
              "start": 861,
              "end": 868
            },
            "directive": null,
            "start": 861,
            "end": 869
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 874,
                  "end": 875
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 876,
                  "end": 877
                },
                "optional": false,
                "computed": false,
                "start": 874,
                "end": 877
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 880,
                "end": 881
              },
              "start": 874,
              "end": 881
            },
            "directive": null,
            "start": 874,
            "end": 882
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 887,
                  "end": 888
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 889,
                  "end": 890
                },
                "optional": false,
                "computed": false,
                "start": 887,
                "end": 890
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 893,
                "end": 894
              },
              "start": 887,
              "end": 894
            },
            "directive": null,
            "start": 887,
            "end": 895
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 962,
                  "end": 963
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 964,
                  "end": 965
                },
                "optional": false,
                "computed": true,
                "start": 962,
                "end": 966
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 969,
                "end": 970
              },
              "start": 962,
              "end": 970
            },
            "directive": null,
            "start": 962,
            "end": 971
          }
        ],
        "start": 454,
        "end": 1034
      },
      "expression": false,
      "start": 328,
      "end": 1034
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1045,
        "end": 1047
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1048,
              "end": 1049
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1058,
              "end": 1064
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1048,
            "end": 1064
          }
        ],
        "start": 1047,
        "end": 1065
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
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1072,
                "end": 1073
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1077,
                  "end": 1078
                },
                "typeArguments": null,
                "start": 1077,
                "end": 1078
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1081,
                "end": 1087
              },
              "optional": false,
              "readonly": null,
              "start": 1069,
              "end": 1089
            },
            "start": 1067,
            "end": 1089
          },
          "start": 1066,
          "end": 1089
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
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
                          "start": 1102,
                          "end": 1108
                        },
                        "start": 1100,
                        "end": 1108
                      },
                      "start": 1097,
                      "end": 1108
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1111,
                      "end": 1117
                    },
                    "start": 1109,
                    "end": 1117
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 1096,
                  "end": 1117
                }
              ],
              "start": 1094,
              "end": 1119
            },
            "start": 1092,
            "end": 1119
          },
          "start": 1091,
          "end": 1119
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1124,
                "end": 1125
              },
              "typeArguments": null,
              "start": 1124,
              "end": 1125
            },
            "start": 1122,
            "end": 1125
          },
          "start": 1121,
          "end": 1125
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1133,
                "end": 1134
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1137,
                "end": 1138
              },
              "start": 1133,
              "end": 1138
            },
            "directive": null,
            "start": 1133,
            "end": 1139
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1208,
                "end": 1209
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1212,
                "end": 1213
              },
              "start": 1208,
              "end": 1213
            },
            "directive": null,
            "start": 1208,
            "end": 1214
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1219,
                "end": 1220
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 1221,
                "end": 1222
              },
              "optional": false,
              "computed": true,
              "start": 1219,
              "end": 1223
            },
            "directive": null,
            "start": 1219,
            "end": 1224
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1229,
                  "end": 1230
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1231,
                  "end": 1232
                },
                "optional": false,
                "computed": true,
                "start": 1229,
                "end": 1233
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1236,
                "end": 1237
              },
              "start": 1229,
              "end": 1237
            },
            "directive": null,
            "start": 1229,
            "end": 1238
          }
        ],
        "start": 1127,
        "end": 1240
      },
      "expression": false,
      "start": 1036,
      "end": 1240
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1251,
        "end": 1254
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1255,
              "end": 1256
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1265,
              "end": 1271
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1255,
            "end": 1271
          }
        ],
        "start": 1254,
        "end": 1272
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
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1279,
                "end": 1280
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1284,
                  "end": 1285
                },
                "typeArguments": null,
                "start": 1284,
                "end": 1285
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1288,
                "end": 1294
              },
              "optional": false,
              "readonly": null,
              "start": 1276,
              "end": 1296
            },
            "start": 1274,
            "end": 1296
          },
          "start": 1273,
          "end": 1296
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1304,
                "end": 1305
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 1309,
                "end": 1315
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1318,
                "end": 1324
              },
              "optional": false,
              "readonly": null,
              "start": 1301,
              "end": 1326
            },
            "start": 1299,
            "end": 1326
          },
          "start": 1298,
          "end": 1326
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1331,
                "end": 1332
              },
              "typeArguments": null,
              "start": 1331,
              "end": 1332
            },
            "start": 1329,
            "end": 1332
          },
          "start": 1328,
          "end": 1332
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1340,
                "end": 1341
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1344,
                "end": 1345
              },
              "start": 1340,
              "end": 1345
            },
            "directive": null,
            "start": 1340,
            "end": 1346
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1415,
                "end": 1416
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1419,
                "end": 1420
              },
              "start": 1415,
              "end": 1420
            },
            "directive": null,
            "start": 1415,
            "end": 1421
          }
        ],
        "start": 1334,
        "end": 1423
      },
      "expression": false,
      "start": 1242,
      "end": 1423
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1434,
        "end": 1436
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1437,
              "end": 1438
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1447,
              "end": 1453
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1437,
            "end": 1453
          }
        ],
        "start": 1436,
        "end": 1454
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
              "type": "TSIndexedAccessType",
              "objectType": {
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
                            "start": 1466,
                            "end": 1472
                          },
                          "start": 1464,
                          "end": 1472
                        },
                        "start": 1461,
                        "end": 1472
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1475,
                        "end": 1481
                      },
                      "start": 1473,
                      "end": 1481
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 1460,
                    "end": 1481
                  }
                ],
                "start": 1458,
                "end": 1483
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1484,
                  "end": 1485
                },
                "typeArguments": null,
                "start": 1484,
                "end": 1485
              },
              "start": 1458,
              "end": 1486
            },
            "start": 1456,
            "end": 1486
          },
          "start": 1455,
          "end": 1486
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1491,
              "end": 1497
            },
            "start": 1489,
            "end": 1497
          },
          "start": 1488,
          "end": 1497
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1503,
                "end": 1504
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1507,
                "end": 1508
              },
              "start": 1503,
              "end": 1508
            },
            "directive": null,
            "start": 1503,
            "end": 1509
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1512,
                "end": 1513
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1516,
                "end": 1517
              },
              "start": 1512,
              "end": 1517
            },
            "directive": null,
            "start": 1512,
            "end": 1518
          }
        ],
        "start": 1499,
        "end": 1520
      },
      "expression": false,
      "start": 1425,
      "end": 1520
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 1527,
        "end": 1531
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
              "start": 1536,
              "end": 1537
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1539,
                "end": 1545
              },
              "start": 1537,
              "end": 1545
            },
            "accessibility": null,
            "static": false,
            "start": 1536,
            "end": 1546
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
              "start": 1547,
              "end": 1548
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1550,
                "end": 1556
              },
              "start": 1548,
              "end": 1556
            },
            "accessibility": null,
            "static": false,
            "start": 1547,
            "end": 1556
          }
        ],
        "start": 1534,
        "end": 1558
      },
      "declare": false,
      "start": 1522,
      "end": 1559
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1570,
        "end": 1573
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
              "start": 1574,
              "end": 1575
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1584,
                "end": 1588
              },
              "typeArguments": null,
              "start": 1584,
              "end": 1588
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1574,
            "end": 1588
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1590,
              "end": 1591
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
                  "start": 1606,
                  "end": 1607
                },
                "typeArguments": null,
                "start": 1606,
                "end": 1607
              },
              "start": 1600,
              "end": 1607
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1590,
            "end": 1607
          }
        ],
        "start": 1573,
        "end": 1608
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
                "start": 1614,
                "end": 1615
              },
              "typeArguments": null,
              "start": 1614,
              "end": 1615
            },
            "start": 1612,
            "end": 1615
          },
          "start": 1609,
          "end": 1615
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1621,
              "end": 1627
            },
            "start": 1619,
            "end": 1627
          },
          "start": 1617,
          "end": 1627
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
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
                  "start": 1639,
                  "end": 1643
                },
                "typeArguments": null,
                "start": 1639,
                "end": 1643
              },
              "start": 1633,
              "end": 1643
            },
            "start": 1631,
            "end": 1643
          },
          "start": 1629,
          "end": 1643
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
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
                  "start": 1655,
                  "end": 1656
                },
                "typeArguments": null,
                "start": 1655,
                "end": 1656
              },
              "start": 1649,
              "end": 1656
            },
            "start": 1647,
            "end": 1656
          },
          "start": 1645,
          "end": 1656
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k4",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1662,
                "end": 1663
              },
              "typeArguments": null,
              "start": 1662,
              "end": 1663
            },
            "start": 1660,
            "end": 1663
          },
          "start": 1658,
          "end": 1663
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1669,
                  "end": 1672
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1673,
                  "end": 1675
                },
                "optional": false,
                "computed": true,
                "start": 1669,
                "end": 1676
              },
              "right": {
                "type": "Literal",
                "value": 123,
                "raw": "123",
                "start": 1679,
                "end": 1682
              },
              "start": 1669,
              "end": 1682
            },
            "directive": null,
            "start": 1669,
            "end": 1683
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1696,
                  "end": 1699
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1700,
                  "end": 1702
                },
                "optional": false,
                "computed": true,
                "start": 1696,
                "end": 1703
              },
              "right": {
                "type": "Literal",
                "value": 123,
                "raw": "123",
                "start": 1706,
                "end": 1709
              },
              "start": 1696,
              "end": 1709
            },
            "directive": null,
            "start": 1696,
            "end": 1710
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1723,
                  "end": 1726
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1727,
                  "end": 1729
                },
                "optional": false,
                "computed": true,
                "start": 1723,
                "end": 1730
              },
              "right": {
                "type": "Literal",
                "value": 123,
                "raw": "123",
                "start": 1733,
                "end": 1736
              },
              "start": 1723,
              "end": 1736
            },
            "directive": null,
            "start": 1723,
            "end": 1737
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1750,
                  "end": 1753
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1754,
                  "end": 1756
                },
                "optional": false,
                "computed": true,
                "start": 1750,
                "end": 1757
              },
              "right": {
                "type": "Literal",
                "value": 123,
                "raw": "123",
                "start": 1760,
                "end": 1763
              },
              "start": 1750,
              "end": 1763
            },
            "directive": null,
            "start": 1750,
            "end": 1764
          }
        ],
        "start": 1665,
        "end": 1776
      },
      "expression": false,
      "start": 1561,
      "end": 1776
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dict",
        "optional": false,
        "typeAnnotation": null,
        "start": 1783,
        "end": 1787
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 1790,
          "end": 1796
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 1797,
              "end": 1803
            },
            {
              "type": "TSNumberKeyword",
              "start": 1805,
              "end": 1811
            }
          ],
          "start": 1796,
          "end": 1812
        },
        "start": 1790,
        "end": 1812
      },
      "declare": false,
      "start": 1778,
      "end": 1813
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1824,
        "end": 1827
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1828,
              "end": 1829
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Dict",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1844,
                  "end": 1848
                },
                "typeArguments": null,
                "start": 1844,
                "end": 1848
              },
              "start": 1838,
              "end": 1848
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1828,
            "end": 1848
          }
        ],
        "start": 1827,
        "end": 1849
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
                "name": "Dict",
                "optional": false,
                "typeAnnotation": null,
                "start": 1855,
                "end": 1859
              },
              "typeArguments": null,
              "start": 1855,
              "end": 1859
            },
            "start": 1853,
            "end": 1859
          },
          "start": 1850,
          "end": 1859
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Dict",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1871,
                  "end": 1875
                },
                "typeArguments": null,
                "start": 1871,
                "end": 1875
              },
              "start": 1865,
              "end": 1875
            },
            "start": 1863,
            "end": 1875
          },
          "start": 1861,
          "end": 1875
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
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1881,
                "end": 1882
              },
              "typeArguments": null,
              "start": 1881,
              "end": 1882
            },
            "start": 1879,
            "end": 1882
          },
          "start": 1877,
          "end": 1882
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1888,
                  "end": 1891
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1892,
                  "end": 1895
                },
                "optional": false,
                "computed": false,
                "start": 1888,
                "end": 1895
              },
              "right": {
                "type": "Literal",
                "value": 123,
                "raw": "123",
                "start": 1898,
                "end": 1901
              },
              "start": 1888,
              "end": 1901
            },
            "directive": null,
            "start": 1888,
            "end": 1902
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1905,
                  "end": 1908
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1909,
                  "end": 1911
                },
                "optional": false,
                "computed": true,
                "start": 1905,
                "end": 1912
              },
              "right": {
                "type": "Literal",
                "value": 123,
                "raw": "123",
                "start": 1915,
                "end": 1918
              },
              "start": 1905,
              "end": 1918
            },
            "directive": null,
            "start": 1905,
            "end": 1919
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1922,
                  "end": 1925
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1926,
                  "end": 1928
                },
                "optional": false,
                "computed": true,
                "start": 1922,
                "end": 1929
              },
              "right": {
                "type": "Literal",
                "value": 123,
                "raw": "123",
                "start": 1932,
                "end": 1935
              },
              "start": 1922,
              "end": 1935
            },
            "directive": null,
            "start": 1922,
            "end": 1936
          }
        ],
        "start": 1884,
        "end": 1938
      },
      "expression": false,
      "start": 1815,
      "end": 1938
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1949,
        "end": 1952
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
              "start": 1953,
              "end": 1954
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 1963,
                "end": 1971
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Dict",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1972,
                      "end": 1976
                    },
                    "typeArguments": null,
                    "start": 1972,
                    "end": 1976
                  }
                ],
                "start": 1971,
                "end": 1977
              },
              "start": 1963,
              "end": 1977
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1953,
            "end": 1977
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1979,
              "end": 1980
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
                  "start": 1995,
                  "end": 1996
                },
                "typeArguments": null,
                "start": 1995,
                "end": 1996
              },
              "start": 1989,
              "end": 1996
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1979,
            "end": 1996
          }
        ],
        "start": 1952,
        "end": 1997
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
                "start": 2003,
                "end": 2004
              },
              "typeArguments": null,
              "start": 2003,
              "end": 2004
            },
            "start": 2001,
            "end": 2004
          },
          "start": 1998,
          "end": 2004
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Dict",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2016,
                  "end": 2020
                },
                "typeArguments": null,
                "start": 2016,
                "end": 2020
              },
              "start": 2010,
              "end": 2020
            },
            "start": 2008,
            "end": 2020
          },
          "start": 2006,
          "end": 2020
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
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
                  "start": 2032,
                  "end": 2033
                },
                "typeArguments": null,
                "start": 2032,
                "end": 2033
              },
              "start": 2026,
              "end": 2033
            },
            "start": 2024,
            "end": 2033
          },
          "start": 2022,
          "end": 2033
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 2039,
                "end": 2040
              },
              "typeArguments": null,
              "start": 2039,
              "end": 2040
            },
            "start": 2037,
            "end": 2040
          },
          "start": 2035,
          "end": 2040
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2046,
                  "end": 2049
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2050,
                  "end": 2053
                },
                "optional": false,
                "computed": false,
                "start": 2046,
                "end": 2053
              },
              "right": {
                "type": "Literal",
                "value": 123,
                "raw": "123",
                "start": 2056,
                "end": 2059
              },
              "start": 2046,
              "end": 2059
            },
            "directive": null,
            "start": 2046,
            "end": 2060
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2073,
                  "end": 2076
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2077,
                  "end": 2079
                },
                "optional": false,
                "computed": true,
                "start": 2073,
                "end": 2080
              },
              "right": {
                "type": "Literal",
                "value": 123,
                "raw": "123",
                "start": 2083,
                "end": 2086
              },
              "start": 2073,
              "end": 2086
            },
            "directive": null,
            "start": 2073,
            "end": 2087
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2100,
                  "end": 2103
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2104,
                  "end": 2106
                },
                "optional": false,
                "computed": true,
                "start": 2100,
                "end": 2107
              },
              "right": {
                "type": "Literal",
                "value": 123,
                "raw": "123",
                "start": 2110,
                "end": 2113
              },
              "start": 2100,
              "end": 2113
            },
            "directive": null,
            "start": 2100,
            "end": 2114
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2127,
                  "end": 2130
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2131,
                  "end": 2133
                },
                "optional": false,
                "computed": true,
                "start": 2127,
                "end": 2134
              },
              "right": {
                "type": "Literal",
                "value": 123,
                "raw": "123",
                "start": 2137,
                "end": 2140
              },
              "start": 2127,
              "end": 2140
            },
            "directive": null,
            "start": 2127,
            "end": 2141
          }
        ],
        "start": 2042,
        "end": 2153
      },
      "expression": false,
      "start": 1940,
      "end": 2153
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Entity",
          "optional": false,
          "typeAnnotation": null,
          "start": 2194,
          "end": 2200
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
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 2207,
                "end": 2209
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 2211,
                      "end": 2217
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 2220,
                      "end": 2226
                    }
                  ],
                  "start": 2211,
                  "end": 2226
                },
                "start": 2209,
                "end": 2226
              },
              "accessibility": null,
              "static": false,
              "start": 2207,
              "end": 2227
            }
          ],
          "start": 2201,
          "end": 2229
        },
        "declare": false,
        "start": 2184,
        "end": 2229
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2177,
      "end": 2229
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IdOf",
          "optional": false,
          "typeAnnotation": null,
          "start": 2243,
          "end": 2247
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 2248,
                "end": 2249
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Entity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2258,
                  "end": 2264
                },
                "typeArguments": null,
                "start": 2258,
                "end": 2264
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2248,
              "end": 2264
            }
          ],
          "start": 2247,
          "end": 2265
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 2268,
              "end": 2269
            },
            "typeArguments": null,
            "start": 2268,
            "end": 2269
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "id",
              "raw": "'id'",
              "start": 2270,
              "end": 2274
            },
            "start": 2270,
            "end": 2274
          },
          "start": 2268,
          "end": 2275
        },
        "declare": false,
        "start": 2238,
        "end": 2276
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2231,
      "end": 2276
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "EntityState",
          "optional": false,
          "typeAnnotation": null,
          "start": 2295,
          "end": 2306
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 2307,
                "end": 2308
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Entity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2317,
                  "end": 2323
                },
                "typeArguments": null,
                "start": 2317,
                "end": 2323
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2307,
              "end": 2323
            }
          ],
          "start": 2306,
          "end": 2324
        },
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
                "name": "ids",
                "optional": false,
                "typeAnnotation": null,
                "start": 2331,
                "end": 2334
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IdOf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2336,
                      "end": 2340
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "E",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2341,
                            "end": 2342
                          },
                          "typeArguments": null,
                          "start": 2341,
                          "end": 2342
                        }
                      ],
                      "start": 2340,
                      "end": 2343
                    },
                    "start": 2336,
                    "end": 2343
                  },
                  "start": 2336,
                  "end": 2345
                },
                "start": 2334,
                "end": 2345
              },
              "accessibility": null,
              "static": false,
              "start": 2331,
              "end": 2346
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "entities",
                "optional": false,
                "typeAnnotation": null,
                "start": 2351,
                "end": 2359
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
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2369,
                              "end": 2375
                            },
                            "start": 2367,
                            "end": 2375
                          },
                          "start": 2364,
                          "end": 2375
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "E",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2378,
                            "end": 2379
                          },
                          "typeArguments": null,
                          "start": 2378,
                          "end": 2379
                        },
                        "start": 2376,
                        "end": 2379
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null,
                      "start": 2363,
                      "end": 2380
                    },
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
                              "type": "TSNumberKeyword",
                              "start": 2387,
                              "end": 2393
                            },
                            "start": 2385,
                            "end": 2393
                          },
                          "start": 2382,
                          "end": 2393
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "E",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2396,
                            "end": 2397
                          },
                          "typeArguments": null,
                          "start": 2396,
                          "end": 2397
                        },
                        "start": 2394,
                        "end": 2397
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null,
                      "start": 2381,
                      "end": 2397
                    }
                  ],
                  "start": 2361,
                  "end": 2399
                },
                "start": 2359,
                "end": 2399
              },
              "accessibility": null,
              "static": false,
              "start": 2351,
              "end": 2400
            }
          ],
          "start": 2325,
          "end": 2402
        },
        "declare": false,
        "start": 2285,
        "end": 2402
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2278,
      "end": 2402
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "getAllEntities",
          "optional": false,
          "typeAnnotation": null,
          "start": 2421,
          "end": 2435
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
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 2436,
                "end": 2437
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Entity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2446,
                  "end": 2452
                },
                "typeArguments": null,
                "start": 2446,
                "end": 2452
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2436,
              "end": 2452
            }
          ],
          "start": 2435,
          "end": 2453
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "state",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EntityState",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2461,
                  "end": 2472
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2473,
                        "end": 2474
                      },
                      "typeArguments": null,
                      "start": 2473,
                      "end": 2474
                    }
                  ],
                  "start": 2472,
                  "end": 2475
                },
                "start": 2461,
                "end": 2475
              },
              "start": 2459,
              "end": 2475
            },
            "start": 2454,
            "end": 2475
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 2478,
                "end": 2479
              },
              "typeArguments": null,
              "start": 2478,
              "end": 2479
            },
            "start": 2478,
            "end": 2481
          },
          "start": 2476,
          "end": 2481
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
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
                          "name": "ids",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2496,
                          "end": 2499
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ids",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2496,
                          "end": 2499
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 2496,
                        "end": 2499
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "entities",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2501,
                          "end": 2509
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "entities",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2501,
                          "end": 2509
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 2501,
                        "end": 2509
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2494,
                    "end": 2511
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2514,
                    "end": 2519
                  },
                  "definite": false,
                  "start": 2494,
                  "end": 2519
                }
              ],
              "declare": false,
              "start": 2488,
              "end": 2520
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ids",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2532,
                    "end": 2535
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2536,
                    "end": 2539
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2532,
                  "end": 2539
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2540,
                        "end": 2542
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "entities",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2546,
                        "end": 2554
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2555,
                        "end": 2557
                      },
                      "optional": false,
                      "computed": true,
                      "start": 2546,
                      "end": 2558
                    },
                    "id": null,
                    "generator": false,
                    "start": 2540,
                    "end": 2558
                  }
                ],
                "optional": false,
                "start": 2532,
                "end": 2559
              },
              "start": 2525,
              "end": 2560
            }
          ],
          "start": 2482,
          "end": 2562
        },
        "expression": false,
        "start": 2412,
        "end": 2562
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2405,
      "end": 2562
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "getEntity",
          "optional": false,
          "typeAnnotation": null,
          "start": 2580,
          "end": 2589
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
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 2590,
                "end": 2591
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Entity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2600,
                  "end": 2606
                },
                "typeArguments": null,
                "start": 2600,
                "end": 2606
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2590,
              "end": 2606
            }
          ],
          "start": 2589,
          "end": 2607
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "id",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IdOf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2612,
                  "end": 2616
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2617,
                        "end": 2618
                      },
                      "typeArguments": null,
                      "start": 2617,
                      "end": 2618
                    }
                  ],
                  "start": 2616,
                  "end": 2619
                },
                "start": 2612,
                "end": 2619
              },
              "start": 2610,
              "end": 2619
            },
            "start": 2608,
            "end": 2619
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "state",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EntityState",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2628,
                  "end": 2639
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2640,
                        "end": 2641
                      },
                      "typeArguments": null,
                      "start": 2640,
                      "end": 2641
                    }
                  ],
                  "start": 2639,
                  "end": 2642
                },
                "start": 2628,
                "end": 2642
              },
              "start": 2626,
              "end": 2642
            },
            "start": 2621,
            "end": 2642
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
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2645,
                  "end": 2646
                },
                "typeArguments": null,
                "start": 2645,
                "end": 2646
              },
              {
                "type": "TSUndefinedKeyword",
                "start": 2649,
                "end": 2658
              }
            ],
            "start": 2645,
            "end": 2658
          },
          "start": 2643,
          "end": 2658
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
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
                          "name": "ids",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2673,
                          "end": 2676
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ids",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2673,
                          "end": 2676
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 2673,
                        "end": 2676
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "entities",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2678,
                          "end": 2686
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "entities",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2678,
                          "end": 2686
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 2678,
                        "end": 2686
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2671,
                    "end": 2688
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2691,
                    "end": 2696
                  },
                  "definite": false,
                  "start": 2671,
                  "end": 2696
                }
              ],
              "declare": false,
              "start": 2665,
              "end": 2697
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ids",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2708,
                      "end": 2711
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "includes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2712,
                      "end": 2720
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2708,
                    "end": 2720
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2721,
                      "end": 2723
                    }
                  ],
                  "optional": false,
                  "start": 2708,
                  "end": 2724
                },
                "prefix": true,
                "start": 2707,
                "end": 2724
              },
              "consequent": {
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
                      "start": 2743,
                      "end": 2752
                    },
                    "start": 2736,
                    "end": 2753
                  }
                ],
                "start": 2726,
                "end": 2759
              },
              "alternate": null,
              "start": 2703,
              "end": 2759
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "entities",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2772,
                  "end": 2780
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2781,
                  "end": 2783
                },
                "optional": false,
                "computed": true,
                "start": 2772,
                "end": 2784
              },
              "start": 2765,
              "end": 2785
            }
          ],
          "start": 2659,
          "end": 2787
        },
        "expression": false,
        "start": 2571,
        "end": 2787
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2564,
      "end": 2787
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Type",
        "optional": false,
        "typeAnnotation": null,
        "start": 2821,
        "end": 2825
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
              "start": 2832,
              "end": 2833
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 2835,
                  "end": 2838
                },
                "start": 2835,
                "end": 2838
              },
              "start": 2833,
              "end": 2838
            },
            "accessibility": null,
            "static": false,
            "start": 2832,
            "end": 2839
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
              "start": 2844,
              "end": 2845
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "some string",
                  "raw": "\"some string\"",
                  "start": 2847,
                  "end": 2860
                },
                "start": 2847,
                "end": 2860
              },
              "start": 2845,
              "end": 2860
            },
            "accessibility": null,
            "static": false,
            "start": 2844,
            "end": 2861
          }
        ],
        "start": 2826,
        "end": 2863
      },
      "declare": false,
      "start": 2811,
      "end": 2863
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "get123",
        "optional": false,
        "typeAnnotation": null,
        "start": 2874,
        "end": 2880
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2881,
              "end": 2882
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2897,
                  "end": 2901
                },
                "typeArguments": null,
                "start": 2897,
                "end": 2901
              },
              "start": 2891,
              "end": 2901
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2881,
            "end": 2901
          }
        ],
        "start": 2880,
        "end": 2902
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Type",
              "optional": false,
              "typeAnnotation": null,
              "start": 2906,
              "end": 2910
            },
            "typeArguments": null,
            "start": 2906,
            "end": 2910
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2911,
              "end": 2912
            },
            "typeArguments": null,
            "start": 2911,
            "end": 2912
          },
          "start": 2906,
          "end": 2913
        },
        "start": 2904,
        "end": 2913
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 123,
              "raw": "123",
              "start": 2927,
              "end": 2930
            },
            "start": 2920,
            "end": 2931
          }
        ],
        "start": 2914,
        "end": 2943
      },
      "expression": false,
      "start": 2865,
      "end": 2943
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StrictExtract",
        "optional": false,
        "typeAnnotation": null,
        "start": 2972,
        "end": 2985
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
              "start": 2986,
              "end": 2987
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2986,
            "end": 2987
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2989,
              "end": 2990
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2989,
            "end": 2990
          }
        ],
        "start": 2985,
        "end": 2991
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2994,
            "end": 2995
          },
          "typeArguments": null,
          "start": 2994,
          "end": 2995
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 3004,
            "end": 3005
          },
          "typeArguments": null,
          "start": 3004,
          "end": 3005
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3008,
              "end": 3009
            },
            "typeArguments": null,
            "start": 3008,
            "end": 3009
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3018,
              "end": 3019
            },
            "typeArguments": null,
            "start": 3018,
            "end": 3019
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3022,
              "end": 3023
            },
            "typeArguments": null,
            "start": 3022,
            "end": 3023
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 3026,
            "end": 3031
          },
          "start": 3008,
          "end": 3031
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3034,
          "end": 3039
        },
        "start": 2994,
        "end": 3039
      },
      "declare": false,
      "start": 2967,
      "end": 3040
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StrictExclude",
        "optional": false,
        "typeAnnotation": null,
        "start": 3046,
        "end": 3059
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
              "start": 3060,
              "end": 3061
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3060,
            "end": 3061
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3063,
              "end": 3064
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3063,
            "end": 3064
          }
        ],
        "start": 3059,
        "end": 3065
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3068,
            "end": 3069
          },
          "typeArguments": null,
          "start": 3068,
          "end": 3069
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "StrictExtract",
            "optional": false,
            "typeAnnotation": null,
            "start": 3078,
            "end": 3091
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
                  "start": 3092,
                  "end": 3093
                },
                "typeArguments": null,
                "start": 3092,
                "end": 3093
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3095,
                  "end": 3096
                },
                "typeArguments": null,
                "start": 3095,
                "end": 3096
              }
            ],
            "start": 3091,
            "end": 3097
          },
          "start": 3078,
          "end": 3097
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 3100,
          "end": 3105
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3108,
            "end": 3109
          },
          "typeArguments": null,
          "start": 3108,
          "end": 3109
        },
        "start": 3068,
        "end": 3109
      },
      "declare": false,
      "start": 3041,
      "end": 3110
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 3116,
        "end": 3117
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
              "start": 3118,
              "end": 3119
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3118,
            "end": 3119
          }
        ],
        "start": 3117,
        "end": 3120
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "Q",
          "optional": false,
          "typeAnnotation": null,
          "start": 3126,
          "end": 3127
        },
        "constraint": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 3134,
              "end": 3135
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
                  "start": 3145,
                  "end": 3146
                },
                "typeArguments": null,
                "start": 3145,
                "end": 3146
              },
              "start": 3139,
              "end": 3146
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3149,
                "end": 3150
              },
              "typeArguments": null,
              "start": 3149,
              "end": 3150
            },
            "optional": false,
            "readonly": null,
            "start": 3131,
            "end": 3153
          },
          "indexType": {
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
                "start": 3160,
                "end": 3161
              },
              "typeArguments": null,
              "start": 3160,
              "end": 3161
            },
            "start": 3154,
            "end": 3161
          },
          "start": 3131,
          "end": 3162
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3165,
              "end": 3166
            },
            "typeArguments": null,
            "start": 3165,
            "end": 3166
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null,
              "start": 3167,
              "end": 3168
            },
            "typeArguments": null,
            "start": 3167,
            "end": 3168
          },
          "start": 3165,
          "end": 3169
        },
        "optional": false,
        "readonly": null,
        "start": 3123,
        "end": 3172
      },
      "declare": false,
      "start": 3111,
      "end": 3173
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 3179,
        "end": 3180
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
              "start": 3181,
              "end": 3182
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3181,
            "end": 3182
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 3184,
              "end": 3185
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3184,
            "end": 3185
          }
        ],
        "start": 3180,
        "end": 3186
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 3189,
          "end": 3190
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Q",
                "optional": false,
                "typeAnnotation": null,
                "start": 3194,
                "end": 3195
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
                    "start": 3205,
                    "end": 3206
                  },
                  "typeArguments": null,
                  "start": 3205,
                  "end": 3206
                },
                "start": 3199,
                "end": 3206
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StrictExclude",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3209,
                  "end": 3222
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3223,
                        "end": 3224
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
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3225,
                                "end": 3226
                              },
                              "typeArguments": null,
                              "start": 3225,
                              "end": 3226
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Q",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3227,
                                "end": 3228
                              },
                              "typeArguments": null,
                              "start": 3227,
                              "end": 3228
                            },
                            "start": 3225,
                            "end": 3229
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3231,
                              "end": 3232
                            },
                            "typeArguments": null,
                            "start": 3231,
                            "end": 3232
                          }
                        ],
                        "start": 3224,
                        "end": 3233
                      },
                      "start": 3223,
                      "end": 3233
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 3235,
                      "end": 3237
                    }
                  ],
                  "start": 3222,
                  "end": 3238
                },
                "start": 3209,
                "end": 3238
              },
              "optional": false,
              "readonly": null,
              "start": 3191,
              "end": 3241
            }
          ],
          "start": 3190,
          "end": 3242
        },
        "start": 3189,
        "end": 3242
      },
      "declare": false,
      "start": 3174,
      "end": 3243
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 3277,
        "end": 3279
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
              "start": 3280,
              "end": 3281
            },
            "constraint": {
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
                        "name": "elements",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3291,
                        "end": 3299
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Array",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3301,
                            "end": 3306
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 3307,
                                "end": 3313
                              }
                            ],
                            "start": 3306,
                            "end": 3314
                          },
                          "start": 3301,
                          "end": 3314
                        },
                        "start": 3299,
                        "end": 3314
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3291,
                      "end": 3314
                    }
                  ],
                  "start": 3290,
                  "end": 3315
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
                        "name": "elements",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3319,
                        "end": 3327
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Array",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3329,
                            "end": 3334
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 3335,
                                "end": 3341
                              }
                            ],
                            "start": 3334,
                            "end": 3342
                          },
                          "start": 3329,
                          "end": 3342
                        },
                        "start": 3327,
                        "end": 3342
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3319,
                      "end": 3342
                    }
                  ],
                  "start": 3318,
                  "end": 3343
                }
              ],
              "start": 3290,
              "end": 3343
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3280,
            "end": 3343
          }
        ],
        "start": 3279,
        "end": 3344
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3352,
                "end": 3353
              },
              "typeArguments": null,
              "start": 3352,
              "end": 3353
            },
            "start": 3350,
            "end": 3353
          },
          "start": 3345,
          "end": 3353
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "name": "element",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3369,
                            "end": 3370
                          },
                          "typeArguments": null,
                          "start": 3369,
                          "end": 3370
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "elements",
                            "raw": "'elements'",
                            "start": 3371,
                            "end": 3381
                          },
                          "start": 3371,
                          "end": 3381
                        },
                        "start": 3369,
                        "end": 3382
                      },
                      "indexType": {
                        "type": "TSNumberKeyword",
                        "start": 3383,
                        "end": 3389
                      },
                      "start": 3369,
                      "end": 3390
                    },
                    "start": 3367,
                    "end": 3390
                  },
                  "start": 3360,
                  "end": 3390
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3395,
                  "end": 3399
                },
                "start": 3392,
                "end": 3399
              },
              "start": 3359,
              "end": 3399
            },
            "start": 3357,
            "end": 3399
          },
          "start": 3355,
          "end": 3399
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": null,
                "start": 3407,
                "end": 3409
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3410,
                      "end": 3415
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "elements",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3416,
                      "end": 3424
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3410,
                    "end": 3424
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 3425,
                    "end": 3426
                  },
                  "optional": false,
                  "computed": true,
                  "start": 3410,
                  "end": 3427
                }
              ],
              "optional": false,
              "start": 3407,
              "end": 3428
            },
            "directive": null,
            "start": 3407,
            "end": 3429
          }
        ],
        "start": 3401,
        "end": 3431
      },
      "expression": false,
      "start": 3268,
      "end": 3431
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3442,
        "end": 3445
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
              "start": 3446,
              "end": 3447
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 3456,
                "end": 3461
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 3462,
                    "end": 3468
                  }
                ],
                "start": 3461,
                "end": 3469
              },
              "start": 3456,
              "end": 3469
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3446,
            "end": 3469
          }
        ],
        "start": 3445,
        "end": 3470
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3478,
                "end": 3479
              },
              "typeArguments": null,
              "start": 3478,
              "end": 3479
            },
            "start": 3476,
            "end": 3479
          },
          "start": 3471,
          "end": 3479
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "name": "element",
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3495,
                          "end": 3496
                        },
                        "typeArguments": null,
                        "start": 3495,
                        "end": 3496
                      },
                      "indexType": {
                        "type": "TSNumberKeyword",
                        "start": 3497,
                        "end": 3503
                      },
                      "start": 3495,
                      "end": 3504
                    },
                    "start": 3493,
                    "end": 3504
                  },
                  "start": 3486,
                  "end": 3504
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3509,
                  "end": 3513
                },
                "start": 3506,
                "end": 3513
              },
              "start": 3485,
              "end": 3513
            },
            "start": 3483,
            "end": 3513
          },
          "start": 3481,
          "end": 3513
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": null,
                "start": 3521,
                "end": 3523
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3524,
                    "end": 3529
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 3530,
                    "end": 3531
                  },
                  "optional": false,
                  "computed": true,
                  "start": 3524,
                  "end": 3532
                }
              ],
              "optional": false,
              "start": 3521,
              "end": 3533
            },
            "directive": null,
            "start": 3521,
            "end": 3534
          }
        ],
        "start": 3515,
        "end": 3536
      },
      "expression": false,
      "start": 3433,
      "end": 3536
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 3569,
        "end": 3572
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
              "start": 3573,
              "end": 3574
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 3583,
                "end": 3596
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 3597,
                    "end": 3603
                  }
                ],
                "start": 3596,
                "end": 3604
              },
              "start": 3583,
              "end": 3604
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3573,
            "end": 3604
          }
        ],
        "start": 3572,
        "end": 3605
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3613,
                "end": 3614
              },
              "typeArguments": null,
              "start": 3613,
              "end": 3614
            },
            "start": 3611,
            "end": 3614
          },
          "start": 3606,
          "end": 3614
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "name": "element",
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3630,
                          "end": 3631
                        },
                        "typeArguments": null,
                        "start": 3630,
                        "end": 3631
                      },
                      "indexType": {
                        "type": "TSNumberKeyword",
                        "start": 3632,
                        "end": 3638
                      },
                      "start": 3630,
                      "end": 3639
                    },
                    "start": 3628,
                    "end": 3639
                  },
                  "start": 3621,
                  "end": 3639
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3644,
                  "end": 3648
                },
                "start": 3641,
                "end": 3648
              },
              "start": 3620,
              "end": 3648
            },
            "start": 3618,
            "end": 3648
          },
          "start": 3616,
          "end": 3648
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": null,
                "start": 3656,
                "end": 3658
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3659,
                    "end": 3664
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 3665,
                    "end": 3666
                  },
                  "optional": false,
                  "computed": true,
                  "start": 3659,
                  "end": 3667
                }
              ],
              "optional": false,
              "start": 3656,
              "end": 3668
            },
            "directive": null,
            "start": 3656,
            "end": 3669
          }
        ],
        "start": 3650,
        "end": 3671
      },
      "expression": false,
      "start": 3560,
      "end": 3671
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 3682,
        "end": 3685
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3686,
              "end": 3687
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3696,
              "end": 3702
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3686,
            "end": 3702
          }
        ],
        "start": 3685,
        "end": 3703
      },
      "params": [],
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
                  "name": "x",
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
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3719,
                          "end": 3724
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 3725,
                              "end": 3731
                            }
                          ],
                          "start": 3724,
                          "end": 3732
                        },
                        "start": 3719,
                        "end": 3732
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3733,
                          "end": 3734
                        },
                        "typeArguments": null,
                        "start": 3733,
                        "end": 3734
                      },
                      "start": 3719,
                      "end": 3735
                    },
                    "start": 3717,
                    "end": 3735
                  },
                  "start": 3716,
                  "end": 3735
                },
                "init": {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "'abc'",
                  "start": 3738,
                  "end": 3743
                },
                "definite": false,
                "start": 3716,
                "end": 3743
              }
            ],
            "declare": false,
            "start": 3712,
            "end": 3744
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
                  "name": "y",
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
                          "name": "ReadonlyArray",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3756,
                          "end": 3769
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 3770,
                              "end": 3776
                            }
                          ],
                          "start": 3769,
                          "end": 3777
                        },
                        "start": 3756,
                        "end": 3777
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3778,
                          "end": 3779
                        },
                        "typeArguments": null,
                        "start": 3778,
                        "end": 3779
                      },
                      "start": 3756,
                      "end": 3780
                    },
                    "start": 3754,
                    "end": 3780
                  },
                  "start": 3753,
                  "end": 3780
                },
                "init": {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "'abc'",
                  "start": 3783,
                  "end": 3788
                },
                "definite": false,
                "start": 3753,
                "end": 3788
              }
            ],
            "declare": false,
            "start": 3749,
            "end": 3789
          }
        ],
        "start": 3706,
        "end": 3791
      },
      "expression": false,
      "start": 3673,
      "end": 3791
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 3839,
          "end": 3840
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3849,
                      "end": 3855
                    },
                    "start": 3847,
                    "end": 3855
                  },
                  "start": 3846,
                  "end": 3855
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 3858,
                  "end": 3864
                },
                "start": 3856,
                "end": 3864
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 3845,
              "end": 3865
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 3868,
                "end": 3879
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
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 3888,
                            "end": 3892
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3893,
                            "end": 3894
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3888,
                          "end": 3894
                        },
                        "right": {
                          "type": "Literal",
                          "value": "b",
                          "raw": "\"b\"",
                          "start": 3897,
                          "end": 3900
                        },
                        "start": 3888,
                        "end": 3900
                      },
                      "directive": null,
                      "start": 3888,
                      "end": 3901
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 3906,
                            "end": 3910
                          },
                          "property": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 3911,
                            "end": 3914
                          },
                          "optional": false,
                          "computed": true,
                          "start": 3906,
                          "end": 3915
                        },
                        "right": {
                          "type": "Literal",
                          "value": "b",
                          "raw": "\"b\"",
                          "start": 3918,
                          "end": 3921
                        },
                        "start": 3906,
                        "end": 3921
                      },
                      "directive": null,
                      "start": 3906,
                      "end": 3922
                    }
                  ],
                  "start": 3882,
                  "end": 3926
                },
                "expression": false,
                "start": 3879,
                "end": 3926
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3868,
              "end": 3926
            }
          ],
          "start": 3841,
          "end": 3928
        },
        "abstract": false,
        "declare": false,
        "start": 3833,
        "end": 3928
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3826,
      "end": 3928
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 3957,
        "end": 3960
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
              "start": 3961,
              "end": 3962
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3961,
            "end": 3962
          }
        ],
        "start": 3960,
        "end": 3963
      },
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
                    "start": 3974,
                    "end": 3980
                  },
                  "start": 3972,
                  "end": 3980
                },
                "start": 3969,
                "end": 3980
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3986,
                    "end": 3987
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
                        "start": 3997,
                        "end": 3998
                      },
                      "typeArguments": null,
                      "start": 3997,
                      "end": 3998
                    },
                    "start": 3991,
                    "end": 3998
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4001,
                      "end": 4002
                    },
                    "typeArguments": null,
                    "start": 4001,
                    "end": 4002
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 3983,
                  "end": 4004
                },
                "indexType": {
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
                      "start": 4011,
                      "end": 4012
                    },
                    "typeArguments": null,
                    "start": 4011,
                    "end": 4012
                  },
                  "start": 4005,
                  "end": 4012
                },
                "start": 3983,
                "end": 4013
              },
              "start": 3981,
              "end": 4013
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 3968,
            "end": 4013
          }
        ],
        "start": 3966,
        "end": 4015
      },
      "declare": false,
      "start": 3952,
      "end": 4016
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 4023,
        "end": 4026
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
              "start": 4027,
              "end": 4028
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4027,
            "end": 4028
          }
        ],
        "start": 4026,
        "end": 4029
      },
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
                    "start": 4040,
                    "end": 4046
                  },
                  "start": 4038,
                  "end": 4046
                },
                "start": 4035,
                "end": 4046
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4052,
                    "end": 4053
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
                        "start": 4063,
                        "end": 4064
                      },
                      "typeArguments": null,
                      "start": 4063,
                      "end": 4064
                    },
                    "start": 4057,
                    "end": 4064
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4068,
                          "end": 4069
                        },
                        "typeArguments": null,
                        "start": 4068,
                        "end": 4069
                      }
                    ],
                    "start": 4067,
                    "end": 4070
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 4049,
                  "end": 4072
                },
                "indexType": {
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
                      "start": 4079,
                      "end": 4080
                    },
                    "typeArguments": null,
                    "start": 4079,
                    "end": 4080
                  },
                  "start": 4073,
                  "end": 4080
                },
                "start": 4049,
                "end": 4081
              },
              "start": 4047,
              "end": 4081
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 4034,
            "end": 4081
          }
        ],
        "start": 4032,
        "end": 4083
      },
      "declare": false,
      "start": 4018,
      "end": 4084
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 4091,
        "end": 4094
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
              "start": 4095,
              "end": 4096
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4095,
            "end": 4096
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null,
              "start": 4098,
              "end": 4099
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 4108,
                "end": 4111
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
                      "start": 4112,
                      "end": 4113
                    },
                    "typeArguments": null,
                    "start": 4112,
                    "end": 4113
                  }
                ],
                "start": 4111,
                "end": 4114
              },
              "start": 4108,
              "end": 4114
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4098,
            "end": 4114
          }
        ],
        "start": 4094,
        "end": 4115
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 4121,
          "end": 4122
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null,
              "start": 4132,
              "end": 4133
            },
            "typeArguments": null,
            "start": 4132,
            "end": 4133
          },
          "start": 4126,
          "end": 4133
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 4136,
              "end": 4137
            },
            "typeArguments": null,
            "start": 4136,
            "end": 4137
          },
          "indexType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Q",
                "optional": false,
                "typeAnnotation": null,
                "start": 4138,
                "end": 4139
              },
              "typeArguments": null,
              "start": 4138,
              "end": 4139
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 4140,
                "end": 4141
              },
              "typeArguments": null,
              "start": 4140,
              "end": 4141
            },
            "start": 4138,
            "end": 4142
          },
          "start": 4136,
          "end": 4143
        },
        "optional": false,
        "readonly": null,
        "start": 4118,
        "end": 4145
      },
      "declare": false,
      "start": 4086,
      "end": 4146
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Qux",
        "optional": false,
        "typeAnnotation": null,
        "start": 4153,
        "end": 4156
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
              "start": 4157,
              "end": 4158
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4157,
            "end": 4158
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null,
              "start": 4160,
              "end": 4161
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 4170,
                "end": 4173
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
                      "start": 4174,
                      "end": 4175
                    },
                    "typeArguments": null,
                    "start": 4174,
                    "end": 4175
                  }
                ],
                "start": 4173,
                "end": 4176
              },
              "start": 4170,
              "end": 4176
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4160,
            "end": 4176
          }
        ],
        "start": 4156,
        "end": 4177
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 4183,
          "end": 4184
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null,
              "start": 4194,
              "end": 4195
            },
            "typeArguments": null,
            "start": 4194,
            "end": 4195
          },
          "start": 4188,
          "end": 4195
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 4198,
              "end": 4199
            },
            "typeArguments": null,
            "start": 4198,
            "end": 4199
          },
          "indexType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4200,
                  "end": 4201
                },
                "typeArguments": null,
                "start": 4200,
                "end": 4201
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4202,
                  "end": 4203
                },
                "typeArguments": null,
                "start": 4202,
                "end": 4203
              },
              "start": 4200,
              "end": 4204
            },
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "0",
                "raw": "\"0\"",
                "start": 4205,
                "end": 4208
              },
              "start": 4205,
              "end": 4208
            },
            "start": 4200,
            "end": 4209
          },
          "start": 4198,
          "end": 4210
        },
        "optional": false,
        "readonly": null,
        "start": 4180,
        "end": 4212
      },
      "declare": false,
      "start": 4148,
      "end": 4213
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
            "name": "actions",
            "optional": false,
            "typeAnnotation": null,
            "start": 4243,
            "end": 4250
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "resizeTo",
                  "raw": "'resizeTo'",
                  "start": 4254,
                  "end": 4264
                },
                {
                  "type": "Literal",
                  "value": "resizeBy",
                  "raw": "'resizeBy'",
                  "start": 4266,
                  "end": 4276
                }
              ],
              "start": 4253,
              "end": 4277
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 4281,
                "end": 4286
              },
              "typeArguments": null,
              "start": 4281,
              "end": 4286
            },
            "start": 4253,
            "end": 4286
          },
          "definite": false,
          "start": 4243,
          "end": 4286
        }
      ],
      "declare": false,
      "start": 4237,
      "end": 4287
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "action",
              "optional": false,
              "typeAnnotation": null,
              "start": 4299,
              "end": 4305
            },
            "init": null,
            "definite": false,
            "start": 4299,
            "end": 4305
          }
        ],
        "declare": false,
        "start": 4293,
        "end": 4305
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "actions",
        "optional": false,
        "typeAnnotation": null,
        "start": 4309,
        "end": 4316
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "window",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4321,
                  "end": 4327
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "action",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4328,
                  "end": 4334
                },
                "optional": false,
                "computed": true,
                "start": 4321,
                "end": 4335
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4339,
                    "end": 4340
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4342,
                    "end": 4343
                  }
                ],
                "returnType": null,
                "body": {
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
                            "name": "window",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4352,
                            "end": 4358
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "action",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4359,
                            "end": 4365
                          },
                          "optional": false,
                          "computed": true,
                          "start": 4352,
                          "end": 4366
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4367,
                            "end": 4368
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4370,
                            "end": 4371
                          }
                        ],
                        "optional": false,
                        "start": 4352,
                        "end": 4372
                      },
                      "directive": null,
                      "start": 4352,
                      "end": 4373
                    }
                  ],
                  "start": 4348,
                  "end": 4376
                },
                "id": null,
                "generator": false,
                "start": 4338,
                "end": 4376
              },
              "start": 4321,
              "end": 4376
            },
            "directive": null,
            "start": 4321,
            "end": 4376
          }
        ],
        "start": 4318,
        "end": 4378
      },
      "start": 4288,
      "end": 4378
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 4378
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 35,
    "end": 36
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "value": "}",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "k0",
    "start": 53,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 57,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 62,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 66,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 70,
    "end": 71
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 72,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 77,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 81,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 85,
    "end": 86
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 91,
    "end": 92
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 93,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 104,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "k0",
    "start": 108,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 112,
    "end": 113
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 121,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "k0",
    "start": 125,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 129,
    "end": 130
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 138,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "k0",
    "start": 142,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 146,
    "end": 147
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 148,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 167,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 171,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 175,
    "end": 176
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 184,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 188,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 192,
    "end": 193
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 213,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 217,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 221,
    "end": 222
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 223,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 242,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 246,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 250,
    "end": 251
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 271,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 275,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 279,
    "end": 280
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 300,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 304,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 308,
    "end": 309
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 310,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 328,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 337,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 340,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 342,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 353,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 358,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 367,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 385,
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
    "value": "y",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 396,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 412,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 417,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 426,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 445,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "type": "Identifier",
    "value": "c",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 833,
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
    "value": "x",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 861,
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
    "value": "x",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 865,
    "end": 866
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 878,
    "end": 879
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 891,
    "end": 892
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 893,
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
    "value": "c",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 967,
    "end": 968
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1036,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 1045,
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
    "value": "K",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1050,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1058,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1074,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1081,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1097,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1102,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1111,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1242,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "f3b",
    "start": 1251,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1257,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1265,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1281,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1288,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1306,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1309,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1318,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1425,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 1434,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1439,
    "end": 1446
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1447,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1461,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1466,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1475,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "number",
    "start": 1491,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1522,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 1527,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1539,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1550,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1561,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1570,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1576,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 1584,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1592,
    "end": 1599
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1600,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1609,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 1617,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1621,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 1629,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1633,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 1639,
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
    "value": "k3",
    "start": 1645,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1649,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "k4",
    "start": 1658,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1669,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 1673,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1679,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1696,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 1700,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1706,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1723,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 1727,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1733,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1750,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "k4",
    "start": 1754,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1760,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1778,
    "end": 1782
  },
  {
    "type": "Identifier",
    "value": "Dict",
    "start": 1783,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 1790,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1797,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1805,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1815,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1824,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1830,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1838,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "Dict",
    "start": 1844,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1850,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Identifier",
    "value": "Dict",
    "start": 1855,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 1861,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1865,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "Dict",
    "start": 1871,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 1877,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1888,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1892,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1898,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1905,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 1909,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1915,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1922,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 1926,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 1932,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1940,
    "end": 1948
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1949,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1955,
    "end": 1962
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1963,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Identifier",
    "value": "Dict",
    "start": 1972,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1981,
    "end": 1988
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1989,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1998,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 2006,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2010,
    "end": 2015
  },
  {
    "type": "Identifier",
    "value": "Dict",
    "start": 2016,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 2022,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2026,
    "end": 2031
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 2035,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2046,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2050,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 2056,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2073,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 2077,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 2083,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2100,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 2104,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 2110,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2127,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 2131,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 2137,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2177,
    "end": 2183
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2184,
    "end": 2193
  },
  {
    "type": "Identifier",
    "value": "Entity",
    "start": 2194,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 2207,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2211,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2220,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2231,
    "end": 2237
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2238,
    "end": 2242
  },
  {
    "type": "Identifier",
    "value": "IdOf",
    "start": 2243,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2250,
    "end": 2257
  },
  {
    "type": "Identifier",
    "value": "Entity",
    "start": 2258,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "String",
    "value": "'id'",
    "start": 2270,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2278,
    "end": 2284
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2285,
    "end": 2294
  },
  {
    "type": "Identifier",
    "value": "EntityState",
    "start": 2295,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2309,
    "end": 2316
  },
  {
    "type": "Identifier",
    "value": "Entity",
    "start": 2317,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Identifier",
    "value": "ids",
    "start": 2331,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Identifier",
    "value": "IdOf",
    "start": 2336,
    "end": 2340
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Identifier",
    "value": "entities",
    "start": 2351,
    "end": 2359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2364,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2369,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2382,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2387,
    "end": 2393
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2394,
    "end": 2395
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2405,
    "end": 2411
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2412,
    "end": 2420
  },
  {
    "type": "Identifier",
    "value": "getAllEntities",
    "start": 2421,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2438,
    "end": 2445
  },
  {
    "type": "Identifier",
    "value": "Entity",
    "start": 2446,
    "end": 2452
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 2454,
    "end": 2459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "Identifier",
    "value": "EntityState",
    "start": 2461,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2474,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2476,
    "end": 2477
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2478,
    "end": 2479
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2488,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Identifier",
    "value": "ids",
    "start": 2496,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Identifier",
    "value": "entities",
    "start": 2501,
    "end": 2509
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 2514,
    "end": 2519
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2519,
    "end": 2520
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2525,
    "end": 2531
  },
  {
    "type": "Identifier",
    "value": "ids",
    "start": 2532,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 2536,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2539,
    "end": 2540
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 2540,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2543,
    "end": 2545
  },
  {
    "type": "Identifier",
    "value": "entities",
    "start": 2546,
    "end": 2554
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 2555,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2558,
    "end": 2559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2564,
    "end": 2570
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2571,
    "end": 2579
  },
  {
    "type": "Identifier",
    "value": "getEntity",
    "start": 2580,
    "end": 2589
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2592,
    "end": 2599
  },
  {
    "type": "Identifier",
    "value": "Entity",
    "start": 2600,
    "end": 2606
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2606,
    "end": 2607
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 2608,
    "end": 2610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Identifier",
    "value": "IdOf",
    "start": 2612,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2618,
    "end": 2619
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2619,
    "end": 2620
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 2621,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "Identifier",
    "value": "EntityState",
    "start": 2628,
    "end": 2639
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2639,
    "end": 2640
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2641,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2642,
    "end": 2643
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2649,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2665,
    "end": 2670
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Identifier",
    "value": "ids",
    "start": 2673,
    "end": 2676
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2676,
    "end": 2677
  },
  {
    "type": "Identifier",
    "value": "entities",
    "start": 2678,
    "end": 2686
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2689,
    "end": 2690
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 2691,
    "end": 2696
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2696,
    "end": 2697
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2703,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Identifier",
    "value": "ids",
    "start": 2708,
    "end": 2711
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Identifier",
    "value": "includes",
    "start": 2712,
    "end": 2720
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 2721,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2736,
    "end": 2742
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2743,
    "end": 2752
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2752,
    "end": 2753
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2758,
    "end": 2759
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2765,
    "end": 2771
  },
  {
    "type": "Identifier",
    "value": "entities",
    "start": 2772,
    "end": 2780
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 2781,
    "end": 2783
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2784,
    "end": 2785
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2786,
    "end": 2787
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2811,
    "end": 2820
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 2821,
    "end": 2825
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2826,
    "end": 2827
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 2835,
    "end": 2838
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2838,
    "end": 2839
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2845,
    "end": 2846
  },
  {
    "type": "String",
    "value": "\"some string\"",
    "start": 2847,
    "end": 2860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2862,
    "end": 2863
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2865,
    "end": 2873
  },
  {
    "type": "Identifier",
    "value": "get123",
    "start": 2874,
    "end": 2880
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2880,
    "end": 2881
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2883,
    "end": 2890
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2891,
    "end": 2896
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 2897,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2903,
    "end": 2904
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2904,
    "end": 2905
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 2906,
    "end": 2910
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2910,
    "end": 2911
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2911,
    "end": 2912
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2912,
    "end": 2913
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2914,
    "end": 2915
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2920,
    "end": 2926
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 2927,
    "end": 2930
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2967,
    "end": 2971
  },
  {
    "type": "Identifier",
    "value": "StrictExtract",
    "start": 2972,
    "end": 2985
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2985,
    "end": 2986
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2986,
    "end": 2987
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2987,
    "end": 2988
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2989,
    "end": 2990
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2994,
    "end": 2995
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2996,
    "end": 3003
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3004,
    "end": 3005
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3008,
    "end": 3009
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3010,
    "end": 3017
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3018,
    "end": 3019
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3020,
    "end": 3021
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3024,
    "end": 3025
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3026,
    "end": 3031
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3032,
    "end": 3033
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3034,
    "end": 3039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3041,
    "end": 3045
  },
  {
    "type": "Identifier",
    "value": "StrictExclude",
    "start": 3046,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3060,
    "end": 3061
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3061,
    "end": 3062
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3063,
    "end": 3064
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3064,
    "end": 3065
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3066,
    "end": 3067
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3068,
    "end": 3069
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3070,
    "end": 3077
  },
  {
    "type": "Identifier",
    "value": "StrictExtract",
    "start": 3078,
    "end": 3091
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3091,
    "end": 3092
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3095,
    "end": 3096
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3096,
    "end": 3097
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3098,
    "end": 3099
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3100,
    "end": 3105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3108,
    "end": 3109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3109,
    "end": 3110
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3111,
    "end": 3115
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3117,
    "end": 3118
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3119,
    "end": 3120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3121,
    "end": 3122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3123,
    "end": 3124
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3125,
    "end": 3126
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3128,
    "end": 3130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3131,
    "end": 3132
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3133,
    "end": 3134
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3134,
    "end": 3135
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3136,
    "end": 3138
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3139,
    "end": 3144
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3145,
    "end": 3146
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3146,
    "end": 3147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3147,
    "end": 3148
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3149,
    "end": 3150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3150,
    "end": 3151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3152,
    "end": 3153
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3153,
    "end": 3154
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3154,
    "end": 3159
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3160,
    "end": 3161
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3161,
    "end": 3162
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3162,
    "end": 3163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3163,
    "end": 3164
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3165,
    "end": 3166
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3166,
    "end": 3167
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3167,
    "end": 3168
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3168,
    "end": 3169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3171,
    "end": 3172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3172,
    "end": 3173
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3174,
    "end": 3178
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3179,
    "end": 3180
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3180,
    "end": 3181
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3181,
    "end": 3182
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3182,
    "end": 3183
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3184,
    "end": 3185
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3185,
    "end": 3186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3187,
    "end": 3188
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3189,
    "end": 3190
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3190,
    "end": 3191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3191,
    "end": 3192
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3193,
    "end": 3194
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3194,
    "end": 3195
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3196,
    "end": 3198
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3199,
    "end": 3204
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3205,
    "end": 3206
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3206,
    "end": 3207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Identifier",
    "value": "StrictExclude",
    "start": 3209,
    "end": 3222
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3222,
    "end": 3223
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3223,
    "end": 3224
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3224,
    "end": 3225
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3225,
    "end": 3226
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3226,
    "end": 3227
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3229,
    "end": 3230
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3231,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3233,
    "end": 3234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3235,
    "end": 3236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3236,
    "end": 3237
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3237,
    "end": 3238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3238,
    "end": 3239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3240,
    "end": 3241
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3241,
    "end": 3242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3242,
    "end": 3243
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3268,
    "end": 3276
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 3277,
    "end": 3279
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3279,
    "end": 3280
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3280,
    "end": 3281
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3282,
    "end": 3289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3290,
    "end": 3291
  },
  {
    "type": "Identifier",
    "value": "elements",
    "start": 3291,
    "end": 3299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3299,
    "end": 3300
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3301,
    "end": 3306
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3306,
    "end": 3307
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3307,
    "end": 3313
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3313,
    "end": 3314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3314,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3316,
    "end": 3317
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3318,
    "end": 3319
  },
  {
    "type": "Identifier",
    "value": "elements",
    "start": 3319,
    "end": 3327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3327,
    "end": 3328
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3329,
    "end": 3334
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3334,
    "end": 3335
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3335,
    "end": 3341
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3341,
    "end": 3342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3342,
    "end": 3343
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3343,
    "end": 3344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3344,
    "end": 3345
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 3345,
    "end": 3350
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3350,
    "end": 3351
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3352,
    "end": 3353
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3353,
    "end": 3354
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 3355,
    "end": 3357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3357,
    "end": 3358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3359,
    "end": 3360
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 3360,
    "end": 3367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3367,
    "end": 3368
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3369,
    "end": 3370
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3370,
    "end": 3371
  },
  {
    "type": "String",
    "value": "'elements'",
    "start": 3371,
    "end": 3381
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3381,
    "end": 3382
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3382,
    "end": 3383
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3383,
    "end": 3389
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3389,
    "end": 3390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3390,
    "end": 3391
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3392,
    "end": 3394
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3395,
    "end": 3399
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3399,
    "end": 3400
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3401,
    "end": 3402
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 3407,
    "end": 3409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3409,
    "end": 3410
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 3410,
    "end": 3415
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3415,
    "end": 3416
  },
  {
    "type": "Identifier",
    "value": "elements",
    "start": 3416,
    "end": 3424
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3424,
    "end": 3425
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3425,
    "end": 3426
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3426,
    "end": 3427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3427,
    "end": 3428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3428,
    "end": 3429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3430,
    "end": 3431
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3433,
    "end": 3441
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 3442,
    "end": 3445
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3445,
    "end": 3446
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3446,
    "end": 3447
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3448,
    "end": 3455
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3456,
    "end": 3461
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3461,
    "end": 3462
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3462,
    "end": 3468
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3468,
    "end": 3469
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3469,
    "end": 3470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3470,
    "end": 3471
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 3471,
    "end": 3476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3476,
    "end": 3477
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3478,
    "end": 3479
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3479,
    "end": 3480
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 3481,
    "end": 3483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3483,
    "end": 3484
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3485,
    "end": 3486
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 3486,
    "end": 3493
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3493,
    "end": 3494
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3495,
    "end": 3496
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3496,
    "end": 3497
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3497,
    "end": 3503
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3503,
    "end": 3504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3504,
    "end": 3505
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3506,
    "end": 3508
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3509,
    "end": 3513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3513,
    "end": 3514
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3515,
    "end": 3516
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 3521,
    "end": 3523
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3523,
    "end": 3524
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 3524,
    "end": 3529
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3529,
    "end": 3530
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3530,
    "end": 3531
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3531,
    "end": 3532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3532,
    "end": 3533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3533,
    "end": 3534
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3535,
    "end": 3536
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3560,
    "end": 3568
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 3569,
    "end": 3572
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3572,
    "end": 3573
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3573,
    "end": 3574
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3575,
    "end": 3582
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 3583,
    "end": 3596
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3596,
    "end": 3597
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3597,
    "end": 3603
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3603,
    "end": 3604
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3604,
    "end": 3605
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3605,
    "end": 3606
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 3606,
    "end": 3611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3611,
    "end": 3612
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3613,
    "end": 3614
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3614,
    "end": 3615
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 3616,
    "end": 3618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3618,
    "end": 3619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3620,
    "end": 3621
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 3621,
    "end": 3628
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3628,
    "end": 3629
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3630,
    "end": 3631
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3631,
    "end": 3632
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3632,
    "end": 3638
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3638,
    "end": 3639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3639,
    "end": 3640
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3641,
    "end": 3643
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3644,
    "end": 3648
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3648,
    "end": 3649
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3650,
    "end": 3651
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 3656,
    "end": 3658
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3658,
    "end": 3659
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 3659,
    "end": 3664
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3664,
    "end": 3665
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3665,
    "end": 3666
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3666,
    "end": 3667
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3667,
    "end": 3668
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3668,
    "end": 3669
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3670,
    "end": 3671
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3673,
    "end": 3681
  },
  {
    "type": "Identifier",
    "value": "fn4",
    "start": 3682,
    "end": 3685
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3685,
    "end": 3686
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3686,
    "end": 3687
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3688,
    "end": 3695
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3696,
    "end": 3702
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3702,
    "end": 3703
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3703,
    "end": 3704
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3704,
    "end": 3705
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3706,
    "end": 3707
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3712,
    "end": 3715
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3716,
    "end": 3717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3717,
    "end": 3718
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3719,
    "end": 3724
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3724,
    "end": 3725
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3725,
    "end": 3731
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3731,
    "end": 3732
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3732,
    "end": 3733
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3733,
    "end": 3734
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3734,
    "end": 3735
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3736,
    "end": 3737
  },
  {
    "type": "String",
    "value": "'abc'",
    "start": 3738,
    "end": 3743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3743,
    "end": 3744
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3749,
    "end": 3752
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3753,
    "end": 3754
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3754,
    "end": 3755
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 3756,
    "end": 3769
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3769,
    "end": 3770
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3770,
    "end": 3776
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3776,
    "end": 3777
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3777,
    "end": 3778
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3778,
    "end": 3779
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3779,
    "end": 3780
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3781,
    "end": 3782
  },
  {
    "type": "String",
    "value": "'abc'",
    "start": 3783,
    "end": 3788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3788,
    "end": 3789
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3790,
    "end": 3791
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3826,
    "end": 3832
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3833,
    "end": 3838
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3839,
    "end": 3840
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3841,
    "end": 3842
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3845,
    "end": 3846
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3846,
    "end": 3847
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3847,
    "end": 3848
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3849,
    "end": 3855
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3855,
    "end": 3856
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3856,
    "end": 3857
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3858,
    "end": 3864
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3864,
    "end": 3865
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3868,
    "end": 3879
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3879,
    "end": 3880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3880,
    "end": 3881
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3882,
    "end": 3883
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3888,
    "end": 3892
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3892,
    "end": 3893
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3893,
    "end": 3894
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3895,
    "end": 3896
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 3897,
    "end": 3900
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3900,
    "end": 3901
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3906,
    "end": 3910
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3910,
    "end": 3911
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 3911,
    "end": 3914
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3914,
    "end": 3915
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3916,
    "end": 3917
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 3918,
    "end": 3921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3921,
    "end": 3922
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3925,
    "end": 3926
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3927,
    "end": 3928
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3952,
    "end": 3956
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 3957,
    "end": 3960
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3960,
    "end": 3961
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3961,
    "end": 3962
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3962,
    "end": 3963
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3964,
    "end": 3965
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3966,
    "end": 3967
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3968,
    "end": 3969
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3969,
    "end": 3972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3972,
    "end": 3973
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3974,
    "end": 3980
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3980,
    "end": 3981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3981,
    "end": 3982
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3983,
    "end": 3984
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3985,
    "end": 3986
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3986,
    "end": 3987
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3988,
    "end": 3990
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3991,
    "end": 3996
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3997,
    "end": 3998
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3998,
    "end": 3999
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3999,
    "end": 4000
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4001,
    "end": 4002
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4003,
    "end": 4004
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4004,
    "end": 4005
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4005,
    "end": 4010
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4011,
    "end": 4012
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4012,
    "end": 4013
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4014,
    "end": 4015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4015,
    "end": 4016
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4018,
    "end": 4022
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 4023,
    "end": 4026
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4026,
    "end": 4027
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4027,
    "end": 4028
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4028,
    "end": 4029
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4030,
    "end": 4031
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4032,
    "end": 4033
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4034,
    "end": 4035
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 4035,
    "end": 4038
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4038,
    "end": 4039
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4040,
    "end": 4046
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4046,
    "end": 4047
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4047,
    "end": 4048
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4049,
    "end": 4050
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4051,
    "end": 4052
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4052,
    "end": 4053
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4054,
    "end": 4056
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4057,
    "end": 4062
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4063,
    "end": 4064
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4064,
    "end": 4065
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4065,
    "end": 4066
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4067,
    "end": 4068
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4068,
    "end": 4069
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4069,
    "end": 4070
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4071,
    "end": 4072
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4072,
    "end": 4073
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4073,
    "end": 4078
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4079,
    "end": 4080
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4080,
    "end": 4081
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4082,
    "end": 4083
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4083,
    "end": 4084
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4086,
    "end": 4090
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 4091,
    "end": 4094
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4094,
    "end": 4095
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4095,
    "end": 4096
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4096,
    "end": 4097
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 4098,
    "end": 4099
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4100,
    "end": 4107
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 4108,
    "end": 4111
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4111,
    "end": 4112
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4112,
    "end": 4113
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4113,
    "end": 4114
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4114,
    "end": 4115
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4116,
    "end": 4117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4118,
    "end": 4119
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4120,
    "end": 4121
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4121,
    "end": 4122
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4123,
    "end": 4125
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4126,
    "end": 4131
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 4132,
    "end": 4133
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4133,
    "end": 4134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4134,
    "end": 4135
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4136,
    "end": 4137
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4137,
    "end": 4138
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 4138,
    "end": 4139
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4139,
    "end": 4140
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4140,
    "end": 4141
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4141,
    "end": 4142
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4142,
    "end": 4143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4144,
    "end": 4145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4145,
    "end": 4146
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4148,
    "end": 4152
  },
  {
    "type": "Identifier",
    "value": "Qux",
    "start": 4153,
    "end": 4156
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4156,
    "end": 4157
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4157,
    "end": 4158
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4158,
    "end": 4159
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 4160,
    "end": 4161
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4162,
    "end": 4169
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 4170,
    "end": 4173
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4173,
    "end": 4174
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4174,
    "end": 4175
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4175,
    "end": 4176
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4176,
    "end": 4177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4178,
    "end": 4179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4180,
    "end": 4181
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4182,
    "end": 4183
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4183,
    "end": 4184
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4185,
    "end": 4187
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4188,
    "end": 4193
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 4194,
    "end": 4195
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4195,
    "end": 4196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4196,
    "end": 4197
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4198,
    "end": 4199
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4199,
    "end": 4200
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 4200,
    "end": 4201
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4201,
    "end": 4202
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4202,
    "end": 4203
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4203,
    "end": 4204
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4204,
    "end": 4205
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 4205,
    "end": 4208
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4208,
    "end": 4209
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4209,
    "end": 4210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4211,
    "end": 4212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4212,
    "end": 4213
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4237,
    "end": 4242
  },
  {
    "type": "Identifier",
    "value": "actions",
    "start": 4243,
    "end": 4250
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4251,
    "end": 4252
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4253,
    "end": 4254
  },
  {
    "type": "String",
    "value": "'resizeTo'",
    "start": 4254,
    "end": 4264
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4264,
    "end": 4265
  },
  {
    "type": "String",
    "value": "'resizeBy'",
    "start": 4266,
    "end": 4276
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4276,
    "end": 4277
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4278,
    "end": 4280
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 4281,
    "end": 4286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4286,
    "end": 4287
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 4288,
    "end": 4291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4292,
    "end": 4293
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4293,
    "end": 4298
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 4299,
    "end": 4305
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 4306,
    "end": 4308
  },
  {
    "type": "Identifier",
    "value": "actions",
    "start": 4309,
    "end": 4316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4316,
    "end": 4317
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4318,
    "end": 4319
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 4321,
    "end": 4327
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4327,
    "end": 4328
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 4328,
    "end": 4334
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4334,
    "end": 4335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4336,
    "end": 4337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4338,
    "end": 4339
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4339,
    "end": 4340
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4340,
    "end": 4341
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4342,
    "end": 4343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4343,
    "end": 4344
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4345,
    "end": 4347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4348,
    "end": 4349
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 4352,
    "end": 4358
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4358,
    "end": 4359
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 4359,
    "end": 4365
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4365,
    "end": 4366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4366,
    "end": 4367
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4367,
    "end": 4368
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4368,
    "end": 4369
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4370,
    "end": 4371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4371,
    "end": 4372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4372,
    "end": 4373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4375,
    "end": 4376
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4377,
    "end": 4378
  }
]
```
