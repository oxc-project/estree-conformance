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
        "name": "a",
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
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 21
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
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "doStuff",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 55,
                            "end": 62
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "callback",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 65,
                                "end": 73
                              }
                            ],
                            "returnType": null,
                            "body": {
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
                                    "kind": "var",
                                    "declarations": [
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "_this",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 106,
                                          "end": 111
                                        },
                                        "init": {
                                          "type": "Literal",
                                          "value": 2,
                                          "raw": "2",
                                          "start": 114,
                                          "end": 115
                                        },
                                        "definite": false,
                                        "start": 106,
                                        "end": 115
                                      }
                                    ],
                                    "declare": false,
                                    "start": 102,
                                    "end": 116
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "callback",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 140,
                                        "end": 148
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "ThisExpression",
                                          "start": 149,
                                          "end": 153
                                        }
                                      ],
                                      "optional": false,
                                      "start": 140,
                                      "end": 154
                                    },
                                    "start": 133,
                                    "end": 155
                                  }
                                ],
                                "start": 84,
                                "end": 169
                              },
                              "id": null,
                              "generator": false,
                              "start": 78,
                              "end": 169
                            },
                            "id": null,
                            "generator": false,
                            "start": 64,
                            "end": 169
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 55,
                          "end": 169
                        }
                      ],
                      "start": 41,
                      "end": 179
                    },
                    "start": 34,
                    "end": 179
                  }
                ],
                "start": 24,
                "end": 185
              },
              "expression": false,
              "start": 21,
              "end": 185
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 185
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 197
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
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 214,
                          "end": 219
                        },
                        "init": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 222,
                          "end": 223
                        },
                        "definite": false,
                        "start": 214,
                        "end": 223
                      }
                    ],
                    "declare": false,
                    "start": 210,
                    "end": 224
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "doStuff",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 254,
                            "end": 261
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "callback",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 264,
                                "end": 272
                              }
                            ],
                            "returnType": null,
                            "body": {
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
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "callback",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 308,
                                        "end": 316
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "ThisExpression",
                                          "start": 317,
                                          "end": 321
                                        }
                                      ],
                                      "optional": false,
                                      "start": 308,
                                      "end": 322
                                    },
                                    "start": 301,
                                    "end": 323
                                  }
                                ],
                                "start": 283,
                                "end": 337
                              },
                              "id": null,
                              "generator": false,
                              "start": 277,
                              "end": 337
                            },
                            "id": null,
                            "generator": false,
                            "start": 263,
                            "end": 337
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 254,
                          "end": 337
                        }
                      ],
                      "start": 240,
                      "end": 347
                    },
                    "start": 233,
                    "end": 347
                  }
                ],
                "start": 200,
                "end": 353
              },
              "expression": false,
              "start": 197,
              "end": 353
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 190,
            "end": 353
          }
        ],
        "start": 8,
        "end": 355
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 355
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 355
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
    "value": "a",
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
    "type": "Identifier",
    "value": "method1",
    "start": 14,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 34,
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
    "value": "doStuff",
    "start": 55,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 65,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 75,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 81,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 102,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 106,
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
    "value": "2",
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
    "type": "Keyword",
    "value": "return",
    "start": 133,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 140,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 149,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 190,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 210,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 214,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 220,
    "end": 221
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 233,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "doStuff",
    "start": 254,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 264,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 274,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 280,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 301,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 308,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 317,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355
  }
]
```
