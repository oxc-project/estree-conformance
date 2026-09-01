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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
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
              "type": "PrivateIdentifier",
              "name": "p",
              "start": 16,
              "end": 18
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 20,
                "end": 26
              },
              "start": 18,
              "end": 26
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 16,
            "end": 27
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 44
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 52,
                      "end": 58
                    },
                    "start": 50,
                    "end": 58
                  },
                  "start": 45,
                  "end": 58
                }
              ],
              "returnType": null,
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
                          "type": "ThisExpression",
                          "start": 70,
                          "end": 74
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "p",
                          "start": 75,
                          "end": 77
                        },
                        "optional": false,
                        "computed": false,
                        "start": 70,
                        "end": 77
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 80,
                        "end": 85
                      },
                      "start": 70,
                      "end": 85
                    },
                    "directive": null,
                    "start": 70,
                    "end": 86
                  }
                ],
                "start": 60,
                "end": 92
              },
              "expression": false,
              "start": 44,
              "end": 92
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 33,
            "end": 92
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 100
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 104,
                      "end": 110
                    },
                    "start": 102,
                    "end": 110
                  },
                  "start": 101,
                  "end": 110
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 123,
                            "end": 127
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "p",
                            "start": 128,
                            "end": 130
                          },
                          "optional": false,
                          "computed": false,
                          "start": 123,
                          "end": 130
                        },
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 134,
                          "end": 140
                        },
                        "start": 123,
                        "end": 140
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 144,
                        "end": 145
                      },
                      "start": 122,
                      "end": 145
                    },
                    "directive": null,
                    "start": 122,
                    "end": 146
                  }
                ],
                "start": 112,
                "end": 152
              },
              "expression": false,
              "start": 100,
              "end": 152
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 98,
            "end": 152
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 160
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 164,
                      "end": 170
                    },
                    "start": 162,
                    "end": 170
                  },
                  "start": 161,
                  "end": 170
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 185,
                            "end": 189
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "p",
                            "start": 190,
                            "end": 192
                          },
                          "optional": false,
                          "computed": false,
                          "start": 185,
                          "end": 192
                        },
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 196,
                          "end": 202
                        },
                        "start": 185,
                        "end": 202
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 208,
                        "end": 209
                      },
                      "start": 182,
                      "end": 209
                    },
                    "directive": null,
                    "start": 182,
                    "end": 210
                  }
                ],
                "start": 172,
                "end": 216
              },
              "expression": false,
              "start": 160,
              "end": 216
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 158,
            "end": 216
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 224
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 228,
                      "end": 234
                    },
                    "start": 226,
                    "end": 234
                  },
                  "start": 225,
                  "end": 234
                }
              ],
              "returnType": null,
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
                          "type": "ThisExpression",
                          "start": 247,
                          "end": 251
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "p",
                          "start": 252,
                          "end": 254
                        },
                        "optional": false,
                        "computed": false,
                        "start": 247,
                        "end": 254
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 258,
                        "end": 259
                      },
                      "start": 246,
                      "end": 259
                    },
                    "directive": null,
                    "start": 246,
                    "end": 260
                  }
                ],
                "start": 236,
                "end": 266
              },
              "expression": false,
              "start": 224,
              "end": 266
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 222,
            "end": 266
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 274
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 278,
                      "end": 284
                    },
                    "start": 276,
                    "end": 284
                  },
                  "start": 275,
                  "end": 284
                }
              ],
              "returnType": null,
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
                          "type": "ThisExpression",
                          "start": 299,
                          "end": 303
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "p",
                          "start": 304,
                          "end": 306
                        },
                        "optional": false,
                        "computed": false,
                        "start": 299,
                        "end": 306
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 312,
                        "end": 313
                      },
                      "start": 296,
                      "end": 313
                    },
                    "directive": null,
                    "start": 296,
                    "end": 314
                  }
                ],
                "start": 286,
                "end": 320
              },
              "expression": false,
              "start": 274,
              "end": 320
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 272,
            "end": 320
          }
        ],
        "start": 10,
        "end": 322
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 322
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 322
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
    "value": "Foo",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "PrivateIdentifier",
    "value": "p",
    "start": 16,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 33,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 45,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 52,
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
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 70,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 74,
    "end": 75
  },
  {
    "type": "PrivateIdentifier",
    "value": "p",
    "start": 75,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 80,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 98,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 104,
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
    "type": "Punctuator",
    "value": "(",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 123,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 127,
    "end": 128
  },
  {
    "type": "PrivateIdentifier",
    "value": "p",
    "start": 128,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 131,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "p",
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
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 158,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 185,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 189,
    "end": 190
  },
  {
    "type": "PrivateIdentifier",
    "value": "p",
    "start": 190,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 193,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 196,
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
    "value": ")",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 222,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 228,
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
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 247,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 251,
    "end": 252
  },
  {
    "type": "PrivateIdentifier",
    "value": "p",
    "start": 252,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "p",
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
    "type": "Punctuator",
    "value": "}",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 272,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 278,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 299,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 303,
    "end": 304
  },
  {
    "type": "PrivateIdentifier",
    "value": "p",
    "start": 304,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "p",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 321,
    "end": 322
  }
]
```
