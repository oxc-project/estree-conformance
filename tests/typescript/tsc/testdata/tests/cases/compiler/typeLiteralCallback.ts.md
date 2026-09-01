__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
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
              "start": 14,
              "end": 15
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 14,
            "end": 15
          }
        ],
        "start": 13,
        "end": 16
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "reject",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 29
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
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
                      "start": 35,
                      "end": 36
                    },
                    "typeArguments": null,
                    "start": 35,
                    "end": 36
                  },
                  "start": 33,
                  "end": 36
                },
                "start": 30,
                "end": 36
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 39,
                "end": 43
              },
              "start": 37,
              "end": 43
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 23,
            "end": 45
          }
        ],
        "start": 17,
        "end": 47
      },
      "declare": false,
      "start": 0,
      "end": 47
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 60
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 61,
                      "end": 67
                    }
                  ],
                  "start": 60,
                  "end": 68
                },
                "start": 57,
                "end": 68
              },
              "start": 55,
              "end": 68
            },
            "start": 52,
            "end": 68
          },
          "init": null,
          "definite": false,
          "start": 52,
          "end": 68
        }
      ],
      "declare": false,
      "start": 48,
      "end": 68
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 83
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
              "start": 84,
              "end": 85
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 84,
            "end": 85
          }
        ],
        "start": 83,
        "end": 86
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fail",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 97
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
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
                              "start": 110,
                              "end": 111
                            },
                            "typeArguments": null,
                            "start": 110,
                            "end": 111
                          },
                          "start": 108,
                          "end": 111
                        },
                        "start": 105,
                        "end": 111
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 116,
                        "end": 120
                      },
                      "start": 113,
                      "end": 120
                    },
                    "start": 104,
                    "end": 120
                  },
                  "start": 102,
                  "end": 120
                },
                "start": 98,
                "end": 120
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 124,
                "end": 128
              },
              "start": 122,
              "end": 128
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 93,
            "end": 130
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fail2",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 140
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
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
                                  "start": 155,
                                  "end": 156
                                },
                                "typeArguments": null,
                                "start": 155,
                                "end": 156
                              },
                              "start": 153,
                              "end": 156
                            },
                            "start": 150,
                            "end": 156
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 159,
                            "end": 163
                          },
                          "start": 157,
                          "end": 163
                        },
                        "start": 149,
                        "end": 165
                      }
                    ],
                    "start": 147,
                    "end": 167
                  },
                  "start": 145,
                  "end": 167
                },
                "start": 141,
                "end": 167
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 170,
                "end": 174
              },
              "start": 168,
              "end": 174
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 135,
            "end": 176
          }
        ],
        "start": 87,
        "end": 178
      },
      "declare": false,
      "start": 70,
      "end": 178
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 189,
                  "end": 192
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 193,
                      "end": 199
                    }
                  ],
                  "start": 192,
                  "end": 200
                },
                "start": 189,
                "end": 200
              },
              "start": 187,
              "end": 200
            },
            "start": 183,
            "end": 200
          },
          "init": null,
          "definite": false,
          "start": 183,
          "end": 200
        }
      ],
      "declare": false,
      "start": 179,
      "end": 201
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 207
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fail",
            "optional": false,
            "typeAnnotation": null,
            "start": 208,
            "end": 212
          },
          "optional": false,
          "computed": false,
          "start": 203,
          "end": 212
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
                "name": "arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 213,
                "end": 216
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 220,
                  "end": 223
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "reject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 224,
                  "end": 230
                },
                "optional": false,
                "computed": false,
                "start": 220,
                "end": 230
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 234
                }
              ],
              "optional": false,
              "start": 220,
              "end": 235
            },
            "id": null,
            "generator": false,
            "start": 213,
            "end": 235
          }
        ],
        "optional": false,
        "start": 203,
        "end": 236
      },
      "directive": null,
      "start": 203,
      "end": 237
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 242
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fail2",
            "optional": false,
            "typeAnnotation": null,
            "start": 243,
            "end": 248
          },
          "optional": false,
          "computed": false,
          "start": 238,
          "end": 248
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
                "name": "arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 249,
                "end": 252
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 259
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "reject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 266
                },
                "optional": false,
                "computed": false,
                "start": 256,
                "end": 266
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 267,
                  "end": 270
                }
              ],
              "optional": false,
              "start": 256,
              "end": 271
            },
            "id": null,
            "generator": false,
            "start": 249,
            "end": 271
          }
        ],
        "optional": false,
        "start": 238,
        "end": 272
      },
      "directive": null,
      "start": 238,
      "end": 273
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 366
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 30,
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
    "value": "T",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 39,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 48,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 52,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 57,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 61,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 70,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 80,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 93,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 98,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 105,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 113,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 116,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 124,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "fail2",
    "start": 135,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 141,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 150,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 155,
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
    "value": ":",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 159,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
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
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 170,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 179,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 183,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 189,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 193,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 203,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "fail",
    "start": 208,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 213,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 217,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 220,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 224,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "arg",
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
    "value": ")",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 238,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "fail2",
    "start": 243,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 249,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 253,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 256,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 260,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 267,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  }
]
```
