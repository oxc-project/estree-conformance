__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "foo",
              "start": 14,
              "end": 18
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 22,
                      "end": 28
                    },
                    "start": 20,
                    "end": 28
                  },
                  "start": 19,
                  "end": 28
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 30,
                "end": 32
              },
              "expression": false,
              "start": 18,
              "end": 32
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 32
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "bar",
              "start": 43,
              "end": 47
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
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
                      "start": 51,
                      "end": 57
                    },
                    "start": 49,
                    "end": 57
                  },
                  "start": 48,
                  "end": 57
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 59,
                "end": 61
              },
              "expression": false,
              "start": 47,
              "end": 61
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 37,
            "end": 61
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "baz",
              "start": 73,
              "end": 77
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": true,
              "async": true,
              "declare": false,
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
                      "start": 81,
                      "end": 87
                    },
                    "start": 79,
                    "end": 87
                  },
                  "start": 78,
                  "end": 87
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 106,
                      "end": 107
                    },
                    "start": 99,
                    "end": 108
                  }
                ],
                "start": 89,
                "end": 114
              },
              "expression": false,
              "start": 77,
              "end": 114
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 66,
            "end": 114
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "_quux",
              "start": 119,
              "end": 125
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 127,
                "end": 133
              },
              "start": 125,
              "end": 133
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 119,
            "end": 134
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "quux",
              "start": 143,
              "end": 148
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 153,
                  "end": 159
                },
                "start": 151,
                "end": 159
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 177,
                        "end": 181
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "_quux",
                        "start": 182,
                        "end": 188
                      },
                      "optional": false,
                      "computed": false,
                      "start": 177,
                      "end": 188
                    },
                    "start": 170,
                    "end": 189
                  }
                ],
                "start": 160,
                "end": 195
              },
              "expression": false,
              "start": 149,
              "end": 195
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 139,
            "end": 195
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "quux",
              "start": 204,
              "end": 209
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 216,
                      "end": 222
                    },
                    "start": 214,
                    "end": 222
                  },
                  "start": 211,
                  "end": 222
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
                          "type": "ThisExpression",
                          "start": 234,
                          "end": 238
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "_quux",
                          "start": 239,
                          "end": 245
                        },
                        "optional": false,
                        "computed": false,
                        "start": 234,
                        "end": 245
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 248,
                        "end": 251
                      },
                      "start": 234,
                      "end": 251
                    },
                    "directive": null,
                    "start": 234,
                    "end": 252
                  }
                ],
                "start": 224,
                "end": 258
              },
              "expression": false,
              "start": 210,
              "end": 258
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 200,
            "end": 258
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
              "start": 263,
              "end": 274
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 288,
                          "end": 292
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "foo",
                          "start": 293,
                          "end": 297
                        },
                        "optional": false,
                        "computed": false,
                        "start": 288,
                        "end": 297
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 30,
                          "raw": "30",
                          "start": 298,
                          "end": 300
                        }
                      ],
                      "optional": false,
                      "start": 288,
                      "end": 301
                    },
                    "directive": null,
                    "start": 288,
                    "end": 302
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 311,
                          "end": 315
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "bar",
                          "start": 316,
                          "end": 320
                        },
                        "optional": false,
                        "computed": false,
                        "start": 311,
                        "end": 320
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 30,
                          "raw": "30",
                          "start": 321,
                          "end": 323
                        }
                      ],
                      "optional": false,
                      "start": 311,
                      "end": 324
                    },
                    "directive": null,
                    "start": 311,
                    "end": 325
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 334,
                          "end": 338
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "baz",
                          "start": 339,
                          "end": 343
                        },
                        "optional": false,
                        "computed": false,
                        "start": 334,
                        "end": 343
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 30,
                          "raw": "30",
                          "start": 344,
                          "end": 346
                        }
                      ],
                      "optional": false,
                      "start": 334,
                      "end": 347
                    },
                    "directive": null,
                    "start": 334,
                    "end": 348
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
                          "start": 357,
                          "end": 361
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "quux",
                          "start": 362,
                          "end": 367
                        },
                        "optional": false,
                        "computed": false,
                        "start": 357,
                        "end": 367
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 370,
                            "end": 374
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "quux",
                            "start": 375,
                            "end": 380
                          },
                          "optional": false,
                          "computed": false,
                          "start": 370,
                          "end": 380
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 383,
                          "end": 384
                        },
                        "start": 370,
                        "end": 384
                      },
                      "start": 357,
                      "end": 384
                    },
                    "directive": null,
                    "start": 357,
                    "end": 385
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 394,
                          "end": 398
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "quux",
                          "start": 399,
                          "end": 404
                        },
                        "optional": false,
                        "computed": false,
                        "start": 394,
                        "end": 404
                      },
                      "start": 394,
                      "end": 406
                    },
                    "directive": null,
                    "start": 394,
                    "end": 407
                  }
                ],
                "start": 278,
                "end": 410
              },
              "expression": false,
              "start": 275,
              "end": 410
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 263,
            "end": 410
          }
        ],
        "start": 8,
        "end": 412
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 412
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 420,
        "end": 421
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 430,
        "end": 431
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "foo",
              "start": 438,
              "end": 442
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "type": "TSStringKeyword",
                      "start": 446,
                      "end": 452
                    },
                    "start": 444,
                    "end": 452
                  },
                  "start": 443,
                  "end": 452
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 454,
                "end": 456
              },
              "expression": false,
              "start": 442,
              "end": 456
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 438,
            "end": 456
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
              "start": 461,
              "end": 472
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 486,
                        "end": 491
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 486,
                      "end": 493
                    },
                    "directive": null,
                    "start": 486,
                    "end": 494
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 503,
                          "end": 507
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "foo",
                          "start": 508,
                          "end": 512
                        },
                        "optional": false,
                        "computed": false,
                        "start": 503,
                        "end": 512
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "str",
                          "raw": "\"str\"",
                          "start": 513,
                          "end": 518
                        }
                      ],
                      "optional": false,
                      "start": 503,
                      "end": 519
                    },
                    "directive": null,
                    "start": 503,
                    "end": 520
                  }
                ],
                "start": 476,
                "end": 526
              },
              "expression": false,
              "start": 473,
              "end": 526
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 461,
            "end": 526
          }
        ],
        "start": 432,
        "end": 528
      },
      "abstract": false,
      "declare": false,
      "start": 414,
      "end": 528
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 528
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 14,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
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
    "value": ")",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 37,
    "end": 42
  },
  {
    "type": "PrivateIdentifier",
    "value": "bar",
    "start": 43,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 66,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 72,
    "end": 73
  },
  {
    "type": "PrivateIdentifier",
    "value": "baz",
    "start": 73,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 99,
    "end": 105
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "PrivateIdentifier",
    "value": "_quux",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 127,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 139,
    "end": 142
  },
  {
    "type": "PrivateIdentifier",
    "value": "quux",
    "start": 143,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 153,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 170,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 177,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 181,
    "end": 182
  },
  {
    "type": "PrivateIdentifier",
    "value": "_quux",
    "start": 182,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 200,
    "end": 203
  },
  {
    "type": "PrivateIdentifier",
    "value": "quux",
    "start": 204,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 211,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 216,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 234,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 238,
    "end": 239
  },
  {
    "type": "PrivateIdentifier",
    "value": "_quux",
    "start": 239,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 248,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 263,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "this",
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
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 293,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 298,
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
    "value": ";",
    "start": 301,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 311,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 315,
    "end": 316
  },
  {
    "type": "PrivateIdentifier",
    "value": "bar",
    "start": 316,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 320,
    "end": 321
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 321,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 334,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 338,
    "end": 339
  },
  {
    "type": "PrivateIdentifier",
    "value": "baz",
    "start": 339,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 343,
    "end": 344
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 344,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 357,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 361,
    "end": 362
  },
  {
    "type": "PrivateIdentifier",
    "value": "quux",
    "start": 362,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 368,
    "end": 369
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 370,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 374,
    "end": 375
  },
  {
    "type": "PrivateIdentifier",
    "value": "quux",
    "start": 375,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 381,
    "end": 382
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 394,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 398,
    "end": 399
  },
  {
    "type": "PrivateIdentifier",
    "value": "quux",
    "start": 399,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 404,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 414,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 422,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 432,
    "end": 433
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 438,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 446,
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
    "type": "Punctuator",
    "value": "}",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 461,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 486,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 493,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 503,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 507,
    "end": 508
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 508,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 512,
    "end": 513
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 513,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 527,
    "end": 528
  }
]
```
