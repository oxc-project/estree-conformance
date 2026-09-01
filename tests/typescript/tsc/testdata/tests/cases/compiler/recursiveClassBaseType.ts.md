__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 40,
                        "end": 41
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 40,
                      "end": 41
                    }
                  ],
                  "start": 39,
                  "end": 42
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
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
                              "start": 53,
                              "end": 54
                            },
                            "typeArguments": null,
                            "start": 53,
                            "end": 54
                          },
                          "start": 50,
                          "end": 54
                        },
                        "start": 47,
                        "end": 54
                      },
                      "start": 45,
                      "end": 54
                    },
                    "start": 43,
                    "end": 54
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
                      "start": 59,
                      "end": 60
                    },
                    "typeArguments": null,
                    "start": 59,
                    "end": 60
                  },
                  "start": 56,
                  "end": 60
                },
                "start": 39,
                "end": 60
              },
              "start": 37,
              "end": 60
            },
            "start": 36,
            "end": 60
          },
          "init": null,
          "definite": false,
          "start": 36,
          "end": 60
        }
      ],
      "declare": true,
      "start": 22,
      "end": 61
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
            "name": "Base",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
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
                          "start": 92,
                          "end": 93
                        },
                        "typeArguments": null,
                        "start": 92,
                        "end": 93
                      },
                      "start": 90,
                      "end": 93
                    },
                    "start": 87,
                    "end": 93
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 107,
                              "end": 108
                            },
                            "typeArguments": null,
                            "start": 107,
                            "end": 108
                          },
                          "start": 105,
                          "end": 108
                        },
                        "start": 100,
                        "end": 108
                      }
                    ],
                    "start": 98,
                    "end": 110
                  },
                  "start": 95,
                  "end": 110
                },
                "start": 83,
                "end": 110
              },
              "start": 81,
              "end": 110
            },
            "start": 77,
            "end": 110
          },
          "init": null,
          "definite": false,
          "start": 77,
          "end": 110
        }
      ],
      "declare": true,
      "start": 63,
      "end": 111
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
        "start": 119,
        "end": 120
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null,
          "start": 129,
          "end": 133
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 137
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 139,
                    "end": 140
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 141,
                            "end": 142
                          },
                          "typeArguments": null,
                          "start": 141,
                          "end": 142
                        },
                        "start": 141,
                        "end": 144
                      }
                    ],
                    "start": 140,
                    "end": 145
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "start": 152,
                        "end": 154
                      },
                      "id": null,
                      "generator": false,
                      "start": 146,
                      "end": 154
                    }
                  ],
                  "optional": false,
                  "start": 139,
                  "end": 155
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 136,
                "end": 155
              }
            ],
            "start": 134,
            "end": 157
          }
        ],
        "optional": false,
        "start": 129,
        "end": 158
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 159,
        "end": 162
      },
      "abstract": false,
      "declare": false,
      "start": 113,
      "end": 162
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base1",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 206
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "root",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 226
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Derived1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 230,
                    "end": 238
                  },
                  "typeArguments": null,
                  "start": 230,
                  "end": 238
                },
                "start": 228,
                "end": 238
              },
              "body": null,
              "expression": false,
              "start": 226,
              "end": 239
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 213,
            "end": 239
          }
        ],
        "start": 207,
        "end": 241
      },
      "abstract": true,
      "declare": false,
      "start": 186,
      "end": 241
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null,
        "start": 249,
        "end": 257
      },
      "typeParameters": null,
      "superClass": {
        "type": "ClassExpression",
        "decorators": [],
        "id": null,
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Base1",
          "optional": false,
          "typeAnnotation": null,
          "start": 280,
          "end": 285
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
                "name": "root",
                "optional": false,
                "typeAnnotation": null,
                "start": 292,
                "end": 296
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
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 316,
                          "end": 325
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 329,
                          "end": 332
                        },
                        "start": 316,
                        "end": 332
                      },
                      "start": 309,
                      "end": 333
                    }
                  ],
                  "start": 299,
                  "end": 339
                },
                "expression": false,
                "start": 296,
                "end": 339
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 292,
              "end": 339
            }
          ],
          "start": 286,
          "end": 341
        },
        "abstract": false,
        "declare": false,
        "start": 266,
        "end": 341
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 342,
        "end": 345
      },
      "abstract": false,
      "declare": false,
      "start": 243,
      "end": 345
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 345
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 22,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 30,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "p",
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
    "type": "Punctuator",
    "value": "<",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 43,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 50,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 56,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 63,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 71,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 77,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
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
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 95,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 100,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 113,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 121,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 129,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 149,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 186,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 195,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "Base1",
    "start": 201,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 213,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "root",
    "start": 222,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 230,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 240,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 243,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 249,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 258,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 266,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 272,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "Base1",
    "start": 280,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "root",
    "start": 292,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 309,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 316,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 326,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 329,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345
  }
]
```
