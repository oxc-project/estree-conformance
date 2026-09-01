__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "list",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 68,
                  "end": 71
                },
                "start": 68,
                "end": 73
              },
              "start": 66,
              "end": 73
            },
            "start": 62,
            "end": 73
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 76,
            "end": 78
          },
          "definite": false,
          "start": 62,
          "end": 78
        }
      ],
      "declare": false,
      "start": 56,
      "end": 78
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "comp",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 94
            },
            "init": null,
            "definite": false,
            "start": 90,
            "end": 94
          }
        ],
        "declare": false,
        "start": 84,
        "end": 94
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "list",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 102
      },
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
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "comp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 110,
                    "end": 114
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 115,
                    "end": 117
                  },
                  "optional": false,
                  "computed": false,
                  "start": 110,
                  "end": 117
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 118,
                  "end": 119
                },
                "optional": false,
                "computed": false,
                "start": 110,
                "end": 119
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "comp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 122,
                        "end": 126
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 127,
                        "end": 129
                      },
                      "optional": false,
                      "computed": false,
                      "start": 122,
                      "end": 129
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 130,
                      "end": 131
                    },
                    "optional": false,
                    "computed": false,
                    "start": 122,
                    "end": 131
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "find",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 132,
                    "end": 136
                  },
                  "optional": false,
                  "computed": false,
                  "start": 122,
                  "end": 136
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 141,
                            "end": 144
                          },
                          "start": 139,
                          "end": 144
                        },
                        "start": 138,
                        "end": 144
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 149,
                          "end": 150
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 151,
                          "end": 152
                        },
                        "optional": false,
                        "computed": false,
                        "start": 149,
                        "end": 152
                      },
                      "operator": "==",
                      "right": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "comp",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 157,
                            "end": 161
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "xp",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 162,
                            "end": 164
                          },
                          "optional": false,
                          "computed": false,
                          "start": 157,
                          "end": 164
                        },
                        "consequent": {
                          "type": "Literal",
                          "value": "1",
                          "raw": "'1'",
                          "start": 167,
                          "end": 170
                        },
                        "alternate": {
                          "type": "Literal",
                          "value": "0",
                          "raw": "'0'",
                          "start": 173,
                          "end": 176
                        },
                        "start": 157,
                        "end": 176
                      },
                      "start": 149,
                      "end": 177
                    },
                    "id": null,
                    "generator": false,
                    "start": 137,
                    "end": 177
                  }
                ],
                "optional": false,
                "start": 122,
                "end": 178
              },
              "start": 110,
              "end": 178
            },
            "directive": null,
            "start": 110,
            "end": 178
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 194,
                    "end": 198
                  },
                  "init": null,
                  "definite": false,
                  "start": 194,
                  "end": 198
                }
              ],
              "declare": false,
              "start": 188,
              "end": 198
            },
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "comp",
                "optional": false,
                "typeAnnotation": null,
                "start": 202,
                "end": 206
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 207,
                "end": 208
              },
              "optional": false,
              "computed": false,
              "start": 202,
              "end": 208
            },
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 220,
                        "end": 224
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 225,
                        "end": 226
                      },
                      "optional": false,
                      "computed": false,
                      "start": 220,
                      "end": 226
                    },
                    "right": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "ChainExpression",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "item",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 231,
                                "end": 235
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "t",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 236,
                                "end": 237
                              },
                              "optional": false,
                              "computed": false,
                              "start": 231,
                              "end": 237
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 239,
                              "end": 245
                            },
                            "optional": true,
                            "computed": false,
                            "start": 231,
                            "end": 245
                          },
                          "start": 231,
                          "end": 245
                        },
                        "prefix": true,
                        "start": 230,
                        "end": 245
                      },
                      "prefix": true,
                      "start": 229,
                      "end": 245
                    },
                    "start": 220,
                    "end": 245
                  },
                  "directive": null,
                  "start": 220,
                  "end": 245
                }
              ],
              "start": 210,
              "end": 251
            },
            "start": 183,
            "end": 251
          }
        ],
        "start": 104,
        "end": 253
      },
      "start": 79,
      "end": 253
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 253
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 56,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 62,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 79,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 84,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "comp",
    "start": 90,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 95,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 98,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "comp",
    "start": 110,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "sp",
    "start": 115,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "comp",
    "start": 122,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "sp",
    "start": 127,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "find",
    "start": 132,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 141,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 146,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 153,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "comp",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "xp",
    "start": 162,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 165,
    "end": 166
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 167,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "String",
    "value": "'0'",
    "start": 173,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 183,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 188,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 194,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 199,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "comp",
    "start": 202,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 220,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 231,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 237,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 239,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 252,
    "end": 253
  }
]
```
