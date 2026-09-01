__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 19
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "iBar",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 40
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
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 43,
                    "end": 44
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 46,
                      "end": 49
                    },
                    "start": 44,
                    "end": 49
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 43,
                  "end": 50
                }
              ],
              "start": 41,
              "end": 52
            },
            "declare": false,
            "start": 26,
            "end": 52
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "iFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 71
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iBar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 84
                },
                "typeArguments": null,
                "start": 80,
                "end": 84
              }
            ],
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
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 95,
                    "end": 96
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 98,
                      "end": 101
                    },
                    "start": 96,
                    "end": 101
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 95,
                  "end": 102
                }
              ],
              "start": 85,
              "end": 108
            },
            "declare": false,
            "start": 57,
            "end": 108
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "cFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 124
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 136
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 138,
                      "end": 141
                    },
                    "start": 136,
                    "end": 141
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
                  "start": 135,
                  "end": 142
                }
              ],
              "start": 125,
              "end": 148
            },
            "abstract": false,
            "declare": false,
            "start": 114,
            "end": 148
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
                  "name": "foo",
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
                              "name": "index",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 173,
                                  "end": 176
                                },
                                "start": 171,
                                "end": 176
                              },
                              "start": 166,
                              "end": 176
                            }
                          ],
                          "typeAnnotation": null,
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 165,
                          "end": 178
                        }
                      ],
                      "start": 163,
                      "end": 180
                    },
                    "start": 161,
                    "end": 180
                  },
                  "start": 158,
                  "end": 180
                },
                "init": null,
                "definite": false,
                "start": 158,
                "end": 180
              }
            ],
            "declare": false,
            "start": 154,
            "end": 181
          }
        ],
        "start": 20,
        "end": 207
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 207
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myInt",
        "optional": false,
        "typeAnnotation": null,
        "start": 219,
        "end": 224
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "voidFn",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 237
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 241,
                "end": 245
              },
              "start": 239,
              "end": 245
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 231,
            "end": 246
          }
        ],
        "start": 225,
        "end": 248
      },
      "declare": false,
      "start": 209,
      "end": 248
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
            "name": "myVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "myInt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 268,
                  "end": 273
                },
                "typeArguments": null,
                "start": 268,
                "end": 273
              },
              "start": 266,
              "end": 273
            },
            "start": 261,
            "end": 273
          },
          "init": null,
          "definite": false,
          "start": 261,
          "end": 273
        }
      ],
      "declare": true,
      "start": 249,
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
            "name": "strArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 289,
                  "end": 295
                },
                "start": 289,
                "end": 297
              },
              "start": 287,
              "end": 297
            },
            "start": 279,
            "end": 297
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myVar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 301,
                    "end": 306
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "voidFn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 307,
                    "end": 313
                  },
                  "optional": false,
                  "computed": false,
                  "start": 301,
                  "end": 313
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 301,
                "end": 315
              }
            ],
            "start": 300,
            "end": 316
          },
          "definite": false,
          "start": 279,
          "end": 316
        }
      ],
      "declare": false,
      "start": 275,
      "end": 317
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
            "name": "myArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 333,
                      "end": 339
                    },
                    "start": 333,
                    "end": 341
                  },
                  "start": 333,
                  "end": 343
                },
                "start": 333,
                "end": 345
              },
              "start": 331,
              "end": 345
            },
            "start": 324,
            "end": 345
          },
          "init": null,
          "definite": false,
          "start": 324,
          "end": 345
        }
      ],
      "declare": false,
      "start": 320,
      "end": 346
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "myArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 347,
          "end": 354
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 359,
                  "end": 360
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 362,
                  "end": 363
                }
              ],
              "start": 358,
              "end": 364
            }
          ],
          "start": 357,
          "end": 365
        },
        "start": 347,
        "end": 365
      },
      "directive": null,
      "start": 347,
      "end": 366
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isEmpty",
        "optional": false,
        "typeAnnotation": null,
        "start": 377,
        "end": 384
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
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
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 390,
                    "end": 396
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 398,
                      "end": 404
                    },
                    "start": 396,
                    "end": 404
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 390,
                  "end": 404
                }
              ],
              "start": 388,
              "end": 406
            },
            "start": 386,
            "end": 406
          },
          "start": 385,
          "end": 406
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 421,
                  "end": 422
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 423,
                  "end": 429
                },
                "optional": false,
                "computed": false,
                "start": 421,
                "end": 429
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 434,
                "end": 435
              },
              "start": 421,
              "end": 435
            },
            "start": 414,
            "end": 436
          }
        ],
        "start": 408,
        "end": 438
      },
      "expression": false,
      "start": 368,
      "end": 438
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isEmpty",
          "optional": false,
          "typeAnnotation": null,
          "start": 440,
          "end": 447
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 448,
            "end": 450
          }
        ],
        "optional": false,
        "start": 440,
        "end": 451
      },
      "directive": null,
      "start": 440,
      "end": 452
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isEmpty",
          "optional": false,
          "typeAnnotation": null,
          "start": 453,
          "end": 460
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 465,
              "end": 470
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 471,
                "end": 472
              }
            ],
            "start": 461,
            "end": 473
          }
        ],
        "optional": false,
        "start": 453,
        "end": 474
      },
      "directive": null,
      "start": 453,
      "end": 475
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isEmpty",
          "optional": false,
          "typeAnnotation": null,
          "start": 476,
          "end": 483
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 488,
              "end": 493
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 494,
                  "end": 500
                }
              ],
              "start": 493,
              "end": 501
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 502,
                "end": 503
              }
            ],
            "start": 484,
            "end": 504
          }
        ],
        "optional": false,
        "start": 476,
        "end": 505
      },
      "directive": null,
      "start": 476,
      "end": 506
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isEmpty",
          "optional": false,
          "typeAnnotation": null,
          "start": 507,
          "end": 514
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 516,
                "end": 519
              }
            ],
            "start": 515,
            "end": 520
          }
        ],
        "optional": false,
        "start": 507,
        "end": 521
      },
      "directive": null,
      "start": 507,
      "end": 522
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 522
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 8,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 26,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "iBar",
    "start": 36,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 46,
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
    "start": 57,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "iFoo",
    "start": 67,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 72,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "iBar",
    "start": 80,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 98,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 114,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "cFoo",
    "start": 120,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 138,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 154,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 158,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 166,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 173,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 209,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "myInt",
    "start": 219,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "voidFn",
    "start": 231,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 241,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 249,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 257,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "myVar",
    "start": 261,
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
    "value": "myInt",
    "start": 268,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 275,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "strArray",
    "start": 279,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 289,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "myVar",
    "start": 301,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "voidFn",
    "start": 307,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 320,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "myArray",
    "start": 324,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 333,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "myArray",
    "start": 347,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 358,
    "end": 359
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 360,
    "end": 361
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 363,
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
    "value": ";",
    "start": 365,
    "end": 366
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 368,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "isEmpty",
    "start": 377,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 390,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 398,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 408,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 414,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 423,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 430,
    "end": 433
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "isEmpty",
    "start": 440,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "isEmpty",
    "start": 453,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 461,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 465,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 470,
    "end": 471
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "isEmpty",
    "start": 476,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 484,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 488,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 494,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 501,
    "end": 502
  },
  {
    "type": "Numeric",
    "value": "3",
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
    "value": ")",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "isEmpty",
    "start": 507,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 515,
    "end": 516
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 516,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522
  }
]
```
