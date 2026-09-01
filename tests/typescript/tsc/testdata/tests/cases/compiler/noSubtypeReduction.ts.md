__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IA",
          "optional": false,
          "typeAnnotation": null,
          "start": 39,
          "end": 41
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 51
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
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
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 55,
                          "end": 56
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 58,
                            "end": 64
                          },
                          "start": 56,
                          "end": 64
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 55,
                        "end": 65
                      }
                    ],
                    "start": 53,
                    "end": 67
                  },
                  "start": 53,
                  "end": 69
                },
                "start": 51,
                "end": 69
              },
              "accessibility": null,
              "static": false,
              "start": 48,
              "end": 70
            }
          ],
          "start": 42,
          "end": 72
        },
        "declare": false,
        "start": 29,
        "end": 72
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 22,
      "end": 72
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IAB",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 94
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": null,
                "start": 101,
                "end": 104
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
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
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 108,
                          "end": 109
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 111,
                            "end": 117
                          },
                          "start": 109,
                          "end": 117
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 108,
                        "end": 118
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 119,
                          "end": 120
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 122,
                            "end": 128
                          },
                          "start": 120,
                          "end": 128
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 119,
                        "end": 129
                      }
                    ],
                    "start": 106,
                    "end": 131
                  },
                  "start": 106,
                  "end": 133
                },
                "start": 104,
                "end": 133
              },
              "accessibility": null,
              "static": false,
              "start": 101,
              "end": 134
            }
          ],
          "start": 95,
          "end": 136
        },
        "declare": false,
        "start": 81,
        "end": 136
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 74,
      "end": 136
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null,
          "start": 154,
          "end": 155
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 159,
                      "end": 161
                    },
                    "typeArguments": null,
                    "start": 159,
                    "end": 161
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IAB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 164,
                      "end": 167
                    },
                    "typeArguments": null,
                    "start": 164,
                    "end": 167
                  }
                ],
                "start": 159,
                "end": 167
              },
              "start": 157,
              "end": 167
            },
            "start": 156,
            "end": 167
          }
        ],
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
                    "name": "useB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 181,
                    "end": 185
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 192,
                            "end": 198
                          },
                          "start": 190,
                          "end": 198
                        },
                        "start": 189,
                        "end": 198
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 203,
                      "end": 206
                    },
                    "id": null,
                    "generator": false,
                    "start": 188,
                    "end": 206
                  },
                  "definite": false,
                  "start": 181,
                  "end": 206
                }
              ],
              "declare": false,
              "start": 175,
              "end": 207
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
                      "name": "el",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 223,
                      "end": 225
                    },
                    "init": null,
                    "definite": false,
                    "start": 223,
                    "end": 225
                  }
                ],
                "declare": false,
                "start": 217,
                "end": 225
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 229,
                  "end": 230
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 234
                },
                "optional": false,
                "computed": false,
                "start": 229,
                "end": 234
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "A",
                        "raw": "'A'",
                        "start": 250,
                        "end": 253
                      },
                      "operator": "in",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "el",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 257,
                        "end": 259
                      },
                      "start": 250,
                      "end": 259
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 261,
                      "end": 264
                    },
                    "alternate": null,
                    "start": 246,
                    "end": 264
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "B",
                        "raw": "'B'",
                        "start": 277,
                        "end": 280
                      },
                      "operator": "in",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "el",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 284,
                        "end": 286
                      },
                      "start": 277,
                      "end": 286
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "useB",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 302,
                              "end": 306
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "el",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 307,
                                  "end": 309
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 310,
                                  "end": 311
                                },
                                "optional": false,
                                "computed": false,
                                "start": 307,
                                "end": 311
                              }
                            ],
                            "optional": false,
                            "start": 302,
                            "end": 312
                          },
                          "directive": null,
                          "start": 302,
                          "end": 313
                        }
                      ],
                      "start": 288,
                      "end": 323
                    },
                    "alternate": null,
                    "start": 273,
                    "end": 323
                  }
                ],
                "start": 236,
                "end": 329
              },
              "start": 212,
              "end": 329
            }
          ],
          "start": 169,
          "end": 331
        },
        "expression": false,
        "start": 145,
        "end": 331
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 138,
      "end": 331
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 331
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 22,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 29,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "IA",
    "start": 39,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 48,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 58,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 74,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 81,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "IAB",
    "start": 91,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 101,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 111,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 122,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 138,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 145,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "IA",
    "start": 159,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "IAB",
    "start": 164,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 175,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "useB",
    "start": 181,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 192,
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
    "value": "=>",
    "start": 200,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 212,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 217,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 223,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 226,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 231,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 246,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 249,
    "end": 250
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 250,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 254,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 257,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 273,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 276,
    "end": 277
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 277,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 281,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 284,
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
    "value": "{",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "useB",
    "start": 302,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 307,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 330,
    "end": 331
  }
]
```
