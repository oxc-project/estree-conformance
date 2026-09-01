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
        "name": "C",
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
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "prop",
              "start": 14,
              "end": 19
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 22,
              "end": 23
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 24
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "propStatic",
              "start": 36,
              "end": 47
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 50,
              "end": 51
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 29,
            "end": 52
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 64
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
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 72,
                        "end": 73
                      },
                      "typeArguments": null,
                      "start": 72,
                      "end": 73
                    },
                    "start": 70,
                    "end": 73
                  },
                  "start": 65,
                  "end": 73
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
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 91,
                          "end": 94
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "SpreadElement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "other",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 102,
                                "end": 107
                              },
                              "start": 99,
                              "end": 107
                            }
                          ],
                          "start": 97,
                          "end": 109
                        },
                        "definite": false,
                        "start": 91,
                        "end": 109
                      }
                    ],
                    "declare": false,
                    "start": 85,
                    "end": 110
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 119,
                        "end": 122
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "prop",
                        "start": 123,
                        "end": 128
                      },
                      "optional": false,
                      "computed": false,
                      "start": 119,
                      "end": 128
                    },
                    "directive": null,
                    "start": 119,
                    "end": 129
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
                          "properties": [
                            {
                              "type": "RestElement",
                              "decorators": [],
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "rest",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 149,
                                "end": 153
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "value": null,
                              "start": 146,
                              "end": 153
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 144,
                          "end": 155
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "other",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 158,
                          "end": 163
                        },
                        "definite": false,
                        "start": 144,
                        "end": 163
                      }
                    ],
                    "declare": false,
                    "start": 138,
                    "end": 164
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 173,
                        "end": 177
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "prop",
                        "start": 178,
                        "end": 183
                      },
                      "optional": false,
                      "computed": false,
                      "start": 173,
                      "end": 183
                    },
                    "directive": null,
                    "start": 173,
                    "end": 184
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
                          "name": "statics",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 200,
                          "end": 207
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "SpreadElement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 216,
                                "end": 217
                              },
                              "start": 212,
                              "end": 217
                            }
                          ],
                          "start": 210,
                          "end": 218
                        },
                        "definite": false,
                        "start": 200,
                        "end": 218
                      }
                    ],
                    "declare": false,
                    "start": 194,
                    "end": 219
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "statics",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 228,
                        "end": 235
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "propStatic",
                        "start": 236,
                        "end": 247
                      },
                      "optional": false,
                      "computed": false,
                      "start": 228,
                      "end": 247
                    },
                    "directive": null,
                    "start": 228,
                    "end": 247
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
                          "properties": [
                            {
                              "type": "RestElement",
                              "decorators": [],
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "sRest",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 267,
                                "end": 272
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "value": null,
                              "start": 264,
                              "end": 272
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 262,
                          "end": 274
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 277,
                          "end": 278
                        },
                        "definite": false,
                        "start": 262,
                        "end": 278
                      }
                    ],
                    "declare": false,
                    "start": 256,
                    "end": 279
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sRest",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 288,
                        "end": 293
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "propStatic",
                        "start": 294,
                        "end": 305
                      },
                      "optional": false,
                      "computed": false,
                      "start": 288,
                      "end": 305
                    },
                    "directive": null,
                    "start": 288,
                    "end": 306
                  }
                ],
                "start": 75,
                "end": 312
              },
              "expression": false,
              "start": 64,
              "end": 312
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 58,
            "end": 312
          }
        ],
        "start": 8,
        "end": 314
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 314
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 314
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
    "value": "C",
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
    "type": "PrivateIdentifier",
    "value": "prop",
    "start": 14,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 20,
    "end": 21
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 29,
    "end": 35
  },
  {
    "type": "PrivateIdentifier",
    "value": "propStatic",
    "start": 36,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 48,
    "end": 49
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 58,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 65,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 72,
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
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 85,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 91,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 99,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 102,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 119,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 122,
    "end": 123
  },
  {
    "type": "PrivateIdentifier",
    "value": "prop",
    "start": 123,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 138,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 146,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 149,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 158,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 173,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 177,
    "end": 178
  },
  {
    "type": "PrivateIdentifier",
    "value": "prop",
    "start": 178,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 194,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "statics",
    "start": 200,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "...",
    "start": 212,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "statics",
    "start": 228,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 235,
    "end": 236
  },
  {
    "type": "PrivateIdentifier",
    "value": "propStatic",
    "start": 236,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 256,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 264,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "sRest",
    "start": 267,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "sRest",
    "start": 288,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 293,
    "end": 294
  },
  {
    "type": "PrivateIdentifier",
    "value": "propStatic",
    "start": 294,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 313,
    "end": 314
  }
]
```
