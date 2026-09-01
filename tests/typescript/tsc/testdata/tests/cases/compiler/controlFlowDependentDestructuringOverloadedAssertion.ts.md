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
        "name": "State",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 70
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
                  "name": "status",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 85
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "ready",
                      "raw": "\"ready\"",
                      "start": 87,
                      "end": 94
                    },
                    "start": 87,
                    "end": 94
                  },
                  "start": 85,
                  "end": 94
                },
                "accessibility": null,
                "static": false,
                "start": 79,
                "end": 95
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "payload",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 103
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 107,
                          "end": 112
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 115,
                            "end": 121
                          },
                          "start": 113,
                          "end": 121
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 107,
                        "end": 121
                      }
                    ],
                    "start": 105,
                    "end": 123
                  },
                  "start": 103,
                  "end": 123
                },
                "accessibility": null,
                "static": false,
                "start": 96,
                "end": 123
              }
            ],
            "start": 77,
            "end": 125
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
                  "name": "status",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 138
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "pending",
                      "raw": "\"pending\"",
                      "start": 140,
                      "end": 149
                    },
                    "start": 140,
                    "end": 149
                  },
                  "start": 138,
                  "end": 149
                },
                "accessibility": null,
                "static": false,
                "start": 132,
                "end": 150
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "payload",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 158
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 161,
                    "end": 170
                  },
                  "start": 159,
                  "end": 170
                },
                "accessibility": null,
                "static": false,
                "start": 151,
                "end": 170
              }
            ],
            "start": 130,
            "end": 172
          }
        ],
        "start": 75,
        "end": 172
      },
      "declare": false,
      "start": 60,
      "end": 173
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getState",
        "optional": false,
        "typeAnnotation": null,
        "start": 192,
        "end": 200
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "State",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 209
          },
          "typeArguments": null,
          "start": 204,
          "end": 209
        },
        "start": 202,
        "end": 209
      },
      "body": null,
      "expression": false,
      "start": 175,
      "end": 210
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assert",
        "optional": false,
        "typeAnnotation": null,
        "start": 228,
        "end": 234
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "condition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 246,
              "end": 253
            },
            "start": 244,
            "end": 253
          },
          "start": 235,
          "end": 253
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "condition",
            "optional": false,
            "typeAnnotation": null,
            "start": 264,
            "end": 273
          },
          "asserts": true,
          "typeAnnotation": null,
          "start": 256,
          "end": 273
        },
        "start": 254,
        "end": 273
      },
      "body": null,
      "expression": false,
      "start": 211,
      "end": 274
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assert",
        "optional": false,
        "typeAnnotation": null,
        "start": 292,
        "end": 298
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "condition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 310,
              "end": 317
            },
            "start": 308,
            "end": 317
          },
          "start": 299,
          "end": 317
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "message",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 328,
              "end": 334
            },
            "start": 326,
            "end": 334
          },
          "start": 319,
          "end": 334
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "condition",
            "optional": false,
            "typeAnnotation": null,
            "start": 345,
            "end": 354
          },
          "asserts": true,
          "typeAnnotation": null,
          "start": 337,
          "end": 354
        },
        "start": 335,
        "end": 354
      },
      "body": null,
      "expression": false,
      "start": 275,
      "end": 355
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
            "name": "readValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 363,
            "end": 372
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
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
                              "name": "status",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 393,
                              "end": 399
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "status",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 393,
                              "end": 399
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 393,
                            "end": 399
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 401,
                              "end": 408
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 401,
                              "end": 408
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 401,
                            "end": 408
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 391,
                        "end": 410
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getState",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 413,
                          "end": 421
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 413,
                        "end": 423
                      },
                      "definite": false,
                      "start": 391,
                      "end": 423
                    }
                  ],
                  "declare": false,
                  "start": 385,
                  "end": 424
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "status",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 431,
                      "end": 437
                    },
                    "operator": "!==",
                    "right": {
                      "type": "Literal",
                      "value": "ready",
                      "raw": "\"ready\"",
                      "start": 442,
                      "end": 449
                    },
                    "start": 431,
                    "end": 449
                  },
                  "consequent": {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 461,
                        "end": 466
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "Value is not ready.",
                          "raw": "\"Value is not ready.\"",
                          "start": 467,
                          "end": 488
                        }
                      ],
                      "start": 457,
                      "end": 489
                    },
                    "start": 451,
                    "end": 490
                  },
                  "alternate": null,
                  "start": 427,
                  "end": 490
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 493,
                      "end": 499
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "payload",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 500,
                            "end": 507
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 508,
                            "end": 513
                          },
                          "optional": false,
                          "computed": false,
                          "start": 500,
                          "end": 513
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 518,
                          "end": 527
                        },
                        "start": 500,
                        "end": 527
                      }
                    ],
                    "optional": false,
                    "start": 493,
                    "end": 528
                  },
                  "directive": null,
                  "start": 493,
                  "end": 529
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "payload",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 539,
                      "end": 546
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 547,
                      "end": 552
                    },
                    "optional": false,
                    "computed": false,
                    "start": 539,
                    "end": 552
                  },
                  "start": 532,
                  "end": 553
                }
              ],
              "start": 381,
              "end": 555
            },
            "id": null,
            "generator": false,
            "start": 375,
            "end": 555
          },
          "definite": false,
          "start": 363,
          "end": 555
        }
      ],
      "declare": false,
      "start": 357,
      "end": 556
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 60,
  "end": 556
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 60,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 65,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "status",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "String",
    "value": "\"ready\"",
    "start": 87,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 96,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 107,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 115,
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
    "value": "}",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "status",
    "start": 132,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "String",
    "value": "\"pending\"",
    "start": 140,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 151,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 161,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 175,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 183,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "getState",
    "start": 192,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 200,
    "end": 201
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
    "value": "State",
    "start": 204,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 211,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 219,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 228,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 235,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 246,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 256,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 264,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 275,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 283,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 292,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 299,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 310,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 319,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 328,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 337,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 345,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 357,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "readValue",
    "start": 363,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 378,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 381,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 385,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "status",
    "start": 393,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 401,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "getState",
    "start": 413,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "status",
    "start": 431,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 438,
    "end": 441
  },
  {
    "type": "String",
    "value": "\"ready\"",
    "start": 442,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 449,
    "end": 450
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 451,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 457,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 461,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 466,
    "end": 467
  },
  {
    "type": "String",
    "value": "\"Value is not ready.\"",
    "start": 467,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 493,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 500,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 508,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 514,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 518,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 528,
    "end": 529
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 532,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 539,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ".",
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
    "value": ";",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 555,
    "end": 556
  }
]
```
