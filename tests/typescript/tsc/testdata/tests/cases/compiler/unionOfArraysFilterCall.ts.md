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
        "name": "Fizz",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
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
              "start": 21,
              "end": 23
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 25,
                "end": 31
              },
              "start": 23,
              "end": 31
            },
            "accessibility": null,
            "static": false,
            "start": 21,
            "end": 32
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fizz",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
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
            "start": 37,
            "end": 50
          }
        ],
        "start": 15,
        "end": 52
      },
      "declare": false,
      "start": 0,
      "end": 52
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Buzz",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 77
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 79,
                "end": 85
              },
              "start": 77,
              "end": 85
            },
            "accessibility": null,
            "static": false,
            "start": 75,
            "end": 86
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "buzz",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 95
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 97,
                "end": 103
              },
              "start": 95,
              "end": 103
            },
            "accessibility": null,
            "static": false,
            "start": 91,
            "end": 104
          }
        ],
        "start": 69,
        "end": 106
      },
      "declare": false,
      "start": 54,
      "end": 106
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 109,
              "end": 111
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Fizz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 115,
                      "end": 119
                    },
                    "typeArguments": null,
                    "start": 115,
                    "end": 119
                  },
                  "start": 115,
                  "end": 121
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Buzz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 124,
                      "end": 128
                    },
                    "typeArguments": null,
                    "start": 124,
                    "end": 128
                  },
                  "start": 124,
                  "end": 130
                }
              ],
              "start": 115,
              "end": 130
            },
            "start": 109,
            "end": 130
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "filter",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 138
          },
          "optional": false,
          "computed": false,
          "start": 108,
          "end": 138
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
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 143
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "item",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 147,
                  "end": 151
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 152,
                  "end": 154
                },
                "optional": false,
                "computed": false,
                "start": 147,
                "end": 154
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 157,
                "end": 158
              },
              "start": 147,
              "end": 158
            },
            "id": null,
            "generator": false,
            "start": 139,
            "end": 158
          }
        ],
        "optional": false,
        "start": 108,
        "end": 159
      },
      "directive": null,
      "start": 108,
      "end": 160
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 162,
              "end": 164
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Fizz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 168,
                      "end": 172
                    },
                    "typeArguments": null,
                    "start": 168,
                    "end": 172
                  },
                  "start": 168,
                  "end": 174
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Buzz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 186,
                        "end": 190
                      },
                      "typeArguments": null,
                      "start": 186,
                      "end": 190
                    },
                    "start": 186,
                    "end": 192
                  },
                  "start": 177,
                  "end": 192
                }
              ],
              "start": 168,
              "end": 192
            },
            "start": 162,
            "end": 192
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "filter",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 200
          },
          "optional": false,
          "computed": false,
          "start": 161,
          "end": 200
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
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 201,
                "end": 205
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "item",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 213
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 214,
                  "end": 216
                },
                "optional": false,
                "computed": false,
                "start": 209,
                "end": 216
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 219,
                "end": 220
              },
              "start": 209,
              "end": 220
            },
            "id": null,
            "generator": false,
            "start": 201,
            "end": 220
          }
        ],
        "optional": false,
        "start": 161,
        "end": 221
      },
      "directive": null,
      "start": 161,
      "end": 222
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 226,
              "end": 228
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Fizz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 232,
                      "end": 236
                    },
                    "typeArguments": null,
                    "start": 232,
                    "end": 236
                  },
                  "start": 232,
                  "end": 238
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Buzz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 241,
                      "end": 245
                    },
                    "typeArguments": null,
                    "start": 241,
                    "end": 245
                  },
                  "start": 241,
                  "end": 247
                }
              ],
              "start": 232,
              "end": 247
            },
            "start": 226,
            "end": 247
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "find",
            "optional": false,
            "typeAnnotation": null,
            "start": 249,
            "end": 253
          },
          "optional": false,
          "computed": false,
          "start": 225,
          "end": 253
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
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 254,
                "end": 258
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 266
            },
            "id": null,
            "generator": false,
            "start": 254,
            "end": 266
          }
        ],
        "optional": false,
        "start": 225,
        "end": 267
      },
      "directive": null,
      "start": 225,
      "end": 268
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isFizz",
        "optional": false,
        "typeAnnotation": null,
        "start": 286,
        "end": 292
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 296,
              "end": 303
            },
            "start": 294,
            "end": 303
          },
          "start": 293,
          "end": 303
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 307
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Fizz",
                "optional": false,
                "typeAnnotation": null,
                "start": 311,
                "end": 315
              },
              "typeArguments": null,
              "start": 311,
              "end": 315
            },
            "start": 311,
            "end": 315
          },
          "start": 306,
          "end": 315
        },
        "start": 304,
        "end": 315
      },
      "body": null,
      "expression": false,
      "start": 269,
      "end": 316
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 318,
              "end": 320
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Fizz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 324,
                      "end": 328
                    },
                    "typeArguments": null,
                    "start": 324,
                    "end": 328
                  },
                  "start": 324,
                  "end": 330
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Buzz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 333,
                      "end": 337
                    },
                    "typeArguments": null,
                    "start": 333,
                    "end": 337
                  },
                  "start": 333,
                  "end": 339
                }
              ],
              "start": 324,
              "end": 339
            },
            "start": 318,
            "end": 339
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "find",
            "optional": false,
            "typeAnnotation": null,
            "start": 341,
            "end": 345
          },
          "optional": false,
          "computed": false,
          "start": 317,
          "end": 345
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "isFizz",
            "optional": false,
            "typeAnnotation": null,
            "start": 346,
            "end": 352
          }
        ],
        "optional": false,
        "start": 317,
        "end": 353
      },
      "directive": null,
      "start": 317,
      "end": 354
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isBuzz",
        "optional": false,
        "typeAnnotation": null,
        "start": 372,
        "end": 378
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 382,
              "end": 389
            },
            "start": 380,
            "end": 389
          },
          "start": 379,
          "end": 389
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 392,
            "end": 393
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Buzz",
                "optional": false,
                "typeAnnotation": null,
                "start": 397,
                "end": 401
              },
              "typeArguments": null,
              "start": 397,
              "end": 401
            },
            "start": 397,
            "end": 401
          },
          "start": 392,
          "end": 401
        },
        "start": 390,
        "end": 401
      },
      "body": null,
      "expression": false,
      "start": 355,
      "end": 402
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 404,
              "end": 406
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Fizz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 410,
                      "end": 414
                    },
                    "typeArguments": null,
                    "start": 410,
                    "end": 414
                  },
                  "start": 410,
                  "end": 416
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Buzz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 419,
                      "end": 423
                    },
                    "typeArguments": null,
                    "start": 419,
                    "end": 423
                  },
                  "start": 419,
                  "end": 425
                }
              ],
              "start": 410,
              "end": 425
            },
            "start": 404,
            "end": 425
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "find",
            "optional": false,
            "typeAnnotation": null,
            "start": 427,
            "end": 431
          },
          "optional": false,
          "computed": false,
          "start": 403,
          "end": 431
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "isBuzz",
            "optional": false,
            "typeAnnotation": null,
            "start": 432,
            "end": 438
          }
        ],
        "optional": false,
        "start": 403,
        "end": 439
      },
      "directive": null,
      "start": 403,
      "end": 440
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 443,
              "end": 445
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Fizz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 449,
                      "end": 453
                    },
                    "typeArguments": null,
                    "start": 449,
                    "end": 453
                  },
                  "start": 449,
                  "end": 455
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Buzz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 458,
                      "end": 462
                    },
                    "typeArguments": null,
                    "start": 458,
                    "end": 462
                  },
                  "start": 458,
                  "end": 464
                }
              ],
              "start": 449,
              "end": 464
            },
            "start": 443,
            "end": 464
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "every",
            "optional": false,
            "typeAnnotation": null,
            "start": 466,
            "end": 471
          },
          "optional": false,
          "computed": false,
          "start": 442,
          "end": 471
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
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 472,
                "end": 476
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "item",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 480,
                  "end": 484
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 485,
                  "end": 487
                },
                "optional": false,
                "computed": false,
                "start": 480,
                "end": 487
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 490,
                "end": 491
              },
              "start": 480,
              "end": 491
            },
            "id": null,
            "generator": false,
            "start": 472,
            "end": 491
          }
        ],
        "optional": false,
        "start": 442,
        "end": 492
      },
      "directive": null,
      "start": 442,
      "end": 493
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 496,
              "end": 498
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Fizz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 502,
                      "end": 506
                    },
                    "typeArguments": null,
                    "start": 502,
                    "end": 506
                  },
                  "start": 502,
                  "end": 508
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Buzz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 511,
                      "end": 515
                    },
                    "typeArguments": null,
                    "start": 511,
                    "end": 515
                  },
                  "start": 511,
                  "end": 517
                }
              ],
              "start": 502,
              "end": 517
            },
            "start": 496,
            "end": 517
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "reduce",
            "optional": false,
            "typeAnnotation": null,
            "start": 519,
            "end": 525
          },
          "optional": false,
          "computed": false,
          "start": 495,
          "end": 525
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
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 526,
                "end": 530
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 534,
              "end": 538
            },
            "id": null,
            "generator": false,
            "start": 526,
            "end": 538
          }
        ],
        "optional": false,
        "start": 495,
        "end": 539
      },
      "directive": null,
      "start": 495,
      "end": 540
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 544,
              "end": 546
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Fizz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 551,
                        "end": 555
                      },
                      "typeArguments": null,
                      "start": 551,
                      "end": 555
                    }
                  ],
                  "start": 550,
                  "end": 556
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSOptionalType",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Buzz",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 569,
                            "end": 573
                          },
                          "typeArguments": null,
                          "start": 569,
                          "end": 573
                        },
                        "start": 569,
                        "end": 574
                      }
                    ],
                    "start": 568,
                    "end": 575
                  },
                  "start": 559,
                  "end": 575
                }
              ],
              "start": 550,
              "end": 575
            },
            "start": 544,
            "end": 575
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "filter",
            "optional": false,
            "typeAnnotation": null,
            "start": 577,
            "end": 583
          },
          "optional": false,
          "computed": false,
          "start": 543,
          "end": 583
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
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 584,
                "end": 588
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 592,
                    "end": 596
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 598,
                    "end": 600
                  },
                  "optional": true,
                  "computed": false,
                  "start": 592,
                  "end": 600
                },
                "start": 592,
                "end": 600
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 603,
                "end": 604
              },
              "start": 592,
              "end": 604
            },
            "id": null,
            "generator": false,
            "start": 584,
            "end": 604
          }
        ],
        "optional": false,
        "start": 543,
        "end": 605
      },
      "directive": null,
      "start": 543,
      "end": 606
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 606
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
    "value": "Fizz",
    "start": 10,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 21,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "fizz",
    "start": 37,
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
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 54,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "Buzz",
    "start": 64,
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
    "value": "id",
    "start": 75,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "buzz",
    "start": 91,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 97,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 112,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "Fizz",
    "start": 115,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "Buzz",
    "start": 124,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "filter",
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
    "type": "Identifier",
    "value": "item",
    "start": 139,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 144,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 147,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 152,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 155,
    "end": 156
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 165,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "Fizz",
    "start": 168,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 172,
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
    "value": "|",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 177,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "Buzz",
    "start": 186,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 194,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 201,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 206,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 209,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 214,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 217,
    "end": 218
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 229,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "Fizz",
    "start": 232,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "Buzz",
    "start": 241,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "find",
    "start": 249,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 254,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 259,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 262,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 269,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 277,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "isFizz",
    "start": 286,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "unknown",
    "start": 296,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 308,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "Fizz",
    "start": 311,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 321,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "Fizz",
    "start": 324,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "Buzz",
    "start": 333,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "find",
    "start": 341,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "isFizz",
    "start": 346,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 355,
    "end": 362
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 363,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "isBuzz",
    "start": 372,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 382,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 394,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "Buzz",
    "start": 397,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 407,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "Fizz",
    "start": 410,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "Buzz",
    "start": 419,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "find",
    "start": 427,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "isBuzz",
    "start": 432,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 446,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "Fizz",
    "start": 449,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "Buzz",
    "start": 458,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "every",
    "start": 466,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 472,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 477,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 480,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 485,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 488,
    "end": 489
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 499,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "Fizz",
    "start": 502,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "Buzz",
    "start": 511,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 519,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 526,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 531,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 534,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 547,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "Fizz",
    "start": 551,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 559,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "Buzz",
    "start": 569,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 577,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 584,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 589,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 592,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 596,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 598,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 601,
    "end": 602
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 605,
    "end": 606
  }
]
```
