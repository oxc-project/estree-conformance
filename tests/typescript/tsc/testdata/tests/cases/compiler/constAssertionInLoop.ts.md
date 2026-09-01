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
        "name": "Candidate",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 71
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
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
                  "name": "mode",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 80
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 82,
                      "end": 85
                    },
                    "start": 82,
                    "end": 85
                  },
                  "start": 80,
                  "end": 85
                },
                "accessibility": null,
                "static": false,
                "start": 76,
                "end": 86
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "output",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 93
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 95,
                    "end": 102
                  },
                  "start": 93,
                  "end": 102
                },
                "accessibility": null,
                "static": false,
                "start": 87,
                "end": 102
              }
            ],
            "start": 74,
            "end": 104
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
                  "name": "mode",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 113
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 115,
                      "end": 118
                    },
                    "start": 115,
                    "end": 118
                  },
                  "start": 113,
                  "end": 118
                },
                "accessibility": null,
                "static": false,
                "start": 109,
                "end": 118
              }
            ],
            "start": 107,
            "end": 120
          }
        ],
        "start": 74,
        "end": 120
      },
      "declare": false,
      "start": 57,
      "end": 121
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "run",
          "optional": false,
          "typeAnnotation": null,
          "start": 139,
          "end": 142
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSNeverKeyword",
            "start": 146,
            "end": 151
          },
          "start": 144,
          "end": 151
        },
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
                    "name": "lastCandidate",
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
                              "name": "Candidate",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 177,
                              "end": 186
                            },
                            "typeArguments": null,
                            "start": 177,
                            "end": 186
                          },
                          {
                            "type": "TSNullKeyword",
                            "start": 189,
                            "end": 193
                          }
                        ],
                        "start": 177,
                        "end": 193
                      },
                      "start": 175,
                      "end": 193
                    },
                    "start": 162,
                    "end": 193
                  },
                  "init": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 196,
                    "end": 200
                  },
                  "definite": false,
                  "start": 162,
                  "end": 200
                }
              ],
              "declare": false,
              "start": 158,
              "end": 201
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 213,
                "end": 217
              },
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
                          "name": "candidate",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Candidate",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 246,
                                "end": 255
                              },
                              "typeArguments": null,
                              "start": 246,
                              "end": 255
                            },
                            "start": 244,
                            "end": 255
                          },
                          "start": 235,
                          "end": 255
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "mode",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 272,
                                  "end": 276
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "a",
                                  "raw": "\"a\"",
                                  "start": 278,
                                  "end": 281
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 272,
                                "end": 281
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "output",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 295,
                                  "end": 301
                                },
                                "value": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "lastCandidate",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 303,
                                  "end": 316
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 295,
                                "end": 316
                              }
                            ],
                            "start": 258,
                            "end": 327
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "const",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 331,
                              "end": 336
                            },
                            "typeArguments": null,
                            "start": 331,
                            "end": 336
                          },
                          "start": 258,
                          "end": 336
                        },
                        "definite": false,
                        "start": 235,
                        "end": 336
                      }
                    ],
                    "declare": false,
                    "start": 229,
                    "end": 337
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "lastCandidate",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 346,
                        "end": 359
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "candidate",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 362,
                        "end": 371
                      },
                      "start": 346,
                      "end": 371
                    },
                    "directive": null,
                    "start": 346,
                    "end": 372
                  }
                ],
                "start": 219,
                "end": 378
              },
              "start": 206,
              "end": 378
            }
          ],
          "start": 152,
          "end": 380
        },
        "expression": false,
        "start": 130,
        "end": 380
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 123,
      "end": 380
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 380
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 57,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "Candidate",
    "start": 62,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "mode",
    "start": 76,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 82,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 87,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 95,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "mode",
    "start": 109,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 113,
    "end": 114
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 115,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 123,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 130,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "run",
    "start": 139,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 146,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 158,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "lastCandidate",
    "start": 162,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "Candidate",
    "start": 177,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 187,
    "end": 188
  },
  {
    "type": "Null",
    "value": "null",
    "start": 189,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 194,
    "end": 195
  },
  {
    "type": "Null",
    "value": "null",
    "start": 196,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 206,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 213,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 229,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "candidate",
    "start": 235,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "Candidate",
    "start": 246,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "mode",
    "start": 272,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 278,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 295,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "lastCandidate",
    "start": 303,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 328,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 331,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "lastCandidate",
    "start": 346,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "candidate",
    "start": 362,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 379,
    "end": 380
  }
]
```
