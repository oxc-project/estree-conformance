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
        "name": "YaddaBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 72
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
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 90
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
                          "start": 103,
                          "end": 107
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "roots",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 108,
                          "end": 113
                        },
                        "optional": false,
                        "computed": false,
                        "start": 103,
                        "end": 113
                      },
                      "right": {
                        "type": "Literal",
                        "value": "hi",
                        "raw": "\"hi\"",
                        "start": 116,
                        "end": 120
                      },
                      "start": 103,
                      "end": 120
                    },
                    "directive": null,
                    "start": 103,
                    "end": 121
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 158,
                        "end": 162
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "justProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 163,
                        "end": 171
                      },
                      "optional": false,
                      "computed": false,
                      "start": 158,
                      "end": 171
                    },
                    "directive": null,
                    "start": 158,
                    "end": 172
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 209,
                        "end": 213
                      },
                      "property": {
                        "type": "Literal",
                        "value": "literalElementAccess",
                        "raw": "'literalElementAccess'",
                        "start": 214,
                        "end": 236
                      },
                      "optional": false,
                      "computed": true,
                      "start": 209,
                      "end": 237
                    },
                    "directive": null,
                    "start": 209,
                    "end": 238
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 248,
                          "end": 252
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 253,
                          "end": 254
                        },
                        "optional": false,
                        "computed": false,
                        "start": 248,
                        "end": 254
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 248,
                      "end": 256
                    },
                    "directive": null,
                    "start": 248,
                    "end": 256
                  }
                ],
                "start": 93,
                "end": 262
              },
              "expression": false,
              "start": 90,
              "end": 262
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 79,
            "end": 262
          },
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 277
            },
            "typeAnnotation": null,
            "value": {
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 296,
                          "end": 300
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 301,
                          "end": 304
                        },
                        "optional": false,
                        "computed": false,
                        "start": 296,
                        "end": 304
                      },
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 307,
                        "end": 309
                      },
                      "start": 296,
                      "end": 309
                    },
                    "directive": null,
                    "start": 296,
                    "end": 309
                  }
                ],
                "start": 286,
                "end": 315
              },
              "id": null,
              "generator": false,
              "start": 280,
              "end": 315
            },
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 267,
            "end": 315
          }
        ],
        "start": 73,
        "end": 317
      },
      "abstract": false,
      "declare": false,
      "start": 57,
      "end": 317
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedYadda",
        "optional": false,
        "typeAnnotation": null,
        "start": 325,
        "end": 337
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "YaddaBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 346,
        "end": 355
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
              "type": "Identifier",
              "decorators": [],
              "name": "rootTests",
              "optional": false,
              "typeAnnotation": null,
              "start": 366,
              "end": 375
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 395,
                        "end": 400
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "roots",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 401,
                        "end": 406
                      },
                      "optional": false,
                      "computed": false,
                      "start": 395,
                      "end": 406
                    },
                    "start": 388,
                    "end": 407
                  }
                ],
                "start": 378,
                "end": 413
              },
              "expression": false,
              "start": 375,
              "end": 413
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 362,
            "end": 413
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooTests",
              "optional": false,
              "typeAnnotation": null,
              "start": 422,
              "end": 430
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 450,
                        "end": 455
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 456,
                        "end": 459
                      },
                      "optional": false,
                      "computed": false,
                      "start": 450,
                      "end": 459
                    },
                    "start": 443,
                    "end": 460
                  }
                ],
                "start": 433,
                "end": 466
              },
              "expression": false,
              "start": 430,
              "end": 466
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 418,
            "end": 466
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "justPropTests",
              "optional": false,
              "typeAnnotation": null,
              "start": 475,
              "end": 488
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 508,
                        "end": 513
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "justProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 514,
                        "end": 522
                      },
                      "optional": false,
                      "computed": false,
                      "start": 508,
                      "end": 522
                    },
                    "start": 501,
                    "end": 523
                  }
                ],
                "start": 491,
                "end": 529
              },
              "expression": false,
              "start": 488,
              "end": 529
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 471,
            "end": 529
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "literalElementAccessTests",
              "optional": false,
              "typeAnnotation": null,
              "start": 538,
              "end": 563
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 583,
                        "end": 588
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "literalElementAccess",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 589,
                        "end": 609
                      },
                      "optional": false,
                      "computed": false,
                      "start": 583,
                      "end": 609
                    },
                    "start": 576,
                    "end": 610
                  }
                ],
                "start": 566,
                "end": 616
              },
              "expression": false,
              "start": 563,
              "end": 616
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 534,
            "end": 616
          }
        ],
        "start": 356,
        "end": 618
      },
      "abstract": false,
      "declare": false,
      "start": 319,
      "end": 618
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 618
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 57,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "YaddaBase",
    "start": 63,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 79,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 103,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "roots",
    "start": 108,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 114,
    "end": 115
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 116,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 158,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "justProp",
    "start": 163,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 209,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 213,
    "end": 214
  },
  {
    "type": "String",
    "value": "'literalElementAccess'",
    "start": 214,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 248,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Punctuator",
    "value": ")",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 267,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 283,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 296,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 301,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 305,
    "end": 306
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 307,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 316,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 319,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "DerivedYadda",
    "start": 325,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 338,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "YaddaBase",
    "start": 346,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 362,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "rootTests",
    "start": 366,
    "end": 375
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
    "value": "{",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 388,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 395,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "roots",
    "start": 401,
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
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 418,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "fooTests",
    "start": 422,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 443,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 450,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 456,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 471,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "justPropTests",
    "start": 475,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 491,
    "end": 492
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 501,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 508,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "justProp",
    "start": 514,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 534,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "literalElementAccessTests",
    "start": 538,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 566,
    "end": 567
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 576,
    "end": 582
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 583,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "literalElementAccess",
    "start": 589,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 617,
    "end": 618
  }
]
```
