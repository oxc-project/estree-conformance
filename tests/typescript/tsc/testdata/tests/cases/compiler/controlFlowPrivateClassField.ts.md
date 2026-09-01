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
        "name": "Example",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 13
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
              "name": "test",
              "start": 20,
              "end": 25
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 20,
            "end": 26
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
              "start": 32,
              "end": 43
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
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 50,
                      "end": 56
                    },
                    "start": 48,
                    "end": 56
                  },
                  "start": 44,
                  "end": 56
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
                          "start": 68,
                          "end": 72
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 73,
                          "end": 78
                        },
                        "optional": false,
                        "computed": false,
                        "start": 68,
                        "end": 78
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 81,
                        "end": 85
                      },
                      "start": 68,
                      "end": 85
                    },
                    "directive": null,
                    "start": 68,
                    "end": 86
                  }
                ],
                "start": 58,
                "end": 92
              },
              "expression": false,
              "start": 43,
              "end": 92
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 32,
            "end": 92
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 106
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 126,
                        "end": 130
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "test",
                        "start": 131,
                        "end": 136
                      },
                      "optional": false,
                      "computed": false,
                      "start": 126,
                      "end": 136
                    },
                    "start": 119,
                    "end": 136
                  }
                ],
                "start": 109,
                "end": 142
              },
              "expression": false,
              "start": 106,
              "end": 142
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 98,
            "end": 142
          }
        ],
        "start": 14,
        "end": 144
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 144
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example2",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 160
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
              "name": "test",
              "start": 167,
              "end": 172
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 167,
            "end": 173
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
              "start": 179,
              "end": 190
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
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 197,
                          "end": 203
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 206,
                          "end": 215
                        }
                      ],
                      "start": 197,
                      "end": 215
                    },
                    "start": 195,
                    "end": 215
                  },
                  "start": 191,
                  "end": 215
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
                          "start": 227,
                          "end": 231
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "start": 232,
                          "end": 237
                        },
                        "optional": false,
                        "computed": false,
                        "start": 227,
                        "end": 237
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 240,
                        "end": 244
                      },
                      "start": 227,
                      "end": 244
                    },
                    "directive": null,
                    "start": 227,
                    "end": 245
                  }
                ],
                "start": 217,
                "end": 251
              },
              "expression": false,
              "start": 190,
              "end": 251
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 179,
            "end": 251
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 261,
              "end": 265
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
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 282,
                        "end": 286
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "test",
                        "start": 287,
                        "end": 292
                      },
                      "optional": false,
                      "computed": false,
                      "start": 282,
                      "end": 292
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 315,
                              "end": 319
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "start": 320,
                              "end": 325
                            },
                            "optional": false,
                            "computed": false,
                            "start": 315,
                            "end": 325
                          },
                          "start": 308,
                          "end": 325
                        }
                      ],
                      "start": 294,
                      "end": 335
                    },
                    "alternate": null,
                    "start": 278,
                    "end": 335
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 351,
                      "end": 352
                    },
                    "start": 344,
                    "end": 353
                  }
                ],
                "start": 268,
                "end": 359
              },
              "expression": false,
              "start": 265,
              "end": 359
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 257,
            "end": 359
          }
        ],
        "start": 161,
        "end": 361
      },
      "abstract": false,
      "declare": false,
      "start": 146,
      "end": 361
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 361
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
    "value": "Example",
    "start": 6,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 20,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 32,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 44,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 50,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 68,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 72,
    "end": 73
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 73,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 81,
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
    "value": "get",
    "start": 98,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 102,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 119,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 126,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 130,
    "end": 131
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 131,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 146,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "Example2",
    "start": 152,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 167,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 179,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 191,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 197,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 206,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 227,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 231,
    "end": 232
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 232,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 240,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 257,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 261,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 278,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 282,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 286,
    "end": 287
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 287,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 308,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 315,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 319,
    "end": 320
  },
  {
    "type": "PrivateIdentifier",
    "value": "test",
    "start": 320,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 344,
    "end": 350
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 360,
    "end": 361
  }
]
```
