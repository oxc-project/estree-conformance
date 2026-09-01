__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 21,
            "end": 22
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 25
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 24,
            "end": 25
          }
        ],
        "start": 20,
        "end": 26
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 31
              },
              "typeArguments": null,
              "start": 30,
              "end": 31
            },
            "start": 28,
            "end": 31
          },
          "start": 27,
          "end": 31
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fun",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Iterable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 44,
                    "end": 52
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSFunctionType",
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
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 57,
                                  "end": 58
                                },
                                "typeArguments": null,
                                "start": 57,
                                "end": 58
                              },
                              "start": 55,
                              "end": 58
                            },
                            "start": 54,
                            "end": 58
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 63,
                              "end": 64
                            },
                            "typeArguments": null,
                            "start": 63,
                            "end": 64
                          },
                          "start": 60,
                          "end": 64
                        },
                        "start": 53,
                        "end": 64
                      }
                    ],
                    "start": 52,
                    "end": 65
                  },
                  "start": 44,
                  "end": 65
                },
                "start": 41,
                "end": 65
              },
              "start": 38,
              "end": 65
            },
            "start": 36,
            "end": 65
          },
          "start": 33,
          "end": 65
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fun2",
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 77,
                        "end": 78
                      },
                      "typeArguments": null,
                      "start": 77,
                      "end": 78
                    },
                    "start": 75,
                    "end": 78
                  },
                  "start": 74,
                  "end": 78
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 83,
                    "end": 84
                  },
                  "typeArguments": null,
                  "start": 83,
                  "end": 84
                },
                "start": 80,
                "end": 84
              },
              "start": 73,
              "end": 84
            },
            "start": 71,
            "end": 84
          },
          "start": 67,
          "end": 84
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 88
          },
          "typeArguments": null,
          "start": 87,
          "end": 88
        },
        "start": 85,
        "end": 88
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 89
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 94
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 95,
            "end": 97
          },
          {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
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
                    "type": "YieldExpression",
                    "delegate": true,
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 137,
                              "end": 143
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "iterator",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 144,
                              "end": 152
                            },
                            "optional": false,
                            "computed": false,
                            "start": 137,
                            "end": 152
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": true,
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
                                    "type": "YieldExpression",
                                    "delegate": false,
                                    "argument": {
                                      "type": "ArrowFunctionExpression",
                                      "expression": true,
                                      "async": false,
                                      "typeParameters": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 176,
                                          "end": 177
                                        }
                                      ],
                                      "returnType": null,
                                      "body": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 181,
                                          "end": 182
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "length",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 183,
                                          "end": 189
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 181,
                                        "end": 189
                                      },
                                      "id": null,
                                      "generator": false,
                                      "start": 176,
                                      "end": 189
                                    },
                                    "start": 170,
                                    "end": 189
                                  },
                                  "directive": null,
                                  "start": 170,
                                  "end": 189
                                }
                              ],
                              "start": 156,
                              "end": 199
                            },
                            "expression": false,
                            "start": 153,
                            "end": 199
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 135,
                          "end": 199
                        }
                      ],
                      "start": 125,
                      "end": 205
                    },
                    "start": 118,
                    "end": 205
                  },
                  "directive": null,
                  "start": 118,
                  "end": 205
                }
              ],
              "start": 112,
              "end": 207
            },
            "expression": false,
            "start": 99,
            "end": 207
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 209,
                "end": 210
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 223
            },
            "id": null,
            "generator": false,
            "start": 209,
            "end": 223
          }
        ],
        "optional": false,
        "start": 91,
        "end": 224
      },
      "directive": null,
      "start": 91,
      "end": 225
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 257
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
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "fun",
    "start": 33,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 41,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 44,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 60,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "fun2",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 80,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 91,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 94,
    "end": 95
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 95,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 99,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 118,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 137,
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
    "value": "iterator",
    "start": 144,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 170,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 178,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 183,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 211,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 214,
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
    "value": ";",
    "start": 224,
    "end": 225
  }
]
```
