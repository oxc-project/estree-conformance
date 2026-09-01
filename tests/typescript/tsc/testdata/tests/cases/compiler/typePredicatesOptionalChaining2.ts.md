__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 11
      },
      "typeParameters": null,
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 20
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 22,
                "end": 28
              },
              "start": 20,
              "end": 28
            },
            "accessibility": null,
            "static": false,
            "start": 16,
            "end": 29
          }
        ],
        "start": 14,
        "end": 31
      },
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "getName1",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 47
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "person",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Person",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 60,
                      "end": 66
                    },
                    "typeArguments": null,
                    "start": 60,
                    "end": 66
                  },
                  "start": 58,
                  "end": 66
                },
                "start": 51,
                "end": 66
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 69,
                "end": 75
              },
              "start": 67,
              "end": 75
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "typeof",
                        "argument": {
                          "type": "ChainExpression",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "person",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 97,
                              "end": 103
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 105,
                              "end": 109
                            },
                            "optional": true,
                            "computed": false,
                            "start": 97,
                            "end": 109
                          },
                          "start": 97,
                          "end": 109
                        },
                        "prefix": true,
                        "start": 90,
                        "end": 109
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "string",
                        "raw": "'string'",
                        "start": 114,
                        "end": 122
                      },
                      "start": 90,
                      "end": 122
                    },
                    "consequent": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "person",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 125,
                          "end": 131
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 133,
                          "end": 137
                        },
                        "optional": true,
                        "computed": false,
                        "start": 125,
                        "end": 137
                      },
                      "start": 125,
                      "end": 137
                    },
                    "alternate": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 140,
                      "end": 142
                    },
                    "start": 90,
                    "end": 142
                  },
                  "start": 83,
                  "end": 143
                }
              ],
              "start": 79,
              "end": 145
            },
            "id": null,
            "generator": false,
            "start": 50,
            "end": 145
          },
          "definite": false,
          "start": 39,
          "end": 145
        }
      ],
      "declare": false,
      "start": 33,
      "end": 146
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "isString",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 162
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                  "start": 179,
                  "end": 184
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 188,
                    "end": 194
                  },
                  "start": 188,
                  "end": 194
                },
                "start": 179,
                "end": 194
              },
              "start": 177,
              "end": 194
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 216,
                        "end": 221
                      },
                      "prefix": true,
                      "start": 209,
                      "end": 221
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "'string'",
                      "start": 226,
                      "end": 234
                    },
                    "start": 209,
                    "end": 234
                  },
                  "start": 202,
                  "end": 235
                }
              ],
              "start": 198,
              "end": 237
            },
            "id": null,
            "generator": false,
            "start": 165,
            "end": 237
          },
          "definite": false,
          "start": 154,
          "end": 237
        }
      ],
      "declare": false,
      "start": 148,
      "end": 238
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "getName2",
            "optional": false,
            "typeAnnotation": null,
            "start": 246,
            "end": 254
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "person",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Person",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 267,
                      "end": 273
                    },
                    "typeArguments": null,
                    "start": 267,
                    "end": 273
                  },
                  "start": 265,
                  "end": 273
                },
                "start": 258,
                "end": 273
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 276,
                "end": 282
              },
              "start": 274,
              "end": 282
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 297,
                        "end": 305
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ChainExpression",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "person",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 306,
                              "end": 312
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 314,
                              "end": 318
                            },
                            "optional": true,
                            "computed": false,
                            "start": 306,
                            "end": 318
                          },
                          "start": 306,
                          "end": 318
                        }
                      ],
                      "optional": false,
                      "start": 297,
                      "end": 319
                    },
                    "consequent": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "person",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 322,
                          "end": 328
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 330,
                          "end": 334
                        },
                        "optional": true,
                        "computed": false,
                        "start": 322,
                        "end": 334
                      },
                      "start": 322,
                      "end": 334
                    },
                    "alternate": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 337,
                      "end": 339
                    },
                    "start": 297,
                    "end": 339
                  },
                  "start": 290,
                  "end": 340
                }
              ],
              "start": 286,
              "end": 342
            },
            "id": null,
            "generator": false,
            "start": 257,
            "end": 342
          },
          "definite": false,
          "start": 246,
          "end": 342
        }
      ],
      "declare": false,
      "start": 240,
      "end": 343
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 343
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 5,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 16,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 33,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "getName1",
    "start": 39,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "person",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 76,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 83,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 90,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "person",
    "start": 97,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 103,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 105,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 110,
    "end": 113
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 114,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "person",
    "start": 125,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 131,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 133,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "String",
    "value": "''",
    "start": 140,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 148,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 154,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "value",
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
    "value": ")",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 179,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 185,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 188,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 195,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 198,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 202,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 209,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 216,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 222,
    "end": 225
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 226,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "const",
    "start": 240,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "getName2",
    "start": 246,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "person",
    "start": 258,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 267,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 276,
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
    "value": "return",
    "start": 290,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 297,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "person",
    "start": 306,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 312,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 314,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "person",
    "start": 322,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 328,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 330,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 335,
    "end": 336
  },
  {
    "type": "String",
    "value": "''",
    "start": 337,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343
  }
]
```
