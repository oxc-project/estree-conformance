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
        "name": "Pet",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 35
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 46
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 48,
                "end": 54
              },
              "start": 46,
              "end": 54
            },
            "accessibility": null,
            "static": false,
            "start": 42,
            "end": 55
          }
        ],
        "start": 36,
        "end": 57
      },
      "declare": false,
      "start": 22,
      "end": 57
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isPet",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 73
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "pet",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 79,
              "end": 82
            },
            "start": 77,
            "end": 82
          },
          "start": 74,
          "end": 82
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "pet",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 88
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pet",
                "optional": false,
                "typeAnnotation": null,
                "start": 92,
                "end": 95
              },
              "typeArguments": null,
              "start": 92,
              "end": 95
            },
            "start": 92,
            "end": 95
          },
          "start": 85,
          "end": 95
        },
        "start": 83,
        "end": 95
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pet",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 116,
                    "end": 119
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 120,
                    "end": 124
                  },
                  "optional": false,
                  "computed": false,
                  "start": 116,
                  "end": 124
                },
                "prefix": true,
                "start": 109,
                "end": 124
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 129,
                "end": 137
              },
              "start": 109,
              "end": 137
            },
            "start": 102,
            "end": 138
          }
        ],
        "start": 96,
        "end": 140
      },
      "expression": false,
      "start": 59,
      "end": 140
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "speak",
          "optional": false,
          "typeAnnotation": null,
          "start": 158,
          "end": 163
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
                "name": "TPet",
                "optional": false,
                "typeAnnotation": null,
                "start": 164,
                "end": 168
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Pet",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 180
                },
                "typeArguments": null,
                "start": 177,
                "end": 180
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 164,
              "end": 180
            }
          ],
          "start": 163,
          "end": 181
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "pet",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TPet",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 191
                },
                "typeArguments": null,
                "start": 187,
                "end": 191
              },
              "start": 185,
              "end": 191
            },
            "start": 182,
            "end": 191
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "voice",
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
                    "name": "pet",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TPet",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 206,
                          "end": 210
                        },
                        "typeArguments": null,
                        "start": 206,
                        "end": 210
                      },
                      "start": 204,
                      "end": 210
                    },
                    "start": 201,
                    "end": 210
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 215,
                    "end": 221
                  },
                  "start": 212,
                  "end": 221
                },
                "start": 200,
                "end": 221
              },
              "start": 198,
              "end": 221
            },
            "start": 193,
            "end": 221
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 224,
            "end": 230
          },
          "start": 222,
          "end": 230
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isPet",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 242,
                    "end": 247
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pet",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 248,
                      "end": 251
                    }
                  ],
                  "optional": false,
                  "start": 242,
                  "end": 252
                },
                "prefix": true,
                "start": 241,
                "end": 252
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 274,
                        "end": 279
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "Expected \"pet\" to be a Pet",
                          "raw": "\"Expected \\\"pet\\\" to be a Pet\"",
                          "start": 280,
                          "end": 310
                        }
                      ],
                      "start": 270,
                      "end": 311
                    },
                    "start": 264,
                    "end": 312
                  }
                ],
                "start": 254,
                "end": 318
              },
              "alternate": null,
              "start": 237,
              "end": 318
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "voice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 330,
                  "end": 335
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pet",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 336,
                    "end": 339
                  }
                ],
                "optional": false,
                "start": 330,
                "end": 340
              },
              "start": 323,
              "end": 341
            }
          ],
          "start": 231,
          "end": 343
        },
        "expression": false,
        "start": 149,
        "end": 343
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 142,
      "end": 343
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 343
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 22,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "Pet",
    "start": 32,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 42,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 59,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "isPet",
    "start": 68,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "pet",
    "start": 74,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 79,
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
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "pet",
    "start": 85,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 89,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "Pet",
    "start": 92,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 102,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 109,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "pet",
    "start": 116,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 120,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 125,
    "end": 128
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 129,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 142,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 149,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "speak",
    "start": 158,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "TPet",
    "start": 164,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 169,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "Pet",
    "start": 177,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "pet",
    "start": 182,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "TPet",
    "start": 187,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "voice",
    "start": 193,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "pet",
    "start": 201,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "TPet",
    "start": 206,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 212,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 215,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 224,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 237,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "isPet",
    "start": 242,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "pet",
    "start": 248,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 264,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 270,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 274,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "String",
    "value": "\"Expected \\\"pet\\\" to be a Pet\"",
    "start": 280,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 323,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "voice",
    "start": 330,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "pet",
    "start": 336,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 342,
    "end": 343
  }
]
```
