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
        "name": "Utils",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fold",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 25
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 26,
                    "end": 27
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 26,
                  "end": 27
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 29,
                    "end": 30
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 29,
                  "end": 30
                }
              ],
              "start": 25,
              "end": 31
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 35,
                      "end": 40
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 41,
                            "end": 42
                          },
                          "typeArguments": null,
                          "start": 41,
                          "end": 42
                        }
                      ],
                      "start": 40,
                      "end": 43
                    },
                    "start": 35,
                    "end": 43
                  },
                  "start": 33,
                  "end": 43
                },
                "start": 32,
                "end": 43
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "folder",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 58,
                              "end": 59
                            },
                            "typeArguments": null,
                            "start": 58,
                            "end": 59
                          },
                          "start": 56,
                          "end": 59
                        },
                        "start": 55,
                        "end": 59
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
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
                              "start": 64,
                              "end": 65
                            },
                            "typeArguments": null,
                            "start": 64,
                            "end": 65
                          },
                          "start": 62,
                          "end": 65
                        },
                        "start": 61,
                        "end": 65
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
                          "start": 70,
                          "end": 71
                        },
                        "typeArguments": null,
                        "start": 70,
                        "end": 71
                      },
                      "start": 67,
                      "end": 71
                    },
                    "start": 54,
                    "end": 71
                  },
                  "start": 52,
                  "end": 71
                },
                "start": 45,
                "end": 71
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "init",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 80,
                      "end": 81
                    },
                    "typeArguments": null,
                    "start": 80,
                    "end": 81
                  },
                  "start": 78,
                  "end": 81
                },
                "start": 73,
                "end": 81
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
                  "start": 84,
                  "end": 85
                },
                "typeArguments": null,
                "start": 84,
                "end": 85
              },
              "start": 82,
              "end": 85
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 21,
            "end": 86
          }
        ],
        "start": 16,
        "end": 88
      },
      "declare": false,
      "start": 0,
      "end": 88
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
            "name": "utils",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Utils",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 114
                },
                "typeArguments": null,
                "start": 109,
                "end": 114
              },
              "start": 107,
              "end": 114
            },
            "start": 102,
            "end": 114
          },
          "init": null,
          "definite": false,
          "start": 102,
          "end": 114
        }
      ],
      "declare": true,
      "start": 90,
      "end": 115
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
            "name": "utils",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 122
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fold",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 127
          },
          "optional": false,
          "computed": false,
          "start": 117,
          "end": 127
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 117,
        "end": 129
      },
      "directive": null,
      "start": 117,
      "end": 130
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
            "name": "utils",
            "optional": false,
            "typeAnnotation": null,
            "start": 140,
            "end": 145
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fold",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 150
          },
          "optional": false,
          "computed": false,
          "start": 140,
          "end": 150
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 151,
            "end": 155
          }
        ],
        "optional": false,
        "start": 140,
        "end": 156
      },
      "directive": null,
      "start": 140,
      "end": 157
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
            "name": "utils",
            "optional": false,
            "typeAnnotation": null,
            "start": 170,
            "end": 175
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fold",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 180
          },
          "optional": false,
          "computed": false,
          "start": 170,
          "end": 180
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 181,
            "end": 185
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 187,
            "end": 191
          }
        ],
        "optional": false,
        "start": 170,
        "end": 192
      },
      "directive": null,
      "start": 170,
      "end": 193
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
            "name": "utils",
            "optional": false,
            "typeAnnotation": null,
            "start": 206,
            "end": 211
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fold",
            "optional": false,
            "typeAnnotation": null,
            "start": 212,
            "end": 216
          },
          "optional": false,
          "computed": false,
          "start": 206,
          "end": 216
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 217,
            "end": 221
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 223,
            "end": 227
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 229,
            "end": 233
          }
        ],
        "optional": false,
        "start": 206,
        "end": 234
      },
      "directive": null,
      "start": 206,
      "end": 235
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 291
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
    "value": "Utils",
    "start": 10,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "fold",
    "start": 21,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 32,
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
    "value": "Array",
    "start": 35,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "folder",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "value": "S",
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
    "value": "t",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 67,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "init",
    "start": 73,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 84,
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
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 90,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 98,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "utils",
    "start": 102,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "Utils",
    "start": 109,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "utils",
    "start": 117,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "fold",
    "start": 123,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "utils",
    "start": 140,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "fold",
    "start": 146,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Null",
    "value": "null",
    "start": 151,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "utils",
    "start": 170,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "fold",
    "start": 176,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Null",
    "value": "null",
    "start": 181,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 185,
    "end": 186
  },
  {
    "type": "Null",
    "value": "null",
    "start": 187,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "utils",
    "start": 206,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "fold",
    "start": 212,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 216,
    "end": 217
  },
  {
    "type": "Null",
    "value": "null",
    "start": 217,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 221,
    "end": 222
  },
  {
    "type": "Null",
    "value": "null",
    "start": 223,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 227,
    "end": 228
  },
  {
    "type": "Null",
    "value": "null",
    "start": 229,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  }
]
```
