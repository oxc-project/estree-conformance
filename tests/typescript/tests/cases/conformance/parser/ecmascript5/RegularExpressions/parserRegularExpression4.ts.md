__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Ca",
              "optional": false,
              "typeAnnotation": null,
              "start": 4,
              "end": 6
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 7,
              "end": 11
            },
            "optional": false,
            "computed": false,
            "start": 4,
            "end": 11
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 12,
                "end": 13
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "href",
                "optional": false,
                "typeAnnotation": null,
                "start": 14,
                "end": 18
              },
              "optional": false,
              "computed": false,
              "start": 12,
              "end": 18
            }
          ],
          "optional": false,
          "start": 4,
          "end": 19
        },
        "operator": "||",
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "LogicalExpression",
            "left": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Ba",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 25
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 26,
                  "end": 30
                },
                "optional": false,
                "computed": false,
                "start": 23,
                "end": 30
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 31,
                    "end": 32
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "href",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 33,
                    "end": 37
                  },
                  "optional": false,
                  "computed": false,
                  "start": 31,
                  "end": 37
                }
              ],
              "optional": false,
              "start": 23,
              "end": 38
            },
            "operator": "&&",
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Literal",
                  "value": null,
                  "raw": "/(\\\\?|&)adurl=/",
                  "regex": {
                    "pattern": "(\\\\?|&)adurl=",
                    "flags": ""
                  },
                  "start": 42,
                  "end": 57
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 58,
                  "end": 62
                },
                "optional": false,
                "computed": false,
                "start": 42,
                "end": 62
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 63,
                    "end": 64
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "href",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 69
                  },
                  "optional": false,
                  "computed": false,
                  "start": 63,
                  "end": 69
                }
              ],
              "optional": false,
              "start": 42,
              "end": 70
            },
            "start": 23,
            "end": 70
          },
          "operator": "&&",
          "right": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Literal",
                  "value": null,
                  "raw": "/(\\\\?|&)q=/",
                  "regex": {
                    "pattern": "(\\\\?|&)q=",
                    "flags": ""
                  },
                  "start": 75,
                  "end": 86
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 91
                },
                "optional": false,
                "computed": false,
                "start": 75,
                "end": 91
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 92,
                    "end": 93
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "href",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 98
                  },
                  "optional": false,
                  "computed": false,
                  "start": 92,
                  "end": 98
                }
              ],
              "optional": false,
              "start": 75,
              "end": 99
            },
            "prefix": true,
            "start": 74,
            "end": 99
          },
          "start": 23,
          "end": 99
        },
        "start": 4,
        "end": 99
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "LogicalExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Literal",
                    "value": null,
                    "raw": "/ (\\\\ ? | & ) rct = j /",
                    "regex": {
                      "pattern": " (\\\\ ? | & ) rct = j ",
                      "flags": ""
                    },
                    "start": 101,
                    "end": 124
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 126,
                    "end": 130
                  },
                  "optional": false,
                  "computed": false,
                  "start": 101,
                  "end": 130
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 131,
                      "end": 132
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "href",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 133,
                      "end": 137
                    },
                    "optional": false,
                    "computed": false,
                    "start": 131,
                    "end": 137
                  }
                ],
                "optional": false,
                "start": 101,
                "end": 138
              },
              "operator": "||",
              "right": {
                "type": "AssignmentExpression",
                "operator": "+=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 143,
                  "end": 144
                },
                "right": {
                  "type": "Literal",
                  "value": "&rct=j",
                  "raw": "\"&rct=j\"",
                  "start": 148,
                  "end": 156
                },
                "start": 143,
                "end": 156
              },
              "start": 101,
              "end": 157
            },
            {
              "type": "LogicalExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Literal",
                    "value": null,
                    "raw": "/(\\\\?|&)q=/",
                    "regex": {
                      "pattern": "(\\\\?|&)q=",
                      "flags": ""
                    },
                    "start": 159,
                    "end": 170
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 171,
                    "end": 175
                  },
                  "optional": false,
                  "computed": false,
                  "start": 159,
                  "end": 175
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 176,
                      "end": 177
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "href",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 178,
                      "end": 182
                    },
                    "optional": false,
                    "computed": false,
                    "start": 176,
                    "end": 182
                  }
                ],
                "optional": false,
                "start": 159,
                "end": 183
              },
              "operator": "||",
              "right": {
                "type": "SequenceExpression",
                "expressions": [
                  {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 188,
                      "end": 189
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "&q=",
                        "raw": "\"&q=\"",
                        "start": 193,
                        "end": 198
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "encodeURIComponent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 201,
                          "end": 219
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "W",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 220,
                                  "end": 221
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": "q",
                                    "raw": "\"q\"",
                                    "start": 222,
                                    "end": 225
                                  }
                                ],
                                "optional": false,
                                "start": 220,
                                "end": 226
                              },
                              "operator": "||",
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "W",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 230,
                                  "end": 231
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": "as_q",
                                    "raw": "\"as_q\"",
                                    "start": 232,
                                    "end": 238
                                  }
                                ],
                                "optional": false,
                                "start": 230,
                                "end": 239
                              },
                              "start": 220,
                              "end": 239
                            },
                            "operator": "||",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 243,
                              "end": 244
                            },
                            "start": 220,
                            "end": 244
                          }
                        ],
                        "optional": false,
                        "start": 201,
                        "end": 245
                      },
                      "start": 193,
                      "end": 245
                    },
                    "start": 188,
                    "end": 245
                  },
                  {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 247,
                      "end": 248
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 251,
                          "end": 252
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "substring",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 253,
                          "end": 262
                        },
                        "optional": false,
                        "computed": false,
                        "start": 251,
                        "end": 262
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 263,
                          "end": 264
                        },
                        {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Literal",
                            "value": 1948,
                            "raw": "1948",
                            "start": 266,
                            "end": 270
                          },
                          "operator": "-",
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 273,
                                "end": 274
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "href",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 275,
                                "end": 279
                              },
                              "optional": false,
                              "computed": false,
                              "start": 273,
                              "end": 279
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 280,
                              "end": 286
                            },
                            "optional": false,
                            "computed": false,
                            "start": 273,
                            "end": 286
                          },
                          "start": 266,
                          "end": 286
                        }
                      ],
                      "optional": false,
                      "start": 251,
                      "end": 287
                    },
                    "start": 247,
                    "end": 287
                  }
                ],
                "start": 188,
                "end": 287
              },
              "start": 159,
              "end": 288
            },
            {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 290,
                "end": 291
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 295,
                  "end": 296
                },
                "prefix": true,
                "start": 294,
                "end": 296
              },
              "start": 290,
              "end": 296
            }
          ],
          "start": 101,
          "end": 296
        },
        "directive": null,
        "start": 101,
        "end": 297
      },
      "alternate": null,
      "start": 0,
      "end": 297
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 297
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "if",
    "start": 0,
    "end": 2
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Ca",
    "start": 4,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 7,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "href",
    "start": 14,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 20,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "Ba",
    "start": 23,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 26,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "href",
    "start": 33,
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
    "value": "&&",
    "start": 39,
    "end": 41
  },
  {
    "type": "RegularExpression",
    "value": "/(\\\\?|&)adurl=/",
    "regex": {
      "flags": "",
      "pattern": "(\\\\?|&)adurl="
    },
    "start": 42,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 58,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "href",
    "start": 65,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 71,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 74,
    "end": 75
  },
  {
    "type": "RegularExpression",
    "value": "/(\\\\?|&)q=/",
    "regex": {
      "flags": "",
      "pattern": "(\\\\?|&)q="
    },
    "start": 75,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 87,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "href",
    "start": 94,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100
  },
  {
    "type": "RegularExpression",
    "value": "/ (\\\\ ? | & ) rct = j /",
    "regex": {
      "flags": "",
      "pattern": " (\\\\ ? | & ) rct = j "
    },
    "start": 101,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 126,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "href",
    "start": 133,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 139,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 145,
    "end": 147
  },
  {
    "type": "String",
    "value": "\"&rct=j\"",
    "start": 148,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 157,
    "end": 158
  },
  {
    "type": "RegularExpression",
    "value": "/(\\\\?|&)q=/",
    "regex": {
      "flags": "",
      "pattern": "(\\\\?|&)q="
    },
    "start": 159,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 171,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "href",
    "start": 178,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 184,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 190,
    "end": 192
  },
  {
    "type": "String",
    "value": "\"&q=\"",
    "start": 193,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "encodeURIComponent",
    "start": 201,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
    "end": 222
  },
  {
    "type": "String",
    "value": "\"q\"",
    "start": 222,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 227,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 231,
    "end": 232
  },
  {
    "type": "String",
    "value": "\"as_q\"",
    "start": 232,
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
    "value": "||",
    "start": 240,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 251,
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
    "value": "substring",
    "start": 253,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 262,
    "end": 263
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 264,
    "end": 265
  },
  {
    "type": "Numeric",
    "value": "1948",
    "start": 266,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "href",
    "start": 275,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 280,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 294,
    "end": 295
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  }
]
```
