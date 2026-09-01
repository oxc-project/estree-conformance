__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createInstance",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 23
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
              "start": 24,
              "end": 25
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 24,
            "end": 25
          }
        ],
        "start": 23,
        "end": 26
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ctor",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConstructorType",
              "abstract": false,
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
                      "start": 41,
                      "end": 47
                    },
                    "start": 39,
                    "end": 47
                  },
                  "start": 38,
                  "end": 47
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
                    "start": 52,
                    "end": 53
                  },
                  "typeArguments": null,
                  "start": 52,
                  "end": 53
                },
                "start": 49,
                "end": 53
              },
              "start": 33,
              "end": 53
            },
            "start": 31,
            "end": 53
          },
          "start": 27,
          "end": 53
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
            "start": 56,
            "end": 57
          },
          "typeArguments": null,
          "start": 56,
          "end": 57
        },
        "start": 54,
        "end": 57
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ctor",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 79
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 80,
                  "end": 82
                }
              ],
              "start": 71,
              "end": 83
            },
            "start": 64,
            "end": 84
          }
        ],
        "start": 58,
        "end": 107
      },
      "expression": false,
      "start": 0,
      "end": 107
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "INewable",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 146
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
              "start": 147,
              "end": 148
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 147,
            "end": 148
          }
        ],
        "start": 146,
        "end": 149
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 168,
                    "end": 174
                  },
                  "start": 166,
                  "end": 174
                },
                "start": 161,
                "end": 174
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
                  "start": 177,
                  "end": 178
                },
                "typeArguments": null,
                "start": 177,
                "end": 178
              },
              "start": 175,
              "end": 178
            },
            "start": 156,
            "end": 179
          }
        ],
        "start": 150,
        "end": 181
      },
      "declare": false,
      "start": 128,
      "end": 181
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createInstance2",
        "optional": false,
        "typeAnnotation": null,
        "start": 192,
        "end": 207
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
              "start": 208,
              "end": 209
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 208,
            "end": 209
          }
        ],
        "start": 207,
        "end": 210
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ctor",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "INewable",
                "optional": false,
                "typeAnnotation": null,
                "start": 217,
                "end": 225
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
                      "start": 226,
                      "end": 227
                    },
                    "typeArguments": null,
                    "start": 226,
                    "end": 227
                  }
                ],
                "start": 225,
                "end": 228
              },
              "start": 217,
              "end": 228
            },
            "start": 215,
            "end": 228
          },
          "start": 211,
          "end": 228
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
            "start": 231,
            "end": 232
          },
          "typeArguments": null,
          "start": 231,
          "end": 232
        },
        "start": 229,
        "end": 232
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ctor",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 254
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1024,
                  "raw": "1024",
                  "start": 255,
                  "end": 259
                }
              ],
              "start": 246,
              "end": 260
            },
            "start": 239,
            "end": 261
          }
        ],
        "start": 233,
        "end": 284
      },
      "expression": false,
      "start": 183,
      "end": 284
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 284
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "createInstance",
    "start": 9,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "ctor",
    "start": 27,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 33,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 49,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 53,
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
    "value": "T",
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
    "value": "return",
    "start": 64,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 71,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "ctor",
    "start": 75,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 79,
    "end": 80
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 80,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 128,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "INewable",
    "start": 138,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 156,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 161,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 168,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
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
    "value": "T",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 183,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "createInstance2",
    "start": 192,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "ctor",
    "start": 211,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "INewable",
    "start": 217,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 239,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 246,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "ctor",
    "start": 250,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255
  },
  {
    "type": "Numeric",
    "value": "1024",
    "start": 255,
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
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 283,
    "end": 284
  }
]
```
