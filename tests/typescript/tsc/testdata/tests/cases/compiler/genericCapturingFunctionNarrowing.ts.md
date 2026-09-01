__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "needsToNarrowTheType",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 29
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "First",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 35
            },
            "constraint": {
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 46,
                    "end": 49
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 51,
                      "end": 57
                    },
                    "start": 49,
                    "end": 57
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 46,
                  "end": 57
                }
              ],
              "start": 44,
              "end": 59
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 30,
            "end": 59
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Second",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 67
            },
            "constraint": {
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
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 78,
                    "end": 81
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 83,
                      "end": 89
                    },
                    "start": 81,
                    "end": 89
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 78,
                  "end": 89
                }
              ],
              "start": 76,
              "end": 91
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 61,
            "end": 91
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SubFirst",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 101
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "First",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 115
              },
              "typeArguments": null,
              "start": 110,
              "end": 115
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 93,
            "end": 115
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SubFirstMore",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 129
            },
            "constraint": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "First",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 138,
                    "end": 143
                  },
                  "typeArguments": null,
                  "start": 138,
                  "end": 143
                },
                {
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
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 147,
                        "end": 152
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 154,
                          "end": 160
                        },
                        "start": 152,
                        "end": 160
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 147,
                      "end": 160
                    }
                  ],
                  "start": 146,
                  "end": 161
                }
              ],
              "start": 138,
              "end": 161
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 117,
            "end": 161
          }
        ],
        "start": 29,
        "end": 162
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "First",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 170,
                    "end": 175
                  },
                  "typeArguments": null,
                  "start": 170,
                  "end": 175
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SubFirst",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 178,
                    "end": 186
                  },
                  "typeArguments": null,
                  "start": 178,
                  "end": 186
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SubFirstMore",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 189,
                    "end": 201
                  },
                  "typeArguments": null,
                  "start": 189,
                  "end": 201
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Second",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 204,
                    "end": 210
                  },
                  "typeArguments": null,
                  "start": 204,
                  "end": 210
                }
              ],
              "start": 170,
              "end": 210
            },
            "start": 168,
            "end": 210
          },
          "start": 163,
          "end": 210
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasAFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 222,
                "end": 229
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 230,
                  "end": 235
                }
              ],
              "optional": false,
              "start": 222,
              "end": 236
            },
            "consequent": {
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
                        "start": 248,
                        "end": 255
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 256,
                        "end": 259
                      },
                      "optional": false,
                      "computed": false,
                      "start": 248,
                      "end": 259
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 260,
                          "end": 265
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 266,
                          "end": 269
                        },
                        "optional": false,
                        "computed": false,
                        "start": 260,
                        "end": 269
                      }
                    ],
                    "optional": false,
                    "start": 248,
                    "end": 270
                  },
                  "directive": null,
                  "start": 248,
                  "end": 271
                }
              ],
              "start": 238,
              "end": 277
            },
            "alternate": {
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
                        "start": 399,
                        "end": 406
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 407,
                        "end": 410
                      },
                      "optional": false,
                      "computed": false,
                      "start": 399,
                      "end": 410
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 411,
                          "end": 416
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 417,
                          "end": 420
                        },
                        "optional": false,
                        "computed": false,
                        "start": 411,
                        "end": 420
                      }
                    ],
                    "optional": false,
                    "start": 399,
                    "end": 421
                  },
                  "directive": null,
                  "start": 399,
                  "end": 422
                }
              ],
              "start": 287,
              "end": 494
            },
            "start": 218,
            "end": 494
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "hasAFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 509,
              "end": 516
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "First",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 524,
                          "end": 529
                        },
                        "typeArguments": null,
                        "start": 524,
                        "end": 529
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Second",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 532,
                          "end": 538
                        },
                        "typeArguments": null,
                        "start": 532,
                        "end": 538
                      }
                    ],
                    "start": 524,
                    "end": 538
                  },
                  "start": 522,
                  "end": 538
                },
                "start": 517,
                "end": 538
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 541,
                  "end": 546
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "First",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 550,
                      "end": 555
                    },
                    "typeArguments": null,
                    "start": 550,
                    "end": 555
                  },
                  "start": 550,
                  "end": 555
                },
                "start": 541,
                "end": 555
              },
              "start": 539,
              "end": 555
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 573,
                      "end": 578
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 582,
                      "end": 587
                    },
                    "start": 573,
                    "end": 587
                  },
                  "start": 566,
                  "end": 588
                }
              ],
              "start": 556,
              "end": 594
            },
            "expression": false,
            "start": 500,
            "end": 594
          }
        ],
        "start": 212,
        "end": 596
      },
      "expression": false,
      "start": 0,
      "end": 596
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 596
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "needsToNarrowTheType",
    "start": 9,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "First",
    "start": 30,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 36,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 46,
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
    "value": "string",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Second",
    "start": 61,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 68,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 78,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "SubFirst",
    "start": 93,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 102,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "First",
    "start": 110,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "SubFirstMore",
    "start": 117,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 130,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "First",
    "start": 138,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 147,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 154,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 163,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "First",
    "start": 170,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "SubFirst",
    "start": 178,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "SubFirstMore",
    "start": 189,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "Second",
    "start": 204,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 218,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "hasAFoo",
    "start": 222,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 230,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 248,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 256,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 260,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 266,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 282,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 399,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 407,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 411,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 417,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 493,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 500,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "hasAFoo",
    "start": 509,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 517,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "First",
    "start": 524,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "Second",
    "start": 532,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 541,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 547,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "First",
    "start": 550,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 556,
    "end": 557
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 566,
    "end": 572
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 573,
    "end": 578
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 579,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 582,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 595,
    "end": 596
  }
]
```
