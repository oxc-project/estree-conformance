__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
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
                "name": "print",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 26
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
                        "type": "Literal",
                        "value": "I am B",
                        "raw": "\"I am B\"",
                        "start": 38,
                        "end": 46
                      },
                      "start": 31,
                      "end": 46
                    }
                  ],
                  "start": 29,
                  "end": 47
                },
                "expression": false,
                "start": 26,
                "end": 47
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 21,
              "end": 47
            }
          ],
          "start": 15,
          "end": 49
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 49
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 49
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 70
        },
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
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 82,
                "end": 87
              },
              "start": 75,
              "end": 87
            }
          ],
          "start": 73,
          "end": 89
        },
        "expression": false,
        "start": 58,
        "end": 89
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 51,
      "end": 89
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 90
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 13,
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
    "value": "print",
    "start": 21,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 31,
    "end": 37
  },
  {
    "type": "String",
    "value": "\"I am B\"",
    "start": 38,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 51,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 58,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 67,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 75,
    "end": 81
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 82,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "backup",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 22
        },
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
                "type": "Literal",
                "value": "backup",
                "raw": "\"backup\"",
                "start": 34,
                "end": 42
              },
              "start": 27,
              "end": 43
            }
          ],
          "start": 25,
          "end": 45
        },
        "expression": false,
        "start": 7,
        "end": 45
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 45
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 46
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "backup",
    "start": 16,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 27,
    "end": 33
  },
  {
    "type": "String",
    "value": "\"backup\"",
    "start": 34,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
              },
              "start": 19,
              "end": 24
            },
            "start": 12,
            "end": 24
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 24
        }
      ],
      "declare": true,
      "start": 0,
      "end": 25
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 33
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
              "name": "myModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 56
            },
            "typeAnnotation": null,
            "value": {
              "type": "ImportExpression",
              "source": {
                "type": "Literal",
                "value": "./0",
                "raw": "\"./0\"",
                "start": 66,
                "end": 71
              },
              "options": null,
              "phase": null,
              "start": 59,
              "end": 72
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 40,
            "end": 73
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 84
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
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "loadAsync",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 103,
                          "end": 112
                        },
                        "init": {
                          "type": "ImportExpression",
                          "source": {
                            "type": "Literal",
                            "value": "./0",
                            "raw": "\"./0\"",
                            "start": 122,
                            "end": 127
                          },
                          "options": null,
                          "phase": null,
                          "start": 115,
                          "end": 128
                        },
                        "definite": false,
                        "start": 103,
                        "end": 128
                      }
                    ],
                    "declare": false,
                    "start": 97,
                    "end": 129
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 138,
                            "end": 142
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 143,
                            "end": 151
                          },
                          "optional": false,
                          "computed": false,
                          "start": 138,
                          "end": 151
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 152,
                          "end": 156
                        },
                        "optional": false,
                        "computed": false,
                        "start": 138,
                        "end": 156
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Zero",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 157,
                              "end": 161
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
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 179,
                                      "end": 186
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 187,
                                      "end": 190
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 179,
                                    "end": 190
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Zero",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 191,
                                          "end": 195
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 196,
                                          "end": 199
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 191,
                                        "end": 199
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false,
                                      "start": 191,
                                      "end": 201
                                    }
                                  ],
                                  "optional": false,
                                  "start": 179,
                                  "end": 202
                                },
                                "directive": null,
                                "start": 179,
                                "end": 203
                              }
                            ],
                            "start": 165,
                            "end": 213
                          },
                          "id": null,
                          "generator": false,
                          "start": 157,
                          "end": 213
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": true,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "err",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 221,
                              "end": 224
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
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 242,
                                      "end": 249
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 250,
                                      "end": 253
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 242,
                                    "end": 253
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "err",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 254,
                                      "end": 257
                                    }
                                  ],
                                  "optional": false,
                                  "start": 242,
                                  "end": 258
                                },
                                "directive": null,
                                "start": 242,
                                "end": 259
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
                                      "name": "one",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 276,
                                      "end": 279
                                    },
                                    "init": {
                                      "type": "AwaitExpression",
                                      "argument": {
                                        "type": "ImportExpression",
                                        "source": {
                                          "type": "Literal",
                                          "value": "./1",
                                          "raw": "\"./1\"",
                                          "start": 295,
                                          "end": 300
                                        },
                                        "options": null,
                                        "phase": null,
                                        "start": 288,
                                        "end": 301
                                      },
                                      "start": 282,
                                      "end": 301
                                    },
                                    "definite": false,
                                    "start": 276,
                                    "end": 301
                                  }
                                ],
                                "declare": false,
                                "start": 272,
                                "end": 302
                              },
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 315,
                                      "end": 322
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 323,
                                      "end": 326
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 315,
                                    "end": 326
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "one",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 327,
                                          "end": 330
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "backup",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 331,
                                          "end": 337
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 327,
                                        "end": 337
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false,
                                      "start": 327,
                                      "end": 339
                                    }
                                  ],
                                  "optional": false,
                                  "start": 315,
                                  "end": 340
                                },
                                "directive": null,
                                "start": 315,
                                "end": 341
                              }
                            ],
                            "start": 228,
                            "end": 351
                          },
                          "id": null,
                          "generator": false,
                          "start": 215,
                          "end": 351
                        }
                      ],
                      "optional": false,
                      "start": 138,
                      "end": 352
                    },
                    "directive": null,
                    "start": 138,
                    "end": 353
                  }
                ],
                "start": 87,
                "end": 359
              },
              "expression": false,
              "start": 84,
              "end": 359
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 78,
            "end": 359
          }
        ],
        "start": 34,
        "end": 361
      },
      "abstract": false,
      "declare": false,
      "start": 26,
      "end": 361
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 376,
          "end": 377
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
                "name": "myModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 392,
                "end": 400
              },
              "typeAnnotation": null,
              "value": {
                "type": "ImportExpression",
                "source": {
                  "type": "Literal",
                  "value": "./0",
                  "raw": "\"./0\"",
                  "start": 410,
                  "end": 415
                },
                "options": null,
                "phase": null,
                "start": 403,
                "end": 416
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 384,
              "end": 417
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 422,
                "end": 428
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
                      "type": "VariableDeclaration",
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "loadAsync",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 447,
                            "end": 456
                          },
                          "init": {
                            "type": "ImportExpression",
                            "source": {
                              "type": "Literal",
                              "value": "./0",
                              "raw": "\"./0\"",
                              "start": 466,
                              "end": 471
                            },
                            "options": null,
                            "phase": null,
                            "start": 459,
                            "end": 472
                          },
                          "definite": false,
                          "start": 447,
                          "end": 472
                        }
                      ],
                      "declare": false,
                      "start": 441,
                      "end": 473
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 482,
                              "end": 486
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "myModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 487,
                              "end": 495
                            },
                            "optional": false,
                            "computed": false,
                            "start": 482,
                            "end": 495
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "then",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 496,
                            "end": 500
                          },
                          "optional": false,
                          "computed": false,
                          "start": 482,
                          "end": 500
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": false,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Zero",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 501,
                                "end": 505
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
                                        "name": "console",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 523,
                                        "end": 530
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 531,
                                        "end": 534
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 523,
                                      "end": 534
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Zero",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 535,
                                            "end": 539
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "foo",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 540,
                                            "end": 543
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 535,
                                          "end": 543
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 535,
                                        "end": 545
                                      }
                                    ],
                                    "optional": false,
                                    "start": 523,
                                    "end": 546
                                  },
                                  "directive": null,
                                  "start": 523,
                                  "end": 547
                                }
                              ],
                              "start": 509,
                              "end": 557
                            },
                            "id": null,
                            "generator": false,
                            "start": 501,
                            "end": 557
                          },
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": false,
                            "async": true,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "err",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 565,
                                "end": 568
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
                                        "name": "console",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 586,
                                        "end": 593
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 594,
                                        "end": 597
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 586,
                                      "end": 597
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "err",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 598,
                                        "end": 601
                                      }
                                    ],
                                    "optional": false,
                                    "start": 586,
                                    "end": 602
                                  },
                                  "directive": null,
                                  "start": 586,
                                  "end": 603
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
                                        "name": "one",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 620,
                                        "end": 623
                                      },
                                      "init": {
                                        "type": "AwaitExpression",
                                        "argument": {
                                          "type": "ImportExpression",
                                          "source": {
                                            "type": "Literal",
                                            "value": "./1",
                                            "raw": "\"./1\"",
                                            "start": 639,
                                            "end": 644
                                          },
                                          "options": null,
                                          "phase": null,
                                          "start": 632,
                                          "end": 645
                                        },
                                        "start": 626,
                                        "end": 645
                                      },
                                      "definite": false,
                                      "start": 620,
                                      "end": 645
                                    }
                                  ],
                                  "declare": false,
                                  "start": 616,
                                  "end": 646
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "console",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 659,
                                        "end": 666
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 667,
                                        "end": 670
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 659,
                                      "end": 670
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "one",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 671,
                                            "end": 674
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "backup",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 675,
                                            "end": 681
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 671,
                                          "end": 681
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 671,
                                        "end": 683
                                      }
                                    ],
                                    "optional": false,
                                    "start": 659,
                                    "end": 684
                                  },
                                  "directive": null,
                                  "start": 659,
                                  "end": 685
                                }
                              ],
                              "start": 572,
                              "end": 695
                            },
                            "id": null,
                            "generator": false,
                            "start": 559,
                            "end": 695
                          }
                        ],
                        "optional": false,
                        "start": 482,
                        "end": 696
                      },
                      "directive": null,
                      "start": 482,
                      "end": 697
                    }
                  ],
                  "start": 431,
                  "end": 703
                },
                "expression": false,
                "start": 428,
                "end": 703
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 422,
              "end": 703
            }
          ],
          "start": 378,
          "end": 705
        },
        "abstract": false,
        "declare": false,
        "start": 370,
        "end": 705
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 363,
      "end": 705
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 705
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
    "type": "Keyword",
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 12,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 21,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 40,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "myModule",
    "start": 48,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 59,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "String",
    "value": "\"./0\"",
    "start": 66,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 97,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "loadAsync",
    "start": 103,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 115,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122
  },
  {
    "type": "String",
    "value": "\"./0\"",
    "start": 122,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 138,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "myModule",
    "start": 143,
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
    "value": "then",
    "start": 152,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "Zero",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 162,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 179,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 187,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "Zero",
    "start": 191,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 196,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 215,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 221,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 225,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 242,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 250,
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
    "value": "err",
    "start": 254,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 272,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 276,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 282,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "import",
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
    "type": "String",
    "value": "\"./1\"",
    "start": 295,
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
    "type": "Identifier",
    "value": "console",
    "start": 315,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 323,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 327,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "backup",
    "start": 331,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 363,
    "end": 369
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 370,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "D",
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
    "value": "private",
    "start": 384,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "myModule",
    "start": 392,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 401,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 403,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 409,
    "end": 410
  },
  {
    "type": "String",
    "value": "\"./0\"",
    "start": 410,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 422,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 431,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 441,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "loadAsync",
    "start": 447,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 457,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 459,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 465,
    "end": 466
  },
  {
    "type": "String",
    "value": "\"./0\"",
    "start": 466,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 482,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "myModule",
    "start": 487,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 496,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "Zero",
    "start": 501,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 506,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 523,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 531,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "Zero",
    "start": 535,
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
    "value": "foo",
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
    "value": ")",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 559,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 565,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 569,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 586,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 594,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 598,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 602,
    "end": 603
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 616,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 620,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 626,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 632,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 638,
    "end": 639
  },
  {
    "type": "String",
    "value": "\"./1\"",
    "start": 639,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 659,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 667,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 671,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "backup",
    "start": 675,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 694,
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
    "value": ";",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 704,
    "end": 705
  }
]
```
