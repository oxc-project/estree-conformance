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
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 16
      },
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
              "start": 17,
              "end": 18
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 17,
            "end": 18
          }
        ],
        "start": 16,
        "end": 19
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 33
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 35,
                  "end": 38
                },
                "start": 35,
                "end": 40
              },
              "start": 33,
              "end": 40
            },
            "value": null,
            "start": 26,
            "end": 40
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
              "start": 45,
              "end": 46
            },
            "typeArguments": null,
            "start": 45,
            "end": 46
          },
          "start": 42,
          "end": 46
        },
        "start": 22,
        "end": 46
      },
      "declare": false,
      "start": 0,
      "end": 47
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tagged",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 63
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 65
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 74,
                "end": 85
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 86,
                    "end": 88
                  }
                ],
                "start": 85,
                "end": 89
              },
              "start": 74,
              "end": 89
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 64,
            "end": 89
          }
        ],
        "start": 63,
        "end": 90
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
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
                "start": 97,
                "end": 98
              },
              "typeArguments": null,
              "start": 97,
              "end": 98
            },
            "start": 95,
            "end": 98
          },
          "start": 91,
          "end": 98
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 129
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_tag",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 136,
                      "end": 140
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 142,
                        "end": 148
                      },
                      "start": 140,
                      "end": 148
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
                    "start": 136,
                    "end": 149
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
                      "start": 154,
                      "end": 165
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
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 169,
                            "end": 173
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "start": 175,
                                "end": 178
                              },
                              "start": 175,
                              "end": 180
                            },
                            "start": 173,
                            "end": 180
                          },
                          "value": null,
                          "start": 166,
                          "end": 180
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Super",
                                "start": 190,
                                "end": 195
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "SpreadElement",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 199,
                                    "end": 203
                                  },
                                  "start": 196,
                                  "end": 203
                                }
                              ],
                              "optional": false,
                              "start": 190,
                              "end": 204
                            },
                            "directive": null,
                            "start": 190,
                            "end": 205
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 212,
                                  "end": 216
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_tag",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 217,
                                  "end": 221
                                },
                                "optional": false,
                                "computed": false,
                                "start": 212,
                                "end": 221
                              },
                              "right": {
                                "type": "Literal",
                                "value": "",
                                "raw": "\"\"",
                                "start": 224,
                                "end": 226
                              },
                              "start": 212,
                              "end": 226
                            },
                            "directive": null,
                            "start": 212,
                            "end": 227
                          }
                        ],
                        "start": 182,
                        "end": 233
                      },
                      "expression": false,
                      "start": 165,
                      "end": 233
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 154,
                    "end": 233
                  }
                ],
                "start": 130,
                "end": 237
              },
              "abstract": false,
              "declare": false,
              "start": 111,
              "end": 237
            },
            "start": 104,
            "end": 238
          }
        ],
        "start": 100,
        "end": 240
      },
      "expression": false,
      "start": 48,
      "end": 240
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 248,
        "end": 249
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 262
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
                      "type": "Literal",
                      "value": "class A",
                      "raw": "\"class A\"",
                      "start": 279,
                      "end": 288
                    },
                    "start": 272,
                    "end": 289
                  }
                ],
                "start": 266,
                "end": 293
              },
              "expression": false,
              "start": 263,
              "end": 293
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 254,
            "end": 293
          }
        ],
        "start": 250,
        "end": 295
      },
      "abstract": false,
      "declare": false,
      "start": 242,
      "end": 295
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 303,
        "end": 304
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Tagged",
          "optional": false,
          "typeAnnotation": null,
          "start": 313,
          "end": 319
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 320,
            "end": 321
          }
        ],
        "optional": false,
        "start": 313,
        "end": 322
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 335
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
                      "type": "Literal",
                      "value": "class B",
                      "raw": "\"class B\"",
                      "start": 378,
                      "end": 387
                    },
                    "start": 371,
                    "end": 388
                  }
                ],
                "start": 339,
                "end": 392
              },
              "expression": false,
              "start": 336,
              "end": 392
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 327,
            "end": 392
          }
        ],
        "start": 323,
        "end": 394
      },
      "abstract": false,
      "declare": false,
      "start": 297,
      "end": 394
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 402,
        "end": 403
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 412,
        "end": 413
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 418,
              "end": 426
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
                      "type": "Literal",
                      "value": "class C",
                      "raw": "\"class C\"",
                      "start": 469,
                      "end": 478
                    },
                    "start": 462,
                    "end": 479
                  }
                ],
                "start": 430,
                "end": 483
              },
              "expression": false,
              "start": 427,
              "end": 483
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 418,
            "end": 483
          }
        ],
        "start": 414,
        "end": 485
      },
      "abstract": false,
      "declare": false,
      "start": 396,
      "end": 485
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 485
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
    "value": "Constructor",
    "start": 5,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 22,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 26,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 29,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 35,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 42,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 48,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "Tagged",
    "start": 57,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 66,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "Constructor",
    "start": 74,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 91,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 97,
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
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 104,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 111,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 117,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 125,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "_tag",
    "start": 136,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 142,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 154,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 166,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 169,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 175,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 190,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 196,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 199,
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
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 212,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "_tag",
    "start": 217,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 222,
    "end": 223
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 224,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 232,
    "end": 233
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
    "type": "Punctuator",
    "value": "}",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 242,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 254,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 272,
    "end": 278
  },
  {
    "type": "String",
    "value": "\"class A\"",
    "start": 279,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 297,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 305,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "Tagged",
    "start": 313,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 327,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 371,
    "end": 377
  },
  {
    "type": "String",
    "value": "\"class B\"",
    "start": 378,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 396,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 404,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 418,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 430,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 462,
    "end": 468
  },
  {
    "type": "String",
    "value": "\"class C\"",
    "start": 469,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 484,
    "end": 485
  }
]
```
