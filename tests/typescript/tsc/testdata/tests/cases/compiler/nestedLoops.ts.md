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
          "name": "Test",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 17
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
                "start": 25,
                "end": 36
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
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "outerArray",
                            "optional": false,
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
                                  "start": 66,
                                  "end": 71
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 72,
                                      "end": 78
                                    }
                                  ],
                                  "start": 71,
                                  "end": 79
                                },
                                "start": 66,
                                "end": 79
                              },
                              "start": 64,
                              "end": 79
                            },
                            "start": 54,
                            "end": 79
                          },
                          "init": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 83,
                                "end": 84
                              },
                              {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 86,
                                "end": 87
                              },
                              {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3",
                                "start": 89,
                                "end": 90
                              }
                            ],
                            "start": 82,
                            "end": 91
                          },
                          "definite": false,
                          "start": 54,
                          "end": 91
                        }
                      ],
                      "declare": false,
                      "start": 50,
                      "end": 92
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
                            "name": "innerArray",
                            "optional": false,
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
                                  "start": 117,
                                  "end": 122
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 123,
                                      "end": 129
                                    }
                                  ],
                                  "start": 122,
                                  "end": 130
                                },
                                "start": 117,
                                "end": 130
                              },
                              "start": 115,
                              "end": 130
                            },
                            "start": 105,
                            "end": 130
                          },
                          "init": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 134,
                                "end": 135
                              },
                              {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 137,
                                "end": 138
                              },
                              {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3",
                                "start": 140,
                                "end": 141
                              }
                            ],
                            "start": 133,
                            "end": 142
                          },
                          "definite": false,
                          "start": 105,
                          "end": 142
                        }
                      ],
                      "declare": false,
                      "start": 101,
                      "end": 143
                    },
                    {
                      "type": "ForOfStatement",
                      "await": false,
                      "left": {
                        "type": "VariableDeclaration",
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "outer",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 162,
                              "end": 167
                            },
                            "init": null,
                            "definite": false,
                            "start": 162,
                            "end": 167
                          }
                        ],
                        "declare": false,
                        "start": 158,
                        "end": 167
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "outerArray",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 171,
                        "end": 181
                      },
                      "body": {
                        "type": "ForOfStatement",
                        "await": false,
                        "left": {
                          "type": "VariableDeclaration",
                          "kind": "let",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inner",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 204,
                                "end": 209
                              },
                              "init": null,
                              "definite": false,
                              "start": 204,
                              "end": 209
                            }
                          ],
                          "declare": false,
                          "start": 200,
                          "end": 209
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "innerArray",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 213,
                          "end": 223
                        },
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
                                    "start": 243,
                                    "end": 247
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "aFunction",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 248,
                                    "end": 257
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 243,
                                  "end": 257
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
                                        "name": "newValue",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 259,
                                        "end": 267
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "oldValue",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 269,
                                        "end": 277
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
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "x",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 308,
                                                "end": 309
                                              },
                                              "init": {
                                                "type": "BinaryExpression",
                                                "left": {
                                                  "type": "BinaryExpression",
                                                  "left": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "outer",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 312,
                                                    "end": 317
                                                  },
                                                  "operator": "+",
                                                  "right": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "inner",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 320,
                                                    "end": 325
                                                  },
                                                  "start": 312,
                                                  "end": 325
                                                },
                                                "operator": "+",
                                                "right": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "newValue",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 328,
                                                  "end": 336
                                                },
                                                "start": 312,
                                                "end": 336
                                              },
                                              "definite": false,
                                              "start": 308,
                                              "end": 336
                                            }
                                          ],
                                          "declare": false,
                                          "start": 304,
                                          "end": 337
                                        }
                                      ],
                                      "start": 282,
                                      "end": 355
                                    },
                                    "id": null,
                                    "generator": false,
                                    "start": 258,
                                    "end": 355
                                  }
                                ],
                                "optional": false,
                                "start": 243,
                                "end": 356
                              },
                              "directive": null,
                              "start": 243,
                              "end": 357
                            }
                          ],
                          "start": 225,
                          "end": 371
                        },
                        "start": 195,
                        "end": 371
                      },
                      "start": 153,
                      "end": 371
                    }
                  ],
                  "start": 39,
                  "end": 377
                },
                "expression": false,
                "start": 36,
                "end": 377
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 25,
              "end": 377
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "aFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 390,
                "end": 399
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
                    "name": "func",
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
                            "name": "newValue",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 417,
                                "end": 420
                              },
                              "start": 415,
                              "end": 420
                            },
                            "start": 407,
                            "end": 420
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "oldValue",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 432,
                                "end": 435
                              },
                              "start": 430,
                              "end": 435
                            },
                            "start": 422,
                            "end": 435
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 440,
                            "end": 444
                          },
                          "start": 437,
                          "end": 444
                        },
                        "start": 406,
                        "end": 444
                      },
                      "start": 404,
                      "end": 444
                    },
                    "start": 400,
                    "end": 444
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 447,
                    "end": 451
                  },
                  "start": 445,
                  "end": 451
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 452,
                  "end": 459
                },
                "expression": false,
                "start": 399,
                "end": 459
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 383,
              "end": 459
            }
          ],
          "start": 19,
          "end": 461
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 461
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 461
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 461
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
    "value": "Test",
    "start": 13,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 25,
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
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 50,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "outerArray",
    "start": 54,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 66,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 72,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 82,
    "end": 83
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 87,
    "end": 88
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 101,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "innerArray",
    "start": 105,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 117,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 123,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 133,
    "end": 134
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 135,
    "end": 136
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 138,
    "end": 139
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 153,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 158,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 162,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 168,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "outerArray",
    "start": 171,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 195,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 200,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 204,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 210,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "innerArray",
    "start": 213,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 243,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "aFunction",
    "start": 248,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "newValue",
    "start": 259,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "oldValue",
    "start": 269,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 279,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 304,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 312,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 320,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "newValue",
    "start": 328,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 383,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "aFunction",
    "start": 390,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 400,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "newValue",
    "start": 407,
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
    "value": "any",
    "start": 417,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "oldValue",
    "start": 422,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 432,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 437,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 440,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 447,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 460,
    "end": 461
  }
]
```
