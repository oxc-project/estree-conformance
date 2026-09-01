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
                            "start": 123,
                            "end": 128
                          },
                          "options": null,
                          "phase": null,
                          "start": 115,
                          "end": 129
                        },
                        "definite": false,
                        "start": 103,
                        "end": 129
                      }
                    ],
                    "declare": false,
                    "start": 97,
                    "end": 130
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
                            "start": 139,
                            "end": 143
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 144,
                            "end": 152
                          },
                          "optional": false,
                          "computed": false,
                          "start": 139,
                          "end": 152
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 153,
                          "end": 157
                        },
                        "optional": false,
                        "computed": false,
                        "start": 139,
                        "end": 157
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
                              "start": 158,
                              "end": 162
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
                                      "start": 180,
                                      "end": 187
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 188,
                                      "end": 191
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 180,
                                    "end": 191
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
                                          "start": 192,
                                          "end": 196
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 197,
                                          "end": 200
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 192,
                                        "end": 200
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false,
                                      "start": 192,
                                      "end": 202
                                    }
                                  ],
                                  "optional": false,
                                  "start": 180,
                                  "end": 203
                                },
                                "directive": null,
                                "start": 180,
                                "end": 204
                              }
                            ],
                            "start": 166,
                            "end": 214
                          },
                          "id": null,
                          "generator": false,
                          "start": 158,
                          "end": 214
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
                              "start": 222,
                              "end": 225
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
                                      "start": 243,
                                      "end": 250
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 251,
                                      "end": 254
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 243,
                                    "end": 254
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "err",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 255,
                                      "end": 258
                                    }
                                  ],
                                  "optional": false,
                                  "start": 243,
                                  "end": 259
                                },
                                "directive": null,
                                "start": 243,
                                "end": 260
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
                                      "start": 277,
                                      "end": 280
                                    },
                                    "init": {
                                      "type": "AwaitExpression",
                                      "argument": {
                                        "type": "ImportExpression",
                                        "source": {
                                          "type": "Literal",
                                          "value": "./1",
                                          "raw": "\"./1\"",
                                          "start": 296,
                                          "end": 301
                                        },
                                        "options": null,
                                        "phase": null,
                                        "start": 289,
                                        "end": 302
                                      },
                                      "start": 283,
                                      "end": 302
                                    },
                                    "definite": false,
                                    "start": 277,
                                    "end": 302
                                  }
                                ],
                                "declare": false,
                                "start": 273,
                                "end": 303
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
                                      "start": 316,
                                      "end": 323
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 324,
                                      "end": 327
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 316,
                                    "end": 327
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
                                          "start": 328,
                                          "end": 331
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "backup",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 332,
                                          "end": 338
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 328,
                                        "end": 338
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false,
                                      "start": 328,
                                      "end": 340
                                    }
                                  ],
                                  "optional": false,
                                  "start": 316,
                                  "end": 341
                                },
                                "directive": null,
                                "start": 316,
                                "end": 342
                              }
                            ],
                            "start": 229,
                            "end": 352
                          },
                          "id": null,
                          "generator": false,
                          "start": 216,
                          "end": 352
                        }
                      ],
                      "optional": false,
                      "start": 139,
                      "end": 353
                    },
                    "directive": null,
                    "start": 139,
                    "end": 354
                  }
                ],
                "start": 87,
                "end": 360
              },
              "expression": false,
              "start": 84,
              "end": 360
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 78,
            "end": 360
          }
        ],
        "start": 34,
        "end": 362
      },
      "abstract": false,
      "declare": false,
      "start": 26,
      "end": 362
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
          "start": 377,
          "end": 378
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
                "start": 393,
                "end": 401
              },
              "typeAnnotation": null,
              "value": {
                "type": "ImportExpression",
                "source": {
                  "type": "Literal",
                  "value": "./0",
                  "raw": "\"./0\"",
                  "start": 411,
                  "end": 416
                },
                "options": null,
                "phase": null,
                "start": 404,
                "end": 417
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private",
              "start": 385,
              "end": 418
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
                "start": 423,
                "end": 429
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
                            "start": 448,
                            "end": 457
                          },
                          "init": {
                            "type": "ImportExpression",
                            "source": {
                              "type": "Literal",
                              "value": "./0",
                              "raw": "\"./0\"",
                              "start": 467,
                              "end": 472
                            },
                            "options": null,
                            "phase": null,
                            "start": 460,
                            "end": 473
                          },
                          "definite": false,
                          "start": 448,
                          "end": 473
                        }
                      ],
                      "declare": false,
                      "start": 442,
                      "end": 474
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
                              "start": 483,
                              "end": 487
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "myModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 488,
                              "end": 496
                            },
                            "optional": false,
                            "computed": false,
                            "start": 483,
                            "end": 496
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "then",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 497,
                            "end": 501
                          },
                          "optional": false,
                          "computed": false,
                          "start": 483,
                          "end": 501
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
                                "start": 502,
                                "end": 506
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
                                        "start": 524,
                                        "end": 531
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 532,
                                        "end": 535
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 524,
                                      "end": 535
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
                                            "start": 536,
                                            "end": 540
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "foo",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 541,
                                            "end": 544
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 536,
                                          "end": 544
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 536,
                                        "end": 546
                                      }
                                    ],
                                    "optional": false,
                                    "start": 524,
                                    "end": 547
                                  },
                                  "directive": null,
                                  "start": 524,
                                  "end": 548
                                }
                              ],
                              "start": 510,
                              "end": 558
                            },
                            "id": null,
                            "generator": false,
                            "start": 502,
                            "end": 558
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
                                "start": 566,
                                "end": 569
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
                                        "start": 587,
                                        "end": 594
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 595,
                                        "end": 598
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 587,
                                      "end": 598
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "err",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 599,
                                        "end": 602
                                      }
                                    ],
                                    "optional": false,
                                    "start": 587,
                                    "end": 603
                                  },
                                  "directive": null,
                                  "start": 587,
                                  "end": 604
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
                                        "start": 621,
                                        "end": 624
                                      },
                                      "init": {
                                        "type": "AwaitExpression",
                                        "argument": {
                                          "type": "ImportExpression",
                                          "source": {
                                            "type": "Literal",
                                            "value": "./1",
                                            "raw": "\"./1\"",
                                            "start": 640,
                                            "end": 645
                                          },
                                          "options": null,
                                          "phase": null,
                                          "start": 633,
                                          "end": 646
                                        },
                                        "start": 627,
                                        "end": 646
                                      },
                                      "definite": false,
                                      "start": 621,
                                      "end": 646
                                    }
                                  ],
                                  "declare": false,
                                  "start": 617,
                                  "end": 647
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
                                        "start": 660,
                                        "end": 667
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 668,
                                        "end": 671
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 660,
                                      "end": 671
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
                                            "start": 672,
                                            "end": 675
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "backup",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 676,
                                            "end": 682
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 672,
                                          "end": 682
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 672,
                                        "end": 684
                                      }
                                    ],
                                    "optional": false,
                                    "start": 660,
                                    "end": 685
                                  },
                                  "directive": null,
                                  "start": 660,
                                  "end": 686
                                }
                              ],
                              "start": 573,
                              "end": 696
                            },
                            "id": null,
                            "generator": false,
                            "start": 560,
                            "end": 696
                          }
                        ],
                        "optional": false,
                        "start": 483,
                        "end": 697
                      },
                      "directive": null,
                      "start": 483,
                      "end": 698
                    }
                  ],
                  "start": 432,
                  "end": 704
                },
                "expression": false,
                "start": 429,
                "end": 704
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 423,
              "end": 704
            }
          ],
          "start": 379,
          "end": 706
        },
        "abstract": false,
        "declare": false,
        "start": 371,
        "end": 706
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 364,
      "end": 706
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 706
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
    "start": 122,
    "end": 123
  },
  {
    "type": "String",
    "value": "\"./0\"",
    "start": 123,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
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
    "value": "this",
    "start": 139,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "myModule",
    "start": 144,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 153,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "Zero",
    "start": 158,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 163,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 180,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 188,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "Zero",
    "start": 192,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 197,
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
    "value": ")",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 216,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 222,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 226,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 243,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 251,
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
    "value": "err",
    "start": 255,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 273,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 277,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 283,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 289,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 295,
    "end": 296
  },
  {
    "type": "String",
    "value": "\"./1\"",
    "start": 296,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 316,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 324,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 328,
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
    "value": "backup",
    "start": 332,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ")",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
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
    "type": "Punctuator",
    "value": "}",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 361,
    "end": 362
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 364,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 371,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 385,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "myModule",
    "start": 393,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 404,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 410,
    "end": 411
  },
  {
    "type": "String",
    "value": "\"./0\"",
    "start": 411,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 423,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "const",
    "start": 442,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "loadAsync",
    "start": 448,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 458,
    "end": 459
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 460,
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
    "value": "\"./0\"",
    "start": 467,
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
    "value": ";",
    "start": 473,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 483,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "myModule",
    "start": 488,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 497,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "Zero",
    "start": 502,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 507,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 524,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 532,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "Zero",
    "start": 536,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 541,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ")",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 560,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 566,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 570,
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
    "value": "console",
    "start": 587,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 595,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 599,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 603,
    "end": 604
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 617,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 621,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 627,
    "end": 632
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 633,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640
  },
  {
    "type": "String",
    "value": "\"./1\"",
    "start": 640,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "console",
    "start": 660,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 668,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 672,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "backup",
    "start": 676,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ")",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 705,
    "end": 706
  }
]
```
