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
        "name": "mixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 14
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
              "start": 15,
              "end": 16
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
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
                        "start": 35,
                        "end": 39
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "start": 41,
                            "end": 44
                          },
                          "start": 41,
                          "end": 46
                        },
                        "start": 39,
                        "end": 46
                      },
                      "value": null,
                      "start": 32,
                      "end": 46
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 49,
                      "end": 51
                    },
                    "start": 47,
                    "end": 51
                  },
                  "start": 27,
                  "end": 51
                }
              ],
              "start": 25,
              "end": 53
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 53
          }
        ],
        "start": 14,
        "end": 54
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "superclass",
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
          "start": 55,
          "end": 68
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
                "name": "superclass",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 105
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 116,
                      "end": 120
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
                              "value": "",
                              "raw": "\"\"",
                              "start": 138,
                              "end": 140
                            },
                            "start": 131,
                            "end": 141
                          }
                        ],
                        "start": 123,
                        "end": 147
                      },
                      "expression": false,
                      "start": 120,
                      "end": 147
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 112,
                    "end": 147
                  }
                ],
                "start": 106,
                "end": 151
              },
              "abstract": false,
              "declare": false,
              "start": 81,
              "end": 151
            },
            "start": 74,
            "end": 152
          }
        ],
        "start": 70,
        "end": 154
      },
      "expression": false,
      "start": 0,
      "end": 154
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 171
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 184
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 188,
                      "end": 194
                    },
                    "start": 186,
                    "end": 194
                  },
                  "start": 185,
                  "end": 194
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 196,
                "end": 198
              },
              "expression": false,
              "start": 184,
              "end": 198
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 176,
            "end": 198
          }
        ],
        "start": 172,
        "end": 200
      },
      "abstract": false,
      "declare": false,
      "start": 156,
      "end": 200
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 217,
        "end": 224
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mixin",
          "optional": false,
          "typeAnnotation": null,
          "start": 233,
          "end": 238
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "BaseClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 248
          }
        ],
        "optional": false,
        "start": 233,
        "end": 249
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 259,
              "end": 263
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
                      "value": "",
                      "raw": "\"\"",
                      "start": 279,
                      "end": 281
                    },
                    "start": 272,
                    "end": 282
                  }
                ],
                "start": 266,
                "end": 286
              },
              "expression": false,
              "start": 263,
              "end": 286
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 255,
            "end": 286
          }
        ],
        "start": 250,
        "end": 288
      },
      "abstract": false,
      "declare": false,
      "start": 211,
      "end": 288
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 288
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
    "value": "mixin",
    "start": 9,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 17,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 27,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 32,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 35,
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
    "value": "any",
    "start": 41,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "superclass",
    "start": 55,
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
    "value": "T",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 74,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 81,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 87,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "superclass",
    "start": 95,
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
    "value": "get",
    "start": 112,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 116,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 131,
    "end": 137
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 138,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 156,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "BaseClass",
    "start": 162,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 176,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 180,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 188,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197
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
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 211,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 217,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 225,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "mixin",
    "start": 233,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "BaseClass",
    "start": 239,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "get",
    "start": 255,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 259,
    "end": 263
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
    "value": "\"\"",
    "start": 279,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 287,
    "end": 288
  }
]
```
