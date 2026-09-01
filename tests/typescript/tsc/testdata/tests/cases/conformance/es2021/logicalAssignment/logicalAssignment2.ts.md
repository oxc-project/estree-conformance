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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 21
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 33,
                      "end": 36
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
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
                              "name": "baz",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 54,
                              "end": 57
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
                                      "start": 59,
                                      "end": 60
                                    },
                                    "start": 59,
                                    "end": 60
                                  },
                                  {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1",
                                      "start": 63,
                                      "end": 64
                                    },
                                    "start": 63,
                                    "end": 64
                                  },
                                  {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": 42,
                                      "raw": "42",
                                      "start": 67,
                                      "end": 69
                                    },
                                    "start": 67,
                                    "end": 69
                                  },
                                  {
                                    "type": "TSUndefinedKeyword",
                                    "start": 72,
                                    "end": 81
                                  },
                                  {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "",
                                      "raw": "''",
                                      "start": 84,
                                      "end": 86
                                    },
                                    "start": 84,
                                    "end": 86
                                  }
                                ],
                                "start": 59,
                                "end": 86
                              },
                              "start": 57,
                              "end": 86
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 54,
                            "end": 86
                          }
                        ],
                        "start": 40,
                        "end": 96
                      },
                      "start": 38,
                      "end": 96
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 33,
                    "end": 96
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 105,
                      "end": 108
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
                              "start": 110,
                              "end": 111
                            },
                            "start": 110,
                            "end": 111
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 114,
                              "end": 115
                            },
                            "start": 114,
                            "end": 115
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 42,
                              "raw": "42",
                              "start": 118,
                              "end": 120
                            },
                            "start": 118,
                            "end": 120
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 123,
                            "end": 132
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "",
                              "raw": "''",
                              "start": 135,
                              "end": 137
                            },
                            "start": 135,
                            "end": 137
                          }
                        ],
                        "start": 110,
                        "end": 137
                      },
                      "start": 108,
                      "end": 137
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 105,
                    "end": 137
                  }
                ],
                "start": 23,
                "end": 143
              },
              "start": 21,
              "end": 143
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 143
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 151
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
                      "start": 153,
                      "end": 154
                    },
                    "start": 153,
                    "end": 154
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 157,
                      "end": 158
                    },
                    "start": 157,
                    "end": 158
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 161,
                      "end": 163
                    },
                    "start": 161,
                    "end": 163
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 166,
                    "end": 175
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 178,
                      "end": 180
                    },
                    "start": 178,
                    "end": 180
                  }
                ],
                "start": 153,
                "end": 180
              },
              "start": 151,
              "end": 180
            },
            "accessibility": null,
            "static": false,
            "start": 148,
            "end": 180
          }
        ],
        "start": 12,
        "end": 182
      },
      "declare": false,
      "start": 0,
      "end": 182
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
            "name": "result",
            "optional": false,
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
                  "start": 206,
                  "end": 207
                },
                "typeArguments": null,
                "start": 206,
                "end": 207
              },
              "start": 204,
              "end": 207
            },
            "start": 198,
            "end": 207
          },
          "init": null,
          "definite": false,
          "start": 198,
          "end": 207
        }
      ],
      "declare": true,
      "start": 184,
      "end": 207
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
            "name": "a",
            "optional": false,
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
                  "start": 225,
                  "end": 226
                },
                "typeArguments": null,
                "start": 225,
                "end": 226
              },
              "start": 223,
              "end": 226
            },
            "start": 222,
            "end": 226
          },
          "init": null,
          "definite": false,
          "start": 222,
          "end": 226
        }
      ],
      "declare": true,
      "start": 208,
      "end": 226
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
            "name": "b",
            "optional": false,
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
                  "start": 244,
                  "end": 245
                },
                "typeArguments": null,
                "start": 244,
                "end": 245
              },
              "start": 242,
              "end": 245
            },
            "start": 241,
            "end": 245
          },
          "init": null,
          "definite": false,
          "start": 241,
          "end": 245
        }
      ],
      "declare": true,
      "start": 227,
      "end": 245
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
            "name": "c",
            "optional": false,
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
                  "start": 263,
                  "end": 264
                },
                "typeArguments": null,
                "start": 263,
                "end": 264
              },
              "start": 261,
              "end": 264
            },
            "start": 260,
            "end": 264
          },
          "init": null,
          "definite": false,
          "start": 260,
          "end": 264
        }
      ],
      "declare": true,
      "start": 246,
      "end": 264
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "&&=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 266,
            "end": 267
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 271
          },
          "optional": false,
          "computed": false,
          "start": 266,
          "end": 271
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 282
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 283,
            "end": 286
          },
          "optional": false,
          "computed": false,
          "start": 276,
          "end": 286
        },
        "start": 266,
        "end": 286
      },
      "directive": null,
      "start": 266,
      "end": 286
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "||=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 288
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 289,
            "end": 292
          },
          "optional": false,
          "computed": false,
          "start": 287,
          "end": 292
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 303
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 304,
            "end": 307
          },
          "optional": false,
          "computed": false,
          "start": 297,
          "end": 307
        },
        "start": 287,
        "end": 307
      },
      "directive": null,
      "start": 287,
      "end": 307
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "??=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 309
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 310,
            "end": 313
          },
          "optional": false,
          "computed": false,
          "start": 308,
          "end": 313
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 318,
            "end": 324
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 325,
            "end": 328
          },
          "optional": false,
          "computed": false,
          "start": 318,
          "end": 328
        },
        "start": 308,
        "end": 328
      },
      "directive": null,
      "start": 308,
      "end": 328
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "&&=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 331
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 332,
              "end": 335
            },
            "optional": false,
            "computed": false,
            "start": 330,
            "end": 335
          },
          "property": {
            "type": "Literal",
            "value": "baz",
            "raw": "\"baz\"",
            "start": 336,
            "end": 341
          },
          "optional": false,
          "computed": true,
          "start": 330,
          "end": 342
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 353
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 357
            },
            "optional": false,
            "computed": false,
            "start": 347,
            "end": 357
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 358,
            "end": 361
          },
          "optional": false,
          "computed": false,
          "start": 347,
          "end": 361
        },
        "start": 330,
        "end": 361
      },
      "directive": null,
      "start": 330,
      "end": 361
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "||=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 363
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 364,
              "end": 367
            },
            "optional": false,
            "computed": false,
            "start": 362,
            "end": 367
          },
          "property": {
            "type": "Literal",
            "value": "baz",
            "raw": "\"baz\"",
            "start": 368,
            "end": 373
          },
          "optional": false,
          "computed": true,
          "start": 362,
          "end": 374
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 379,
              "end": 385
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 386,
              "end": 389
            },
            "optional": false,
            "computed": false,
            "start": 379,
            "end": 389
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 390,
            "end": 393
          },
          "optional": false,
          "computed": false,
          "start": 379,
          "end": 393
        },
        "start": 362,
        "end": 393
      },
      "directive": null,
      "start": 362,
      "end": 393
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "??=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 394,
              "end": 395
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 396,
              "end": 399
            },
            "optional": false,
            "computed": false,
            "start": 394,
            "end": 399
          },
          "property": {
            "type": "Literal",
            "value": "baz",
            "raw": "\"baz\"",
            "start": 400,
            "end": 405
          },
          "optional": false,
          "computed": true,
          "start": 394,
          "end": 406
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 411,
              "end": 417
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 418,
              "end": 421
            },
            "optional": false,
            "computed": false,
            "start": 411,
            "end": 421
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 425
          },
          "optional": false,
          "computed": false,
          "start": 411,
          "end": 425
        },
        "start": 394,
        "end": 425
      },
      "directive": null,
      "start": 394,
      "end": 425
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "&&=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 427,
                  "end": 428
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 429,
                  "end": 432
                },
                "optional": false,
                "computed": false,
                "start": 427,
                "end": 432
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 433,
                "end": 436
              },
              "optional": false,
              "computed": false,
              "start": 427,
              "end": 436
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 427,
            "end": 438
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 439,
            "end": 442
          },
          "optional": false,
          "computed": false,
          "start": 427,
          "end": 442
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 447,
                  "end": 453
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 454,
                  "end": 457
                },
                "optional": false,
                "computed": false,
                "start": 447,
                "end": 457
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 458,
                "end": 461
              },
              "optional": false,
              "computed": false,
              "start": 447,
              "end": 461
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 447,
            "end": 463
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 464,
            "end": 467
          },
          "optional": false,
          "computed": false,
          "start": 447,
          "end": 467
        },
        "start": 427,
        "end": 467
      },
      "directive": null,
      "start": 427,
      "end": 467
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "||=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 468,
                  "end": 469
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 470,
                  "end": 473
                },
                "optional": false,
                "computed": false,
                "start": 468,
                "end": 473
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 477
              },
              "optional": false,
              "computed": false,
              "start": 468,
              "end": 477
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 468,
            "end": 479
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 480,
            "end": 483
          },
          "optional": false,
          "computed": false,
          "start": 468,
          "end": 483
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 488,
                  "end": 494
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 495,
                  "end": 498
                },
                "optional": false,
                "computed": false,
                "start": 488,
                "end": 498
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 499,
                "end": 502
              },
              "optional": false,
              "computed": false,
              "start": 488,
              "end": 502
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 488,
            "end": 504
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 505,
            "end": 508
          },
          "optional": false,
          "computed": false,
          "start": 488,
          "end": 508
        },
        "start": 468,
        "end": 508
      },
      "directive": null,
      "start": 468,
      "end": 508
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "??=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 509,
                  "end": 510
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 511,
                  "end": 514
                },
                "optional": false,
                "computed": false,
                "start": 509,
                "end": 514
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 515,
                "end": 518
              },
              "optional": false,
              "computed": false,
              "start": 509,
              "end": 518
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 509,
            "end": 520
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 521,
            "end": 524
          },
          "optional": false,
          "computed": false,
          "start": 509,
          "end": 524
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 529,
                  "end": 535
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 536,
                  "end": 539
                },
                "optional": false,
                "computed": false,
                "start": 529,
                "end": 539
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 540,
                "end": 543
              },
              "optional": false,
              "computed": false,
              "start": 529,
              "end": 543
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 529,
            "end": 545
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 546,
            "end": 549
          },
          "optional": false,
          "computed": false,
          "start": 529,
          "end": 549
        },
        "start": 509,
        "end": 549
      },
      "directive": null,
      "start": 509,
      "end": 549
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 550
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
    "value": "A",
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
    "value": "foo",
    "start": 18,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 33,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 54,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 61,
    "end": 62
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 65,
    "end": 66
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 67,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 72,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 82,
    "end": 83
  },
  {
    "type": "String",
    "value": "''",
    "start": 84,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 105,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "|",
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
    "value": "|",
    "start": 116,
    "end": 117
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 118,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 123,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 133,
    "end": 134
  },
  {
    "type": "String",
    "value": "''",
    "start": 135,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 148,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 155,
    "end": 156
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 159,
    "end": 160
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 161,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 166,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 176,
    "end": 177
  },
  {
    "type": "String",
    "value": "''",
    "start": 178,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 184,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 192,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 198,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": "const",
    "start": 216,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 227,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 235,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 246,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 254,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 268,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 272,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 276,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 283,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 289,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 293,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 297,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 304,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 310,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 314,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 318,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 325,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 332,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 335,
    "end": 336
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 336,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 343,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 347,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 354,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 358,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 364,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 367,
    "end": 368
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 368,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 375,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 379,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 386,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 390,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 396,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 399,
    "end": 400
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 400,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 407,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 411,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 418,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 422,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 429,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 433,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "baz",
    "start": 439,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 443,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 447,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 454,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 458,
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
    "value": ")",
    "start": 462,
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
    "value": "baz",
    "start": 464,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 470,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 474,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 480,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 484,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 488,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 495,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 499,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 505,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 511,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 515,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 521,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 525,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 529,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 536,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 540,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 546,
    "end": 549
  }
]
```
