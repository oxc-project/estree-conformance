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
        "name": "Type",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 36
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 45
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 47,
                "end": 53
              },
              "start": 45,
              "end": 53
            },
            "accessibility": null,
            "static": false,
            "start": 41,
            "end": 54
          }
        ],
        "start": 37,
        "end": 56
      },
      "declare": false,
      "start": 22,
      "end": 56
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeExt",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 75
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Type",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 88
          },
          "typeArguments": null,
          "start": 84,
          "end": 88
        }
      ],
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
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 96
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 98,
                    "end": 102
                  },
                  "typeArguments": null,
                  "start": 98,
                  "end": 102
                },
                "start": 98,
                "end": 104
              },
              "start": 96,
              "end": 104
            },
            "accessibility": null,
            "static": false,
            "start": 93,
            "end": 105
          }
        ],
        "start": 89,
        "end": 107
      },
      "declare": false,
      "start": 58,
      "end": 107
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
            "name": "guard",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 120
          },
          "init": {
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
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 129,
                      "end": 133
                    },
                    "typeArguments": null,
                    "start": 129,
                    "end": 133
                  },
                  "start": 127,
                  "end": 133
                },
                "start": 124,
                "end": 133
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 139
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TypeExt",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 143,
                      "end": 150
                    },
                    "typeArguments": null,
                    "start": 143,
                    "end": 150
                  },
                  "start": 143,
                  "end": 150
                },
                "start": 136,
                "end": 150
              },
              "start": 134,
              "end": 150
            },
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 157
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 158,
                  "end": 162
                },
                "optional": false,
                "computed": false,
                "start": 154,
                "end": 162
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 167,
                "end": 168
              },
              "start": 154,
              "end": 168
            },
            "id": null,
            "generator": false,
            "start": 123,
            "end": 168
          },
          "definite": false,
          "start": 115,
          "end": 168
        }
      ],
      "declare": false,
      "start": 109,
      "end": 169
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
            "name": "otherFunc",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 185
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 195,
                      "end": 199
                    },
                    "typeArguments": null,
                    "start": 195,
                    "end": 199
                  },
                  "start": 193,
                  "end": 199
                },
                "start": 189,
                "end": 199
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TypeExt",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 207,
                      "end": 214
                    },
                    "typeArguments": null,
                    "start": 207,
                    "end": 214
                  },
                  "start": 205,
                  "end": 214
                },
                "start": 201,
                "end": 214
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 217,
                "end": 221
              },
              "start": 215,
              "end": 221
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 225,
              "end": 227
            },
            "id": null,
            "generator": false,
            "start": 188,
            "end": 227
          },
          "definite": false,
          "start": 176,
          "end": 227
        }
      ],
      "declare": false,
      "start": 170,
      "end": 228
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 246,
          "end": 247
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 257
                },
                "typeArguments": null,
                "start": 253,
                "end": 257
              },
              "start": 251,
              "end": 257
            },
            "start": 248,
            "end": 257
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 260,
            "end": 264
          },
          "start": 258,
          "end": 264
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "guard",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 278
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 279,
                    "end": 282
                  }
                ],
                "optional": false,
                "start": 273,
                "end": 283
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForOfStatement",
                    "await": false,
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ITEM",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 302,
                            "end": 306
                          },
                          "init": null,
                          "definite": false,
                          "start": 302,
                          "end": 306
                        }
                      ],
                      "declare": false,
                      "start": 296,
                      "end": 306
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 310,
                        "end": 313
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arr",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 314,
                        "end": 317
                      },
                      "optional": false,
                      "computed": false,
                      "start": 310,
                      "end": 317
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "otherFunc",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 331,
                              "end": 340
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ITEM",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 341,
                                "end": 345
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arg",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 347,
                                "end": 350
                              }
                            ],
                            "optional": false,
                            "start": 331,
                            "end": 351
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 353,
                            "end": 362
                          },
                          "alternate": null,
                          "start": 327,
                          "end": 362
                        }
                      ],
                      "start": 319,
                      "end": 368
                    },
                    "start": 291,
                    "end": 368
                  }
                ],
                "start": 285,
                "end": 372
              },
              "alternate": null,
              "start": 269,
              "end": 372
            }
          ],
          "start": 265,
          "end": 374
        },
        "expression": false,
        "start": 237,
        "end": 374
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 230,
      "end": 374
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 374
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
    "value": "Type",
    "start": 32,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 41,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 58,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "TypeExt",
    "start": 68,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 76,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 84,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 93,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 98,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 109,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "guard",
    "start": 115,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 124,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 129,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 136,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 140,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "TypeExt",
    "start": 143,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 151,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 154,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 158,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 163,
    "end": 166
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 170,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "otherFunc",
    "start": 176,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "arg1",
    "start": 189,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 195,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 201,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "TypeExt",
    "start": 207,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 217,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 222,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 230,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 237,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 246,
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
    "value": "arg",
    "start": 248,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 253,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 260,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 265,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 269,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "guard",
    "start": 273,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 279,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 291,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 296,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "ITEM",
    "start": 302,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 307,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 310,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 314,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 327,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "otherFunc",
    "start": 331,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "ITEM",
    "start": 341,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 347,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374
  }
]
```
