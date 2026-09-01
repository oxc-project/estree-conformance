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
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "strs",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TemplateStringsArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 25,
                      "end": 45
                    },
                    "typeArguments": null,
                    "start": 25,
                    "end": 45
                  },
                  "start": 23,
                  "end": 45
                },
                "start": 19,
                "end": 45
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 50,
                  "end": 54
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 56,
                      "end": 62
                    },
                    "start": 56,
                    "end": 64
                  },
                  "start": 54,
                  "end": 64
                },
                "value": null,
                "start": 47,
                "end": 64
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 68
                },
                "typeArguments": null,
                "start": 67,
                "end": 68
              },
              "start": 65,
              "end": 68
            },
            "start": 18,
            "end": 69
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "member",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 80
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 100,
                            "end": 106
                          },
                          "start": 98,
                          "end": 106
                        },
                        "start": 97,
                        "end": 106
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "n",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 131,
                                    "end": 137
                                  },
                                  "start": 129,
                                  "end": 137
                                },
                                "start": 128,
                                "end": 137
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSConstructSignatureDeclaration",
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSBooleanKeyword",
                                        "start": 166,
                                        "end": 173
                                      },
                                      "start": 164,
                                      "end": 173
                                    },
                                    "start": 158,
                                    "end": 174
                                  }
                                ],
                                "start": 140,
                                "end": 188
                              },
                              "start": 138,
                              "end": 188
                            },
                            "start": 123,
                            "end": 188
                          }
                        ],
                        "start": 109,
                        "end": 198
                      },
                      "start": 107,
                      "end": 198
                    },
                    "start": 92,
                    "end": 198
                  }
                ],
                "start": 82,
                "end": 204
              },
              "start": 80,
              "end": 204
            },
            "accessibility": null,
            "static": false,
            "start": 74,
            "end": 205
          }
        ],
        "start": 12,
        "end": 207
      },
      "declare": false,
      "start": 0,
      "end": 207
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 215,
                  "end": 216
                },
                "typeArguments": null,
                "start": 215,
                "end": 216
              },
              "start": 213,
              "end": 216
            },
            "start": 212,
            "end": 216
          },
          "init": null,
          "definite": false,
          "start": 212,
          "end": 216
        }
      ],
      "declare": false,
      "start": 208,
      "end": 217
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 223,
            "end": 224
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "NewExpression",
              "callee": {
                "type": "NewExpression",
                "callee": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "TaggedTemplateExpression",
                      "tag": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 239,
                        "end": 240
                      },
                      "typeArguments": null,
                      "quasi": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "abc",
                              "cooked": "abc"
                            },
                            "tail": false,
                            "start": 241,
                            "end": 247
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "def",
                              "cooked": "def"
                            },
                            "tail": true,
                            "start": 250,
                            "end": 255
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 248,
                            "end": 249
                          }
                        ],
                        "start": 241,
                        "end": 255
                      },
                      "start": 239,
                      "end": 255
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "member",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 256,
                      "end": 262
                    },
                    "optional": false,
                    "computed": false,
                    "start": 239,
                    "end": 262
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 263,
                      "end": 270
                    }
                  ],
                  "start": 235,
                  "end": 271
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 272,
                    "end": 274
                  }
                ],
                "start": 231,
                "end": 275
              },
              "typeArguments": null,
              "arguments": [],
              "start": 227,
              "end": 275
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 280,
              "end": 284
            },
            "start": 227,
            "end": 284
          },
          "definite": false,
          "start": 223,
          "end": 284
        }
      ],
      "declare": false,
      "start": 219,
      "end": 285
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 286
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
    "value": "I",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "strs",
    "start": 19,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 25,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 47,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "subs",
    "start": 50,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 56,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "member",
    "start": 74,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 92,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 100,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "new",
    "start": 123,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 131,
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
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 158,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 166,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 208,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 219,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 227,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 231,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 235,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 239,
    "end": 240
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 241,
    "end": 247
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 248,
    "end": 249
  },
  {
    "type": "Template",
    "value": "}def`",
    "start": 250,
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
    "value": "member",
    "start": 256,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 262,
    "end": 263
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 263,
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
    "value": "(",
    "start": 271,
    "end": 272
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 272,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 276,
    "end": 279
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 280,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  }
]
```
